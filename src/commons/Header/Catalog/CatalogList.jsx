import React from 'react';

import {CatalogItem} from './CatalogComponents/CatalogItem';
import {Container, List} from './StyledCatalog';

export const CatalogList = () => {
  return (
    <Container>
      <List>
        <CatalogItem/>
      </List>
    </Container>

  )
};