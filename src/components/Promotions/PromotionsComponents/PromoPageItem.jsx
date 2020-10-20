import React from "react";
import styled from "styled-components";

export const PromoItem = (props) => {
  const {image, title, subtitle} = props
  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={image}/>
      </ImageContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
    </ItemContainer>
  )
}

export const ItemContainer = styled.div`
transition: all 0.5s ease;
&:hover {
transform: scale(1.05);
box-shadow: -1px -1px 18px 0 #6b7280;
}
`;

export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

`;

export const Image = styled.img`
width: 100%;
height: auto;
`;

export const TextContainer = styled.div`
padding: 1rem;
`;

export const Title = styled.span`
font-size: 2rem;
font-weight: 500;
line-height: 1.5;
text-transform: uppercase;
display: block;
`;
export const Subtitle = styled.span`
font-size: 1.4rem;
line-height: 1.5;

`;