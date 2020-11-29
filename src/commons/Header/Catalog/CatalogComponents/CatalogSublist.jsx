import React from 'react'

import { CatalogSubitem } from './CatalogSubitem'
import { SubItem, SubList } from '../StyledCatalog'
import { useSelector } from 'react-redux'
import { selectByParentCategory } from '../../../../store/categories/selectors'

export const CatalogSublist = ({ props }) => {
  return (

    <SubList>
      {/* <CatalogSubitem/> */}
      <SubItem />
    </SubList>

  )
}
