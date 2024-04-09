import { createSlice } from '@reduxjs/toolkit';

import { SEARCH_STATE } from './search.settings';

const search = createSlice({
  name: 'productSections',
  initialState: SEARCH_STATE,
  reducers: {},
});

export const searchReducer = search.reducer;
