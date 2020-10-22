import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {device} from '../../styles/breakpoints/breakpoints';

export const ContainerDetails = styled.div`
display: flex;
flex-direction: column;
width: 100%;
border-bottom: .1rem solid #e6e9ef;
padding-bottom: 3rem;
margin-bottom: 5rem;
    @media ${device.tabletM}{
        margin-bottom: 7rem;
    };
    @media ${device.tabletL}{
        display: grid;
        grid-template-columns: 50% auto;
        gap: 1rem 3rem;
        padding-bottom: 4.2rem;
        margin-bottom: 10rem;
<<<<<<< HEAD
    };
=======
    }
>>>>>>> alex
`;

export const ContainerProduct = styled.div`
position: relative;
display: flex;
flex-direction: column;
    @media ${device.tabletL}{
        padding: 0 1.2rem 1.2rem;
    };
`;

export const Price = styled.span`
<<<<<<< HEAD
font-size: 3rem;
font-weight: 700;
=======
font-size: 4rem;
font-weight: 800;
>>>>>>> alex
color: #6F909A;
padding-bottom: 2rem;
    &::after{
        content: 'грн';
        position: relative;
        left: .5rem;
        font-size: 1.5rem;
        font-weight: 600;
    };
    @media ${device.tabletS}{
        font-size: 3.5rem;
        font-weight: 800;
            &::after{
            font-weight: 700;
        };
    };
    @media ${device.tabletM}{
        font-size: 4rem;
        font-weight: 800;
        padding-bottom: 2rem;
            &::after{
                left: 1rem;
                font-size: 1.8rem;
                font-weight: 700;
        };
    };
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
position: absolute;
<<<<<<< HEAD
top: .5rem;
right: 0;
font-size: 2.5rem;
=======
top: 1rem;
right: 1.2rem;
font-size: 2rem;
>>>>>>> alex
color: #aecfd9;
cursor: pointer;
transition: all .3s linear;
    &:hover{
        transform:scale(1.2);
    };
    @media ${device.tabletM}{
        font-size: 3rem;
        top: 1rem
    };
    @media ${device.tabletL}{
        right: 1.2rem;
    };
`;

export const Article = styled.span`
position: absolute;
top: 3.5rem;
right: 0;
font-size: 1.2rem;
font-weight: 700;
color: #57646E;
    @media ${device.tabletS}{
        top: 4.1rem;
        font-size: 1.4rem;
    };
    @media ${device.tabletM}{
        top: 4.5rem;
        font-size: 1.5rem;
    };
    @media ${device.tabletL}{
        right: 1.2rem;
        font-size: 1.6rem;
    };
`;

export const Brand = styled.span`
font-size: 2rem;
font-weight: 600;
`;

export const Description = styled.span`
text-align: justify;
font-weight: 400;
font-size: 1.4rem;
line-height: 2rem;
    @media ${device.tabletM}{
        line-height: 2.2rem;
    };
`;

export const Subtitle = styled.span`
font-size: 1.6rem;
font-weight: 700;
padding-top: 1rem;
    @media ${device.tabletM}{
        font-size: 2rem;
        font-weight: 700;
        padding: 1rem 0;
    };
`;

export const DimensionsContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const Actions = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 3rem;
`;

export const SpecificationContainer = styled.div`
display: grid;
grid-template-columns: 30% auto;
grid-template-rows: auto;
gap: 1rem;
    @media ${device.tabletS}{
        grid-template-columns: 20% auto;
        gap: 1.5rem;
    };
    @media ${device.tabletM}{
        grid-template-columns: 15% auto;
        gap: 2rem;
        padding-top: 1rem;
    };
`;

export const DescriptionKey = styled.span`
justify-content: center;
font-weight: 400;
font-size: 1.4rem;
color: #57646E;
`;

export const ProductItemList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    @media ${device.tabletM} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    };
    @media ${device.tabletL} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    };
    @media ${device.desktop} {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
<<<<<<< HEAD
    };
`;
export const ShowMore = styled.button`
font-size: 1.8rem;
color: #e6e9ef;
border: none;
background: none;
outline: none;
cursor: pointer;
transition: all .3s linear;
    &:hover{
        transform: scale(1.2);
        color: #aecfd9;
    };
`;
=======
    }
`;
>>>>>>> alex
