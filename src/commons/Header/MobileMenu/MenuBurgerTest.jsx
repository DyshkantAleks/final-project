import React from "react";
import './mobileMenu.scss';
import {slide as Menu} from 'react-burger-menu'
import {InfoLinks} from "../InfoLinks/InfoLinkList";
import styled from 'styled-components'
import {device} from "../../../styles/breakpoints/breakpoints";
import useWindowDimensions from "../../../utils/useWindowDimensions";



export const Example = () => {
    const {width} = useWindowDimensions();


    return (
        <>
            {width < 1200 && (
                <Menu>
                    <InfoLinks/>
                </Menu>

            )}
        </>
    )
};



