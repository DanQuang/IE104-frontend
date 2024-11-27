import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Feature from "../pages/Feature/Feature";
import Pricing from "../pages/Pricing/Pricing";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/Registerpage";
import ForgotPasswordPage from "../pages/Auth/ForgotPassword/ForgotPassword";
// import ChatPage from "../pages/Chat/[id]/Chatpage";

// Định nghĩa router
export const router = createBrowserRouter([
  {
    path: "/", 
    element: <DefaultLayout />,
    children: [
      {
        path: "", 
        element: <HomePage />,
      },
      {
        path: "home", 
        element: <HomePage />,
      },
      {
        path: "feature", 
        element: <Feature />,
      },
      {
        path: "pricing", 
        element: <Pricing/>,
      },
      // {
      //   path: "chat/:id", // Route động cho trang chat
      //   element: <ChatPage />,
      // },
    ],
  },
  {
    path: "/auth", 
    element: <Outlet />,
    children: [
      {
        path: "login", 
        element: <LoginPage/>,
      },
      {
        path: "register", 
        element: <RegisterPage/>,
      },
      {
        path: "forgot-password", 
        element: <ForgotPasswordPage/>,
      },
    ],
  },
]);
