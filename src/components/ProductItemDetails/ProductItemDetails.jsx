import React, { useState } from 'react'

import { Title } from '../Title/Title';
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";
import { Button } from '../Button';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../../utils/useToggle';
import { ProductItem } from '../ProductItem/ProductItem';
import {
    ContainerDetails,
    ContainerProduct,
    Price,
    StyledFontAwesomeIcon,
    Article,
    DimensionsContainer,
    Description,
    Subtitle,
    Actions,
    SpecificationContainer,
    DescriptionKey,
    ProductItemList,
    ShowMore
} from "./StyledProductItemDetails";

const specifications = {
    covering: 'Основание изготовлено из прочной стали, покрытой слоем белого лака. В наличии представлена модель, выполненная из лакированной стали цвета глубокий черный.',
    casing: 'Обивка монолитного сидения может быть разной: эко-кожа, дизайнерская ткань, водонепроницаемый нубук, натуральная шерсть, бархат, кожа премиум-класса.',
};

export const ProductItemDetails = (props) => {
    const {
        price = 4899,
        name = 'Стул полубарный NATA',
        description = 'Ищите нестандартные решения для домашнего интерьера? Полубарный стул NATA от итальянского бренда Bontempi удовлетворит запросы даже самых взыскательных покупателей. В нем совмещено изумительное качество, эффектный дизайн, детальная продуманность. Предмет может быть поставлен на заказ. Вы можете самостоятельно выбрать оптимальные цвета и материалы.',
        code = 3435,
        height = 95,
        width = 52,
        length = 47
    } = props;

    const [inFavorite, toggleInFavorite] = useToggle();
    const [isSpecification, setIsSpecification] = useState(false);
    const [isDimensions, setIsDimensions] = useState(false);

    const toggleSpecificationBtn = () => {
        if (isSpecification) {
            return (
                <ShowMore onClick={() => setIsSpecification(false)}>&#9650;</ShowMore>
            );
        }
        return (
            <ShowMore onClick={() => setIsSpecification(!isSpecification)}>&#9660;</ShowMore>
        );
    };

    const toggleDimensionsBtn = () => {
        if (isDimensions) {
            return (
                <ShowMore onClick={() => setIsDimensions(false)}>&#9650;</ShowMore>
            );
        }
        return (
            <ShowMore onClick={() => setIsDimensions(!isDimensions)}>&#9660;</ShowMore>
        );
    };

    const productList = [];
    for (let i = 0; i <= 3; i++) {
        productList.push(
            <ProductItem key={`product-${i}`}/>
        );
    };

    return (
        <>
            <Title text={name} />
            <ContainerDetails>
                <ProductCarousel />
                <ContainerProduct>
                    <Price>{price}</Price>
                    {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />}
                    {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />}
                    <Article>Код: {code}</Article>
                    <Description>{description}</Description>
                    <Subtitle>Габариты
                        {toggleDimensionsBtn()}
                    </Subtitle>
                    {isDimensions && <DimensionsContainer>
                        <Description>Высота - {height} cм, </Description>
                        <Description>Ширина - {width} cм, </Description>
                        <Description>Глубина - {length} cм </Description>
                    </DimensionsContainer>}
                    <Actions>
                        <h2>Counter</h2>
                        <Button text={'Купить'} />
                    </Actions>
                </ContainerProduct>
                <Subtitle>Характеристики
                    {toggleSpecificationBtn()}
                    {isSpecification && <SpecificationContainer>
                        <DescriptionKey>Покрытие</DescriptionKey>
                        <Description>{specifications.covering}</Description>
                        <DescriptionKey>Обивка</DescriptionKey>
                        <Description>{specifications.casing}</Description>
                    </SpecificationContainer>}
                </Subtitle>
            </ContainerDetails>
            <Title text={'Вас так же могут заинтересовать'} />
            <ProductItemList>
                {productList}
            </ProductItemList>
        </>
    )
}