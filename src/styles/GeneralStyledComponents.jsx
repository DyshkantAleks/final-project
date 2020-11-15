import styled from 'styled-components';
import { device } from './breakpoints/breakpoints';

export const ContentContainer = styled.div`
    padding: 0 1.6rem;
    margin: 0 auto;
    
    @media ${device.tabletM}{
        padding: 0 2.4rem;
    }
    @media ${device.tabletL}{
        padding: 0 5rem;
    }
    
    @media ${device.desktop}{
        padding: 4rem 0;
        width: 120rem;
    }
`