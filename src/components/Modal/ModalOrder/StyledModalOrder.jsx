import styled from 'styled-components';
import { device } from '../../../styles/breakpoints/breakpoints';

export const ModalOrderWrapper = styled.div`
width: 100%;
    @media ${device.tabletS}{
        width: 43rem;
    };
`;

export const ContentOrder = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

export const ModalTitleOrder = styled.h2`
font-size: 1.2rem;
    @media ${device.tabletM}{
        font-size: 1.8rem;
    };
    @media ${device.desktop}{
        font-size: 2rem;
    };
`;

export const ActionsWrap = styled.div`
display: flex;
justify-content: center;
font-size: 1.2rem;
margin: 0 2rem 2rem;
@media ${device.tabletS}{
    margin: 0 2.7rem 2rem;
};
@media ${device.tabletM}{
    font-size: 1.5rem;
    margin: 0 3.5rem 2rem;
};

`;