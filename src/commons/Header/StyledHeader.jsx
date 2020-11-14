import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export const HeaderContainer = styled.div`
    position: relative;
    padding: 1.6rem;
        @media ${device.tabletL}{
        padding: 2.4rem 5rem
        }
        
        @media ${device.desktop}{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4rem 0;
        width: 120rem;
        margin: 0 auto;
        }
`