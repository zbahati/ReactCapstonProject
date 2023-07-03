import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countriesData: [],
  countryDetailsData: [],
  message: '',
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (err) {
    throw err.response;
  }
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.countriesData = [];
      state.countryDetailsData = [];
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.countriesData = action.payload;
      state.message = '';
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.message = action.error;
      state.loading = false;
      state.countriesData = [];
    });
  },

});

export default countriesSlice.reducer;
export const { fetchCountriesAction } = countriesSlice.actions;
