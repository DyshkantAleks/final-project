/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { ContactForm, ContactLink, ContainerContactForm } from '../StyledAboutPage';

export const ContactsForm = () => {
  return (
    <ContainerContactForm>
      <ContactForm>Хочешь узнать подробности? Связись с нами по телефону:</ContactForm>
      <ContactLink href='tel:+380442902244'>+38 (044) 290 22 44</ContactLink>
      <ContactForm>Или напишите нам на электронную почту: </ContactForm>
      <ContactLink href='mailto:office@dan-it.com.ua'>office@dan-it.com.ua</ContactLink>
      <ContactForm>Прихотите в наш салон по адресу: </ContactForm>
      <ContactLink
        href="https://www.google.com/maps/place/50%C2%B025'44.4%22N+30%C2%B035'37.1%22E/@50.4327083,30.5527535,13z"
        target='_blank' rel='noopener'
      >г. Киев, пр-т Павла Тычины, 1в, ТОЦ «Silver Breeze», офис А, 6-й этаж
      </ContactLink>
      <div>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.651640662533!2d30.59143871518244!3d50.42896179679486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c57deccaada1%3A0xa5e7cf7c9f8ff18b!2sDAN.IT!5e0!3m2!1sru!2sua!4v1603998516813!5m2!1sru!2sua'
        />
      </div>
    </ContainerContactForm>
  )
};