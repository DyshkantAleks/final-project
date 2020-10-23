import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { Title } from '../Title/Title';
import { ProductCarousel } from '../ProductCarousel';
import { Button } from '../Button';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../../utils/useToggle';
import {
  ContainerDetails,
  ContainerProduct,
  Price,
  StyledFontAwesomeIcon,
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
import useWindowDimensions from '../../utils/useWindowDimensions';
import { ProductCounter } from '../Counter/ProductCounter';
import { getProductList } from '../../store/products_draft/actions';
import { selectProducts, selectProductItem } from '../../store/products_draft/selectors';

const specifications = {
  covering: 'Основание изготовлено из прочной стали, покрытой слоем белого лака. В наличии представлена модель, выполненная из лакированной стали цвета глубокий черный.',
  casing: 'Обивка монолитного сидения может быть разной: эко-кожа, дизайнерская ткань, водонепроницаемый нубук, натуральная шерсть, бархат, кожа премиум-класса.',
};

const ProductItemDetails = (props) => {
  const { match } = props;
  const { params: { route } } = match;
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductList());
  }, [dispatch]);

  const productItem = useSelector(selectProductItem);

  const getProductItemList = (productObj) => {
    const objCopy = JSON.parse(JSON.stringify(productObj));
    let productArray = [];
    for (const key in objCopy) {
      productArray = [...productArray, ...objCopy[key]]
    }
    return productArray
  }

  const productList = getProductItemList(products, productItem);

  const product = productList.find(item => item.route === route);

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
          <Title text={product.name} />
          <ContainerDetails>
            <ProductCarousel />
            <ContainerProduct>
              <Price>{product.price.toLocaleString()}</Price>
              {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />}
              {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />}
              <Subtitle>Бренд: {product.brand}</Subtitle>
              <AvailabilityArticleWrap>
                <Availability>&#10004; в наличии</Availability>
                {/* <Availability>&#10006; нет в наличии</Availability> */}
                <Article>Артикул: {product.code}</Article>
              </AvailabilityArticleWrap>
              <Subtitle>Описание товара</Subtitle>
              <Description>{product.description}</Description>
              {screenWidth >= 768
                ? <>
                  <Subtitle>Габариты</Subtitle>
                  <Description>Высота - {product.height} cм, </Description>
                  <Description>Ширина - {product.width} cм, </Description>
                  <Description>Глубина - {product.length} cм </Description>
                </>
                : <>
                  <Subtitle>Габариты{toggleDimensionsBtn()}</Subtitle>
                  {isDimensions && <DimensionsContainer>
                    <Description>Высота - {product.height} cм, </Description>
                    <Description>Ширина - {product.width} cм, </Description>
                    <Description>Глубина - {product.length} cм </Description>
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


