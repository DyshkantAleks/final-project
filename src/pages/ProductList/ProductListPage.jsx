import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from '../../commons/Header/Header';
import { getProductsByCategory, getProductsBySubCategory } from '../../store/products_draft/middlware';
import { selectProducts, selectProductsForFilter } from '../../store/products_draft/selectors';
import { selectCategoryFromRoute } from '../../store/categories/selectors';
import { ProductItem } from '../../components/ProductItem'
import { ContentContairer } from '../../components/Content/Content';
import { ProductItemList } from '../Product/StyledProductPage';

import { selectCart } from '../../store/cart/selectors';
import { addToCart } from '../../store/cart/actions-creators'; // myronets

export const ProductListPage = ({ match }) => {
  const { params: { route } } = match;
  const currentItemByRoute = useSelector(selectCategoryFromRoute(route));
  const productsByCategory = useSelector(selectProductsForFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!!currentItemByRoute) {
      if (currentItemByRoute.parentId === 'null') {

        dispatch(getProductsByCategory(currentItemByRoute.category));
      } else {
        dispatch(getProductsBySubCategory(currentItemByRoute.category));
      }
    }
  }, [currentItemByRoute]);

  const productInCart = useSelector(selectCart);
  const cartItems = productInCart.map(item => item.product);
  console.log(cartItems);

  const products = useSelector(selectProducts)
  const productItem = products.map(item => item)
  console.log(productItem)

  const itemInCart = cartItems.filter(function (elementOfCartArr) {
    return productItem.some(function (elementOfProductArr) {
      return elementOfCartArr._id === elementOfProductArr._id
    });
  });

  console.log(itemInCart);

  if (itemInCart.length <= 0) {
    itemInCart.push(productItem)
  }
  console.log(itemInCart);

  // myronets
  const btnHeandler = (item, quantity) => {
    dispatch(addToCart({product: item, cartQuantity: quantity}))
  }
  return (
    <>
      <Header />
      <ContentContairer>
        <h1>Title of page</h1>
        <ProductItemList>
          {productsByCategory.products.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              price={item.currentPrice}
              image={item.imageUrl[0]}
              route={item.route}
              id={item._id}
              isNewProduct={item.isNewProduct}
              isTopRated={item.isTopRated}
              isSale={item.isSale}
              previousPrice={item.previousPrice}
              itemInCart={itemInCart}
              onClick={() => btnHeandler(item, 1)} // myronets
            />
          ))}
        </ProductItemList>
      </ContentContairer>
    </>
  )
}