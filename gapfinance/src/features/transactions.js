import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAccounts',
  async (pageCount = 1, limit = 10, id, thunkAPI) => {
    const { token, user } = thunkAPI.getState().auth;
    try {
      const { data } = await axios.get(
        `${baseUrl}/transactions?page=${pageCount}&limit=${limit}&userId=${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const makeTransfer = createAsyncThunk(
  'transactions/makeTransfer',
  async (details, thunkAPI) => {
    const { token, user } = thunkAPI.getState().auth;
    try {
      const { data } = await axios.post(
        `${baseUrl}/transactions/transfer`,
        details,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  success: false,
  transactions: [],
};
const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTransactions.pending]: (state) => {
      state.loading = true;
    },
    [fetchTransactions.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.transactions = payload;
    },
    [fetchTransactions.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [makeTransfer.pending]: (state) => {
      state.loading = true;
    },
    [makeTransfer.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.transactions = payload;
    },
    [makeTransfer.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default transactionSlice.reducer;
