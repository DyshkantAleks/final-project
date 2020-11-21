import { server } from '../../API';
import { CreateNewOrder } from './CreateNewOrder';

export const handleSubmit = (values) => {
  
  const sendNewOrder = (newOrder) => async (dispatch) => {
    try {
      const { status } = await server.post(
        '/orders',
        JSON.stringify(newOrder)
      );
      if (status === 200) {
        
      }
    } catch (error) {}
  };
  sendNewOrder(CreateNewOrder(values))();
  
};
