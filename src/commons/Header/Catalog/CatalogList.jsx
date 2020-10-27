import React, {useEffect} from 'react';

import {CatalogItem} from './CatalogComponents/CatalogItem';
import {Container, StyledLink, List} from './StyledCatalog';
import {useDispatch, useSelector} from "react-redux";
import {selectMainCategory} from "../../../store/categories/selectors";
import {getCategories} from "../../../store/categories/middlware";



export const CatalogList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectMainCategory);

  useEffect(() => {
    dispatch(getCategories());
  }, []);


  // categories.map((e) => {
  //   console.log(e.category)
  // });

  return (
    <Container>
      <List>
        {categories.map((e) => (
          <StyledLink to={`/catalog/${e.route}`} key={e.id}>

            <CatalogItem category={e.category}  icon={e.icon}/>
          </StyledLink>
        ))
        }
      </List>
    </Container>

  )
};