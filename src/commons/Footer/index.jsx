import React from 'react';
import styled from 'styled-components';

import {FooterLogo} from './FooterLogo';
import {FooterAbout} from './FooterAbout';
import {FooterCustomers} from './FooterCustomers';
import {FooterContacts} from './FooterContacts';
import {ContentContairer} from "../../components/Content/Content";
import {device} from "../../styles/breakpoints/breakpoints";
import {FooterCopyright} from "./FooterCopyright";

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

const StyledFooter = styled.footer`
  background-color: #e6e9ef;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
`
const InfoContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 2rem;
flex-basis: 100%;
order: 2;
@media${device.tabletS}{
flex-direction: row;
justify-content: space-around;
}
@media${device.tabletM}{
order: 3;
flex-basis: 50%;
justify-content: flex-start;
}
@media${device.tabletL}{
order: 2;
flex-basis: 40%;
justify-content: flex-start;
}
`

const FooterContainer = styled.div`
padding: 0 1.6rem;
display: flex;
flex-wrap: wrap;

@media${device.tabletM}{
padding: 0 2.4rem;
}
 @media ${device.tabletL}{
        padding: 0 5rem;
    }
    
    @media ${device.desktop}{
    margin: 0 auto;
        padding: 0;
        width: 120rem;
    }
`