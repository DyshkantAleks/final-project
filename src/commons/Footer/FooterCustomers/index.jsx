import React from 'react';

import { ROUTES } from '../../../pages/Navigation/routes';
import { Container, StyledLink, Title } from '../StyledFooter';
import useWindowDimensions from '../../../utils/useWindowDimensions';

export const FooterCustomers = () => {
  const { screenWidth } = useWindowDimensions();
  return (
    <Container>
      {screenWidth < 768 && (
        <>
          <StyledLink to={ROUTES.DELIVERY}>Доставка</StyledLink>
          <StyledLink to={ROUTES.STORES}>Наш шоу-рум</StyledLink>
        </>
      )}
      {screenWidth >= 768 && (
        <>
          <Title>Покупателям</Title>
          <StyledLink to={ROUTES.DELIVERY}>Доставка</StyledLink>
          <StyledLink to={ROUTES.STORES}>Наши магазины</StyledLink>
        </>
      )}
    </Container>
  )
};