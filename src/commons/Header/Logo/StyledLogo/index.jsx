import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../../../../styles/breakpoints/breakpoints'

export const StyledLink = styled(Link)`
display: flex;
    justify-content: center;
`

export const Image = styled.img`
width: 100%;
//height: 100%;
`

export const Container = styled.div`
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
