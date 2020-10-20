import React from "react";
import {List} from "./StyledPopularCategory";
import {PopularCategoryItem} from "./PopularCategoryComponents/PopularCategoryItem";
import {Title} from "../Title/Title";

export const PopularCategoryList = ({props}) => {
  return (
    <>
      <Title text={'Популярные категории'}/>
      <List>
        <PopularCategoryItem backGround={'./img/table.png'}
                             textForTitle={'Tables'}
                             textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
        <PopularCategoryItem textForTitle={'Tables'}
                             backGround={'./img/table.png'}
                             textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
        <PopularCategoryItem textForTitle={'Tables'}
                             backGround={'./img/table.png'}
                             textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
        <PopularCategoryItem textForTitle={'Tables'}
                             backGround={'./img/table.png'}
                             textForSubtitle={'Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle'}/>
      </List>
    </>

  )

}

