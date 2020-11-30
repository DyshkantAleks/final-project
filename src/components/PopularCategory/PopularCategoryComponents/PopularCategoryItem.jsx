import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Item } from '../StyledPopularCategory';
import { StaticCategoryItem } from './HoverItem/StaticCategoryItem';
import { HoverCategoryItem } from './HoverItem/HoverCategoryItem';

export const PopularCategoryItem = (props) => {
  const { textForTitle, textForSubtitle, backGround } = props;
  const [hover, setHover] = useState(false);
  const onMouseEnterHandler = () => { setHover(true) };
  const onMouseLeaveHandler = () => { setHover(false) };

  return (
    <Item onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
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
};

PopularCategoryItem.defaultProps = {
  textForTitle: 'Заголовок',
  textForSubtitle: 'Текст',
  backGround: 'https://res.cloudinary.com/dg-home/image/upload/v1605196877/General/Categories/popular-category-table-min_fmalgj.png'
};

PopularCategoryItem.propTypes = {
  textForTitle: PropTypes.string,
  textForSubtitle: PropTypes.string,
  backGround: PropTypes.string
};