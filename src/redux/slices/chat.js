import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [],
    messages: [],
    selectedMode: 'chattergeist',
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        setChats: (state, action) => {
            state.chats = action.payload;
        },

        addChat: (state, action) => {
            state.chats.push(action.payload);
        },

        deleteChat: (state, action) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload);
        },

        setMessages: (state, action) => {
            state.messages = action.payload;
        },

        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },

        setChatTitleFromMessage: (state, action) => {
            const { chatId, title } = action.payload;
            const chat = state.chats.find(chat => chat.id === chatId);
            if (chat) {
                chat.title = title;
            }
        },

        resetChatHistory: (state) => {
            state.chats = [];
            state.messages = [];
        },

        setSelectedMode: (state, action) => {
            state.selectedMode = action.payload.type;
        }
    }
});

export const { 
    setChats, 
    addChat, 
    deleteChat, 
    setMessages, 
    addMessage, 
    resetChatHistory, 
    setChatTitleFromMessage, 
    setSelectedMode 
} = chatSlice.actions;

export default chatSlice.reducer;
