import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        userAccessToken: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        removeAccessToken: (state) => {
            state.accessToken = null;
        },
        setUserAccessToken: (state, action) => {
            state.userAccessToken = action.payload;
        },
    },
});

export const { setAccessToken, removeAccessToken, setUserAccessToken } = authSlice.actions;

export default authSlice.reducer;
