import { server } from '../../API'

export const catalogs = [
  {
    id: 1,
    route: 'stulya',
    category: 'Стулья',
    parentId: 'null',
    icon: './img/CategoriesIcons/icon-chair.png',
    image: './img/PopularCategories/popular-category-chair-2.png',
    isPopular: true,
    description: 'Самые популярные стулья от мировых производителей'
  },
  {
    id: 2,
    route: 'stoly',
    category: 'Столы',
    parentId: 'null',
    icon: './img/CategoriesIcons/icon-table.png',
    image: './img/PopularCategories/popular-category-table.png',
    isPopular: true,
    description: 'Стильные столы из различных материалов'
  },
  {
    id: 3,
    route: 'divany',
    category: 'Диваны',
    parentId: 'null',
    icon: './img/CategoriesIcons/icon-sofa.png',
    image: './img/PopularCategories/popular-category-sofa.png',
    isPopular: true,
    description: 'Функциональные диваны для любых комнат'
  },
  {
    id: 4,
    route: 'sistemy-hraneniya',
    category: 'Хранение',
    parentId: 'null',
    icon: './img/CategoriesIcons/icon-storage.png',
    image: './img/PopularCategories/popular-category-storage.png',
    isPopular: true,
    description: 'Удобные системы хранения для любых нужд'
  },
  {
    id: 5,
    route: 'aksessuary',
    category: 'Аксессуары',
    parentId: 'null',
    icon: './img/CategoriesIcons/icon-accessories.png',
    image: '',
    isPopular: false,
    description: ''
  },

  {
    id: 6,
    route: 'stulya-dlya-kuhni',
    category: 'Кухонные стулья',
    parentId: 'Стулья',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 7,
    route: 'stulya-dlya-ofisa',
    category: 'Офисные стулья',
    parentId: 'Стулья',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 8,
    route: 'stulya-dlya-bara',
    category: 'Барные стулья',
    parentId: 'Стулья',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },

  {
    id: 9,
    route: 'stoly-dlya-kuhni',
    category: 'Кухонные столы',
    parentId: 'Столы',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 10,
    route: 'stoly-dlya-ofisa',
    category: 'Офисные столы',
    parentId: 'Столы',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 11,
    route: 'pristavnye-stoly',
    category: 'Приставные столы',
    parentId: 'Столы',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 12,
    route: 'zhurnalnye-stoly',
    category: 'Журнальные столы',
    parentId: 'Столы',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },

  {
    id: 13,
    route: 'kushetki',
    category: 'Кушетки',
    parentId: 'Диваны',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 14,
    route: 'pryamye-divany',
    category: 'Прямые диваны',
    parentId: 'Диваны',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 15,
    route: 'uglovye-divany',
    category: 'Угловые диваны',
    parentId: 'Диваны',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },

  {
    id: 16,
    route: 'shkafi',
    category: 'Шкафы',
    parentId: 'Хранение',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 17,
    route: 'komodi',
    category: 'Комоды',
    parentId: 'Хранение',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },

  {
    id: 18,
    route: 'zerkala',
    category: 'Зеркала',
    parentId: 'Аксессуары',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 19,
    route: 'chasy',
    category: 'Часы',
    parentId: 'Аксессуары',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  },
  {
    id: 20,
    route: 'vazy',
    category: 'Вазы',
    parentId: 'Аксессуары',
    icon: '',
    image: '',
    isPopular: false,
    description: ''
  }
]

export function addItemToBase (endpoint, item) {
  server.post(endpoint, { body: JSON.stringify(item)})
}