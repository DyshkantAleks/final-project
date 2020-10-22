import React, {useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux";
import {getPromotionsList} from "../../store/categories/actions";
import {selectPromotions} from "../../store/categories/selectors";
import {Link} from "react-router-dom";
import {Container, SlideContainer, Image} from "./StyledSliderMainPage";

export const SliderMainPage = () => {

  const promotions = useSelector(selectPromotions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromotionsList());

  }, []);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container id={'main-slider-container'}>
      <Slider {...settings}>
        {promotions.map((e) => (
          <SlideContainer>
            <Link
              to={`/promo/${e.route}`}>
                <Image src={e['slider-image']}/>
            </Link>
          </SlideContainer>
        ))}
      </Slider>
    </Container>
  );
}

