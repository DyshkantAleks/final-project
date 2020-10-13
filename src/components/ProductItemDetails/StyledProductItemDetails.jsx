import styled from 'styled-components';

export const Content = styled.section`
padding-bottom: 2rem;
`;

export const ContainerDetails = styled.div`
display: grid;
grid-template-columns: 55% auto;
grid-template-rows: 50rem 20rem;
gap: 1rem 10rem;
border-bottom: .1rem solid #D3D7DA;
padding-bottom: 4.2rem;
`;

export const ContainerProduct = styled.div`
position: relative;
display:flex;
flex-direction: column;
padding: 0 1.2rem 1.2rem;
`;

export const Price = styled.span`
font-size: 4rem;
font-weight: 800;
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

export const Article = styled.span`
position:absolute;
right:1.2rem;
top: 5.2rem;
font-weight: 700;
font-size:1.6rem;
`;

export const Description = styled.span`
text-align: justify;
font-weight: 400;
font-size: 1.4rem;
line-height: 2.2rem;
`;

export const Subtitle = styled.span`
display: flex;
flex-direction: column;
font-size: 2rem;
font-weight: 700;
padding-top: 2rem;
`;

export const SpecificationContainer = styled.div`
display: grid;
grid-template-columns: 15% auto;
grid-template-rows: auto;
gap: 2rem;
padding-top: 1rem;
`;

export const DescriptionKey = styled.span`
justify-content: center;
font-weight: 400;
font-size: 1.4rem;
color: #57646E;
`;