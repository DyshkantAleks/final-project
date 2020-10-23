import React from 'react';

import { Header } from '../../commons/Header/Header';
import { ContentContairer } from '../../components/Content/Content';
import { Title } from '../../components/Title/Title';
import { ProductItemList } from '../../components/ProductItemDetails/StyledProductItemDetails';
import ProductItem from '../../components/ProductItem';

export const AllProducts = (props) => {
    return (
        <>
            <Header />
            <ContentContairer>
                <Title text={'Все наши продукты'} />
                <ProductItemList>
                    <ProductItem />
                </ProductItemList>
            </ContentContairer>
        </>
    )
}