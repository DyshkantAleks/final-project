import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ContainerDetails, ContainerProduct, Price, Article, AvailabilityArticleWrap, Availability, DimensionsContainer, Description, Subtitle, ActionsContainer, Actions, SpecificationContainer, DescriptionKey, ShowMore, PriceContainer, CurrentPrice, PreviousPrice, SubtitleBox } from './StyledProductItemDetails';
import { RegularIconFavorite } from '../ProductItem/IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from '../ProductItem/IconsSvg/SolidIconFavorite';
import { Title } from '../Title/Title';
import { ProductCounter } from '../Counter/ProductCounter';
import { ProductSlider } from '../ProductSlider';
import { IconSale } from '../ProductItem/IconsSvg/IconSale';
import { IconNew } from '../ProductItem/IconsSvg/IconNew';
import { IconTopRated } from '../ProductItem/IconsSvg/IconTopRated';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { Button } from '../Button';

export const ProductItemDetails = (props) => {
  const { product, btnInCart, btnHeandler, inFavorite, addToFav, removeFromFav } = props;
  const { name, isSale, currentPrice, previousPrice, brand, quantity, itemNo, isNewProduct, isTopRated, description, sizes, specifications, color } = product;
  const { screenWidth } = useWindowDimensions();
  const [isSpecification, setIsSpecification] = useState(false);
  const [isDimensions, setIsDimensions] = useState(false);
  const [value, setValue] = useState(1);

  const toggleSpecificationBtn = () => {
    if (isSpecification) {
      return (
        <ShowMore onClick={() => setIsSpecification(false)}>&#9650;</ShowMore>
      )
    }
    return (
      <ShowMore onClick={() => setIsSpecification(!isSpecification)}>&#9660;</ShowMore>
    )
  };

  const toggleDimensionsBtn = () => {
    if (isDimensions) {
      return (
        <ShowMore onClick={() => setIsDimensions(false)}>&#9650;</ShowMore>
      )
    }
    return (
      <ShowMore onClick={() => setIsDimensions(!isDimensions)}>&#9660;</ShowMore>
    )
  };

  return (
    <>
      <Title text={name} />
      <ContainerDetails>
        <ProductSlider id={product._id} />
        <ContainerProduct>
          {isSale &&
            <PriceContainer>
              <CurrentPrice>{currentPrice.toLocaleString()}</CurrentPrice>
              <PreviousPrice>{previousPrice.toLocaleString()}</PreviousPrice>
            </PriceContainer>}
          {!isSale &&
            <PriceContainer>
              <Price>{currentPrice.toLocaleString()}</Price>
            </PriceContainer>}
          {!inFavorite && <RegularIconFavorite onClick={() => addToFav(product)} />}
          {inFavorite && <SolidIconFavorite onClick={() => removeFromFav(product._id)} />}
          <Subtitle>Бренд: {brand}</Subtitle>
          <AvailabilityArticleWrap>
            {quantity === 0 ? <Availability>&#10006; нет в наличии</Availability> : <Availability>&#10004; в наличии</Availability>}
            <Article>Артикул: {itemNo}</Article>
          </AvailabilityArticleWrap>
          <SubtitleBox>
            <Subtitle>Описание товара</Subtitle>
            {isSale && <IconSale />}
            {isNewProduct && <IconNew />}
            {isTopRated && <IconTopRated />}
          </SubtitleBox>
          <Description>{description}</Description>
          <Subtitle>Цвет</Subtitle>
          <Description>{color}</Description>
          {screenWidth >= 768
            ? <>
              <Subtitle>Габариты</Subtitle>
              <Description>Высота - {sizes.height} cм, </Description>
              <Description>Ширина - {sizes.width} cм, </Description>
              <Description>Глубина - {sizes.length} cм </Description>
            </> : <>
              <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
              {isDimensions && <DimensionsContainer>
                <Description>Высота - {sizes.height} cм, </Description>
                <Description>Ширина - {sizes.width} cм, </Description>
                <Description>Глубина - {sizes.length} cм </Description>
              </DimensionsContainer>}
            </>}
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
          </Subtitle>}
        <ActionsContainer>
          <Actions>
            <ProductCounter value={value} setValue={setValue} quantity={quantity} name={name} />
          </Actions>
          {quantity > 0 ?
            <Actions>
              {btnInCart ? <Button disabled width='true' text={'В корзине'} /> : <Button width='true' color='true' text={'Купить'} onClick={() => btnHeandler(product, value)} />}
            </Actions> :
            <Actions>
              <Button disabled text={'Нет в наличии'} />
            </Actions>
          }
        </ActionsContainer>
      </ContainerDetails>
    </>
  )
};

ProductItemDetails.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    currentPrice: PropTypes.number,
    previousPrice: PropTypes.number,
    barnd: PropTypes.string,
    quantity: PropTypes.number,
    itemNo: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.array,
    route: PropTypes.string,
    id: PropTypes.string,
    isNewProduct: PropTypes.bool,
    isTopRated: PropTypes.bool,
    isSale: PropTypes.bool,
    color: PropTypes.string,
    sizes: PropTypes.shape({
      height: PropTypes.number,
      length: PropTypes.number,
      width: PropTypes.number
    }),
    specifications: PropTypes.shape({
      casing: PropTypes.string,
      covering: PropTypes.string
    }),
  }),
  btnInCart: PropTypes.bool,
  inFavorite: PropTypes.bool,
  btnHeandler: PropTypes.func,
  addToFav: PropTypes.func,
  removeFromFav: PropTypes.func,
};