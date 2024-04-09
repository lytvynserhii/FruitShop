import { configureStore } from '@reduxjs/toolkit';

import { productSectionsReducer } from './productSections/productSections';
import { searchReducer } from './search/search';

export const store = configureStore({
  reducer: {
    productSections: productSectionsReducer,
    search: searchReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
