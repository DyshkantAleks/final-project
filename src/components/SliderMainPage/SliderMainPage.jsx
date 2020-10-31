import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import { getPromotions } from '../../store/promotions/middlware';
import { selectPromotions } from '../../store/promotions/selectors';
import { Container, SlideContainer, Image } from './StyledSliderMainPage';
import './style.scss';

export const SliderMainPage = () => {

  const promotions = useSelector(selectPromotions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromotions());
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "main-slider"
  };

  return (
    <Container id={'main-slider-container'}>
      <Slider {...settings}>
        {promotions.map((e, index) => (
          <SlideContainer key={index}>
            <Link
              to={`/promo/${e.route}`}>
              <Image src={e['sliderImageUrl']} />
            </Link>
          </SlideContainer>
        ))}
      </Slider>
    </Container>
  );
}

