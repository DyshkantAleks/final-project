import React from 'react'

import styled from 'styled-components';

export const ProductItemDetails = (props) => {
    const {price=4899, description='Ищите нестандартные решения для домашнего интерьера? Полубарный стул NATA от итальянского бренда Bontempi удовлетворит запросы даже самых взыскательных покупателей. В нем совмещено изумительное качество, эффектный дизайн, детальная продуманность. Основание изготовлено из прочной стали, покрытой слоем белого лака. Обивка монолитного сидения может быть разной: эко-кожа, дизайнерская ткань, водонепроницаемый нубук, натуральная шерсть, бархат, кожа премиум-класса. В наличии представлена модель, выполненная из лакированной стали цвета глубокий черный, с покрытием тканью Mambo в цвете фиолетово-золотой. Предмет может быть поставлен на заказ. Вы можете самостоятельно выбрать оптимальные цвета и материалы.', code=3435, brand='Bontempi', height=95, width=52, length=47 } = props;

    return(
        <Container>
        <Price>{price}</Price>
        <Article>Код: {code}</Article>
        <Description>{description}</Description>
        <h4>Габариты {width} {height} {length}</h4>
        
        </Container>
    )
}

const Container = styled.div`
display:flex;
flex-direction: column;
position: relative;
`;

const Price = styled.span`
padding-top: 1.5rem;
font-weight: 800;
font-size: 4rem;
color: #007042;
::after{
    content: 'грн';
    font-size: 1.8rem;
    font-weight: 700;
    position: relative;
    left: 1rem;
}
`;
const Article = styled.span`
position:absolute;
right:0;
top: 5.2rem;
font-weight: 700;
font-size:1.6rem;
`;
const Description = styled.span`
font-size: 1.4rem;
line-height:160%;
text-align: justify;
`;