import React from 'react'

import { ItemContainer, ImageContainer, Image, TextContainer, Title, Subtitle } from '../StyledPromotions'
import PropTypes from 'prop-types';

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


PromoItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string

};

PromoItem.defaultProps = {
  title: 'Заголовок',
  subtitle: 'Текст',
  image: 'https://res.cloudinary.com/dg-home/image/upload/v1605196877/General/Categories/popular-category-table-min_fmalgj.png'
};

