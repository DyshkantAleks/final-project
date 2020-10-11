import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller} from 'swiper';
import 'swiper/swiper-bundle.css';

import styled from 'styled-components';
import './productCarousel.scss';

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

export const ProductCarousel = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    // const slides = [];
    // for (let i = 0; i < 5; i+=1) {
    //     slides.push(
    //         <SwiperSlide key={`slide-${i}`} tag="li">
    //             <img src={`https://picsum.photos/id/${i + 1}/500/300`} alt={`Slide ${i}`}/>        
    //         </SwiperSlide>
    //     )
    // }
    const url = window.location.origin;

    const images = [
        { src: url + '/images/chairs/bar/chair_Bontempi_main.png' },
        { src: url + '/images/chairs/bar/chair_Bontempi1.jpg' },
        { src: url + '/images/chairs/bar/chair_Bontempi2.jpg' },
        { src: url + '/images/chairs/bar/chair_Bontempi3.jpg' }
    ]
    const res = images.map(i => i.src);

    const slides = [];
    for (let i = 0; i < 4; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <ImageMain src={res[i]} alt={`Slide ${i}`} />
            </SwiperSlide>
        )
    }
    const thumbs = [];
    for (let i = 0; i < 4; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`} tag="li">
                <Image src={res[i]} alt={`Thumbnail ${i}`} width={78} />
            </SwiperSlide>
        )
    }

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
                    id="main"
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

const SwiperContainer = styled.section`
display: flex;
flex-flow: row;
height: 100%;
`;

const SwiperThumbs = styled.div`
width:20%;
margin-left:5rem;
margin-top: 1rem;
`;

const SwiperGallery = styled.div`
width:80%;
`;

const ImageMain = styled.img`
display: block;
max-width: 99%;
max-height: 100%;
margin: 0 auto;
object-fit: cover;

`;

const Image = styled.img`
display: block;
height: 7.8rem;
object-fit: cover;
`;
