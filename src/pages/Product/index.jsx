import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { selectByRoute } from '../../store/products/selectors';
import { Footer } from '../../commons/Footer';
import { NewProductsList } from '../../components/NewProducts/NewProductsList';
import { selectCart } from '../../store/cart/selectors';
import { addProductToCart } from '../../store/cart/middlware';
import { addProductToFav, removeProductFromFav } from '../../store/favorites/middlware';
import { selectFavorites } from '../../store/favorites/selectors';
import { ScrollToTop } from '../../commons/ScrollToTop';
import { ProductItemDetails } from '../../components/ProductItemDetails';

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
      name={product.name}
      _id={product.i_id}
      isSale={product.isSale}
      currentPrice={product.currentPrice}
      previousPrice={product.previousPrice}
      brand={product.brand}
      quantity={product.quantity} 
      itemNo={product.itemNo} 
      isNewProduct={product.isNewProduct}
      isTopRated={product.isTopRated}
      description={product.description} 
      sizes={product.sizes}
      specifications={product.specifications} 
      match={product.match}
      product={product}
      btnInCart={btnInCart}
      btnHeandler={btnHeandler}
      inFavorite={inFavorite}
      addToFav={addToFav}
      removeFromFav={removeFromFav}
      />
  )
  return (
    <>
      <Header />
      <ScrollToTop />
      <ContentContainer>
        {product && productDetails}
        <NewProductsList />
      </ContentContainer>
      <Footer />
    </>
  )
};