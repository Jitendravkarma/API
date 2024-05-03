import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const AllOutlet = () => {
  return (
    <>
      <Navbar heading={"SHOP_NAME"}/>
      <Outlet />
      <Footer />
    </>
  );
};
export default AllOutlet;
