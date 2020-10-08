import styled from 'styled-components';

export const ConteinerItem = styled.li`
list-style: none;
width: 28.2rem;
border: .1rem solid #F5F5F5;
position: relative;
`;
export const ItemLink = styled.a`
text-decoration:none;
cursor:pointer;
`;

export const Photo = styled.img`
max-width: 100%;
overflow: hidden;
border-bottom: .1rem solid #F5F5F5;
`;

export const TitleBox = styled.div`
display: flex;
flex-direction: column;
padding: 2.3rem 0 .5rem .5rem;
`;

export const Name = styled.a`
font-size: 1.4rem;
`;

export const Price = styled.span`
padding-top: 1.5rem;
font-weight: 800;
font-size: 3rem;
color: #007042;
::after{
    content: 'грн';
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    left: 1rem;
}
`;
export const FavoriteItem = styled.span`
    font-size: 2.5rem;
    color: #ED4D71;
    position:absolute;
    top:1rem;
    left:24.5rem;
    cursor:pointer;
`