import React from 'react';
import {ROUTES} from "../../../pages/navigation/routes";

import {Container, Image, StyledLink} from "./StyledLogo";

export const url = window.location.origin;

export const Logo = (props) => {
    return (

                <StyledLink to={ROUTES.HOMEPAGE}>
                    <Container>
                        <Image src={url + '/img/dg-home-logo.png'}/>
                    </Container>
                </StyledLink>

    )
};


