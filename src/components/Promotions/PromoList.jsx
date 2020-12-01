import React from 'react';
import { useSelector } from 'react-redux';

import { List, StyledLink } from './StyledPromotions';
import { PromoItem } from './PromotionsComponents/PromoPageItem';
import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { selectPromotions } from '../../store/promotions/selectors';

export const PromoList = () => {
  const promotions = useSelector(selectPromotions)
  const promotionsForRender = promotions && promotions.map((e) => (
    <StyledLink to={`/promo/${e.route}`}>
      <PromoItem
        image={e.sliderImageUrl}
        title={e.title}
        subtitle={e.subtitle}
        route={e.route}
        text={e.fullDescription}
      />
    </StyledLink>
  ))

  return (
    <ContentContainer>
      <List>
        {promotionsForRender}
      </List>
    </ContentContainer>
  )
};