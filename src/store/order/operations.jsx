import React from 'react';
import axios from 'axios';

import { server } from '../../API';
import { setOrder } from './actions';
import { openModal } from '../modal/actions';
import { ModalOrderActions, ModalOrder } from '../../components/Modal/ModalOrder';

export const createOrder = (order) => (_, getState) => {
  const state = getState()
  const newOrder = {
    deliveryAddress: {
      country: 'Ukraine',
      city: order.city || 'none',
      address: `${order.street} ${order.house}, кв.${order.flat}` || 'none',
    },
    shipping: order.delivery,
    payMethod: order.payMethod,
    status: order.status || 'not shiped',
    email: order.email,
    mobile: `${order.prefix}${order.phone}`,
    letterSubject: 'Спасибо за ваш заказ!',
    letterHtml: `<h1>Your order №XXXXXXXX is placed. </h1>
        <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
        <p>Sincerely, your WMF team.</p>`,
  };

  if (state.customer.customer._id) {
    return {
      ...newOrder,
      customerId: `${state.customer.customer._id}`,
    };
  }

  return {
    ...newOrder,
    products: state.cart.cart,
  };
};

const createLetter = (data, order) => {
  const CreateProductList = () => {
    let productList = '';
    for (let i = 0; i < data.products.length; i++) {
      console.log(data.products[i].product.name);
      productList +=
      '\n' + data.products[i].product.name +
      ' (color: ' + data.products[i].product.color +
      ', itemNo: ' + data.products[i].product.itemNo +
      ', Quantity: ' + data.products[i].cartQuantity + '); '
    }
    return (productList)
  }

  const CreateFullAddress = () => {
    let FullAddress = '';
    if (data.shipping !== 'Pick up from store') {
      FullAddress =
      'Country: ' + data.deliveryAddress.country +
      ', City: ' + data.deliveryAddress.city +
      ', Address: ' + data.deliveryAddress.address
    } else FullAddress = '-'
    return FullAddress
  }

  const letter = {
    FullName: order.name + ' ' + order.surname,
    ProductList: CreateProductList(),
    FullAddress: CreateFullAddress(),
    Shipping: data.shipping,
    PayMethod: data.payMethod,
    Email: data.email,
    Mobile: data.mobile,
    OrderNo: data.orderNo,
    Date: data.date,
    TotalSum: data.totalSum,
    Status: data.status
  }
  return letter;
};

const sendLetter = (letter) => {
  axios.post('https://formcarry.com/s/KcRNyuejRK', letter, {headers: {Accept: 'application/json'}})
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

export const confirmOrder = (order) => async (dispatch) => {
  const newOrder = dispatch(createOrder(order))
  console.log(newOrder)
  try {
    const { status, data } = await server.post('/orders', newOrder);

    if (status === 200 && !data.message) {
      dispatch(setOrder(data.order))
      sendLetter(createLetter(data.order, order))
      dispatch(openModal({ content: <ModalOrder data={data} />, actions: <ModalOrderActions data={data}/> }))
    }
  } catch (error) {
    console.log(error)
  }
};