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
    // async function f() {
    //   return 1;
    // }
    //
    // f().then(alert);

    //console.log(getPromotionsList);


    useEffect(() => {
      getPromotionsList();
    }, [getPromotionsList]);
    //console.log(promotions);

    // const qwerty = [];
    // promotions.map((e) => {
    //   qwerty.push({route: e.route,
    //   image: e["slider-image"]})
    // });
    // console.log(qwerty);
    const qwerty = [
      {
        "route": "podarok-za-otzyv",
        "title": "Получи подарок за отзыв!",
        "subtitle": "Хочешь получить крутой подарок от нашего магазина? Все, что тебе нужно - оставить отзыв о нашей работе у тебя в соцсетях! Кликай за подробностями",
        "slider-image": "./img/promoSlider/podarok-slider.png",
        "desctop-image": "../img/promoSlider/podarok-desc.png",
        "full-description": "Поделитесь своим опытом сотрудничества с нашей компанией.  \n\nМебель премиум-класса подразумевает непревзойденное качество, которое мы готовы дополнить индивидуальными решениями согласно вашему запросу. Сотни наших клиентов уже убедились в том, что DG Home – это передовые технологии изготовления элитной мебели и уникальные возможности трансформации жилого пространства.\n\nНам очень интересны Ваш взгляд на дизайнерскую мебель и мнение о нашем бренде.\n\nДля этого нужно всего лишь записать короткий видео-отзыв в своей любимой соцсети и отметить наш магазин! \n\nПодробности уточняйте у ведущего менеджера.\n"
      },
      {
        "route": "primerka-mebeli",
        "title": "Новая услуга - примерка мебели",
        "subtitle": "Очень сложно определиться с выбором? Не можешь подобрать размер? Мы привезем тебе твой товар прямо домой для примерки!",
        "slider-image": "./img/promoSlider/primerka-mebeli-slider.png",
        "desctop-image": "../img/promoSlider/primerka-mebeli-desc.png",
        "full-description": "Как впишется диван по размерам?\nКак будет выглядеть комната с диваном?\nНе будет ли он занимать слишком много места?\n\nЭти и многие друге вопросы беспокоят вас в процессе выбора. Представьте себе ситуацию: новый ремонт, идеально чистое пространство, вы еще не определились с мебелью, хочется большой диван, но есть сомнения, что он комфортно разместится внутри комнаты. Как и многие другие компании мы можем привезти диван домой, но насколько это удобно? Сборка, установка, лишняя трата времени, пыль. А если ожидания не оправдаются?  Мы придумали новую версию \"Примерки мебели\" и предлагаем вам комфортную услугу в компании приветливого консультанта. Нам потребуется 15 минут, чтобы наглядно продемонстрировать вам габариты изделий непосредственно в вашей квартире и целая вечность, чтобы определиться с цветом и типом ткани.\nУслуга ограничена по количеству предметов.\nЗа более подробной информацией обращайтесь к менеджерам-консультантам в салоне продаж или по телефону горячей линии. \n"
      },
      {
        "route": "podushka-v-podarok",
        "title": "Подушка в подарок при покупке мебели в нашем магазине",
        "subtitle": "Получи фирменную подушку с тиснением всего за пару кликов!",
        "slider-image": "./img/promoSlider/podushka-slider-new.png",
        "desctop-image": "../img/promoSlider/podushka-desc-new.png",
        "full-description": "Мы позаботились о том, чтобы пользоваться сайтом было удобно и приятно. Только при заказе дивонов в нашем интернет-магазине мы подарим Вам  эксклюзивную кожаную подушку премиального бренда ESTETICA VISION с фирменной символикой  в виде тиснения.\n\nСрок действия акции ограничен количеством товара. \n\nПодробности акции и условия проведения можно уточнить у наших консультантов.\n"
      }
    ];

  return (
    <SliderContainer>
      <Swiper id={'homepage-swiper-container'}
              tag='div'
              wrapperTag='ul'
              navigation={{clickable: true}}
              pagination={{clickable: true}}
              autoplay={true}
      >
        {qwerty.map((e) => (
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



