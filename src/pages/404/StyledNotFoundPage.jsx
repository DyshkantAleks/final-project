import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';

export const ContainerFor404 = styled.div`
background-color: #f7f8f9;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const Image404 = styled.img`
width: 100%;
height: 100%;
`;

export const ContainerImage404 = styled.div`
width: 100%;
  @media ${device.tabletM}{
    width: 60rem;
    margin: 0 auto;
  };
`;

export const Text404 = styled.p`
font-size: 2rem;
font-weight: 600;
text-align: center;
`;

export const Button404 = styled.div`
font-size: 1.6rem;
background-color: #6F909A;
border: .1rem solid #6F909A;
border-radius: 1rem;
padding: 1rem 1.5rem;
color: #FFFFFF;
margin: 0 auto;
font-weight: 600;
width: fit-content;
`;

export const TextContainer404 = styled.div`
display: flex;
flex-direction: column;
`;