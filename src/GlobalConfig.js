export const GlobalConfig = {
  phoneNumberRegExp: /(\d{9})$/,
  textFieldRegExp: /^[a-zA-Zа-яёА-ЯЁІіїЇєЄ_\s]+$/,
  passwordField: /^[0-9a-zA-Zа-яёА-ЯЁІіїЇєЄ_\s]+$/,
  adressFieldRegExp: /^[0-9а-яёА-ЯЁІіїЇєЄ.,\s`]+$/,
  numberFieldRegExp: /^[0-9]+$/,
  deliveryOptions: [
    {
      PICKUP: {
        value: 'Pick up from store',
        text: 'Самовывоз',
      },
    },
    {
      COURIER_SERVICE: {
        value: 'Courier Service',
        text: 'Курьером',
      },
    },
    {
      NOVA_POSHTA: {
        value: 'Nova Poshta',
        text: 'Новая почта',
        serchCityCode: ''
      },

    },
    {
      UKRPOSHTA: {
        value: 'Post Office Ukrposhta',
        text: 'УкрПочта',
      },
    },
  ],
  paymentOptions: [
    {
      BY_CASH: {
        text: 'Наличными',
        value: 'Cash',
      },
    },
    {
      LIQ_PAY: {
        text: 'Кредитная карта',
        value: 'creditCard',
      },
    },
  ],
  REACT_APP_PUBLIC_KEY: 'sandbox_i58889583207',
  REACT_APP_PRIVATE_KEY: 'sandbox_pVJv7Gf09lfFEVCQISpdO2nCUwQ7OxbQVFaIXdU9',
  NOVA_POSHTA_API: '61df9e46c38be9addf6ced229c854397'
};
