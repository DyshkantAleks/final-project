import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export const Container = styled.div`
width: 100%;
`;

export const ImageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
position:relative;
width:100%;
padding-bottom:20%;
`;

export const Image = styled.img`
position:absolute;
top: 0;
width:100%;
height: auto;
`;

export const Title = styled.span`
font-size: 1.8rem;
font-weight: 600;
line-height: 1.5;
display: inline-block;
margin-bottom: 1.5rem;
  @media ${device.tabletM}{
    font-size: 2.4rem;
    margin-bottom: 2rem;
  };
  @media ${device.tabletL}{
    font-size: 2.6rem;
  };
`;

export const ContentContainerPromo = styled.div`
  @media ${device.tabletM}{
    width: 60%;
  };
`;

export const Description = styled.span`
font-size: 1.4rem;
line-height: 1.5;
display: inline-block;
  @media ${device.tabletM}{
    font-size: 1.6rem;
};
`;