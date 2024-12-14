import { createSlice } from "@reduxjs/toolkit";

// Initial state with proper initialization for messagesByChatId
const initialState = {
    chats: [],
    messagesByChatId: {},
    selectedMode: "Gói Cơ Bản",
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

    setChatTitleFromMessage: (state, action) => {
      const { chatId, title } = action.payload;
      const chat = state.chats.find(chat => chat.id === chatId);
      if (chat) {
        chat.title = title;
      }
    },

    resetChatHistory: (state) => {
      state.chats = [];
      state.messagesByChatId = {};  // Resetting the messages as well
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
