import React from 'react';

import styled from 'styled-components';

import {CatalogList} from "./Catalog/CatalogList";
import {Example} from "./MobileMenu/MenuBurgerTest";
import {InfoLinks} from "./InfoLinks/InfoLinkList";
import useWindowDimensions from "../../utils/useWindowDimensions";
import {Logo} from "./Logo/Logo";
import {HeaderCart} from "./AccountInfo/HeaderCart";
import {HeaderAccount} from "./AccountInfo/HeaderAccount";
import {HeaderFavorites} from "./AccountInfo/HeaderFavorites";
import {AccountInfoList} from "./AccountInfo/AccountInfoList";
import {device} from "../../styles/breakpoints/breakpoints";



export const Header = () => {
    const {width} = useWindowDimensions();
    return (
        <StyledHeader>
            <Container>
                {width >= 1200 && (
                    <InfoLinks/>
                )}
                <Logo/>
                <Example/>
                <AccountInfoList/>
            </Container>

        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    border-bottom: 1px solid black;
    position: relative;
    //background-color: #848484;
`;

const Container = styled.div`
    padding: 1.6rem;
        @media ${device.tablet}{
        padding: 2.4rem
        }
        @media ${device.tabletL}{
        padding: 2.4rem 5rem
        }
        
        @media ${device.desktop}{
        display: flex;
        justify-content: space-between;
        padding: 3rem 0;
        width: 120rem;
        margin: 0 auto;
        }

`

