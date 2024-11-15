// Import necessary modules
import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../pages/Homepage/Homepage";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Feature from "../pages/Feature/Feature";

// Define the router configuration
export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Outlet />,
    children: [
      // Chỉ giữ lại các phần tử đã được import
      // Nếu LoginPage, SignupPage, ForgotPasswordPage chưa được import, bạn cần bỏ chúng khỏi router
    ],
  },
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
    ],
  },
]);
