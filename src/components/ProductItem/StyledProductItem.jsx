import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ConteinerItem = styled.li`
//width: 29rem;
list-style: none;
border: .1rem solid #F5F5F5;
transition: all .3s linear;
    &:hover{
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
    }
`;

export const PhotoBox = styled.div`
position: relative;
height: 26.2rem;
overflow: hidden;
/* border-bottom: .1rem solid #F5F5F5; */
//padding: 1.4rem;
display: flex;
justify-content: center;
align-items: center;

`;

export const Photo = styled.img`
//display: block;
width: 100%;
height: auto;
//object-fit: cover;
//margin: 0 auto;
`;

export const TitleBox = styled.div`
display: flex;
flex-direction: column;
padding: .5rem 1.4rem 1.4rem 1.4rem;
`;

export const Name = styled.span`
font-size: 1.4rem;
`;

export const Price = styled.span`
font-weight: 800;
font-size: 3rem;
color: #007042;
padding-top: 1.5rem;
    &::after{
        content: 'грн';
        position: relative;
        left: 1rem;
        font-size: 1.8rem;
        font-weight: 700;
    }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
position: absolute;
top: 1.5rem;
right: 1.4rem;
font-size: 2.5rem;
color: #E6ADBF;
cursor: pointer;
transition: all .3s linear;
    &:hover{
        transform:scale(1.2);
    }
`; 