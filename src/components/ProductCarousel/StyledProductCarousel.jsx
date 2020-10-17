import styled from 'styled-components';
import {device} from "../../styles/breakpoints/breakpoints";

export const SwiperContainer = styled.div`
display: flex;
flex-flow: row;
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
        height: 55rem;
    };
    @media ${device.tabletM}{
        height: 57.6rem;
    }
    @media ${device.tabletL}{
        height: 51rem;
    }
`;

export const ImageMain = styled.img`
display: block;
max-width: 100%;
height: unset;
margin: 0 auto;
overflow: hidden;
padding: .5rem;
`;

export const ImageThumbsContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
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
`;

export const ImageThumbs = styled.img`
display: block;
max-width: 99%;
height: unset;
margin: 0 auto;
padding: .5rem;
`;