import styled from 'styled-components';
<<<<<<< HEAD
import { device } from '../../styles/breakpoints/breakpoints';
=======
import {device} from '../../styles/breakpoints/breakpoints';
>>>>>>> alex

export const SwiperContainer = styled.div`
display: flex;
flex-flow: row;
`;
export const SwiperContainerHorizontal = styled.div`
display: flex;
flex-direction: column;
`;

export const SwiperContainerHorizontal = styled.div`
display: flex;
flex-direction: column;
`;

export const SwiperThumbs = styled.div`
width: 15%;
padding-right: 3rem;
`;
export const SwiperThumbsHorizontal = styled.div`
width: 100%;
`;

export const SwiperGallery = styled.div`
width: 80%;
`;
<<<<<<< HEAD

=======
>>>>>>> alex
export const SwiperGalleryHorizontal = styled.div`
width: 100%;
`;

export const ImageMainContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 99%;
height: 28rem;
overflow: hidden;
border: .1rem solid #e6e9ef;
    @media ${device.tabletS}{
<<<<<<< HEAD
        height: 52rem;
    };
    @media ${device.tabletM}{
        height: 57.6rem;
    };
    @media ${device.tabletL}{
        height: 51rem;
    };
=======
        height: 55rem;
    };
    @media ${device.tabletM}{
        height: 57.6rem;
    }
    @media ${device.tabletL}{
        height: 51rem;
    }
>>>>>>> alex
`;

export const ImageMain = styled.img`
display: block;
max-width: 100%;
height: unset;
<<<<<<< HEAD
overflow: hidden;
margin: 0 auto;
=======
margin: 0 auto;
overflow: hidden;
>>>>>>> alex
padding: .5rem;
`;

export const ImageThumbsContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
<<<<<<< HEAD
width: 97%;
height: 7rem;
overflow: hidden;
border: .1rem solid #e6e9ef;
    @media ${device.tabletS}{
        height: 9rem;
    };
    @media ${device.tabletM}{
        height: 8rem;
    };
    @media ${device.tabletL}{
        height: 8rem;
    };
=======
width: 98%;
height: 7rem;
border: .1rem solid #e6e9ef;
overflow: hidden;
@media ${device.tabletS}{
    height: 9rem;
};
@media ${device.tabletM}{
    height: 8rem;
}
@media ${device.tabletL}{
    height: 8rem;
}
>>>>>>> alex
`;

export const ImageThumbs = styled.img`
display: block;
max-width: 99%;
height: unset;
margin: 0 auto;
padding: .5rem;
<<<<<<< HEAD
transition: all .3s linear;
    &:hover{
        transform: scale(1.2);
    }
=======
>>>>>>> alex
`;