import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  countriesData: [],
  searchName: '',
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

export const fetchCountryDetails = createAsyncThunk('countries/fetchCountryDetails', async (code) => {
  const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    searchByTerm: (state, action) => {
      state.searchName = action.payload;
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
    builder.addCase(fetchCountryDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCountryDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.countryDetailsData = action.payload;
      state.message = '';
    });
    builder.addCase(fetchCountryDetails.rejected, (state, action) => {
      state.loading = false;
      state.countryDetailsData = [];
      state.message = action.error;
    });
  },

});

export default countriesSlice.reducer;
export const { searchByTerm } = countriesSlice.actions;
