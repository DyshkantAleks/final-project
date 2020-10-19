export const getQuantity = (productObj, id) => {
  let productArray = [];
  for (const key in productObj) {
    productArray = [...productArray, ...productObj[key]]
  }
  const currentProduct = productArray.find(item => item.code === id)

  return currentProduct.quantity
}