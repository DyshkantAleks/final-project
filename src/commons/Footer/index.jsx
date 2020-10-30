import React from 'react';

import {FooterLogo} from './FooterLogo';
import {FooterAbout} from './FooterAbout';
import {FooterCustomers} from './FooterCustomers';
import {FooterContacts} from './FooterContacts';
import {FooterCopyright} from "./FooterCopyright";
import {InfoContainer, FooterContainer, StyledFooter} from "./StyledFooter";

export const Footer = () => {
  return (
    <StyledFooter>
      <FooterContainer>
        <FooterLogo/>
        <InfoContainer>
          <FooterAbout/>
          <FooterCustomers/>
        </InfoContainer>
        <FooterContacts/>
        <FooterCopyright/>
      </FooterContainer>
    </StyledFooter>
  )
}

