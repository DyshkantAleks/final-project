import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export const FavDimensions = styled.p`
  margin-bottom: 0;

  @media ${device.mobile} {
    text-align: left;
    display: none;
  }
  @media ${device.tabletS} {
    text-align: center;
    padding-right: 5%;
  }
  @media ${device.tabletM} {
    display: inherit;
  }
`;