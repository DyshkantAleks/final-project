import React from 'react';

import { ConteinerItem, Photo, TitleBox, Name, Price, FavoriteItem, ItemLink } from './StyledProductItem';

export const ProductItem = (props) => {
    const { price = 15999, name = 'Стул обеденный', image = "https://esteema.ua/upload/product/large/9001603-08-9001603-08%20(74)_1532595086.jpg", inFavorite = false } = props;

    return (
        <>
            <ConteinerItem >
                <ItemLink href="#void">
                    <Photo alt='our product' src={image} />
                </ItemLink>
                {
                    !inFavorite && <FavoriteItem className="far fa-heart" />
                }
                {
                    inFavorite && <FavoriteItem className="fas fa-heart" />
                }
                <TitleBox>
                    <Name href="#void">{name}</Name>
                    <Price>{price}</Price>
                </TitleBox>
            </ConteinerItem>
        </>
    )
}
