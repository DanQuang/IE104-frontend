import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';  // Import Provider từ react-redux
// import { store } from './redux/store';  // Import store từ redux/store
// import App from './App';  // Import App component

// ReactDOM.render(
//   <Provider store={store}> {/* Bao bọc toàn bộ ứng dụng trong Provider và truyền store */}
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
