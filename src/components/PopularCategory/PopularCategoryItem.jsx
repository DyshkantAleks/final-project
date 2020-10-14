import React from "react";
import {device} from "../../styles/breakpoints/breakpoints";


import styled from 'styled-components';


export const PopularCategoryItem = (props) => {
    const {textForTitle, textForSubtitle, backGround} = props;

    return (
        <Item>
            <ImageContainer>
                <Image src={backGround}
                />
            </ImageContainer>
            <Title>{textForTitle}</Title>
            <Subtitle>{textForSubtitle}</Subtitle>
        </Item>

    )
};

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;
const Image = styled.img`
width: 100%;
height: auto;
`

const Item = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    min-height: 15rem;
    padding: 1.5rem 2rem;
    color: white;
    //background-color: #A291A5;
    
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   
   position: relative;
    
    
    @media ${device.tabletM} {
     height: 20rem;
    }

@media ${device.tabletL} {
 height: 25rem;
}   
`;

const Title = styled.h3`
    font-size: 2.4rem;
      line-height: 1.5;
      margin: 0;
      font-weight: bold;
    
    
@media ${device.tabletM} {
  font-size: 3rem;
}
 
`;

const Subtitle = styled.h4`
    font-size: 1.2rem;
      max-width: 80%;
      margin: 1rem 0;
      text-align: left;
    
    
@media ${device.tabletM} {
      font-size: 1.6rem;
      max-width: 70%;
}
@media ${device.desktop} {
      max-width: 60%;
}  
 
`;