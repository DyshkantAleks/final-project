import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ConteinerItem = styled.li`
list-style: none;
width: 28.2rem;
border: .1rem solid #F5F5F5;
position: relative;
`;

export const PhotoBox = styled.div`
/* width: 28.2rem; */
height: 28.2rem;
overflow: hidden;
border-bottom: .1rem solid #F5F5F5;
`;

export const Photo = styled.img`
display: block;
max-width: 100%;
max-height: 100%;
object-fit: cover;
margin: 0 auto;

`;

export const TitleBox = styled.div`
display: flex;
flex-direction: column;
padding: 2.3rem 0 .5rem .5rem;
`;

export const Name = styled.span`
font-size: 1.4rem;
`;

export const Price = styled.span`
font-weight: 800;
font-size: 3rem;
color: #007042;
padding-top: 1.5rem;
::after{
    content: 'грн';
    position: relative;
    left: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
}
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
position:absolute;
top:1rem;
left:24.5rem;
font-size: 2.5rem;
color: #ED4D71;
cursor:pointer;
`; 