import { logIn, setUserInfo, signOut } from '../redux/slices/auth';
import { addChat, setChats, addMessage, setChatTitleFromMessage, setSelectedMode, resetChatHistory } from '../redux/slices/chat';
import { toggleChatSideBar } from '../redux/slices/app';
import { store } from '../redux/store';  // Import store để sử dụng getState

const setAuthData = (dispatch) => {
  console.log('--- Test Auth Actions ---');

  // Reset dữ liệu auth trước khi set lại
  dispatch(signOut());

  // Đăng nhập với token mẫu
  const sampleToken = 'sample-token-123';
  const userData = { id: 1, name: 'John Doe' };

  dispatch(logIn({ token: sampleToken }));
  dispatch(setUserInfo({ user: userData }));

  // Kiểm tra dữ liệu auth đã lưu vào Redux
  console.log('State sau khi setAuthData:', store.getState().auth);
};

const setChatData = (dispatch) => {
  console.log('--- Test Chat Actions ---');

  // Reset dữ liệu chat trước khi thêm mới
  dispatch(resetChatHistory());

  // Tạo dữ liệu chat mẫu
  const sampleChats = [
    { id: 1, title: 'Chat 1' },
    { id: 2, title: 'Chat 2' },
    { id: 3, title: 'Chat 3' },
    { id: 4, title: 'Chat 4' },
  ];

  const sampleMessages = [
    { chatId: 1, message: { id: 1, text: 'Hello, Chat 1!' } },
    { chatId: 2, message: { id: 2, text: 'Hello, Chat 2!' } },
    { chatId: 3, message: { id: 3, text: 'Hello, Chat 3!' } },
    { chatId: 4, message: { id: 4, text: 'Hello, Chat 4!' } },
  ];

  // Thêm các chat mẫu vào Redux
  sampleChats.forEach(chat => dispatch(addChat(chat)));
  
  // Set danh sách chats mẫu vào Redux
  dispatch(setChats(sampleChats));

  // Thêm tin nhắn vào các chat
  sampleMessages.forEach(({ chatId, message }) => dispatch(addMessage({ chatId, message })));

  // Thay đổi tiêu đề của chat đầu tiên
  dispatch(setChatTitleFromMessage({ chatId: 1, title: 'Updated Chat 1' }));

  // Thêm chế độ chọn chat (chế độ giả định)
  dispatch(setSelectedMode({ type: 'chattergeist' }));

  // Kiểm tra dữ liệu chat đã lưu vào Redux
  console.log('State sau khi setChatData:', store.getState().chat);
};

const setAppData = (dispatch) => {
  console.log('--- Test App Actions ---');

  // Toggle sidebar mở hoặc đóng
  dispatch(toggleChatSideBar());

  // Kiểm tra trạng thái sidebar trong Redux
  console.log('State sau khi setAppData:', store.getState().app);
};

// Export các hàm để sử dụng trong React hoặc Node.js
export { setAuthData, setChatData, setAppData };
