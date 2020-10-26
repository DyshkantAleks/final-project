import React from "react";
import {List, StyledLink} from './StyledPromotions';
import {PromoItem} from './PromotionsComponents/PromoPageItem';
import {ContentContairer} from '../Content/Content';
import {useSelector} from 'react-redux';
import {selectPromotions} from '../../store/promotions/selectors';




export const PromoList = () => {
  const promotions = useSelector(selectPromotions);

  return (
    <ContentContairer>
      <List>
        {promotions && promotions.map((e) => (
          <StyledLink
            to={`/promo/${e.route}`}>
            <PromoItem image={e.sliderImageUrl} title={e.title}
                       subtitle={e.subtitle} route={e.route} text={e.fullDescription}/>
          </StyledLink>
        ))}
      </List>
    </ContentContairer>
  )
};

