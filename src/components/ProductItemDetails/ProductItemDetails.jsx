import React from 'react'

import { Title } from '../Title/Title';
import { ProductCarousel } from "../ProductCarousel/ProductCarousel";
import { ContainerDetails, ContainerProduct, Price, StyledFontAwesomeIcon, Article, Description, Subtitle, Actions, SpecificationContainer, DescriptionKey, ProductItemList } from "./StyledProductItemDetails";
import { Button } from '../Button';
import { ContentContairer } from '../Content/Content';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../../utils/useToggle';
import { ProductItem } from '../ProductItem/ProductItem';

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

    return (
        <ContentContairer>
            <Title text={name} />
            <ContainerDetails>
                <ProductCarousel />
                <ContainerProduct>
                    <Price>{price}</Price>
                    { !inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} /> }
                    { inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} /> }
                    <Article>Код: {code}</Article>
                    <Description>{description}</Description>
                    <Subtitle>Габариты
                        <Description>Высота - {height} cм, </Description>
                        <Description>Ширина - {width} cм, </Description>
                        <Description>Глубина - {length} cм </Description>
                    </Subtitle>
                    <Actions>
                        <Button text={'Купить'} />
                        <Button text={'Купить'} />
                    </Actions>
                </ContainerProduct>
                <Subtitle>Характеристики
                    <SpecificationContainer>
                        <DescriptionKey>Покрытие</DescriptionKey>
                        <Description>{specifications.covering}</Description>
                        <DescriptionKey>Обивка</DescriptionKey>
                        <Description>{specifications.casing}</Description>
                    </SpecificationContainer>
                </Subtitle>
            </ContainerDetails>
            <Title text={'Вас так же могут заинтересовать'} />
            <ProductItemList>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </ProductItemList>
        </ContentContairer>
    )
}