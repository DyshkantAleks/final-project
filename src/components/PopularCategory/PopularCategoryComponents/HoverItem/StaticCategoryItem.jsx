import React from 'react'
// import styled from 'styled-components';
// import {device} from '../../../../styles/breakpoints/breakpoints';
import { StaticImageContainer, StaticImage, StaticTitle, StaticSubtitle } from '../../StyledPopularCategory'

export const StaticCategoryItem = (props) => {
  const { textForTitle, textForSubtitle, backGround } = props

  return (
    <>
      <StaticImageContainer>
        <StaticImage src={backGround} />
      </StaticImageContainer>
      <StaticTitle>{textForTitle}</StaticTitle>
      <StaticSubtitle>{textForSubtitle}</StaticSubtitle>
    </>
  )
}
