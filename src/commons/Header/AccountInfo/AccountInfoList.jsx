import React from "react";
import {HeaderAccount} from "./HeaderAccount";
import {HeaderFavorites} from "./HeaderFavorites";
import {HeaderCart} from "./HeaderCart";
import styled from "styled-components";
import {device} from "../../../styles/breakpoints/breakpoints";

export const AccountInfoList = () => {
    return(
        <List>
            <HeaderAccount/>
            <HeaderFavorites/>
            <HeaderCart/>
        </List>
    )
}

const List = styled.ul`
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-end;
    //flex-basis: 40%;
    //order: 0;
    @media ${device.desktop}{
    
    }
`;