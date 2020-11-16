import { server } from '../../API'
import { CreateNewOrder } from './CreateNewOrder';


export const handleSubmit = (values) => {
  console.log(values)
  const sendNewOrder = (newOrder) => async (dispatch) => {
    try {
      const {status, data} = await server.post('/orders', JSON.stringify(newOrder))
      if (status === 200) {
      console.log("status === 200")
      console.log(status, data)
      }
        } 
    catch (error) {
      }
  }
  sendNewOrder(CreateNewOrder(values))();
  console.log(CreateNewOrder(values));
}

