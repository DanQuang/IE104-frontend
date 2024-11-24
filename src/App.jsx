import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import GoToTop from './component/GoToTop/GoToTop';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GoToTop /> {/* Đặt GoToTop ở đây để hiển thị trên mọi trang */}
    </>
  );
}

export default App;
