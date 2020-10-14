import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper';
import 'swiper/swiper-bundle.css';
// import 'swiper/swiper.scss';
// import 'swiper/components/thumbs/thumbs.scss';
// import 'swiper/components/controller/controller.scss';
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

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

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
                    <ImageMain src={img[i]} alt={`Slide ${i}`} />
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

    return (
        <SwiperContainer>
            <SwiperThumbs>
                <Swiper
                    id="thumbs"
                    wrapperTag="ul"
                    spaceBetween={6}
                    slidesPerView={5}
                    // onSwiper={setThumbsSwiper}
                    onClick={setThumbsSwiper}
                    onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}
                    watchSlidesVisibility={true}
                    watchSlidesProgress={true}
                    slideToClickedSlide={true}
                    loop={true}
                    simulateTouch={true}
                    direction='vertical'
                >
                    {thumbs}
                </Swiper>
            </SwiperThumbs>

            <SwiperGallery>
                <Swiper
                    id="item"
                    thumbs={{ swiper: thumbsSwiper }}
                    onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}
                    wrapperTag="ul"
                    loop={true}
                    navigation={{ clickable: true }}
                    pagination={{ clickable: true }}
                    spaceBetween={5}
                    slidesPerView={1}
                >
                    {slides}
                </Swiper>
            </SwiperGallery>
        </SwiperContainer>
    )
}

