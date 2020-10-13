export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const MODULE_NAME = 'cart';
export const selectCart = state => state[MODULE_NAME].dummydata; //change then to cartItems

const InitialState = {
   // cartItems: [],
    dummydata: [
        {
            "category": "kitchen",
            "code": "9001603-08",
            "name": "Стул обеденный",
            "brand": "Hollywood Loft",
            "image": "../../public/img/chairs/office/chair_Kartell_Maui/",
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
            "image": "../../public/img/chairs/office/chair_Gubi_Bat/",
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
            "image": "../../public/img/chairs/kitchen/chair_Trance/",
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

export const addToCart = id => ({
    type: 'ADD_TO_CART',
    payload: id
});

export const removeFromCart = id => ({
    type: 'REMOVE_FROM_CART',
    payload: id
})

