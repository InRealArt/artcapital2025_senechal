import { CODE_UNIQUE_KEY_VIOLATION } from "./constants"
import { supabase } from "./supabaseConnection"

//------------------------------------------------------------------------------ insertDataArtshowParis2025
export const insertDataArtshowParis2025 = async (table: string, email: string, name: string, phone: string) => {
    let msgError = ''
    const { error } = await supabase
        .from(table)
        .insert({ email: email, name: name, phone: phone })
    if (error?.code == CODE_UNIQUE_KEY_VIOLATION) {
        msgError = 'This email already exists in our e-mail base'    
    }
    else {
        if (error) throw error  
    }
    return msgError
}
  