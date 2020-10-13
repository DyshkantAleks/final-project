import { ADD_TO_CART, REMOVE_FROM_CART } from './actions'

const InitialState = {
// cartItems: [],
    dummydata: [
        {
            "category": "kitchen",
            "code": "9001603-08",
            "name": "Стул обеденный",
            "brand": "Hollywood Loft",
            "image": "https://kupistul.ua/public/cache/600x600/stul-bryan-wood-beliy-10003627.jpg?v1",
            "quantity": 10,
            "color": "Бежевый",
            "description": "Стул стиля Hollywood Loft - простой, лаконичный, с четкой геометрией рисунка; каркас и ноги стула выполнены из 100% массива; мягкая обивка сиденья и спинки обеспечивает комфорт и необычайно эргономична; сиденье и спинка стула обтянуты роскошной мерцающей тканью, заключенной в светлую рамку элементов конструкции; основной акцент обеденного стула - зеркальные вертикальные планки по обеим сторонам спинки",
            "price": 15999,
            "height": 79,
            "width": 45,
            "length": 40,
            "inFavorites": false,
            "inCart": false
        },
        {
            "category": "kitchen",
            "code": "9029004A-812",
            "name": "Стул с подлокотником, стеганная кожа",
            "brand": "Cosmopolitan Orange",
            "image": "https://1i9wu42vzknf1h4zwf2to5aq-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/x_96-9328-CH_LeoChrLthr1_na_s_.jpg",
            "quantity": 10,
            "color": "Оранжевый",
            "description": "Взрыв эмоций на почве любви к Lamborghini. Смелость и простота позднего модерна 70-х годов прошлого века. И инновации 20-х годов века нынешнего",
            "price": 23399,
            "height": 86,
            "width": 60,
            "length": 55,
            "inFavorites": false,
            "inCart": false
        },
        {
            "category": "kitchen",
            "code": "9051003-202",
            "name": "Стул",
            "brand": "Bella Veneto",
            "image": "https://secure.img1-fg.wfcdn.com/im/19556338/resize-h600-w600%5Ecompr-r85/3444/34441276/Kitchen+%26+Dining+Chairs.jpg",
            "quantity": 10,
            "color": "Бежевый",
            "description": "Стул с мягкой обивкой Bella Veneto в классическом стиле прекрасно дополнит интерьер столовой. Деревянные ножки с изгибами и мягкая обивка с высококачественной вышивкой придас изысканности кухонному ансамблю",
            "price": 21599,
            "height": 122,
            "width": 55,
            "length": 67,
            "inFavorites": false,
            "inCart": false
        }
    ]
};

export function reducer(state = InitialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, payload]
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(({ id }) => id !== payload)
            }
            default:
                return state
        }
    }



