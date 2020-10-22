import React, { useEffect } from 'react';
import { selectProducts, selectLoader, getProductList } from '../../store/products_draft/actions';
import { addToCart } from '../../store/cart/selectors'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

// !!! DRAFT PRODUCTS PAGE

const Products = () => {
  const products = useSelector(selectProducts);
  const isReady = useSelector(selectLoader);

  const dispatch = useDispatch();

  useEffect(() => {
    getProductList()(dispatch)
  }, [dispatch])

  const addToCartHandler = (id) => {
    dispatch(addToCart(id));
  }

  return (
    <>
      {
        isReady ? <Preloader/>
          : <Container>
            {products.map(({ code, image, name }) =>
              <Item key={code}>
                <Image src={image} />
                <Title>{name}</Title>
                <CardBtn onClick={() => addToCartHandler(code)}>У кошик</CardBtn>
              </Item>

            )}
          </Container>
      }
    </>
  )
}

export default Products;

const Container = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
margin: 0;
padding: 0;
`

const Item = styled.li`
text-decoration: none;
position: relative;
width: calc(25% - 40px);
padding: 20px;
`

const Image = styled.img`
width: 100%;
max-width: 200px;
vertical-align: top;
object-fit: cover;
height: 200px;
`

const Title = styled.h3`
text-align: center;
text-transform: uppercase;
`

const CardBtn = styled.button`
    background: #007042;
    border: none;
    color: #FFF;
    padding: 10px;
`

const Preloader = styled.div`
    margin: 100px auto 0;
    width: 30px;
    height: 30px;
    border: 7px solid #000;
    border-left-color: #333;
    border-right-color: transparent;
    border-bottom-color: #555;
    border-radius: 100%;
    animation: spin 600ms infinite linear;
`