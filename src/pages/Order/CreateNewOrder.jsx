export const CreateNewOrder = (props) => {
  const newOrder = {
    deliveryAddress: {
      city: props.city,
      address: props.street + ' ' + props.house,
    },
    email: props.email,
    mobile: props.phone,
    letterSubject: 'Thank you for order! You are welcome!',
    letterHtml:
          '<h1>Your order is placed. OrderNo is ...</h1><p>{Other details about order in your HTML}</p>'
  };
  return newOrder;
}