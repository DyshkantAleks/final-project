import React from "react";
import {device} from "../../styles/breakpoints/breakpoints";


import styled from 'styled-components';


export const PopularCategoryItem = (props) => {
    const {textForTitle, textForSubtitle} = props;

    return (
        <Item>
            <Title>{textForTitle}</Title>
            <Subtitle>{textForSubtitle}</Subtitle>
        </Item>

    )
};

const Item = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 15rem;
    padding: 1.5rem 2rem;
    color: white;
    background-color: #A291A5;
    
    
    
    @media ${device.tablet} {
     min-height: 20rem;
    }

@media ${device.desktop} {
 min-height: 2.5rem;
}   
`;

const Title = styled.h3`
    font-size: 2.4rem;
      line-height: 1.5;
      margin: 0;
      font-weight: bold;
    
    
@media ${device.tablet} {
  font-size: 3rem;
}
 
`;

const Subtitle = styled.h4`
    font-size: 1.2rem;
      max-width: 80%;
      margin: 1rem 0;
    
    
@media ${device.tablet} {
      font-size: 1.6rem;
      max-width: 70%;
}
@media ${device.desktop} {
      max-width: 60%;
}  
 
`;