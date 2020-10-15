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
    ImageThumbs } from './StyledProductCarousel';

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

export const ProductCarousel = () => {

    // const [thumbsSwiper, setThumbsSwiper] = useState(null);
    // const [firstSwiper, setFirstSwiper] = useState(null);
    // const [secondSwiper, setSecondSwiper] = useState(null);

    const img = [
        './img/chairs/bar/chair_Bontempi/chair_Bontempi_main.png',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi1.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi2.jpg',
        './img/chairs/bar/chair_Bontempi/chair_Bontempi3.jpg',
    ]

    const slides = [];
    for (let i = 0; i < 4; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <ImageMainContainer>
                    <ImageMain src={img[i]} alt={`Slide ${i}`}/>
                </ImageMainContainer>
            </SwiperSlide>
        )
    };

    const thumbs = [];
    for (let i = 0; i < 4; i += 1) {
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
        // loop: true,
        navigation: { clickable: true },
        pagination: { clickable: true },
        spaceBetween: 15,
        // slidesPerView: 1
    };

    const thumbsSwiperParams = {
        wrapperTag: 'ul',
        spaceBetween: 15,
        slidesPerView: 4,
        slideToClickedSlide: true,
        centeredSlides: true,
        // loop: true,
        direction:'vertical',
    }

    useEffect(() => {
     
        const gallerySwiper = gallerySwiperRef.current.swiper;
        const thumbsSwiper = thumbsSwiperRef.current.swiper;

        if(gallerySwiper.controller && thumbsSwiper.controller){
            gallerySwiper.controller.control = thumbsSwiper;
            thumbsSwiper.controller.control = gallerySwiper;
        }
    }, [])


    return (
        <SwiperContainer>
            <SwiperThumbs>
                <Swiper id="thumbs" {...thumbsSwiperParams} ref={thumbsSwiperRef}
                    
                    // wrapperTag="ul"
                    // spaceBetween={6}
                    // slidesPerView={5}
                    // // onSwiper={setThumbsSwiper}
                    // // onClick={setThumbsSwiper}
                    // // onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}
                    // watchSlidesVisibility={true}
                    // watchSlidesProgress={true}
                    // slideToClickedSlide={true}
                    // loop={true}
                    // touchRatio={0.2}
                    // // simulateTouch={true}
                    // direction='vertical'
                >
                    {thumbs}
                </Swiper>
            </SwiperThumbs>

            <SwiperGallery>
                <Swiper id="item" {...gallerySwiperParams} ref={gallerySwiperRef}
                   
                    // thumbs={{ swiper: thumbsSwiper }}
                    // onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}
                    // wrapperTag="ul"
                    // loop={true}
                    // navigation={{ clickable: true }}
                    // pagination={{ clickable: true }}
                    // spaceBetween={5}
                    // slidesPerView={1}
                >
                    {slides}
                </Swiper>
            </SwiperGallery>
        </SwiperContainer>
    )
}

