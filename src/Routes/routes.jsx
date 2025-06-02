import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/DashboardLayout";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

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
]);