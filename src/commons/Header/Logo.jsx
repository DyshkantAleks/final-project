import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {ROUTES} from "../../pages/navigation/routes";
import {device} from "../../styles/breakpoints/breakpoints";

export const Logo = (props) => {
    const {logo} = props;
    return (

                <Link to={ROUTES.HOMEPAGE} style={{flexGrow: 1}}>
                    <Image src={logo} alt={'logo'}/>
                </Link>

    )
}
const Image = styled.img`
width: 10rem;
@media ${device.tablet}{
width: 12rem
}
@media ${device.desktop}{
width: 15rem
}
`;

