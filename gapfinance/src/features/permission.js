import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

export const fetchPermission = createAsyncThunk(
  'settings/fetchPermission',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseUrl}/settings/permissions`);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const createPermission = createAsyncThunk(
  'settings/createPermission',
  async (permission, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/settings/permissions`,
        permission,
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const editPermission = createAsyncThunk(
  'settings/editPermission',
  async (id, update, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/settings/permissions/${id}`,
        update,
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
      );
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const deletePermission = createAsyncThunk(
  'settings/deleteRole',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `${baseUrl}/settings/permissions/${id}`
      );
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
  permissions: {},
};
const permissionSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPermission.pending]: (state) => {
      state.loading = true;
    },
    [fetchPermission.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.permissions = payload;
    },
    [fetchPermission.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [createPermission.pending]: (state) => {
      state.loading = true;
    },
    [createPermission.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.permissions = payload;
    },
    [createPermission.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [editPermission.pending]: (state) => {
      state.loading = true;
    },
    [editPermission.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.permissions = payload;
    },
    [editPermission.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [deletePermission.pending]: (state) => {
      state.loading = true;
    },
    [deletePermission.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
    },
    [deletePermission.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
  },
});

export default permissionSlice.reducer;
