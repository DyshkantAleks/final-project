import React, {useEffect} from "react";
import Slider from "react-slick";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from "react-redux";
import {getPromotions} from "../../store/promotions/middlware";
import {selectPromotions} from "../../store/promotions/selectors";
import {Link} from "react-router-dom";
import {Container, SlideContainer, Image} from "./StyledSliderMainPage";

export const SliderMainPage = () => {

  const promotions = useSelector(selectPromotions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromotions());

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
          <SlideContainer key={e.id}>
            <Link
              to={`/promo/${e.route}`}>
                <Image src={e['sliderImageUrl']}/>
            </Link>
          </SlideContainer>
        ))}
      </Slider>
    </Container>
  );
}

