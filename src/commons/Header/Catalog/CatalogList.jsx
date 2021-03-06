import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CatalogItem } from './CatalogComponents/CatalogItem';
import { Container, List } from './StyledCatalog';
import { selectMainCategory } from '../../../store/categories/selectors';
import { getCategories } from '../../../store/categories/operations';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectMainCategory);
  const categoriesForRender = categories.map((e) => (
    <CatalogItem category={e.category} icon={e.icon} key={e.id} id={e.id} route={e.route} />
  ));

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <Container>
      <List>
        {categoriesForRender}
      </List>
    </Container>
  )
};