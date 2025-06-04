import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../globalComponents/Navbar";
import Footer from "../globalComponents/Footer";
import Sidebar from "../globalComponents/Sidebar";

const DashboardLayout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Navbar />

      <div className="flex">
        <aside>
            <Sidebar/>
        </aside>
        <div className="min-h-screen w-full">
          <Outlet></Outlet>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;
