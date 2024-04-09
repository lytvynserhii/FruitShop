import { configureStore } from '@reduxjs/toolkit';

import { productSectionsReducer } from './productSections/productSections';

export const store = configureStore({
  reducer: {
    productSections: productSectionsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
