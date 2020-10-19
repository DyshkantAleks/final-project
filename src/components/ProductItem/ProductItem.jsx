import React from 'react';

import {faHeart as fasFaHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as farFaHeart} from '@fortawesome/free-regular-svg-icons';
import {ConteinerItem, PhotoBox, Photo, TitleBox, Name, Price, StyledFontAwesomeIcon} from './StyledProductItem';
import {useToggle} from '../../utils/useToggle';
import {Button} from '../Button';

export const ProductItem = (props) => {
    const {
        price = 4899,
        name = 'Стул обеденный',
        // image = './img/chairs/bar/chair_Bontempi/chair_Bontempi_main.png',
        image = './img/chairs/bar/chair_Bontempi/chair_Bontempi1.jpg',
        // image = './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
        // image = './img/chairs/bar/chair_Bontempi/chair_Bontempi3.jpg',
        // image = './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo_main.jpg',
        // image = './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo6.jpg',
        // image = './img/sofas/simple_sofa/sofa_Arketipo_Auto/sofa_Arketipo_Auto4.jpeg',
        // image = './img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft1.jpg',
    } = props;

    const [inFavorite, toggleInFavorite] = useToggle();

    return (
        <ConteinerItem>
            <PhotoBox>
                <Photo alt='our product' src={image}/>
            </PhotoBox>
            <TitleBox>
                <Name>{name}</Name>
                { !inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} /> }
                { inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} /> }
                <Price>{price}</Price>
                <Button text={'Купить'}/>
            </TitleBox>
        </ConteinerItem>
    )
}
