import { GlobalConfig } from "../GlobalConfig"


export const ValodationRules = {
  nameRules: [
    {
      required: true,
      message: 'Введите имя!',
    },
    {
      pattern: GlobalConfig.textFieldRegExp,
      message: 'Имя должно состоять из букв a-z, A-Z, а-я, А-Я!',
    },
    {
      min: 2,
      message: 'Имя должно содержать минимум 2 символа!',
    },
    {
      max: 25,
      message: 'Имя должно содержать максимум 25 символов!',
    }
  ],
  surnameRules:[
    {
      required: true,
      message: 'Введите фамилию!',
    },
    {
      pattern: GlobalConfig.textFieldRegExp,
      message: 'Фамилия должна состоять из букв a-z, A-Z, а-я, А-Я!',
    },
    {
      min: 2,
      message: 'Фамилия должна содержать минимум 2 символа!',
    },
    {
      max: 25,
      message: 'Фамилия должна содержать максимум 25 символов!',
    }
  ],
  emailRules: [
    {
      type: 'email',
      message: 'Некоректный E-mail ',
    },
    {
      required: true,
      message: 'Введите  E-mail!',
    },
  ],
  passwordRules:[
    {
      required: true,
      message: 'Введите пароль!',
    },
    {
      min: 7,
      message: 'Минимум 7 символов!',
    },
    {
      max: 30,
      message: 'Максимум 30 символов!',
    },
    {
      pattern: GlobalConfig.adressFieldRegExp,
      message: 'Пароль должен состоять из букв и цифр!',
    },
  ],
  loginRules: [
    {
      required: true,
      message: 'Введите логин!',
      whitespace: true,
    },
    {
      min: 2,
      message: 'Логин должен содержать минимум 2 символа!',
    },
    {
      max: 15,
      message: 'Логин должен содержать максимум 25 символов!',
    },
    {
      pattern: GlobalConfig.adressFieldRegExp,
      message: 'Логин должен состоять из букв и цифр!',
    }
  ],
  phoneRules: [{
    required: true,
    message: 'Введите номер телефона!'
  },
  {
    pattern: GlobalConfig.phoneNumberRegExp,
    message: 'Введите правильный номер!',
    
  }
]
}