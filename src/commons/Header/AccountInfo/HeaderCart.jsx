import React from "react";

import styled from "styled-components";
import {Link} from "react-router-dom";
import {ROUTES} from "../../../pages/navigation/routes";
import {device} from "../../../styles/breakpoints/breakpoints";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {StyledFontAwesomeIcon} from "./HeaderAccount";

export const HeaderCart = () => {
    return (
        <Link to={ROUTES.CART}>
            <StyledFontAwesomeIcon icon={faShoppingCart}/>
        </Link>
    )
}

