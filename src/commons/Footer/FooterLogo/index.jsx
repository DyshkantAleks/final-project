import React from 'react';
import styled from 'styled-components';
import {device} from "../../../styles/breakpoints/breakpoints";

export const FooterLogo = () => {
  return (
    <Container>
      <ContainerFooterLogo>
        <FooterLogoImg src='/img/dg-home-logo.png' alt='logo'/>
      </ContainerFooterLogo>
      <FooterText>Интернет-магазин итальянской мебели от лучших производителей</FooterText>
    </Container>
  )
}

const FooterLogoImg = styled.img`
  width: 100%;
`
const FooterText = styled.p`
  font-size: 1.2rem;
  width: 50%;
   @media ${device.tabletL}{
        width: 80%;
        }
`
const Container = styled.div`
display: flex;
margin-bottom: 2rem;
flex-basis: 100%;
order: 1;
@media${device.tabletM}{
flex-basis: 40%;
}
@media${device.tabletL}{
flex-basis: 30%;
flex-direction: column;
}
  
`
export const ContainerFooterLogo = styled.div`
    width: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-right: 3rem;
    
        @media ${device.tabletM}{
        width: 10rem;
        }
        @media ${device.tabletL}{
        margin-right: 0;
        }
        @media ${device.desktop}{
        //width: 12rem;
        //height: 6rem;
        }

`

