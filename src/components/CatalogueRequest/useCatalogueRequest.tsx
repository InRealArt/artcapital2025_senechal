import { useEffect, useState } from "react"
import { useToast } from '@chakra-ui/react'
import parse from 'html-react-parser'
import { supabase } from "@/utils/supabase/supabaseConnection"
import { CODE_UNIQUE_KEY_VIOLATION, EMAIL_TABLE } from "@/utils/supabase/constants"
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';


const useCatalogueRequest = () => {
    const { language, i18n } = useContext(I18nContext)

    const toast = useToast()
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [email, setEmail]   = useState<string>('')
    const [name, setName]     = useState<string>('');
    const [phone, setPhone]   = useState<string>('');
    const [captchaValid, setCaptchaValid]   = useState<boolean>(false);

    //------------------------------------------------------------------------------ insertDataArtshowParis2025
    const insertDataArtshowParis2025 = async (table: string, email: string, name: string, phone: string) => {
      console.log("insertDataArtshowParis2025 ----")
      console.log('email : ', email)
      console.log('name : ', name)
      console.log('phone : ', phone)
      let msgError = ''

      const { error, status, statusText, data } = await supabase
          .from(table)
          .insert({ email: email, name: name, phone: phone })
      if (error?.code == CODE_UNIQUE_KEY_VIOLATION) {
          msgError = 'This email already exists in our e-mail base'    
      }
      else {
          if (error) {
            console.log("error")
            throw error  
          }  
          else {
            console.log("Insertion OK")
            console.log("status : ", status)
            console.log("statusTExt : ", statusText)
            console.log("data : ", data)
            // Popup a succes toast if no errors.
            toast({
              title: parse(i18n[language].toast.catalogueRequestSuccess),
              description: '',
              status: 'success',
              duration: 3000,
              isClosable: true,
            })

          }
      }
      return msgError
    }


    useEffect(() => {
      if (captchaValid) {
        console.log('Le captcha est OK. On peut insérer les data')
        const insertData = async () => {
          await insertDataArtshowParis2025(EMAIL_TABLE, email, name, phone)
        }
        insertData()
      }
      
    }, [captchaValid])


    // Email validation function
    const validateEmail = () => {
      console.log("validateEmail : ", email)
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const result = regex.test(String(email).toLowerCase())
      console.log("result : ", result)
      return result
    }


    const handleChangeEmail = (e: any) => setEmail(e.target.value)
    const handleChangeName = (e: any) => setName(e.target.value)
    const handleChangePhone = (e: any) => setPhone(e.target.value)
  
    //------------------------------------------------------------------------------ isEmailValid
    const isEmailValid = () => {
      return validateEmail()
    }

    //------------------------------------------------------------------------------ isNameValid
    const isNameValid = () => {
      return !!name
    }

    //------------------------------------------------------------------------------ checkEmail
    const checkEmail = () => {
      console.log("checkEmail")
      if (!isEmailValid()) {
        console.log("email invalid")
        // Popup a succes toast if no errors.
        toast({
          title: parse(i18n[language].toast.errorEmail),
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      }  
      return true

    }

    //------------------------------------------------------------------------------ checkName
    const checkName = () => {
      console.log("checkName : ", name)
      if (!isNameValid()) {
        // Popup an error if name is empty
        toast({
          title: parse(i18n[language].toast.errorName),
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
        return false
      }  
      return true
    }

    //------------------------------------------------------------------------------ checkDataForm
    const checkDataForm = () => {
      const cEmail = checkEmail()
      const cName = checkName()
      return (cEmail && cName)
    }  
    
  //---------------------------------------------------------------------
  const submitEnquiryForm = async (gReCaptchaToken: string) => {
    console.log('gReCaptchaToken', gReCaptchaToken)
    try {
      const response = await fetch("/api/captchaSubmit", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gRecaptchaToken: gReCaptchaToken,
        }),
      });

      const data = await response.json();
      console.log(data)
      if (data?.success === true) {
        console.log(`Success with score: ${data?.score}`)
        setCaptchaValid(true)
      } else {
        // Popup a succes toast if no errors.
        toast({
          title: `Mmmmm ... our system detects that you're not human but rather a robot with a failure score of ${data?.score}`,
          description: '',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: `Error submitting form: ${error}`,
        description: '',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  //---------------------------------------------------------------------
  const handleSubmitCatchpaForm = async (e: any) => {
    const cDataForm = checkDataForm()
    if (!cDataForm) {
      return
    }

    e.preventDefault();
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      toast({
        title: `Execute recaptcha not available yet likely meaning key not recaptcha key not set`,
        description: '',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
      submitEnquiryForm(gReCaptchaToken);
    });        
  }


    return {email, setEmail, name, setName, phone, setPhone, isEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handleSubmitCatchpaForm}
}    

export default useCatalogueRequest