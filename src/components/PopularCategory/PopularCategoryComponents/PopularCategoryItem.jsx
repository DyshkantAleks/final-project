import React, { useState } from 'react'

import { Item } from '../StyledPopularCategory'
import { StaticCategoryItem } from './HoverItem/StaticCategoryItem'
import { HoverCategoryItem } from './HoverItem/HoverCategoryItem'
import PropTypes from 'prop-types';


export const PopularCategoryItem = (props) => {
  const { textForTitle, textForSubtitle, backGround } = props
  const [hover, setHover] = useState(false)
  return (
    <Item
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      {hover && (
        <HoverCategoryItem
          textForTitle={textForTitle} textForSubtitle={textForSubtitle}
          backGround={backGround}
        />

      )}

      {!hover && (
        <StaticCategoryItem
          textForTitle={textForTitle} textForSubtitle={textForSubtitle}
          backGround={backGround}
        />

      )}

    </Item>
  )
}

PopularCategoryItem.propTypes = {
  textForTitle: PropTypes.string,
  textForSubtitle: PropTypes.string,
  backGround: PropTypes.string

};

PopularCategoryItem.defaultProps = {
  textForTitle: 'Заголовок',
  textForSubtitle: 'Текст',
  backGround: 'https://res.cloudinary.com/dg-home/image/upload/v1605196877/General/Categories/popular-category-table-min_fmalgj.png'
};
