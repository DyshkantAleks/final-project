import React from "react";


import {device} from "../../styles/breakpoints/breakpoints";
import styled from 'styled-components'
import {Example} from "../../commons/Header/MobileMenu/MenuBurgerTest";
import {SliderTest} from "../SliderMain/SliderMain";


export const Content = () => {
    return (
        <ContentContairer>

        </ContentContairer>

    )
};

const ContentContairer = styled.div`
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