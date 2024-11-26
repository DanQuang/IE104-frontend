import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    token: "",
    user: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            const { isLoggedIn, token } = action.payload;
            state.isLoggedIn = isLoggedIn;
            state.token = token;
        },
        setUserInfo: (state, action) => {
            state.user = action.payload.user;
        },
        signOut: (state) => {
            state.isLoggedIn = false;
            state.token = "";
            state.user = null;
        }
    }
});

export const { logIn, signOut, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
