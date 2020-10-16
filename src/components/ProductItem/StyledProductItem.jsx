import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {device} from "../../styles/breakpoints/breakpoints";

export const ConteinerItem = styled.li`
width: 29rem;
list-style: none;
border: .1rem solid #F5F5F5;
transition: all .3s linear;
margin-bottom: 2rem;
    &:hover{
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    }
    @media ${device.tabletS}{
        width: 33rem;
    }
    @media ${device.tabletM}{
        width: 25.2rem;
    }
    @media ${device.tabletL}{
        width: 21.5rem;
    }
    @media ${device.desktop}{
        /* width: 26.5rem; */
        width: 100%;
        
    }
`;

export const PhotoBox = styled.div`
display: flex;
height: 29rem;
justify-content: center;
align-items: center;
padding: .5rem;
    @media ${device.tabletS}{
        height: 33rem;
    }
    @media ${device.tabletM}{
        height: 25.2rem;
        padding: 1rem;
    }
    @media ${device.tabletL}{
        height: 21.5rem;
    }
    @media ${device.desktop}{
        height: 26.5rem;
        padding: 1.3rem;
    }
`;

export const Photo = styled.img`
max-width: 100%;
max-height: 100%;

`;

export const TitleBox = styled.div`
position: relative;
display: flex;
flex-direction: column;
padding: .5rem 1.4rem 1.4rem 1.4rem;
`;

export const Name = styled.span`
font-size: 1.4rem;
`;

export const Price = styled.span`
font-size: 2.5rem;
font-weight: 800;
color: #007042;
padding: 1rem 0;
    &::after{
        content: 'грн';
        position: relative;
        left: .5rem;
        font-size: 1.3rem;
        font-weight: 700;
    }
    @media ${device.tabletM}{
    font-weight: 800;
    font-size: 3rem;
    padding-top: 1.5rem;
        &::after{
            left: 1rem;
            font-size: 1.8rem;
            font-weight: 700;
        }
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
position: absolute;
top: 0;
right: 1.4rem;
font-size: 2.5rem;
color: #E6ADBF;
cursor: pointer;
transition: all .3s linear;
    &:hover{
        transform:scale(1.2);
    }
`; 
