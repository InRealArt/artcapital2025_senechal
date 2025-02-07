'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './CatalogueRequest.module.scss';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";
import { I18nContext } from '@/i18n-context';
import { useContext } from 'react';
import parse from 'html-react-parser';


import useCatalogueRequest from './useCatalogueRequest';

const CatalogueRequest = () => {
  const { email, setEmail, name, setName, phone, setPhone, isEmailValid, validateEmail, handleChangeEmail, handleChangeName, handleChangePhone, handleSubmitCatchpaForm } = useCatalogueRequest()

  const { language, i18n } = useContext(I18nContext)

  return (
    <div className={styles.container} id="catalogueRequest">
      <Image
        src="/img/catalogueRequest/inrealartCatalogArtCapital.png"
        alt="Catalogue InRealArt"
        className={styles.imageSection}
        width={400}
        height={400}
        objectFit="contain"
      />
      <div className={styles.formSection}>
        <h2 className={styles.title}>{parse(i18n[language].catalogueRequest.title)}</h2>
        <p className={styles.subtitle}>
          {parse(i18n[language].catalogueRequest.subTitle)}
        </p>
        <FormControl color={'black'}>
          <div className={styles.formLabel}>
            <FormLabel color={'black'}>{parse(i18n[language].catalogueRequest.formItem1)} *</FormLabel>
            <Input type='email' color={'grey'} backgroundColor={'white'}
              placeholder='full name'
              focusBorderColor='white'
              value={name}
              onChange={handleChangeName}
              width={'400px'}
            />
          </div>
          <div className={styles.formLabel}>
            <FormLabel color={'black'}>{parse(i18n[language].catalogueRequest.formItem2)} *</FormLabel>
            <Input type='email' color={'grey'} backgroundColor={'white'}
              placeholder='e-mail'
              focusBorderColor='white'
              value={email}
              onChange={handleChangeEmail}
              width={'400px'}
            />
          </div>
          <div className={styles.formLabel}>
            <FormLabel color={'black'}>{parse(i18n[language].catalogueRequest.formItem3)}</FormLabel>
            <Input type='email' color={'grey'} backgroundColor={'white'}
              placeholder='+33696563254'
              focusBorderColor='white'
              value={phone}
              onChange={handleChangePhone}
              width={'400px'}
            />
          </div>
        </FormControl>

        {
          /*
          <div className={styles.checkboxGroup}>
              <input
                type="checkbox"
                id="acceptPolicy"
                name="acceptPolicy"
                checked={formData.acceptPolicy}
                onChange={handleChange}
                required
              />
              <label htmlFor="acceptPolicy">Vous acceptez notre politique de confidentialité</label>
            </div>
          */
        }

        <button className={styles.submitButton} 
          onClick={handleSubmitCatchpaForm}
          
          >
          {parse(i18n[language].catalogueRequest.button)}
        </button>
      </div>
    </div>
  );
};

export default CatalogueRequest;