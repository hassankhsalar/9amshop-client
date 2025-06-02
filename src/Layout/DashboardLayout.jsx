import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";


const DashboardLayout = () => {
    const location = useLocation();
    console.log(location);
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