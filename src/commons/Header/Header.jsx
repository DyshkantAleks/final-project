import React from 'react';

import styled from 'styled-components';

import {CatalogList} from "./Catalog/CatalogList";
import {Example} from "./MobileMenu/MenuBurgerTest";
import {InfoLinks} from "./InfoLinkList";


export const Header = () => {
    return (
        <Container>
            {/*<InfoLinks/>*/}
            <Example/>

        </Container>
    )
}

const Container = styled.header`
    
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

`;

