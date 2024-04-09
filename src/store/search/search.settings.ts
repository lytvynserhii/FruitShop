import { FRUIT_IMAGES } from 'constants/images';

import { SearchState } from './search.types';

const PRODUCT_LIST = [
  {
    id: 'Pineapple',
    name: 'Pineapple',
    price: 991,
    image: FRUIT_IMAGES.pineapple,
  },
  {
    id: 'Banana',
    name: 'Banana',
    price: 992,
    image: FRUIT_IMAGES.banana,
  },
  {
    id: 'GreenGrapes',
    name: 'Green Grapes',
    price: 993,
    image: FRUIT_IMAGES.greenGrape,
  },
  {
    id: 'PurpleGrapes',
    name: 'Purple Grapes',
    price: 994,
    image: FRUIT_IMAGES.purpleGrape,
  },
  {
    id: 'Melon',
    name: 'Melon',
    price: 995,
    image: FRUIT_IMAGES.melon,
  },
  {
    id: 'Mango',
    name: 'Mango',
    price: 996,
    image: FRUIT_IMAGES.mango,
  },
  {
    id: 'Guava',
    name: 'Guava',
    price: 997,
    image: FRUIT_IMAGES.guava,
  },
  {
    id: 'Pitaya',
    name: 'Pitaya',
    price: 998,
    image: FRUIT_IMAGES.pitaya,
  },
];

export const SEARCH_STATE: SearchState = {
  products: PRODUCT_LIST,
};
