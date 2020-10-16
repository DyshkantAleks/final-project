import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {ROUTES} from "../../../pages/navigation/routes";
import {device} from "../../../styles/breakpoints/breakpoints";

export const url = window.location.origin;

export const Logo = (props) => {
    return (

                <StyledLink to={ROUTES.HOMEPAGE}>
                    <Container>
                        <Image src={url + '/img/dg-home-logo.png'}/>
                    </Container>
                </StyledLink>

    )
}
const StyledLink = styled(Link)`
display: flex;
    justify-content: center;
`;


const Image = styled.img`
width: 100%;
//height: 100%;

`;
const Container = styled.div`
    width: 6rem;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    position: absolute;
    top: 50%;
    left: 50%;
    //margin-right: -50%;
    transform: translate(-50%, -50%);
    
        @media ${device.tabletM}{
        width: 8rem;
        }
        @media ${device.desktop}{
        width: 10rem;
        //height: 6rem;
        }

`

