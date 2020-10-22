import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './action-types';

const InitialState = {
  //favorites: [ '9001603-08', '9029004A-812', '9051003-202']
  favorites: [
    {
      "category": "wardrobe",
      "code": "ABU0003 ROS0065",
      "name": "Шкаф",
      "brand": "Colonial Club",
      "image": [
          "./img/storage/wardrobe/wardrobe_Colonial_Club/wardrobe_Colonial_Club_main.jpeg"
      ],
      "quantity": 10,
      "color": "Черный",
      "description": "Буфет с 4 дверками выполнен в стиле Ар деко.",
      "price": 24799,
      "height": 166,
      "width": 155,
      "length": 50,
      "inFavorites": false,
      "inCart": false
  },
  {
      "category": "wardrobe",
      "code": "56ROS0065",
      "name": "Книжный шкаф VENEZIA",
      "brand": "Fratelli Barri",
      "image": [
          "./img/storage/wardrobe/wardrobe_Fratelli_Barri/wardrobe_Fratelli_Barri_main.jpeg",
          "./img/storage/wardrobe/wardrobe_Fratelli_Barri/wardrobe_Fratelli_Barri1.jpeg",
          "./img/storage/wardrobe/wardrobe_Fratelli_Barri/wardrobe_Fratelli_Barri2.jpeg",
          "./img/storage/wardrobe/wardrobe_Fratelli_Barri/wardrobe_Fratelli_Barri3.jpeg",
          "./img/storage/wardrobe/wardrobe_Fratelli_Barri/wardrobe_Fratelli_Barri4.jpeg"
      ],
      "quantity": 10,
      "color": "Белый",
      "description": "Книжный шкаф на гнутых ножках выполнена в классическом стиле. Отделка перламутровый кремовый лак, ножки и база сусальное серебро, покрытое лаком шампань. Дверки - стекло. Боковины деревянные. Функционал дополнен 2 выдвижными ящиками в нижней части.\nВнутреннее наполнение - 3 деревянные полки.",
      "price": 25999,
      "height": 102,
      "width": 55,
      "length": 220,
      "inFavorites": false,
      "inCart": false
  },
  {
      "category": "wardrobe",
      "code": "DB004944",
      "name": "Шкаф с лестницей",
      "brand": "Dialma Brown",
      "image": [
          "./img/storage/wardrobe/wardrobe_Dialma/wardrobe_Dialma_main.jpeg",
          "./img/storage/wardrobe/wardrobe_Dialma/wardrobe_Dialma1.jpeg",
          "./img/storage/wardrobe/wardrobe_Dialma/wardrobe_Dialma2.jpeg"
      ],
      "quantity": 10,
      "color": "Черный",
      "description": "Книжный шкаф с лестницей из массива элитного дерева",
      "price": 25999,
      "height": 120,
      "width": 55,
      "length": 230,
      "inFavorites": false,
      "inCart": false
  },


  {
      "category": "dresser",
      "code": "PSEM",
      "name": "Комод",
      "brand": "Pusha",
      "image": [
          "./img/storage/dresser/dresser_Pusha/dresser_Pusha_main.jpeg",
          "./img/storage/dresser/dresser_Pusha/dresser_Pusha1.jpeg",
          "./img/storage/dresser/dresser_Pusha/dresser_Pusha2.jpeg"
      ],
      "quantity": 10,
      "color": "Коричневый",
      "description": "Благодаря линиям дизайна и очарованию предлагаемых цветовых решений, эти изделия могут использоваться в домашнем или офисном интерьере, выполняя различное функциональное назначение. Ящик в комбинации с полками и верхней поверхностью представляет собой основной компонент системы.",
      "price": 35999,
      "height": 50,
      "width": 120,
      "length": 86,
      "inFavorites": false,
      "inCart": false
  }
  ]
};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload]
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(({ id }) => id !== payload)
      }

    default:
      return state
  }
};
