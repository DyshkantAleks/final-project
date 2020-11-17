import { server } from '../../API';
import { setOrder } from './actions-creators';

export const createOrder = (order) => (_, getState) => {
  const state = getState()
  const newOrder = {
    deliveryAddress: {
      country: 'Ukraine',
      city: order.city,
      address: `${order.street} ${order.house}, f.${order.flat}`,
    },
    shipping: order.delivery,
    payMethod: order.payMethod,
    status: order.status,
    email: order.email,
    mobile: `${order.prefix}${order.phone}`,
    letterSubject: 'Спасибо за ваш заказ!',
    letterHtml: `<h1>Your order №XXXXXXXX is placed. </h1>
        <p>Looking forward to see you again soon. In case of any questions - we are happy to help!</p>
        <p>Sincerely, your WMF team.</p>`,
  };

  if (state.customer.customer._id) {
    console.log(state.customer.customer._id)
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

export const confirmOrder = (order) => async (dispatch) => {
  const newOrder = dispatch(createOrder(order))
  console.log(newOrder)
  try {
    const { status, data } = await server.post('/orders', newOrder);
    
    if (status === 200) {
      
      dispatch(setOrder(data.order))
    }
  } catch (error) {}
};
