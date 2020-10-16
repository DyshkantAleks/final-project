import React from 'react';
import styled from 'styled-components';

import {InfoLinks} from "./InfoLinks/InfoLinkList";
import useWindowDimensions from "../../utils/useWindowDimensions";
import {Logo} from "./Logo/Logo";
import {AccountInfoList} from "./AccountInfo/AccountInfoList";
import {device} from "../../styles/breakpoints/breakpoints";
import {MobileMenu} from "./MobileMenu/MobileMenu";
import {CatalogList} from "./Catalog/CatalogList";


export const Header = () => {
    const {width} = useWindowDimensions();
    return (
        <>
        <StyledHeader>
            <HeaderContainer>
                {width >= 1200 && (
                    <InfoLinks/>
                )}
                <Logo/>
                <MobileMenu/>
                <AccountInfoList/>
            </HeaderContainer>
        </StyledHeader>

                {width >= 1200 && (
                    <CatalogList/>
                )}
        </>
    )
}

const StyledHeader = styled.header`
    //background-color: #848484;
    //border-bottom: 1px solid black;
`;

const HeaderContainer = styled.div`
    position: relative;
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

