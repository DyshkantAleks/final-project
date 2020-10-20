import React, { useState } from 'react'

import { Title } from '../Title/Title';
import { ProductCarousel } from '../ProductCarousel';
import { Button } from '../Button';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../../utils/useToggle';
import { ProductItem } from '../ProductItem';
import {
  ContainerDetails,
  ContainerProduct,
  Price,
  StyledFontAwesomeIcon,
  Article,
  Brand,
  DimensionsContainer,
  Description,
  Subtitle,
  Actions,
  SpecificationContainer,
  DescriptionKey,
  ProductItemList,
  ShowMore
} from './StyledProductItemDetails';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { ProductCounter } from '../Counter/ProductCounter';

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
    widthNew = 52,
    length = 47,
    brand = 'NATA'
  } = props;

  const { width } = useWindowDimensions();
  const [inFavorite, toggleInFavorite] = useToggle();
  const [isSpecification, setIsSpecification] = useState(false);
  const [isDimensions, setIsDimensions] = useState(false);
  const [value, setValue] = useState(1) // myronets

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

  // const productList = [];
  // for (let i = 0; i <= 3; i++) {
  //     productList.push(
  //         <ProductItem key={`product-${i}`}/>
  //     );
  // };

  return (
    <>
      <Title text={name} />
      <ContainerDetails>
        <ProductCarousel />
        <ContainerProduct>
          <Price>{price.toLocaleString()}</Price>
          {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />}
          {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />}
          <Article>Код: {code}</Article>
          <Brand>{brand}</Brand>
          <Subtitle>Описание товара</Subtitle>
          <Description>{description}</Description>
          {width >= 768
            ? <>
              <Subtitle>Габариты</Subtitle>
              <Description>Высота - {height} cм, </Description>
              <Description>Ширина - {widthNew} cм, </Description>
              <Description>Глубина - {length} cм </Description>
            </>
            : <>
              <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
              {isDimensions && <DimensionsContainer>
                <Description>Высота - {height} cм, </Description>
                <Description>Ширина - {widthNew} cм, </Description>
                <Description>Глубина - {length} cм </Description>
              </DimensionsContainer>}
            </>
          }
          <Actions>
            <ProductCounter value={value} setValue={setValue}/>
            <Button text={'Купить'} />
          </Actions>
        </ContainerProduct>
        {width >= 768
          ? <Subtitle>Характеристики
            <SpecificationContainer>
              <DescriptionKey>Покрытие</DescriptionKey>
              <Description>{specifications.covering}</Description>
              <DescriptionKey>Обивка</DescriptionKey>
              <Description>{specifications.casing}</Description>
            </SpecificationContainer>
          </Subtitle> : <Subtitle>Характеристики
            {toggleSpecificationBtn()}
            {isSpecification && <SpecificationContainer>
              <DescriptionKey>Покрытие</DescriptionKey>
              <Description>{specifications.covering}</Description>
              <DescriptionKey>Обивка</DescriptionKey>
              <Description>{specifications.casing}</Description>
            </SpecificationContainer>}
          </Subtitle>
        }
      </ContainerDetails>
      <Title text={'Вас так же могут заинтересовать'} />
      <ProductItemList>
        {/* {productList} */}
        <ProductItem
          isDiscount={true}
          name={'Зеркало Arketipo'}
          price={2599}
          image={'./img/accessories/mirrors/mirror_Arketipo/mirror_Arketipo_main.jpg'}
        />
        <ProductItem
          isNew={true}
          name={'Диван Starman'}
          price={15299}
          image={'./img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo_main.jpg'}
        />
        <ProductItem
          isTopRated={true}
          name={'Стол обеденный Exclusive'}
          price={5599}
          image={'./img/tables/kitchen/table_Pusha/table_Pusha_main.jpeg'}
        />
        <ProductItem
          name={'Стул обеденный Hollywood'}
          price={12799}
          image={'./img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft_main.jpg'}
        />
      </ProductItemList>
    </>
  )
}