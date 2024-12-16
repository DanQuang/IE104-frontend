import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Feature from "../pages/Feature/Feature";
import Pricing from "../pages/Pricing/Pricing";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/Registerpage";
import ForgotPasswordPage from "../pages/Auth/ForgotPassword/ForgotPassword";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Donation from "../pages/Donation/Donation";
import ChatPage from "../pages/Chat/[id]/Chatpage";
import ChatAreaLayout from "../pages/Chat/ChatAreaLayout";
import ProfilePage from "../pages/Auth/ProfilePage/ProfilePage";
import RegisterTier from "../pages/Pricing/RegisterTier";
import Donate from "../pages/Donation/Donate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />, // Layout chính cho các trang
    children: [
      {
        index: true, // Trang chủ khi truy cập vào "/"
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
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "chat",
        children: [
          {
            index: true, // Nếu chỉ truy cập "/chat"
            element: <ChatAreaLayout />,
          },
          {
            path: ":id", // Nếu truy cập "/chat/:id"
            element: <ChatAreaLayout />,
          },
        ],
      },
      {
        path: "donation",
        element: <Donation />
      },
      {
        path: "chat/:id", // Route động cho trang chat
        element: <ChatPage />,
      },
      {
        path: "auth/register-tier",
        element: <RegisterTier/>
      },

      {
        path: "auth/profile",
        element: <ProfilePage />,
      },
      {
        path: "/donate",
        element: <Donate />
      }
    ],
  },
  {
    path: "/auth",
    element: <Outlet />, // Outlet render các route con trong auth
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPasswordPage />,
      },

    ],
  },
]);
