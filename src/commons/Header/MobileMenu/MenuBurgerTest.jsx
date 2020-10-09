import React from "react";
import './mobileMenu.scss';
import { slide as Menu} from 'react-burger-menu'
import {InfoLinks} from "../InfoLinkList";
import styled from 'styled-components'
import {device} from "../../../styles/breakpoints/breakpoints";



export const Example = () => {
    return (
        <Menu right >
            <InfoLinks/>
        </Menu>
    )
};



