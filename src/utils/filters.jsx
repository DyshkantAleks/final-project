export const getCartList = (productObj, cartArray, cartId) => {
  const objCopy = JSON.parse(JSON.stringify(productObj))
  let productArray = []
  for (const key in objCopy) {
    productArray = [...productArray, ...objCopy[key]]
  }

  const result = productArray.filter(productItem => cartArray.some(cartItem => cartItem[cartId] === productItem[cartId]))
  result.forEach(item => {
    cartArray.forEach(cartItem => {
      if (cartItem.code === item.code) {
        item.quantity = cartItem.quantity
      }
    })
  })

  return result
}

// export const FilteredArray = (currentItemByRoute) {
// let array = [];
// if (currentItemByRoute) {
//   const isRootCategory = currentItemByRoute.parentId === 'null'
//   array = allProducts.filter(e => isRootCategory
//     ? e.category === currentItemByRoute.category
//     : e.subCategory === currentItemByRoute.category
//   );
// }
// }