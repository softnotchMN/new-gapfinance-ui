import { configureStore } from '@reduxjs/toolkit';
import authSlice from './features/auth';
import usersSlice from './features/users';
import settingsSlice from './features/settings';
import permissionSlice from './features/permission';
import transactionsSlice from './features/transactions';
import accountSlice from './features/account';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    users: usersSlice,
    settings: settingsSlice,
    permission: permissionSlice,
    transactions: transactionsSlice,
    account: accountSlice,
  },
});
