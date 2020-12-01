import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { selectByRoute } from '../../store/products/selectors';
import { NewProductsList } from '../../components/NewProducts/NewProductsList';
import { selectCart } from '../../store/cart/selectors';
import { addProductToCart } from '../../store/cart/operations';
import { addProductToFav, removeProductFromFav } from '../../store/favorites/operations';
import { selectFavorites } from '../../store/favorites/selectors';
import { ProductItemDetails } from '../../components/ProductItemDetails/index';
import { ScrollOnTop } from '../../components/ScrollOnTop';

export const ProductPage = (props) => {
  const { match } = props;
  const product = useSelector(selectByRoute(match.params.route));
  const productInCart = useSelector(selectCart);
  const productInFavorite = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const btnInCart = productInCart.map(itemCart => itemCart.product.route).some(item => item === match.params.route);
  const btnHeandler = (product, quantity) => {
    dispatch(addProductToCart(product, quantity))
  };
  const inFavorite = productInFavorite.map(item => item.route).some(item => item === match.params.route);
  const addToFav = (product) => {
    dispatch(addProductToFav(product))
  };
  const removeFromFav = (product) => {
    dispatch(removeProductFromFav(product))
  };
  const productDetails = (
    <ProductItemDetails
      {...product.product}
      product={product}
      btnInCart={btnInCart}
      btnHeandler={btnHeandler}
      inFavorite={inFavorite}
      addToFav={addToFav}
      removeFromFav={removeFromFav}
    />
  )

  return (
    <ContentContainer>
      <ScrollOnTop dependence={product} />
      {product && productDetails}
      <NewProductsList />
    </ContentContainer>
  )
};