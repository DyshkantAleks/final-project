import styled from "styled-components";
import {device} from "../../../styles/breakpoints/breakpoints";

export const List = styled.div`
     display: grid;
    grid-template-columns: 1fr;
    gap: 2rem 2rem;
   
@media ${device.tabletM} {
 grid-template-columns: 1fr 1fr;
}

`;

export const Item = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-start;
min-height: 15rem;
padding: 1.5rem 2rem;
background-repeat: no-repeat;
background-position: center;
background-size: cover;
position: relative;
transition: all 0.5s ease;
&:hover {
transform: scale(1.01);
box-shadow: -1px -1px 18px 0 #6b7280;
}

@media ${device.tabletM} {
height: 20rem;
 }

@media ${device.tabletL} {
 height: 25rem;

}
`;


export const StaticImageContainer = styled.div`
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
export const StaticImage = styled.img`
width: 100%;
height: auto;
`;


export const StaticTitle = styled.h3`
    font-size: 2.4rem;
      line-height: 1.5;
      margin: 0;
      font-weight: bold;
      text-shadow: 0 0 black;
      color: white;
    
    
@media ${device.tabletM} {
  font-size: 3rem;
}
 
`;

export const StaticSubtitle = styled.h4`
    font-size: 1.2rem;
      max-width: 80%;
      margin: 1rem 0;
      text-align: left;
      text-shadow: 0 0 black;
      color: white;
    
    
@media ${device.tabletM} {
      font-size: 1.6rem;
      max-width: 70%;
}
@media ${device.desktop} {
      max-width: 60%;
}  
 
`;


export const HoverImageContainer = styled.div`
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
    opacity: 0.3;
    
`;

export const HoverTitle = styled.h3`
    font-size: 2.4rem;
      line-height: 1.5;
      margin: 0;
      font-weight: bold;
      //text-shadow: 0 0 black;
      color: black;
    
    
@media ${device.tabletM} {
  font-size: 3rem;
}
 
`;

export const HoverSubtitle = styled.h4`
    font-size: 1.2rem;
      max-width: 80%;
      margin: 1rem 0;
      text-align: left;
      //text-shadow: 0 0 black;
      color: black;
    
    
@media ${device.tabletM} {
      font-size: 1.6rem;
      max-width: 70%;
}
@media ${device.desktop} {
      max-width: 60%;
}  
 
`;