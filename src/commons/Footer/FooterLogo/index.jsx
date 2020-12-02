import React from 'react';

import { LogoContainer, ContainerFooterLogo, FooterLogoImg, FooterText } from '../StyledFooter';

export const FooterLogo = () => {
  return (
    <LogoContainer>
      <ContainerFooterLogo>
        <FooterLogoImg src='https://res.cloudinary.com/dg-home/image/upload/v1604312381/General/dg-home-logo_onswjp.png' alt='logo' />
      </ContainerFooterLogo>
      <FooterText>Интернет-магазин итальянской мебели от лучших производителей</FooterText>
    </LogoContainer>
  )
};
