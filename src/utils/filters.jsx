export const categoriesFilter = (products, categorie) => {
  let array = [];
  if (categorie) {
    if (categorie.parentId === 'null') {
      array = products.filter(e => e.category === categorie.category)
    } else if (categorie.parentId === 'all') {
      array = products
    } else {
      array = products.filter(e => e.subCategory === categorie.category)
    }
  }
  return array
};

export const sortingProducts = (products, sortValue) => {
  if (sortValue === 'priceAscending') {
    products.sort((a, b) => a.currentPrice > b.currentPrice ? 1 : -1)
  }
  if (sortValue === 'priceDescending') {
    products.sort((a, b) => a.currentPrice < b.currentPrice ? 1 : -1)
  }
  if (sortValue === 'isTopRated') {
    products.sort((a, b) => a.isTopRated < b.isTopRated ? 1 : -1)
  }
  if (sortValue === 'isNewProduct') {
    products.sort((a, b) => a.isNewProduct < b.isNewProduct ? 1 : -1)
  }
  if (sortValue === 'isSale') {
    products.sort((a, b) => a.isSale < b.isSale ? 1 : -1)
  }
  return products
};

export const filterByCheckboxes = (products, checkedColors, checkedBrands, priceValues) => {
  return products
    .filter(productItem => (checkedColors.length === 0) ? productItem : checkedColors.some(chackedItem => chackedItem === productItem.color))
    .filter(productItem => (checkedBrands.length === 0) ? productItem : checkedBrands.some(chackedItem => chackedItem === productItem.brand))
    .filter(productItem => (priceValues.length === 0) ? productItem : (priceValues[0] < productItem.currentPrice && productItem.currentPrice < priceValues[1]))
}