import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getPromotions } from '../../store/promotions/operations';
import { selectPromotions } from '../../store/promotions/selectors';
import { Container, SlideContainer, Image } from './StyledSliderMainPage';

export const SliderMainPage = () => {
  const promotions = useSelector(selectPromotions)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPromotions())
  }, [dispatch])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'main-slider'
  }

  return (
    <Container id='main-slider-container'>
      <Slider {...settings}>
        {promotions.map((e, index) => (
          <SlideContainer key={index}>
            <Link
              to={`/promo/${e.route}`}
            >
              <Image src={e.sliderImageUrl} />
            </Link>
          </SlideContainer>
        ))}
      </Slider>
    </Container>
  )
}
