import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export  const ComponentContainerL = styled.div`
  flex-grow: 1;
  @media ${device.desktop} {
    margin-right: 4rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
  } ;
`;

export  const ComponentContainerR = styled.div`
  flex-grow: 1;
  @media ${device.desktop} {
    margin-left: 4rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  } ;
`;

export  const ContainerPage = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column-reverse;
  @media ${device.desktop} {
    justify-content: space-between;
    flex-direction: row;
  } ;
`;