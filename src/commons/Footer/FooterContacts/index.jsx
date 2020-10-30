import React from 'react';
import {SocialIcons} from './SocialIcons';
import {
  FooterContactsContainer,
  SocialLink,
  TextAdress,
  SocialsContainer,
  SocialsIconContainer,
  ContactContainer,
} from "../StyledFooter";


export const FooterContacts = () => {
  return (
    <FooterContactsContainer>
      <ContactContainer>
        <SocialLink href='tel:+380442902244'>+38 (044) 290 22 44</SocialLink>
        <SocialLink href="mailto:office@dan-it.com.ua">office@dan-it.com.ua</SocialLink>
      </ContactContainer>
      <TextAdress>г. Киев, пр-т Павла Тычины, 1в, ТОЦ «Silver Breeze», офис А, 6-й этаж</TextAdress>
      <SocialsContainer>
        <SocialLink href="https://www.facebook.com/daniteducation/" target="_blank" rel="nofollow">
          <SocialsIconContainer>
            {SocialIcons.facebook}
          </SocialsIconContainer>
        </SocialLink>
        <SocialLink href="https://www.instagram.com/daniteducation/" target="_blank" rel="nofollow">
          <SocialsIconContainer>
            {SocialIcons.instagram}
          </SocialsIconContainer>
        </SocialLink>
      </SocialsContainer>
    </FooterContactsContainer>
  )
}
