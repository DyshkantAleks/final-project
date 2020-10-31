import { ADD_TO_CART, QTY_DOWN, QTY_UP, REMOVE_FROM_CART } from './action-types';

const InitialState = {
  cart: [
    {
      _id: '5f9704c7a8da4b001769720b',
      product: {
        specifications: { covering: 'Cиденье и спинка стула обтянуты роскошной мерцающей тканью, заключенной в светлую рамку элементов конструкции.', casing: 'Мягкая обивка сиденья и спинки обеспечивает комфорт и необычайно эргономична.' },
        sizes: { height: 79, width: 45, length: 40 },
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
    },
    {
      _id:'5f970586a8da4b001769720c',
      product: {
        _id:'5f970586a8da4b001769720c',
        quantity: 10,

        brand: 'Kartell',
        category: 'Стулья',
        color: 'Черный',
        currentPrice: 19999,
        date: '2020-10-21T19:46:17.247Z',
        description: 'Изготовленное из единой панели, облегченное офисное кресло на колесиках Spoon Chair, безусловно, является авангардным изделием. Инновационная технология штамповки с использованием литья под давлением двухкомпонентного состава, посредством которой было создано изделие, позволила достигнуть «многослойности», когда выполняется штамповка двух различных Термопластиковых материалов: одного, определяющего эстетические качества (наружного), и другого – отличающегося высокой механической прочностью (внутреннего), благодаря чему Spoon Chair отличается высочайшими технологическими характеристиками и максимальной гибкостью, обусловленными легко персонализируемой толщиной, приспосабливающейся к весу пользователя. Простая в эксплуатации регулирующая ручка соединена с нижним корпусом и полностью спрятана в стержень, не нарушая изгибы линии изделия.',
        enabled: true,
        imageUrl: [
            "./img/chairs/office/chair_Kartell_Spoon/chair_Kartell_Spoon_main.jpeg",
            "./img/chairs/office/chair_Kartell_Spoon/chair_Kartell_Spoon1.jpeg",
            "./img/chairs/office/chair_Kartell_Spoon/chair_Kartell_Spoon2.jpeg",
            "./img/chairs/office/chair_Kartell_Spoon/chair_Kartell_Spoon3.jpeg",
            "./img/chairs/office/chair_Kartell_Spoon/chair_Kartell_Spoon4.jpeg"
        ],
        itemNo: '4819/09',
        name: 'Кресло Spoon',
        route: 'ofisnyi-stul-spoon-kartell',
        subCategory: 'Офисные стулья',
        isNewProduct: true,
        isTopRated: true
    },
    cartQuantity: 2

    }
  ]
};

export function reducer(state = InitialState, { type, payload }) {
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
      };

    case QTY_UP:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === payload) {
            item.cartQuantity += 1;
          }
          return item;
        })
      };

    case QTY_DOWN:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.id === payload) {
            item.cartQuantity -= 1;
          }
          return item;
        })
      };

    default:
      return state
  }
};
