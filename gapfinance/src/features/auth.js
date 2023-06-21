import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.gapfinance.ng';

export const getUserFromStorage = () => {
  const user = localStorage.getItem('user');
  const result = user ? JSON.parse(user) : {};
  return result;
};
const getTokenFromStorage = () => {
  const token = localStorage.getItem('gapToken');
  const result = token ? token : '';
  return result;
};

const initialState = {
  loading: false,
  error: false,
  errorMsg: '',
  confirmPass: false,
  isActivated: false,
  isAuthorized: false,
  isUserLogout: false,
  success: false,
  isLoggedIn: false,
  user: getUserFromStorage(),
  token: getTokenFromStorage(),
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.post(`${baseUrl}/auth/register`, user, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
      return data;
    } catch (error) {
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const activate = createAsyncThunk(
  'auth/activate',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(
        `${baseUrl}/auth/activate-account`,
        details,
        {
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
        }
      );
      return response.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const authorize = createAsyncThunk(
  'auth/authorize',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/authorize`, details, {
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
      });
      return response.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, details, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue('Invalid credentials');
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (details, thunkAPI) => {
    try {
      const response = await axios.post(`${baseUrl}/auth/login`, details, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      });
      return response.data;
    } catch (error) {
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const setUserPassword = createAsyncThunk(
  'auth/setPassword',
  async (details, thunkAPI) => {
    const token = thunkAPI.getState().auth?.token;
    try {
      const response = await axios.post(
        `${baseUrl}/auth/set-password`,
        details,
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getAuthUser = createAsyncThunk(
  'auth/getAuthUser',
  async (details, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/auth/user`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${thunkAPI.getState()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);
export const checkToken = createAsyncThunk(
  'auth/checkToken',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${baseUrl}/auth/check-token/${token}`);
      return response.data;
    } catch (error) {
      console.log(error);
      if (error.message === 'Network Error') {
        return thunkAPI.rejectWithValue('Please connect to internet');
      }
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = false;
    },
    resetSuccess: (state) => {
      state.success = false;
      state.loading = false;
    },
    logoutUser: (state) => {
      state.user = {};
      state.isUserLogout = true;
      state.isAuthorized = false;
      state.isLoggedIn = false;
      localStorage.removeItem('user');
      localStorage.removeItem('gapToken');
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.user = payload.data;
      localStorage.setItem('user', JSON.stringify(payload.data));
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.errorMsg = payload;
    },
    [activate.pending]: (state) => {
      state.loading = true;
    },
    [activate.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isActivated = true;
      state.user = payload.data;
      localStorage.setItem('user', JSON.stringify(payload.data));
    },
    [activate.rejected]: (state, { payload }) => {
      state.loading = true;
      state.error = true;
      state.success = false;
      state.errorMsg = payload;
    },
    [authorize.pending]: (state) => {
      state.loading = true;
    },
    [authorize.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isAuthorized = true;
      state.user = payload.data.user;
      localStorage.setItem('user', JSON.stringify(payload.data.user));
      state.token = localStorage.setItem('gapToken', payload.data.token);
    },
    [authorize.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload;
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = payload.data;
      localStorage.setItem('user', JSON.stringify(payload.data));
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload;
    },
    [setUserPassword.pending]: (state) => {
      state.loading = true;
    },
    [setUserPassword.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.confirmPass = true;
      state.user = payload.data.user;
      localStorage.setItem('user', JSON.stringify(payload.data.user));
      state.token = localStorage.setItem('gapToken', payload.data.token);
    },
    [setUserPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = payload;
    },
  },
});

export const { resetError, resetSuccess, logoutUser } = authSlice.actions;

export default authSlice.reducer;
