import styled from "styled-components";
import {device} from "../../../styles/breakpoints/breakpoints";
import {Link} from "react-router-dom";

export const List = styled.div`
     display: grid;
    grid-template-columns: 1fr;
    gap: 3rem 2rem;
   
@media ${device.tabletM} {
 grid-template-columns: 1fr 1fr;
}

`;

export const StyledLink = styled(Link)`
text-decoration: none;
    color: initial;
`
export const ItemContainer = styled.div`
transition: all 0.5s ease;
&:hover {
transform: scale(1.05);
box-shadow: -1px -1px 18px 0 #6b7280;
}
`;

export const ImageContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;

`;

export const Image = styled.img`
width: 100%;
height: auto;
`;

export const TextContainer = styled.div`
padding: 1rem;
`;

export const Title = styled.span`
font-size: 2rem;
font-weight: 500;
line-height: 1.5;
text-transform: uppercase;
display: block;
`;
export const Subtitle = styled.span`
font-size: 1.4rem;
line-height: 1.5;

`;