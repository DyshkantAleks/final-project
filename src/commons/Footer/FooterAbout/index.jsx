import React from 'react';
import { ROUTES } from '../../../pages/navigation/routes';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { StyledLink, Container, Title } from '../StyledFooter';

export const FooterAbout = () => {
  const { screenWidth } = useWindowDimensions();
  return (
    <Container>
      {screenWidth < 768 && (
        <>
          <StyledLink to={ROUTES.ABOUT}>О нас</StyledLink>
          <StyledLink to={ROUTES.PROMOTIONS}>Акции</StyledLink>
        </>
      )}
      {screenWidth >= 768 && (
        <>
          <Title>Информация</Title>
          <StyledLink to={ROUTES.ABOUT}>О нас</StyledLink>
          <StyledLink to={ROUTES.PROMOTIONS}>Акции</StyledLink>
        </>
      )}
    </Container>
  )
}


