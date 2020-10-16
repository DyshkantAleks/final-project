import React from "react";

import {Link} from "react-router-dom";
import {ROUTES} from "../../../pages/navigation/routes";
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {StyledFontAwesomeIcon} from "./HeaderAccount";

export const HeaderFavorites = () => {
    return (
        <Link to={ROUTES.FAVORITES}>
            <StyledFontAwesomeIcon icon={faHeart}/>
        </Link>

    )
};


