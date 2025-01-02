
import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";
import Footer from "../component/footer";

let Layout = () => {
  return (
    <>
      <div>
        <Navbar />

        <Outlet />
        
        <hr />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
