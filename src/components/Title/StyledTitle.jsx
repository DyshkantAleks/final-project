import styled from 'styled-components';

import { device } from '../../styles/breakpoints/breakpoints';

export const MainTitle = styled.h2`
font-size: 1.8rem;
    font-weight: bold;
    margin: 2rem 0;
    text-align: left;
    
    @media ${device.tablet}{
    font-size: 2.4rem;
    margin: 2.5rem 0;
    }
    
    @media ${device.desktop}{
    font-size: 3rem;
    margin: 3rem 0;
    }
`