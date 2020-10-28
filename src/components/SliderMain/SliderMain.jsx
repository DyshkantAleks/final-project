import React, {useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Autoplay, Virtual} from 'swiper';


import styled from 'styled-components'
import 'swiper/swiper.scss';
import './style.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import {device} from '../../styles/breakpoints/breakpoints';
import {connect, useDispatch, useSelector} from 'react-redux';

import {getPromotionsList} from '../../store/promotions/actions';
import {Link} from 'react-router-dom';
import {selectPromotions} from "../../store/promotions/selectors";




SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const mapStateToProps = state => ({
  promotions: selectPromotions(state)
});

export const SliderTest = connect(mapStateToProps, {getPromotionsList})(
  ({ promotions, getPromotionsList }) => {


    //console.log(getPromotionsList);


    useEffect(() => {
      getPromotionsList();
    }, [getPromotionsList]);
    //console.log(promotions);



  return (
    <SliderContainer>
      <Swiper id={'homepage-swiper-container'}
              tag='div'
              wrapperTag='ul'
              navigation={{clickable: true}}
              pagination={{clickable: true}}
              autoplay={true}
      >
        {promotions.map((e) => (
          <SwiperSlide  tag="li"   >
            {/*<Link*/}
            {/*  to={`/promo/${e.route}`}>*/}
              <ImageContainer>
                <Image src={e["slider-image"]}/>
              </ImageContainer>
            {/*</Link>*/}
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>

  )
});







// export const SliderTest = () => {
//
//   // const promotions = useSelector(selectPromotions);
//   // const dispatch = useDispatch();
//   //
//   // useEffect(() => {
//   //   dispatch(getPromotionsList());
//   //
//   // }, []);
//   //
//   // console.log(promotions);
//
//   return (
//     <SliderContainer>
//       <Swiper id={'homepage-swiper-container'}
//               tag='div'
//               wrapperTag='ul'
//               navigation={{clickable: true}}
//               pagination={{clickable: true}}
//               autoplay={true}
//       >
//         {promotions.map((e, index) => (
//           <SwiperSlide  tag="li" key={index}>
//             <Link
//               to={`/promo/${e.route}`}>
//               <ImageContainer>
//                 <Image src={e['slider-image']}/>
//               </ImageContainer>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </SliderContainer>
//
//   )
// };

const SliderContainer = styled.div``;

const ImageContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
`;
const Image = styled.img`
width: 100%;
height: auto;
`;



