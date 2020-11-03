import React from 'react'

import { StaticImage, HoverTitle, HoverSubtitle, HoverImageContainer } from '../../StyledPopularCategory'

export const HoverCategoryItem = (props) => {
  const { textForTitle, textForSubtitle, backGround } = props

  return (
    <>
      <HoverImageContainer>
        <StaticImage src={backGround} />
      </HoverImageContainer>
      <HoverTitle>{textForTitle}</HoverTitle>
      <HoverSubtitle>{textForSubtitle}</HoverSubtitle>
    </>
  )
}
