import { logIn, setUserInfo, signOut } from "../redux/slices/auth";
import {
  addChat,
  setChats,
  addMessage,
  setChatTitleFromMessage,
  setSelectedMode,
  resetChatHistory,
} from "../redux/slices/chat";
import { toggleChatSideBar } from "../redux/slices/app";
import { store } from "../redux/store"; // Import store để sử dụng getState

const setAuthData = (dispatch) => {
  console.log("--- Test Auth Actions ---");

  // Reset dữ liệu auth trước khi set lại
  dispatch(signOut());

  // Đăng nhập với token mẫu
  const sampleToken = "sample-token-123";
  const userData = { id: 1, name: "John Doe" };

  dispatch(logIn({ token: sampleToken }));
  dispatch(setUserInfo({ user: userData }));

  // Kiểm tra dữ liệu auth đã lưu vào Redux
  console.log("State sau khi setAuthData:", store.getState().auth);
};

const setChatData = (dispatch) => {
  console.log("--- Test Chat Actions ---");

  // Reset dữ liệu chat trước khi thêm mới
  dispatch(resetChatHistory());

  // Tạo dữ liệu chat mẫu
  const sampleChats = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    title: `Chat ${index + 1}`,
    messages: []
  }));

  const sampleMessages = sampleChats.map(chat => ({
    chatId: chat.id,
    messages: Array.from({ length: 5 }, (_, index) => ({
      id: index + 1 + (chat.id - 1) * 5,
      content: `Message ${index + 1} in ${chat.title}`,
      sender_email: index % 2 === 0 ? "user@example.com" : null,  // Chọn gửi email ngẫu nhiên
    }))
  }));

  // Thêm các chat mẫu vào Redux
  sampleChats.forEach((chat) => dispatch(addChat(chat)));

  // Set danh sách chats mẫu vào Redux
  dispatch(setChats(sampleChats));

  // Thêm nhiều tin nhắn vào các chat
  sampleMessages.forEach(({ chatId, messages }) => {
    messages.forEach((message) => {
      dispatch(addMessage({ chatId, message }));
    });
  });

  // Thay đổi tiêu đề của một số chat
  dispatch(setChatTitleFromMessage({ chatId: 1, title: "Updated Chat 1" }));
  dispatch(setChatTitleFromMessage({ chatId: 5, title: "Updated Chat 55555555555555555555555555" }));
  dispatch(setChatTitleFromMessage({ chatId: 10, title: "Updated Chat 10" }));

  // Thêm chế độ chọn chat (chế độ giả định)
  dispatch(setSelectedMode({ type: "chattergeist" }));

  // Kiểm tra dữ liệu chat đã lưu vào Redux
  console.log("State sau khi setChatData:", store.getState().chat);
};

const setAppData = (dispatch) => {
  console.log("--- Test App Actions ---");

  // Toggle sidebar mở hoặc đóng
  dispatch(toggleChatSideBar());

  // Kiểm tra trạng thái sidebar trong Redux
  console.log("State sau khi setAppData:", store.getState().app);
};

// Export các hàm để sử dụng trong React hoặc Node.js
export { setAuthData, setChatData, setAppData };
