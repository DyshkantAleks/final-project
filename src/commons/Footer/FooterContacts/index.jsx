import React from 'react'
import {
  FooterContactsContainer,
  SocialLink,
  TextAdress,
  ContactsItem,
  SocialsContainer,
  SocialsIconContainer,
  ContactContainer,
  SocialIcon
} from '../StyledFooter'
import { ContactLink } from '../../../pages/About/StyledAboutPage';

export const FooterContacts = () => {
  return (
    <FooterContactsContainer>
      <ContactContainer>
        <ContactsItem href='tel:+380442902244'>+38 (044) 290 22 44</ContactsItem>
        <ContactsItem href='mailto:office@dan-it.com.ua'>office@dan-it.com.ua</ContactsItem>
        <ContactLink
          href="https://www.google.com/maps/place/50%C2%B025'44.4%22N+30%C2%B035'37.1%22E/@50.4327083,30.5527535,13z"
          target='_blank' rel='noopener'
        >г. Киев, пр-т Павла Тычины, 1в, ТОЦ «Silver Breeze», офис А, 6-й этаж
        </ContactLink>
      </ContactContainer>
      <SocialsContainer>
        <SocialLink href='https://www.facebook.com/daniteducation/' target='_blank' rel='nofollow'>
          <SocialsIconContainer>
            <SocialIcon src='https://res.cloudinary.com/dg-home/image/upload/v1604312381/General/icon-facebook_pirj4n.png' />
          </SocialsIconContainer>
        </SocialLink>
        <SocialLink href='https://www.instagram.com/daniteducation/' target='_blank' rel='nofollow'>
          <SocialsIconContainer>
            <SocialIcon src='https://res.cloudinary.com/dg-home/image/upload/v1604312381/General/icon-instagram_hpzw0g.png' />
          </SocialsIconContainer>
        </SocialLink>
      </SocialsContainer>
    </FooterContactsContainer>
  )
}
