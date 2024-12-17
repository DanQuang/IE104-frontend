import { RouterProvider } from 'react-router-dom';
import { router } from './route';
import GoToTop from './component/GoToTop/GoToTop';
import { Provider } from 'react-redux'; 
import { store } from './redux/store';  
function App() {
  return (
    <Provider store={store}> {/* Wrap your app in the Provider */}
      <>
        <RouterProvider router={router} />
        <GoToTop />
      </>
    </Provider>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';  
// import { setAuthData, setChatData, setAppData } from './test_redux/testredux'; // Import các hàm test

// const App = () => {
//   const dispatch = useDispatch();  // Lấy dispatch từ hook useDispatch

//   useEffect(() => {
//     // Gọi các hàm cập nhật dữ liệu vào Redux
//     setAuthData(dispatch);
//     setChatData(dispatch);
//     setAppData(dispatch);
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Welcome to the Redux Test App</h1>
//       {/* Các component khác của bạn */}
//     </div>
//   );
// };

// export default App;
