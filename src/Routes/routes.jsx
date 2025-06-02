import {
  createBrowserRouter,
} from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";
import SignUp from "../pages/Authentication/SignUp";
import SignIn from "../pages/Authentication/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout/>,
    children: [
        {
            path: '/',
            element: <DashboardHome/>,
        }
    ]
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/signin',
    element: <SignIn/>,
  }
]);