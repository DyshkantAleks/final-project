import React from 'react';

import { Title } from '../Title/Title';
import styled from 'styled-components';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductCarousel } from "../ProductCarousel/ProductCarousel"


export const ProductContainer = (props) => {
    const { name = 'Стул обеденный' } = props;
    return (
        <Container>
            <Title text={name} />
            <ContainerDetails>
                <ProductCarousel />
                <ProductItem />
            </ContainerDetails>
        </Container>
    )
}

const Container = styled.section`
background: paleturquoise;
`;

const ContainerDetails = styled.div`
display: grid;
grid-template-columns: 55% 35%;
gap: 12rem;
`;