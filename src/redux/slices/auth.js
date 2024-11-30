import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'; // Import js-cookie để thao tác với cookie

// Lấy token từ cookie (nếu có)
const tokenFromCookie = Cookies.get("authToken");

const initialState = {
    isLoggedIn: !!tokenFromCookie, // Nếu có token trong cookie thì đã đăng nhập
    token: tokenFromCookie || "", // Gán token từ cookie
    user: null, // User info sẽ được set sau
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn: (state, action) => {
            const { token } = action.payload;
            Cookies.set("authToken", token, { expires: 7, secure: true });
            state.isLoggedIn = true;
            state.token = token;
        },
        setUserInfo: (state, action) => {
            state.user = action.payload.user;
        },
        signOut: (state) => {
            // Xóa token khỏi cookie
            Cookies.remove("authToken");

            state.isLoggedIn = false;
            state.token = "";
            state.user = null;
        }
    }
});

export const { logIn, signOut, setUserInfo } = authSlice.actions;
export default authSlice.reducer;
