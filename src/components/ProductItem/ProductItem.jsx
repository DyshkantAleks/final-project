import React, { useState, useCallback } from 'react';

import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { ConteinerItem, PhotoBox, Photo, TitleBox, Name, Price, StyledFontAwesomeIcon } from './StyledProductItem';

export const ProductItem = (props) => {
    const {
        price = 4899,
        name = 'Стул обеденный',
        image = "/images/chairs/bar/chair_Bontempi_main.png",
    } = props;

    const useToggle = (initialValue = false) => {
        const [inFavorite, setInFavorite] = useState(initialValue);

        const toggle = useCallback(() => {
            setInFavorite(value => !value);
        }, []);
        return [inFavorite, toggle];
    };

    const [inFavorite, toggleInFavorite] = useToggle();

    return (
        <>
            <ConteinerItem >
                <PhotoBox>
                    <Photo alt='our product' src={image} />
                </PhotoBox>
                {
                    !inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />
                }
                {
                    inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />
                }

                <TitleBox>
                    <Name>{name}</Name>
                    <Price>{price}</Price>
                </TitleBox>
            </ConteinerItem>
        </>
    )
}
