import { createSlice } from "@reduxjs/toolkit";

// Trạng thái ban đầu
const initialState = {
    chatsidebar: {
        open: false, // Sidebar mặc định đóng
    },
};

// Tạo slice cho trạng thái ứng dụng
const appSlice = createSlice({
    name: "app", // Tên slice
    initialState,
    reducers: {
        // Hành động để bật/tắt sidebar
        toggleChatSideBar: (state) => {
            state.chatsidebar.open = !state.chatsidebar.open;
        },
    },
});

// Export các action và reducer
export const { toggleChatSideBar } = appSlice.actions;
export default appSlice.reducer;
