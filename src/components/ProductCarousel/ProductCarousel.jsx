import React, { useState, useRef, useEffect } from 'react';
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
    ImageThumbs
} from './StyledProductCarousel';

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

export const ProductCarousel = () => {

    const img = [
        './img/chairs/bar/chair_Bontempi/chair_Bontempi_main.png',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi1.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi3.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
    ]

    const slides = [];
    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <ImageMainContainer>
                    <ImageMain src={img[i]} alt={`Slide ${i}`} />
                </ImageMainContainer>
            </SwiperSlide>
        )
    };

    const thumbs = [];
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`} tag="li">
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
        mousewheel: true,
    }

    useEffect(() => {
        const gallerySwiper = gallerySwiperRef.current.swiper;
        const thumbsSwiper = thumbsSwiperRef.current.swiper;

        if (gallerySwiper.controller && thumbsSwiper.controller) {
            gallerySwiper.controller.control = thumbsSwiper;
            thumbsSwiper.controller.control = gallerySwiper;
        }
    }, [])


    return (
        <SwiperContainer>
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
        </SwiperContainer>
    )
}

