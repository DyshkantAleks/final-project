import React from 'react'

import { List, StyledLink } from './StyledPopularCategory'

import { PopularCategoryItem } from './PopularCategoryComponents/PopularCategoryItem'

import { Title } from '../Title/Title'
import { useSelector } from 'react-redux'
import { selectPopularCategories } from '../../store/categories/selectors'

export const PopularCategoryList = () => {
  const popularCategories = useSelector(selectPopularCategories)
  // console.log(popularCategories)

  return (
    <>
      <Title text='Популярные категории' />
      <List>
        {
          popularCategories.map((e) => (
            <StyledLink to={`/catalog/${e.route}`} key={e.id}>

              <PopularCategoryItem
                backGround={e.image}
                textForTitle={e.category}
                textForSubtitle={e.description}
              />
            </StyledLink>
          ))
        }
      </List>
    </>

  )
}
