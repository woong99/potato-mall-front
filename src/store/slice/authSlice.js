import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        adminAccessToken: null,
        adminExpiresIn: null,
        userAccessToken: null,
        userExpiresIn: null,
    },
    reducers: {
        setAdminAccessToken: (state, action) => {
            state.adminAccessToken = action.payload.token;
            state.adminExpiresIn = action.payload.expiresIn;
        },
        removeAdminAccessToken: (state) => {
            state.adminAccessToken = null;
            state.adminExpiresIn = null;
        },
        setUserAccessToken: (state, action) => {
            state.userAccessToken = action.payload;
        },
    },
});

export const { setAdminAccessToken, removeAdminAccessToken, setUserAccessToken } =
    authSlice.actions;

export default authSlice.reducer;
