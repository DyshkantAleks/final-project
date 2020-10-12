import React from 'react';

import { ConteinerItem, PhotoBox, Photo, TitleBox, Name, Price, FavoriteItem } from './StyledProductItem';

export const ProductItem = (props) => {
    const {
        price = 4899,
        name = 'Стул обеденный',
        image = "/images/chairs/bar/chair_Bontempi_main.png",
        inFavorite = false } = props;

    return (
        <>
            <ConteinerItem >
                <PhotoBox>
                    <Photo alt='our product' src={image} />
                </PhotoBox>

                {
                    !inFavorite && <FavoriteItem className="far fa-heart" />
                }
                {
                    inFavorite && <FavoriteItem className="fas fa-heart" />
                }

                <TitleBox>
                    <Name>{name}</Name>
                    <Price>{price}</Price>
                </TitleBox>
            </ConteinerItem>
        </>
    )
}
