import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components'

import { getProductList } from '../../store/products_draft/actions';
import { selectProducts, selectProductItem } from '../../store/products_draft/selectors';
import { ProductItem } from '../../components/ProductItem';
import { ProductItemList } from '../../components/ProductItemDetails/StyledProductItemDetails';



export const ProductList = (props) => {
    const products = useSelector(selectProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductList());
    }, [dispatch]);

    const productItem = useSelector(selectProductItem);

    const getProductItemList = (productObj, productItemArray, productItemId) => {
        const objCopy = JSON.parse(JSON.stringify(productObj));
        let productArray = [];
        for (const key in objCopy) {
            productArray = [...productArray, ...objCopy[key]]
        }
        return productArray
    }

    const productList = getProductItemList(products, productItem);
    return (
        <>
            <ProductItemList>
                {productList.map((item, index) =>
                    // <StyledLink to={`product/${item.route}`}>
                    <ProductItem key={index}
                        code={item.code}
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        route={item.route} />
                    // </StyledLink>
                )}
            </ProductItemList>
        </>
    )
}

// const StyledLink = styled(Link)`
// display: block;
// text-decoration: none;
// color: #333333;
// `;