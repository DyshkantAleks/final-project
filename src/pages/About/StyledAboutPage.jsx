import styled from "styled-components";
import {device} from "../../styles/breakpoints/breakpoints";

export const ContactLink = styled.a`
font-size: 1.4rem;
line-height: 1.5;
text-decoration: underline;
color: inherit;
`;

export const TextContainer = styled.div`
flex-basis: 60%;
margin-right: 5rem;
`;
export const ContainerPage = styled.div`
display: flex;
flex-direction: column;
@media${device.tabletM}{
justify-content: space-between;
flex-direction: row;
}
`;
export const ContainerContactForm = styled.div`
border: .1rem solid #aecfd9;
box-shadow: 5px 5px 10px #aecfd9 ;
padding: 2rem;
@media${device.tabletM}{
width: 30rem;
margin: 0 auto;
align-self: flex-start;
}
@media${device.tabletM}{
margin: 0;
}
`;
export const ContactForm = styled.p`
font-size: 1.4rem;
line-height: 1.5;
font-weight: 500;
@media${device.tabletM}{

}
`;


export const Text = styled.p`
font-size: 1.4rem;
line-height: 1.5;
`

export const TextList = styled.ul`
font-size: 1.4rem;
line-height: 1.5;


`
export const TextListItem = styled.li`

`