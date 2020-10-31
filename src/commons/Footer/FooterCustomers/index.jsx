import React from 'react';
import { ROUTES } from '../../../pages/navigation/routes';

import { Container, StyledLink, Title } from '../FooterAbout';
import useWindowDimensions from '../../../utils/useWindowDimensions';

export const FooterCustomers = () => {
  const { screenWidth } = useWindowDimensions();
  return (
    <Container>
      {screenWidth < 768 && (
        <>
          <StyledLink to={ROUTES.DELIVERY}>Доставка</StyledLink>
          <StyledLink to={ROUTES.STORES}>Наши магазины</StyledLink>
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
}
<<<<<<< HEAD
=======

// export const Container = styled.div`
// display: flex;
// flex-direction: column;
// `
// export const StyledLink = styled(Link)`
// text-decoration: none;
// color: initial;
// font-size: 1.4rem;
// line-height: 1.5;
// `
// export const Title = styled.p`
// font-size: 1.6rem;
// font-weight: 500;
// `
>>>>>>> alex
