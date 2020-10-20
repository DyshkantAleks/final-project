import React, {useState} from 'react';

import {Item} from '../StyledPopularCategory';
import {StaticCategoryItem} from './HoverItem/StaticCategoryItem';
import {HoverCategoryItem} from './HoverItem/HoverCategoryItem';

export const PopularCategoryItem = (props) => {
  const {textForTitle, textForSubtitle, backGround} = props;
  const [hover, setHover] = useState(false);

  return (

    <Item onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}>
      {hover && (
        <HoverCategoryItem textForTitle={textForTitle} textForSubtitle={textForSubtitle} backGround={backGround}/>

      )}

      {!hover && (
        <StaticCategoryItem textForTitle={textForTitle} textForSubtitle={textForSubtitle} backGround={backGround}/>

      )}

    </Item>

  )
};
