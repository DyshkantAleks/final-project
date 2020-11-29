import { GlobalConfig } from "../GlobalConfig"


export const ValodationRules = {
  nameRules: [
    {
      required: true,
      message: 'Введите имя!',
    },
    {
      pattern: GlobalConfig.textFieldRegExp,
      message: 'Недопустимый символ',
    },
    {
      min: 2,
      message: ' минимум 2 символа!',
    },
    {
      max: 25,
      message: ' максимум 25 символов!',
    }
  ],
  surnameRules:[
    {
      required: true,
      message: 'Введите фамилию!',
    },
    {
      pattern: GlobalConfig.textFieldRegExp,
      message: 'Недопустимый символ',
    },
    {
      min: 2,
      message: 'минимум 2 символа!',
    },
    {
      max: 25,
      message: ' максимум 25 символов!',
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
      pattern: GlobalConfig.passwordField,
      message: 'используйте буквы и цифры!',
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
      message: 'минимум 2 символа!',
    },
    {
      max: 15,
      message: 'максимум 25 символов!',
    },
    {
      pattern: GlobalConfig.textFieldRegExp,
      message: 'Недопустимый символ!',
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