import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
import { useToggle } from '../../utils/useToggle';
import { Button } from '../Button';
import { ROUTES } from '../../pages/navigation/routes';
import { ProductActivity } from '../../commons/Header/Catalog/CatalogIcons'
import {
  ConteinerItem,
  PhotoBox,
  Photo,
  TitleBox,
  NameContainer,
  Name,
  Price,
  StyledFontAwesomeIcon,
  StyledLink,
  ProductActivityContainer,
  IconContainer,
  SaleIcon,
  NewIcon,
  TopRatedIcon
} from './StyledProductItem';
import { getProductList } from '../../store/products_draft/actions';
import { selectProducts, selectProductItem } from '../../store/products_draft/selectors';
import { getProducts } from '../../store/products_draft/middlware';
const ProductItem = (props) => {

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  console.log(products)
  // const productItem = useSelector(selectProductItem);

  // const getProductItemList = (productObj) => {
  //   const objCopy = JSON.parse(JSON.stringify(productObj));
  //   let productArray = [];
  //   for (const key in objCopy) {
  //     productArray = [...productArray, ...objCopy[key]]
  //   }
  //   return productArray
  // }

  // const productList = getProductItemList(products, productItem);

  const [inFavorite, toggleInFavorite] = useToggle();
  return (
    <>
      {
        products.map((item, index) =>
          <ConteinerItem key={index}>
            <PhotoBox>
              <Photo alt={item.name} src={item.image} />
            </PhotoBox>
            <TitleBox>
              {/* <StyledLink to={`product/${item.route}`}> */}
              <NameContainer>
                {/* <Name onClick={() => props.history.push('/products/' + item.route)}>{item.name}</Name> */}
                <Name>{item.name}</Name>
              </NameContainer>
              {/* </StyledLink> */}
              {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />}
              {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />}
              <Price>{item.currentPrice.toLocaleString()}</Price>
              {/* <Button text={'Купить'} /> */}
            </TitleBox>
          </ConteinerItem>
        )
      }
    </>
  )
  // return (
  //   <>
  //     {
  //       productList.map((item, index) =>
  //         <ConteinerItem key={index}>
  //           <PhotoBox>
  //             {/* <StyledLink to={`product/${item.route}`}> */}
  //             <Photo alt='our product' src={item.image[0]} onClick={() => props.history.push('/products/' + item.route)} />
  //             {/* {isDiscount &&
  //               <ProductActivityContainer>
  //                 <IconContainer>
  //                   <SaleIcon>
  //                     {ProductActivity.sale}
  //                   </SaleIcon>
  //                </IconContainer>
  //               </ProductActivityContainer>}
  //             {isNew && <ProductActivityContainer>
  //               <IconContainer>
  //                <NewIcon>
  //                  {ProductActivity.new}
  //                </NewIcon>
  //              </IconContainer>
  //            </ProductActivityContainer>}
  //            {isTopRated && <ProductActivityContainer>
  //               <IconContainer>
  //                <TopRatedIcon>
  //                  {ProductActivity.topMain}
  //                </TopRatedIcon>
  //              </IconContainer>
  //            </ProductActivityContainer>} */}
  //             {/* </StyledLink> */}
  //           </PhotoBox>
  //           <TitleBox>
  //             {/* <StyledLink to={`product/${item.route}`}> */}
  //             <NameContainer>
  //               <Name onClick={() => props.history.push('/products/' + item.route)}>{item.name}</Name>
  //             </NameContainer>
  //             {/* </StyledLink> */}
  //             {!inFavorite && <StyledFontAwesomeIcon icon={farFaHeart} onClick={toggleInFavorite} />}
  //             {inFavorite && <StyledFontAwesomeIcon icon={fasFaHeart} onClick={toggleInFavorite} />}
  //             <Price>{item.price.toLocaleString()}</Price>
  //             {/* <Button text={'Купить'} /> */}
  //           </TitleBox>
  //         </ConteinerItem>
  //       )
  //     }
  //   </>
  // )
}

// export default withRouter(ProductItem);
export default ProductItem;