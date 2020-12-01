import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { selectById } from '../../store/products/selectors';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { ContainerHorizontal, ContainerVertical, SliderGalleryHorizontal, SliderGalleryVertical, SliderThumbsHorizontal, SliderThumbsVertical, ImageMainContainer, ImageMain, ImageThumbsContainer, ImageThumbs } from './StyledProductSlider';
import './style.scss';

export const ProductSlider = (props) => {
  const { id } = props;
  const { screenWidth } = useWindowDimensions();

  const productById = useSelector(selectById(id));
  const imagesArr = productById.imageUrl;

  const [controll, setControll] = useState({ nav1: null, nav2: null });
  useEffect(() => {
    setControll({
      nav1: controll.slider1,
      nav2: controll.slider2
    })
  }, [screenWidth, controll.slider1, controll.slider2]);

  const slides = [];
  for (let i = 0; i < imagesArr.length; i++) {
    slides.push(
      <ImageMainContainer key={`slide-${i}`}>
        <ImageMain src={imagesArr[i]} alt={`${productById.name}-${i}`} />
      </ImageMainContainer>
    )
  };

  const thumbs = [];
  for (let i = 0; i < imagesArr.length; i++) {
    thumbs.push(
      <ImageThumbsContainer key={`thumb-${i}`}>
        <ImageThumbs src={imagesArr[i]} alt={`${productById.name}-${i}`} />
      </ImageThumbsContainer>
    )
  };

  const gallerySlyderParams = {
    adaptive: true,
    dots: true,
    fade: true,
    swipe: true,
    touchMove: true,
    className: 'product-slider'

  };

  const thumbsHorizontalParams = {
    slidesToShow: 5,
    swipeToSlaide: true,
    focusOnSelect: true,
    arrows: false,
    infinite: false,
  };

  const thumbsVerticalParams = {
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: false,
    className: 'vertical-thumbs'
  };

  return (
    <>
      {screenWidth <= 768 ? <>
        {productById && (
          <ContainerHorizontal>
            <SliderGalleryHorizontal>
              <Slider
                asNavFor={controll.nav2}
                ref={(slider => controll.slider1 = slider)}
                {...gallerySlyderParams}
              >
                {slides}
              </Slider>
            </SliderGalleryHorizontal>
            <SliderThumbsHorizontal>
              <Slider
                asNavFor={controll.nav1}
                ref={slider => (controll.slider2 = slider)}
                {...thumbsHorizontalParams}
              >
                {thumbs}
              </Slider>
            </SliderThumbsHorizontal>
          </ContainerHorizontal>)}
      </> : <>
        {productById &&
            (
              <ContainerVertical>
                <SliderThumbsVertical>
                  <Slider
                    asNavFor={controll.nav1}
                    ref={slider => (controll.slider2 = slider)}
                    {...thumbsVerticalParams}
                  >
                    {thumbs}
                  </Slider>
                </SliderThumbsVertical>
                <SliderGalleryVertical>
                  <Slider
                    asNavFor={controll.nav2}
                    ref={(slider => controll.slider1 = slider)}
                    {...gallerySlyderParams}
                  >
                    {slides}
                  </Slider>
                </SliderGalleryVertical>
              </ContainerVertical>)}
      </>
      }
    </>
  )
};