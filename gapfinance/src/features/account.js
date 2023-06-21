import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

export const fetchAccounts = createAsyncThunk(
  'settings/fetchAccounts',
  async (pageCount = 1, limit = 10, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}/accounts?page=${pageCount}&limit=${limit}`
      );
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchAccountById = createAsyncThunk(
  'settings/fetchAccounts',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseUrl}/accounts/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const fetchAccountByNumber = createAsyncThunk(
  'settings/fetchAccounts',
  async (number, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseUrl}/accounts/phone/${number}`);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const createAccount = createAsyncThunk(
  'settings/createPermission',
  async (permission, thunkAPI) => {
    try {
      const { data } = await axios.post(`${baseUrl}/accounts`, permission, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        Authorization: `Bear userToken`,
      });
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const makeDormant = createAsyncThunk(
  'settings/makeDormant',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/accounts/${id}/make-dormant`,
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          Authorization: `Bear userToken`,
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const activate = createAsyncThunk(
  'settings/activate',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(`${baseUrl}/accounts/${id}/activate`, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        Authorization: `Bear userToken`,
      });
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const closeAccount = createAsyncThunk(
  'settings/accountAccount',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.post(`${baseUrl}/accounts/${id}/close`, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        Authorization: `Bear userToken`,
      });
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  laoding: false,
  error: false,
  success: false,
  accountInfo: {},
};
const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default accountSlice.reducer;
