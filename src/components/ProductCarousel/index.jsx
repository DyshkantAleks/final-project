import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';

import './productCarousel.scss';
import {
  SwiperContainer,
  SwiperThumbs,
  SwiperGallery,
  ImageMainContainer,
  ImageMain,
  ImageThumbsContainer,
  ImageThumbs,
  SwiperContainerHorizontal,
  SwiperGalleryHorizontal,
  SwiperThumbsHorizontal
} from './StyledProductCarousel';
import useWindowDimensions from '../../utils/useWindowDimensions';

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

export const ProductCarousel = () => {
  const { screenWidth } = useWindowDimensions();

  const img = [
    './img/chairs/bar/chair_Bontempi/chair_Bontempi_main.png',
    './img/chairs/bar/chair_Bontempi/chair_Bontempi1.jpg',
    './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
    './img/chairs/bar/chair_Bontempi/chair_Bontempi3.jpg',
    './img/sofas/simple_sofa/sofa_Arketipo_Auto/sofa_Arketipo_Auto4.jpeg',
    './img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft1.jpg',
    './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo_main.jpg',
    './img/sofas/simple_sofa/sofa_Arketipo/sofa_Arketipo6.jpg',
  ];

  const slides = [];
  for (let i = 0; i < img.length; i++) {
    slides.push(
      <SwiperSlide id={'qwer123'} key={`slide-${i}`} tag="li">
        <ImageMainContainer>
          <ImageMain src={img[i]} alt={`Slide ${i}`} />
        </ImageMainContainer>
      </SwiperSlide>
    )
  };

  const thumbs = [];
  for (let i = 0; i < img.length; i++) {
    thumbs.push(
      <SwiperSlide id={'qwerty'} key={`thumb-${i}`} tag="li">
        <ImageThumbsContainer>
          <ImageThumbs src={img[i]} alt={`Thumbnail ${i}`} />
        </ImageThumbsContainer>
      </SwiperSlide>
    )
  };

  const gallerySwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  const gallerySwiperParams = {
    wrapperTag: 'ul',
    navigation: { clickable: true },
    pagination: { clickable: true },
    spaceBetween: 5,
    grabCursor: true,
  };

  const thumbsSwiperParams = {
    wrapperTag: 'ul',
    spaceBetween: 5,
    slidesPerView: 4,
    slideToClickedSlide: true,
    centeredSlides: true,
    direction: 'vertical',
  };

  const thumbsSwiperParamsHorizontal = {
    wrapperTag: 'ul',
    spaceBetween: 5,
    slidesPerView: 5,
    slideToClickedSlide: true,
    centeredSlides: true,
    direction: 'horizontal',
  };

  useEffect(() => {
    const gallerySwiper = gallerySwiperRef.current.swiper;
    const thumbsSwiper = thumbsSwiperRef.current.swiper;

    if (gallerySwiper.controller && thumbsSwiper.controller) {
      gallerySwiper.controller.control = thumbsSwiper;
      thumbsSwiper.controller.control = gallerySwiper;
    }

  }, [screenWidth]);



  return (
    <>
      {screenWidth >= 768 ? (<SwiperContainer>
        <SwiperThumbs>
          <Swiper id="thumbs" {...thumbsSwiperParams} ref={thumbsSwiperRef}>
            {thumbs}
          </Swiper>
        </SwiperThumbs>
        <SwiperGallery>
          <Swiper id="item" {...gallerySwiperParams} ref={gallerySwiperRef}>
            {slides}
          </Swiper>
        </SwiperGallery>
      </SwiperContainer>) : (<SwiperContainerHorizontal>
        <SwiperGalleryHorizontal>
          <Swiper id="item" {...gallerySwiperParams} ref={gallerySwiperRef}>
            {slides}
          </Swiper>
        </SwiperGalleryHorizontal>
        <SwiperThumbsHorizontal>
          <Swiper id="thumbs-horizontal" {...thumbsSwiperParamsHorizontal} ref={thumbsSwiperRef}>
            {thumbs}
          </Swiper>
        </SwiperThumbsHorizontal>
      </SwiperContainerHorizontal>)
      }
    </>
  )
};
