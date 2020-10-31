import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from '../../../pages/navigation/routes';
import styled from "styled-components";
import useWindowDimensions from "../../../utils/useWindowDimensions";
import {device} from "../../../styles/breakpoints/breakpoints";

export const FooterAbout = () => {
  const {screenWidth} = useWindowDimensions();
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
export const Container = styled.div`
display: flex;
flex-direction: column;
@media${device.tabletM}{
flex-basis: 50%;
}


`
export const StyledLink = styled(Link)`
text-decoration: none;
color: initial;
font-size: 1.4rem;
line-height: 1.5;
`
export const Title = styled.p`
font-size: 1.6rem;
font-weight: 500;
`
