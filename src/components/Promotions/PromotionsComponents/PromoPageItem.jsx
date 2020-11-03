import React from 'react'

import { ItemContainer, ImageContainer, Image, TextContainer, Title, Subtitle } from '../StyledPromotions'

export const PromoItem = (props) => {
  const { image, title, subtitle } = props

  return (
    <>
      <ItemContainer>
        <ImageContainer>
          <Image src={image} />
        </ImageContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
      </ItemContainer>
    </>
  )
}
