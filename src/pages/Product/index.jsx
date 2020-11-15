import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { selectByRoute } from '../../store/products_draft/selectors';
// import { useToggle } from '../../utils/useToggle';
import { Title } from '../../components/Title/Title';
import { Button } from '../../components/Button';
import { ContainerDetails, ContainerProduct, Price, Article, AvailabilityArticleWrap, Availability, DimensionsContainer, Description, Subtitle, ActionsContainer, Actions, SpecificationContainer, DescriptionKey, ShowMore, PriceContainer, CurrentPrice, PreviousPrice, SubtitleBox } from './StyledProductPage';
import { RegularIconFavorite } from '../../components/ProductItem/IconsSvg/RegularIconFavorite';
import { SolidIconFavorite } from '../../components/ProductItem/IconsSvg/SolidIconFavorite';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { ProductCounter } from '../../components/Counter/ProductCounter';
import { ProductSlider } from '../../components/ProductSlider';
import { IconSale } from '../../components/ProductItem/IconsSvg/IconSale';
import { IconNew } from '../../components/ProductItem/IconsSvg/IconNew';
import { IconTopRated } from '../../components/ProductItem/IconsSvg/IconTopRated';
import { Footer } from '../../commons/Footer';
import { NewProductsList } from '../../components/NewProducts/NewProductsList';
import { selectCart } from '../../store/AppData/cart/selectors';
import { addProductToCart } from '../../store/AppData/cart/middlware';
import { addProductToFav, removeProductFromFav } from '../../store/AppData/favorites/middlware';
import { selectFavorites } from '../../store/AppData/favorites/selectors';
import { ScrollToTop } from '../../components/ScrollToTop';

export const ProductPage = (props) => {
  const { match } = props;
  const { screenWidth } = useWindowDimensions();
  // const [inFavorite, toggleInFavorite] = useToggle();
  const [isSpecification, setIsSpecification] = useState(false);
  const [isDimensions, setIsDimensions] = useState(false);
  const [value, setValue] = useState(1);
  const product = useSelector(selectByRoute(match.params.route));
  const productInCart = useSelector(selectCart);
  const productInFavorite = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const btnInCart = productInCart.map(itemCart => itemCart.product.route).some(item => item === match.params.route);

  const toggleSpecificationBtn = () => {
    if (isSpecification) {
      return (
        <ShowMore onClick={() => setIsSpecification(false)}>&#9650;</ShowMore>
      )
    }
    return (
      <ShowMore onClick={() => setIsSpecification(!isSpecification)}>&#9660;</ShowMore>
    )
  }

  const toggleDimensionsBtn = () => {
    if (isDimensions) {
      return (
        <ShowMore onClick={() => setIsDimensions(false)}>&#9650;</ShowMore>
      )
    }
    return (
      <ShowMore onClick={() => setIsDimensions(!isDimensions)}>&#9660;</ShowMore>
    )
  }

  const btnHeandler = (product, quantity) => {
    dispatch(addProductToCart(product, quantity))
  }

  const inFavorite = productInFavorite.map(item => item.route).some(item => item === match.params.route);

  const addToFav = (product) => {
    dispatch(addProductToFav(product))
  }

  const removeFromFav = (product) => {
    dispatch(removeProductFromFav(product))
  }

  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContainer>
        {
          product && (
            <>
              <Title text={product.name} />
              <ContainerDetails>
                <ProductSlider id={product._id} />
                <ContainerProduct>
                  {product.isSale &&
                    <PriceContainer>
                      <CurrentPrice>{product.currentPrice.toLocaleString()}</CurrentPrice>
                      <PreviousPrice>{product.previousPrice.toLocaleString()}</PreviousPrice>
                    </PriceContainer>}
                  {!product.isSale &&
                    <PriceContainer>
                      <Price>{product.currentPrice.toLocaleString()}</Price>
                    </PriceContainer>}
                  {!inFavorite && <RegularIconFavorite onClick={() => addToFav(product)} />}
                  {inFavorite && <SolidIconFavorite onClick={() => removeFromFav(product._id)} />}
                  <Subtitle>Бренд: {product.brand}</Subtitle>
                  <AvailabilityArticleWrap>
                    {product.quantity === 0 ? <Availability>&#10006; нет в наличии</Availability> : <Availability>&#10004; в наличии</Availability>}
                    <Article>Артикул: {product.itemNo}</Article>
                  </AvailabilityArticleWrap>
                  <SubtitleBox>
                    <Subtitle>Описание товара</Subtitle>
                    {product.isSale && <IconSale />}
                    {product.isNewProduct && <IconNew />}
                    {product.isTopRated && <IconTopRated />}
                  </SubtitleBox>
                  <Description>{product.description}</Description>
                  {screenWidth >= 768
                    ? <>
                      <Subtitle>Габариты</Subtitle>
                      <Description>Высота - {product.sizes.height} cм, </Description>
                      <Description>Ширина - {product.sizes.width} cм, </Description>
                      <Description>Глубина - {product.sizes.length} cм </Description>
                    </> : <>
                      <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
                      {isDimensions && <DimensionsContainer>
                        <Description>Высота - {product.sizes.height} cм, </Description>
                        <Description>Ширина - {product.sizes.width} cм, </Description>
                        <Description>Глубина - {product.sizes.length} cм </Description>
                      </DimensionsContainer>}
                    </>}
                  <ActionsContainer>
                    <Actions>
                      <ProductCounter value={value} setValue={setValue} quantity={product.quantity} />
                    </Actions>
                    <Actions>
                      {btnInCart ? <Button disabled width={'13rem'} text={'В корзине'} /> : <Button width={'13rem'} color={'#7191A6'} text={'Купить'} onClick={() => btnHeandler(product, value)} />}
                    </Actions>
                  </ActionsContainer>
                </ContainerProduct>
                {screenWidth >= 768
                  ? <Subtitle>Характеристики
                    <SpecificationContainer>
                      <DescriptionKey>Покрытие</DescriptionKey>
                      <Description>{product.specifications.covering}</Description>
                      <DescriptionKey>Обивка</DescriptionKey>
                      <Description>{product.specifications.casing}</Description>
                    </SpecificationContainer>
                  </Subtitle> : <Subtitle>Характеристики
                    {toggleSpecificationBtn()}
                    {isSpecification && <SpecificationContainer>
                      <DescriptionKey>Покрытие</DescriptionKey>
                      <Description>{product.specifications.covering}</Description>
                      <DescriptionKey>Обивка</DescriptionKey>
                      <Description>{product.specifications.casing}</Description>
                    </SpecificationContainer>}
                  </Subtitle>}
              </ContainerDetails>
            </>
          )
        }
        <NewProductsList />
      </ContentContainer>
      <Footer />
    </>
  )
};