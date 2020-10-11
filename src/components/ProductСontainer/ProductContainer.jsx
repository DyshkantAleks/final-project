import React from 'react';

import { Title } from '../Title/Title';
import styled from 'styled-components';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";
import {ProductItemDetails} from "../ProductItemDetails/ProductItemDetails"


export const ProductContainer = (props) => {
    const { name = 'Стул полубарный NATA' } = props;
    return (
        <>
            <ContainerTitle>
                <Title text={name} />
            </ContainerTitle>
            <ContainerDetails>
                <ProductCarousel />
                <ProductItemDetails/>
            </ContainerDetails>
        </>

    )
}

const ContainerTitle = styled.div`
padding-left: 5rem;
`;

const ContainerDetails = styled.div`
display: grid;
grid-template-columns: 55% 35%;
gap: 10rem;
`;