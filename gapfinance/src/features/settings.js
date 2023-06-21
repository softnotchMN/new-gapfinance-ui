import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

export const fetchRoles = createAsyncThunk(
  'settings/fetchRoles',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`${baseUrl}/settings/roles`);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const createRole = createAsyncThunk(
  'settings/createRole',
  async (role, thunkAPI) => {
    try {
      const { data } = await axios.post(`${baseUrl}/settings/roles`, role, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const editRole = createAsyncThunk(
  'settings/editRole',
  async (id, update, thunkAPI) => {
    try {
      const { data } = await axios.put(
        `${baseUrl}/settings/roles/${id}`,
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
export const deleteRole = createAsyncThunk(
  'settings/deleteRole',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${baseUrl}/settings/roles/${id}`);
      return data;
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const setPermission = createAsyncThunk(
  'settings/setPermission',
  async (permission, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `${baseUrl}/settings/roles/set-permission`,
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
const initialState = {
  laoding: false,
  error: false,
  success: false,
  role: {},
  permission: {},
};
const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRoles.pending]: (state) => {
      state.loading = true;
    },
    [fetchRoles.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [fetchRoles.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [createRole.pending]: (state) => {
      state.loading = true;
    },
    [createRole.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.role = payload;
    },
    [createRole.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [editRole.pending]: (state) => {
      state.loading = true;
    },
    [editRole.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.role = payload;
    },
    [editRole.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [deleteRole.pending]: (state) => {
      state.loading = true;
    },
    [deleteRole.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.role = payload;
    },
    [deleteRole.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
    [setPermission.pending]: (state) => {
      state.loading = true;
    },
    [setPermission.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.permission = payload;
    },
    [setPermission.rejected]: (state, { payload }) => {
      state.laoding = false;
      state.error = true;
    },
  },
});

export default settingSlice.reducer;
