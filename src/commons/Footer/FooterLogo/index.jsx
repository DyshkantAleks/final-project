import React from 'react';
import styled from 'styled-components';

export const FooterLogo = () => {
  return (
    <div>
      <FooterLogoImg src='./img/dg-home-logo.png' alt='logo'/>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, tempore.</p>
    </div>
  )
}

const FooterLogoImg = styled.img`
  width: 10rem;
`