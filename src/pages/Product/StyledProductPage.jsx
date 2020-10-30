import styled from 'styled-components';
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
    };
`;

export const ContainerProduct = styled.div`
position: relative;
display: flex;
flex-direction: column;
    @media ${device.tabletL}{
        padding: 0 1.2rem 1.2rem;
    };
`;

export const PriceContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: baseline;
width: 85%;
    @media ${device.tabletS}{
        width: 70%;
    };
    @media ${device.tabletM}{
        width: 50%;
    };
    @media ${device.tabletL}{
        width: 85%;
    };
    @media ${device.desktop}{
        width: 60%;
    };
`;

export const PreviousPrice = styled.span`
font-size: 2rem;
font-weight: 700;
color:#6F909A;
text-decoration: line-through;
    &::after{
        content: 'грн';
        position: relative;
        left: .5rem;
        font-size: 1rem;
        font-weight: 700;
    };
    @media ${device.tabletS}{
        font-weight: 800;
        font-size: 2.5rem;
            &::after{
                left: 0.5;
                font-size: 1.5rem;
                font-weight: 700;
        };
    };
    @media ${device.tabletM}{
        font-weight: 800;
        font-size: 2.8rem;
            &::after{
                left: 0.5;
                font-size: 1.5rem;
                font-weight: 700;
        };
    };
`;

export const CurrentPrice = styled.span`
font-size: 3rem;
font-weight: 700;
color: #8D145E;
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
            &::after{
                left: 1rem;
                font-size: 1.8rem;
                font-weight: 700;
        };
    };
`;

export const Price = styled.span`
font-size: 3rem;
font-weight: 700;
color: #6F909A;
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
            &::after{
                left: 1rem;
                font-size: 1.8rem;
                font-weight: 700;
        };
    };
`;

export const Article = styled.span`
font-size: 1.2rem;
font-weight: 700;
color:#9fa1a5;
    @media ${device.tabletM}{
        font-size: 1.3rem;
    };
`;

export const AvailabilityArticleWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: .5rem;
    @media ${device.tabletS}{
        display: grid;
        grid-template-columns: 25% 40%;
        padding-top: .5rem;
        justify-content:start;
    };
    @media ${device.tabletL}{
        grid-template-columns: 25% 60%;
    };
`;

export const Availability = styled.span`
font-size: 1.2rem;
font-weight: 700;
color:#6F909A;
    @media ${device.tabletM}{
        font-size: 1.3rem;
    };
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

export const ActionsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding-top: 1rem;
`;

export const Actions = styled.div`
display: flex;
justify-content: center;
align-items: center;
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

