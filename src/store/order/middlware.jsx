import { server } from '../../API';
import { setOrder } from './actions-creators';

export const createOrder = () => async (dispatch, getState) => {
  const state = getState()
  console.log(state.cart.cart)
  const newOrder = {
    customerId: state.customer.customer._id || '',
    deliveryAddress: {
      country: 'Ukraine',
      city: 'Kiev',
      address: 'Kreshchatic Street 56//A',
      postal: '01044'
    },
    products: state.cart.cart
    
  }
  console.log(JSON.stringify(newOrder))
  try {
    const { status, data } = server.post('/orders', JSON.stringify(newOrder));
    if (status === 200 ) {
      console.log(data)
    }
  } catch (error) {}
};
