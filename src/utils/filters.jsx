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
