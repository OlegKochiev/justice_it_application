const URL = {
  PRODUCTS: 'http://localhost:3001/products',
};

const PRODUCT_FILTER_OPTIONS = [
  {
    name: 'Все',
    value: 'all',
  },
  {
    name: 'Продукт 1',
    value: 'product1',
  },
  {
    name: 'Продукт 2',
    value: 'product2',
  },
  {
    name: 'Продукт 3',
    value: 'product3',
  },
];

const PATHS = {
  HOME: '/',
  DETAILS: '/details/:factoryId/:mounthNumber',
};

const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export {URL, PRODUCT_FILTER_OPTIONS, MONTHS, PATHS};
