import React from "react";
import {device} from "../../styles/breakpoints/breakpoints";
import styled from 'styled-components'
import {CatalogList} from "../../commons/Header/Catalog/CatalogList";


export const Content = () => {
    return (
        <ContentContairer>

        </ContentContairer>

    )
};

export const ContentContairer = styled.div`
    padding: 0 1.6rem;
    margin: 0 auto;
    
    @media ${device.tablet}{
        padding: 0 2.4rem;
    }
    @media ${device.tabletL}{
        padding: 0 5rem;
    }
    
    @media ${device.desktop}{
        padding: 0;
        width: 120rem;
    }
`;