import styled from 'styled-components';
import { device } from '../../styles/breakpoints/breakpoints';


export const ContainerHorizontal = styled.section`
min-height: 40rem;
padding: 2rem;
`;

export const ContainerVertical = styled.section`
display: flex;
flex-flow: row;
justify-content: space-between;
height: 45rem;
padding: 2rem;
`;

export const SliderGalleryHorizontal = styled.div`
width: 100%;
margin-bottom: 3rem;
`;

export const SliderGalleryVertical = styled.div`
width: 75%;
`;

export const SliderThumbsHorizontal = styled.div`
width: 100%;
`;

export const SliderThumbsVertical = styled.div`
width: 15%;
`;

export const ImageMainContainer = styled.div`
display: flex !important;
justify-content: center;
align-items: center;
width: 90%;
height: 28rem;
overflow: hidden;
box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3) inset;
    @media ${device.tabletS}{
        height: 32rem;
    };
    @media ${device.tabletM}{
        height: 40rem;
    };
    @media ${device.tabletL}{
        height: 45rem;
    };
`;

export const ImageMain = styled.img`
max-width: 100%;
height: auto;
overflow: hidden;
margin: 0 auto;
`;

export const ImageThumbsContainer = styled.div`
display: flex !important;
justify-content: center;
align-items: center;
width: 100%;
height: 7rem;
overflow: hidden;
box-shadow: 0px 0px .3rem rgba(0, 0, 0, 0.3) inset;
    @media ${device.tabletS}{
        height: 9rem;
    };
    @media ${device.tabletM}{
        height: 10rem;
        box-shadow: 0px 0px .5rem rgba(0, 0, 0, 0.3) inset;

    };
    @media ${device.tabletL}{
        height: 8rem;
        margin-bottom: .5rem;
        box-shadow: 0px 0px .8rem rgba(0, 0, 0, 0.3) inset;

    };
`;

export const ImageThumbs = styled.img`
width: 100%;
height: unset;
margin: 0 auto;
transition: all .3s linear;
    &:hover{
        transform: scale(1.2);
    };
`;