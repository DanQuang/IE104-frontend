import { combineReducers } from "@reduxjs/toolkit";
import appReducer from './slices/app';
import chatReducer from './slices/chat';
import authReducer from './slices/auth';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

// Tạo bộ lưu trữ giả (noop storage) cho môi trường không hỗ trợ window
const createNoopStorage = () => {
    return {
        getItem: () => Promise.resolve(null),
        setItem: (_key, value) => Promise.resolve(value),
        removeItem: () => Promise.resolve(),
    };
};

// Lựa chọn bộ lưu trữ: localStorage nếu có window, noop storage nếu không
const storage = 
    typeof window !== 'undefined' 
        ? createWebStorage('local') 
        : createNoopStorage();

// Cấu hình Redux Persist
const rootPersistConfig = {
    key: 'root',
    storage,
    keyPrefix: 'redux-',
};

// Kết hợp reducer gốc
const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    chat: chatReducer,
});

// Export cấu hình và reducer
export { rootPersistConfig, rootReducer };
