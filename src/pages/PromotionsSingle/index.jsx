import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { ContentContainer } from '../../styles/GeneralStyledComponents';
import { selectById } from '../../store/promotions/selectors';
import { getPromotions } from '../../store/promotions/operations';
import {Container, ImageContainer, Image, Title, ContentContainerPromo, Description} from './StyledPromotionsSingle';

export const PromotionsSinglePage = ({ match }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromotions())
  }, [dispatch])

  const single = useSelector(selectById(match.params.route))

  return (
    <>
      {single && (
        <>
          <Container>
            <ImageContainer>
              <Image src={single.desctopSliderImageUrl} />
            </ImageContainer>
          </Container>
          <ContentContainer>
            <ContentContainerPromo>
              <Title>{single.title}</Title>
              <Description>{single.fullDescription}</Description>
            </ContentContainerPromo>
          </ContentContainer>
        </>
      )}
    </>
  )
};
