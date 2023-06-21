import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (pageCount = 1, limit = 10, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/users?page=${pageCount}&limit=${limit}`,
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
export const fetchUserById = createAsyncThunk(
  'users/fetchUserById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseUrl}/users/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const editUser = createAsyncThunk(
  'users/editUser',
  async (id, update, thunkAPI) => {
    try {
      const { data } = await axios.put(`${baseUrl}/users/${id}`, update, {
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

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/users/${id}`, {
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

export const changePassword = createAsyncThunk(
  'users/changePassword',
  async (id, update, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/users/${id}/change-password`,
        update,
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

export const changeRole = createAsyncThunk(
  'users/Role',
  async (id, update, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/users/${id}/change-role`,
        update,
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

export const changePin = createAsyncThunk(
  'users/changePin',
  async (id, update, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/users/${id}/change-pin`,
        update,
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

const initialState = {
  loading: false,
  error: false,
  success: false,
  accountInfo: {},
};
const usersSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [fetchUserById.pending]: (state) => {
      state.loading = true;
    },
    [fetchUserById.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [fetchUserById.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [editUser.pending]: (state) => {
      state.loading = true;
    },
    [editUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload;
    },
    [editUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [changePassword.pending]: (state) => {
      state.loading = true;
    },
    [changePassword.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [changePassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [changePin.pending]: (state) => {
      state.loading = true;
    },
    [changePin.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [changePin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
    [changeRole.pending]: (state) => {
      state.loading = true;
    },
    [changeRole.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [changeRole.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default usersSlice.reducer;
