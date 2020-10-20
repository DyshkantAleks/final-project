import React from "react";
import {List} from "./StyledPromotions";
import {PromoItem} from "./PromotionsComponents/PromoPageItem";
import {ContentContairer} from "../Content/Content";
import {useSelector} from "react-redux";
import {selectPromotions} from "../../store/promotions/selectors";


export const PromoList = () => {
  const promotions = useSelector(selectPromotions);

  console.log(promotions);

  return (
    <ContentContairer>
      <List>
        {promotions && promotions.map((e) => (
          <PromoItem image={e["slider-image"]} title={e.title}
                     subtitle={e.subtitle}/>
        ))}
      </List>
    </ContentContairer>
  )
};