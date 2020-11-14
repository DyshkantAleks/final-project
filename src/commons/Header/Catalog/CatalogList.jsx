import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CatalogItem } from './CatalogComponents/CatalogItem';
import { Container, StyledLink, List } from './StyledCatalog';
import { selectMainCategory } from '../../../store/AppData/categories/selectors';
import { getCategories } from '../../../store/AppData/categories/middlware';

export const CatalogList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectMainCategory);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch]);

  return (
    <Container>
      <List>
        {categories.map((e) => (
          <StyledLink to={`/catalog/${e.route}`} key={e.id}>
            <CatalogItem category={e.category} icon={e.icon} key={e.id} id={e.id} />
          </StyledLink>
        ))}
      </List>
    </Container>
  )
};