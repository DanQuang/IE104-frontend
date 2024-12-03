import { logIn, setUserInfo, signOut } from '../redux/slices/auth';
import { addChat, setChats, addMessage, setChatTitleFromMessage, setSelectedMode } from '../redux/slices/chat';
import { toggleChatSideBar } from '../redux/slices/app';
import { store } from '../redux/store';  // Import store để sử dụng getState

const setAuthData = (dispatch) => {
  console.log('--- Test Auth Actions ---');

  // Đăng nhập với token mẫu
  dispatch(logIn({ token: 'sample-token-123' }));
  // Set thông tin người dùng
  dispatch(setUserInfo({ user: { id: 1, name: 'John Doe' } }));

  // Kiểm tra dữ liệu auth đã lưu vào Redux
  console.log('State sau khi setAuthData:', store.getState().auth);
};

const setChatData = (dispatch) => {
  console.log('--- Test Chat Actions ---');

  // Thêm các chat mẫu vào Redux
  dispatch(addChat({ id: 1, title: 'Chat 1' }));
  dispatch(addChat({ id: 2, title: 'Chat 2' }));

  // Set danh sách chats mẫu vào Redux
  dispatch(setChats([
    { id: 3, title: 'Chat 3' },
    { id: 4, title: 'Chat 4' },
  ]));

  // Thêm tin nhắn vào các chat
  dispatch(addMessage({ id: 1, text: 'Hello, Chat 1!' }));
  dispatch(addMessage({ id: 2, text: 'Hello, Chat 2!' }));

  // Thay đổi tiêu đề của chat
  dispatch(setChatTitleFromMessage({ chatId: 1, title: 'Updated Chat 1' }));

  // Thêm chế độ chọn chat
  dispatch(setSelectedMode({ type: 'chattergeist' }));

  // Kiểm tra dữ liệu chat đã lưu vào Redux
  console.log('State sau khi setChatData:', store.getState().chat);
};

const setAppData = (dispatch) => {
  console.log('--- Test App Actions ---');

  // Toggle sidebar mở
  dispatch(toggleChatSideBar());

  // Kiểm tra trạng thái sidebar trong Redux
  console.log('State sau khi setAppData:', store.getState().app);
};

// Export các hàm để sử dụng trong React hoặc Node.js
export { setAuthData, setChatData, setAppData };
