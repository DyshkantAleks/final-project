import React from 'react';
import {SocialIcons} from './SocialIcons';
import styled from "styled-components";
import {device} from "../../../styles/breakpoints/breakpoints";

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
const FooterContactsContainer = styled.div`
display: flex;
    flex-direction: column;
    flex-basis: 100%;
    order: 3;
    @media${device.tabletM}{
    order: 2;
    flex-basis: 60%;
    align-items: flex-end;
    }
    @media${device.tabletL}{
order: 3;
flex-basis: 30%;

}

`
const SocialLink = styled.a`
text-decoration: none;
color: initial;
&:not(:last-child) {
margin-right: 1.5rem;
}
`
const ContactContainer = styled.div`
display: flex;
    flex-direction: column;
    
    line-height: 1.5;
    font-size: 1.6rem;
    @media${device.tabletM}{

}
`
const TextAdress = styled.p`
font-size: 1.2rem;
width: 70%;
@media${device.tabletM}{
text-align: right;
}
`
const SocialsContainer = styled.div`
display: flex;
@media${device.tabletM}{
align-items: flex-end;
}
`
const SocialsIconContainer = styled.div`
display: flex;
width: 2.5rem;
height: 2.5rem;
`