import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay} from 'swiper';


import styled from 'styled-components'
import 'swiper/swiper.scss';
import './style.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {device} from "../../styles/breakpoints/breakpoints";
import {useDispatch, useSelector} from "react-redux";
import {selectPromotions} from "../../store/promotions/selectors";
import {getPromotionsList} from "../../store/promotions/actions";
import {Link} from "react-router-dom";



SwiperCore.use([Navigation, Pagination, Autoplay]);

export const SliderTest = () => {

  const promotions = useSelector(selectPromotions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPromotionsList())
  }, []);
  console.log(promotions);

  return (
    <SliderContainer>
      <Swiper id={'homepage-swiper-container'}
              tag='div'
              wrapperTag='ul'
              navigation={{clickable: true}}
              pagination={{clickable: true}}
              autoplay={true}
      >
        {promotions.map((e, index) => (
          <SwiperSlide key={index} tag="li">
            <Link
              to={`/promo/${e.route}`}>
              <ImageContainer>
                <Image src={e['slider-image']}/>
              </ImageContainer>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>

  )
};

const SliderContainer = styled.div`


@media${device.tabletS}{

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
`;


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

