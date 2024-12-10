import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chats: [],
    messagesByChatId: {}, // Lưu tin nhắn theo chatId
    selectedMode: "chattergeist",
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
        const { chatId, messages } = action.payload;
        state.messagesByChatId[chatId] = messages;
      },
  
      addMessage: (state, action) => {
        const { chatId, message } = action.payload;
        if (!state.messagesByChatId[chatId]) {
          state.messagesByChatId[chatId] = [];
        }
        state.messagesByChatId[chatId].push(message);
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
        state.messagesByChatId = {};
      },
  
      setSelectedMode: (state, action) => {
        state.selectedMode = action.payload.type;
      },
    },
  });
  
  export const {
    setChats,
    addChat,
    deleteChat,
    setMessages,
    addMessage,
    resetChatHistory,
    setChatTitleFromMessage,
    setSelectedMode,
  } = chatSlice.actions;
  
  export default chatSlice.reducer;
  