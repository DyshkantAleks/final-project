import React from 'react';

import {faHeart as fasFaHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farFaHeart} from '@fortawesome/free-regular-svg-icons';
import {ConteinerItem, PhotoBox, Photo, TitleBox, Name, Price, StyledFontAwesomeIcon} from './StyledProductItem';
import {useToggle} from '../../utils/useToggle';
import {Button} from '../Button';

export const ProductItem = (props) => {
  const {
    price,
    name,
    image,
  } = props;

  const [inFavorite, toggleInFavorite] = useToggle();

  return (
    <ConteinerItem>
      <PhotoBox>
        <Photo alt='our product' src={image}/>
      </PhotoBox>
      <TitleBox>
        <Name>{name}</Name>
        {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite}/>}
        {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite}/>}
        <Price>{price}</Price>
        <Button text={'Купить'}/>
      </TitleBox>
    </ConteinerItem>
  )
}
