import { Outlet } from "react-router-dom";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";


const DashboardLayout = () => {
    return (
        <div>
            <Navbar/>
            
            <div className="min-h-screen">
                <Outlet></Outlet>
            </div>
            
            <Footer/>
        </div>
    );
};

export default DashboardLayout;