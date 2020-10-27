import React from 'react';
import styled from 'styled-components';

import { FooterLogo } from './FooterLogo';
import { FooterAbout } from './FooterAbout';
import { FooterCustomers } from './FooterCustomers';
import { FooterContacts } from './FooterContacts';

export const Footer = () => {
  return (
    <FoterContainer>
      <FooterLogo/>
      <FooterAbout/>
      <FooterCustomers/>
      <FooterContacts/>
    </FoterContainer>
  )
}

const FoterContainer = styled.div`
  background-color: #e6e9ef;
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
`