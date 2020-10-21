import React from 'react';

import { Header } from '../../commons/Header/Header';
import { ProductList } from './ProductList';
import { ContentContairer } from '../../components/Content/Content';
import { Title } from '../../components/Title/Title';


export const AllProducts = () => {
    return (
        <>
            <Header />
            <ContentContairer>
                <Title text={'Все наши продукты'} />
                <ProductList />
            </ContentContairer>
        </>
    )
}