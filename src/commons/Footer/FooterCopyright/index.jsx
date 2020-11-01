import React from "react";
import styled from "styled-components";
export const FooterCopyright = () => {
  return(
    <CopyrightContainer>
      <CopyrightText>© FEM7, 2020. All rights reserved.</CopyrightText>
    </CopyrightContainer>
  )
}
const CopyrightContainer = styled.div`
border-top: .1rem solid black;
order: 4;
flex-basis: 100%;
margin-top: 2rem;


`
const CopyrightText = styled.p`
text-align: center;
`