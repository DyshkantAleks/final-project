import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART } from './action-types';

const InitialState = {
  cart: [{
    _id: '5f9704c7a8da4b001769720b',
    product: {
      specifications: {covering: 'Cиденье и спинка стула обтянуты роскошной мерцающей тканью, заключенной в светлую рамку элементов конструкции.', casing: 'Мягкая обивка сиденья и спинки обеспечивает комфорт и необычайно эргономична.'},
      sizes: {height: 79, width: 45, length: 40},
      enabled: true,
      imageUrl: [
        '/img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft_main.jpg',
        '/img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft1.jpg',
        '/img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft2.jpg',
        '/img/chairs/kitchen/chair_Hollywood_Loft/chair1_Hollywood_Loft3.jpg'
      ],
      quantity: 10,
      isNewProduct: true,
      isTopRated: true,
      _id: '5f9704c7a8da4b001769720b',
      brand: 'Hollywood Loft',
      category: 'Стулья',
      color: 'Бежевый',
      currentPrice: 15999,
      description: 'Стул стиля Hollywood Loft - простой, лаконичный, с четкой геометрией рисунка; каркас и ноги стула выполнены из 100% массива; основной акцент обеденного стула - зеркальные вертикальные планки по обеим сторонам спинки',
      name: 'стул обеденный',
      route: 'kuhonnyi-stul-hollywood-loft',
      subCategory: 'Кухонные стулья',
      itemNo: '641020',
      date: '2020-10-26T17:17:59.483Z',
      __v: 0
    },
    cartQuantity: 1
  }
  
  ]
};

export function reducer (state = InitialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(({ id }) => id !== payload)
      }

    case QTY_UP:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === payload) {
            item.cartQuantity += 1;
          }
          return item;
        })
      }

    case QTY_DOWN:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === payload) {
            item.cartQuantity -= 1;
          }
          return item;
        })
      }

    default:
      return state
  }
};
