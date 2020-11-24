import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export const ModalWrapper = styled.div`
width: 100%;
    @media ${device.tabletS}{
        width: 43rem;
    };
    @media ${device.tabletM}{
        width: 60rem;
        padding: 1.5rem;
    };
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
text-align: justify;
`;

export const ModalTitle = styled.h2`
font-size: 1.2rem;
margin-bottom: 1rem;
    @media ${device.tabletM}{
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    };
    @media ${device.desktop}{
        font-size: 2rem;
        margin-bottom: 2rem;
    };
`;

export const ItemInnerWrapper = styled.span`
color: #7191a6;
font-weight: 700;
`;

export const ActionsWrapper = styled.div`
display: grid;
grid-template-rows: repeat(2, 1fr);
gap: 1rem;
font-size: 1.2rem;
place-content: center;
    @media ${device.tabletS}{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    };
    @media ${device.tabletM}{
        font-size: 1.5rem;
    };
`;

export const StyledLink = styled(Link)`
text-decoration: none;
color: #7191a6;
font-weight: 700;
cursor: pointer;
`;