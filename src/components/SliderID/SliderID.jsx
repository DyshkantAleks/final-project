import React, {useEffect} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import './style.scss'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux";
import {getPromotionsList} from "../../store/categories/actions";
import {selectPromotions} from "../../store/categories/selectors";

import {Link} from "react-router-dom";





export const SimpleSlider = () => {

  const promotions = useSelector(selectPromotions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromotionsList());

  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container id={'main-slider-container'}>
      <Slider {...settings}>
        {promotions.map((e) => (
          <Div>
            <Link
              to={`/promo/${e.route}`}>
                <Image src={e['slider-image']}/>
            </Link>
          </Div>
        ))}
      </Slider>
    </Container>
  );
}

export const Container = styled.div`
width: 100%;
`

export const Div = styled.div`
display: flex;
align-items: center;
justify-content: center;
overflow: hidden;
`

export const Image = styled.img`
width: 100%;
height: auto;
`