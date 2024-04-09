import { createSlice } from '@reduxjs/toolkit';

import { PRODUCT_SECTIONS_STATE } from './productSections.settings';

const productSections = createSlice({
  name: 'productSections',
  initialState: PRODUCT_SECTIONS_STATE,
  reducers: {},
});

export const productSectionsReducer = productSections.reducer;
