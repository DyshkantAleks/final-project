import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper';

import styled from 'styled-components'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


SwiperCore.use([Navigation, Pagination]);

export const SliderTest = () => {
    return (
        <Swiper id={'main'} tag={'div'} wrapperTag={'ul'} navigation={{clickable: true}} pagination={{clickable: true}}
                scrollbar={{draggable: true}}>
            <SwiperSlide tag={'li'}>
                
            </SwiperSlide>
        </Swiper>

    )
};







