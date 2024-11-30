import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./base";

// Tạo Redux store với Redux Persist
export const store = configureStore({
    reducer: persistReducer(rootPersistConfig, rootReducer), // Tích hợp Redux Persist với reducer gốc
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Tắt kiểm tra tuần tự hóa
            immutableCheck: false,   // Tắt kiểm tra tính bất biến
        }),
});

export const persistor = persistStore(store);
