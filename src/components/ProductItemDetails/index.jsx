import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { Title } from '../Title/Title';
import { ProductCarousel } from '../ProductCarousel';
import { Button } from '../Button';
import { useToggle } from '../../utils/useToggle';
import {
  ContainerDetails,
  ContainerProduct,
  Price,
  Article,
  AvailabilityArticleWrap,
  Availability,
  DimensionsContainer,
  Description,
  Subtitle,
  ActionsContainer,
  Actions,
  SpecificationContainer,
  DescriptionKey,
  ShowMore
} from './StyledProductItemDetails';
import { RegularIconFavorite } from '../ProductItem/IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from '../ProductItem/IconsSvg/SolidIconFavorite';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { ProductCounter } from '../Counter/ProductCounter';
import { selectById } from '../../store/products_draft/selectors';
import { getProducts } from '../../store/products_draft/middlware';

const specifications = {
  covering: 'Основание изготовлено из прочной стали, покрытой слоем белого лака. В наличии представлена модель, выполненная из лакированной стали цвета глубокий черный.',
  casing: 'Обивка монолитного сидения может быть разной: эко-кожа, дизайнерская ткань, водонепроницаемый нубук, натуральная шерсть, бархат, кожа премиум-класса.',
};

const ProductItemDetails = (props) => {
  const { match } = props;
  // const { params: { name } } = match;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const product = useSelector(selectById(match.params.name));

  const { screenWidth } = useWindowDimensions();
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

  return (
    <>
      {product && (
        <>
          <Title text={product.name.toUpperCase()} />
          <ContainerDetails>
            <ProductCarousel />
            <ContainerProduct>
              <Price>{product.currentPrice.toLocaleString()}</Price>
              {!inFavorite && <RegularIconFavorite onClick={toggleInFavorite} />}
              {inFavorite && <SolidIconFavorite onClick={toggleInFavorite} />}
              <Subtitle>Бренд: {product.brand}</Subtitle>
              <AvailabilityArticleWrap>
                <Availability>&#10004; в наличии</Availability>
                {/* <Availability>&#10006; нет в наличии</Availability> */}
                <Article>Артикул: {product.itemNo}</Article>
              </AvailabilityArticleWrap>
              <Subtitle>Описание товара</Subtitle>
              <Description>{product.description}</Description>
              {screenWidth >= 768
                ? <>
                  <Subtitle>Габариты</Subtitle>
                  <Description>Высота - {product.sizes.height} cм, </Description>
                  <Description>Ширина - {product.sizes.width} cм, </Description>
                  <Description>Глубина - {product.sizes.length} cм </Description>
                </>
                : <>
                  <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
                  {isDimensions && <DimensionsContainer>
                    <Description>Высота - {product.sizes.height} cм, </Description>
                    <Description>Ширина - {product.sizes.width} cм, </Description>
                    <Description>Глубина - {product.sizes.length} cм </Description>
                  </DimensionsContainer>}
                </>
              }
              <ActionsContainer>
                <Actions>
                  <ProductCounter value={value} setValue={setValue} />
                </Actions>
                <Actions>
                  <Button text={'Купить'} />
                </Actions>
              </ActionsContainer>
            </ContainerProduct>
            {screenWidth >= 768
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
        </>
      )}
    </>
  )
};

export default withRouter(ProductItemDetails);


