import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';

import styled from 'styled-components';
import './productCarousel.scss';

SwiperCore.use([Navigation, Pagination, Thumbs]);

export const ProductCarousel = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const slides = [];

    for (let i = 0; i < 5; i++) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img src={`https://picsum.photos/id/${i + 1}/500/300`} alt={`Slide ${i}`}/>        
            </SwiperSlide>
        )
    }

    const thumbs = [];

    for (let i = 0; i < 5; i++) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`} tag="li">
                <img src={`https://picsum.photos/id/${i + 1}/160/100`} alt={`Thumbnail ${i}`}/>        
            </SwiperSlide>
        )
    }

    return (
        <SwiperContainer>
            <Swiper 
            id="main" 
            thumbs={{ swiper: thumbsSwiper }}
            wrapperTag="ul" 
            navigation 
            pagination={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            >
                {slides}
            </Swiper>

            <Swiper
            id="thumbs"
            spaceBetween={5}
            slidesPerView={3}
            onSwiper={setThumbsSwiper}
            watchSlidesVisibility
            watchSlidesProgress
            >
                {thumbs}
            </Swiper>
        </SwiperContainer>
    )
}

const SwiperContainer = styled.section`
display:flex;
flex-direction:column;`
