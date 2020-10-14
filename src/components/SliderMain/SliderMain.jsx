import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper';


import styled from 'styled-components'
import 'swiper/swiper.scss';
import './style.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {device} from "../../styles/breakpoints/breakpoints";


SwiperCore.use([Navigation, Pagination, Scrollbar]);

// const imagesDesctop = ['./img/promoSlider/podarok-desctop.jpg', './img/promoSlider/podushka-promo-desctop.jpg',
//     './img/promoSlider/primerka-mebeli-desctop.jpg'];
//
// const imagesMobile = ['./img/promoSlider/podarok-mobile.jpg', './img/promoSlider/podushka-promo-mobile.jpg',
//     './img/promoSlider/primerka-mebeli_anons-mobile.jpg'];


export const SliderTest = () => {
    return (
        <SliderContainer>
            <Swiper id={'main'} tag='div' wrapperTag='ul' navigation={{clickable: true}} pagination={{clickable: true}} scrollbar={{clickable: true}}>
                <SwiperSlide tag='li'>

                        <ImageContainer>
                            <Image
                                src={'https://laperla-london.com/wp-content/uploads/2017/09/Select-High-Back-Sofa.jpg'}/>
                        </ImageContainer>

                </SwiperSlide>
                <SwiperSlide tag='li'>

                        <ImageContainer>
                            <Image
                                src={'https://laperla-london.com/wp-content/uploads/2017/09/Select-High-Back-Sofa.jpg'}/>
                        </ImageContainer>

                </SwiperSlide>
                <SwiperSlide tag='li'>
                        <ImageContainer>
                            <Image
                                src={'https://laperla-london.com/wp-content/uploads/2017/09/Select-High-Back-Sofa.jpg'}/>
                        </ImageContainer>

                </SwiperSlide>
            </Swiper>
        </SliderContainer>

    )
};

const SliderContainer = styled.div`
//width: 100%;

@media${device.tabletS}{
//height: 250px;
}
`;

const ImageContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
`;
const Image = styled.img`
width: 100%;
height: auto;
`


// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Thumbs, Controller} from 'swiper';
// import 'swiper/swiper-bundle.css';
//
// import './productCarousel.scss';
// import {SwiperContainer, SwiperThumbs, SwiperGallery, ImageMain, Image} from './StyledProductCarousel'
//
// SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);
//
// export const ProductCarousel = () => {
//
//     const [thumbsSwiper, setThumbsSwiper] = useState(null);
//     const [firstSwiper, setFirstSwiper] = useState(null);
//     const [secondSwiper, setSecondSwiper] = useState(null);
//
//     const images = [
//         { src: '/images/chairs/bar/chair_Bontempi_main.png' },
//         { src: '/images/chairs/bar/chair_Bontempi1.jpg' },
//         { src: '/images/chairs/bar/chair_Bontempi2.jpg' },
//         { src: '/images/chairs/bar/chair_Bontempi3.jpg' }
//     ]
//
//     const res = images.map(i => i.src);
//
//     const slides = [];
//     for (let i = 0; i < 4; i += 1) {
//         slides.push(
//             <SwiperSlide key={`slide-${i}`} tag="li">
//                 <ImageMain src={res[i]} alt={`Slide ${i}`} />
//             </SwiperSlide>
//         )
//     }
//     const thumbs = [];
//     for (let i = 0; i < 4; i += 1) {
//         thumbs.push(
//             <SwiperSlide key={`thumb-${i}`} tag="li">
//                 <Image src={res[i]} alt={`Thumbnail ${i}`} width={78} />
//             </SwiperSlide>
//         )
//     }
//
//     return (
//         <SwiperContainer>
//             <SwiperThumbs>
//                 <Swiper
//                     id="thumbs"
//                     wrapperTag="ul"
//                     spaceBetween={6}
//                     slidesPerView={5}
//                     // onSwiper={setThumbsSwiper}
//                     onClick={setThumbsSwiper}
//                     onSwiper={setFirstSwiper} controller={{ control: secondSwiper }}
//                     watchSlidesVisibility={true}
//                     watchSlidesProgress={true}
//                     slideToClickedSlide={true}
//                     loop={true}
//                     simulateTouch={true}
//                     direction='vertical'
//                 >
//                     {thumbs}
//                 </Swiper>
//             </SwiperThumbs>
//
//             <SwiperGallery>
//                 <Swiper
//                     id="main"
//                     thumbs={{ swiper: thumbsSwiper }}
//                     onSwiper={setSecondSwiper} controller={{ control: firstSwiper }}
//                     wrapperTag="ul"
//                     loop={true}
//                     navigation={{ clickable: true }}
//                     pagination={{ clickable: true }}
//                     spaceBetween={5}
//                     slidesPerView={1}
//                 >
//                     {slides}
//                 </Swiper>
//             </SwiperGallery>
//         </SwiperContainer>
//     )
// }

