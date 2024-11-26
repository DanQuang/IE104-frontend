import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Feature from "../pages/Feature/Feature";
import Pricing from "../pages/Pricing/Pricing";
// import ChatPage from "../pages/Chat/[id]/Chatpage";

// Định nghĩa router
export const router = createBrowserRouter([
  {
    path: "/", // Layout chính cho trang
    element: <DefaultLayout />,
    children: [
      {
        path: "", // Route gốc
        element: <HomePage />,
      },
      {
        path: "home", // Route gốc
        element: <HomePage />,
      },
      {
        path: "feature", // Route tính năng
        element: <Feature />,
      },
      {
        path: "pricing", // Route tính năng
        element: <Pricing/>,
      },
      // {
      //   path: "chat/:id", // Route động cho trang chat
      //   element: <ChatPage />,
      // },
    ],
  },
  {
    path: "/auth", // Nếu cần sử dụng auth routes
    element: <Outlet />,
    children: [
      // Định nghĩa các route auth nếu cần
      // Ví dụ:
      // { path: "login", element: <LoginPage /> },
      // { path: "signup", element: <SignupPage /> },
    ],
  },
]);
