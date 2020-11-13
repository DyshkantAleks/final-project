import { array } from 'yup';

export const categoriesFilter = (products, categorie) => {
  let array = [];
  if (categorie) {
    const isRootCategory = categorie.parentId === 'null'
    array = products.filter(e => isRootCategory
      ? e.category === categorie.category
      : e.subCategory === categorie.category
    );
  }
  return array
};
