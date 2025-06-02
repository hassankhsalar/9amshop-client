import { Outlet } from "react-router-dom";
import Navbar from "../globalComponents/Navbar";


const DashboardLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;