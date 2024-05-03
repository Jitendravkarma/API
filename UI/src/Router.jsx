import AllOutlet from "./components/Outlet";
import Product1 from "./pages/Product1/Product1";
import Product2 from './pages/Product2/Product2';
import Details from "./pages/Details/Details";
import Cart from "./pages/Cart/Cart";
import ThreeCol from "./pages/ThreeColumn/Three";
import FourCol from "./pages/FourColumn/Four";
import RightBar from "./pages/RightBar/RightBar";
import SideBar from "./pages/Sidebars/Sidebar";
import { Routes, Route } from "react-router-dom";
const AllRoutes = ()=>{
    return (
        <div id="mm_grow">
            <Routes>
                <Route path="/" element={<AllOutlet/>}>
                    <Route index element={<Product1/>}/>
                    <Route path="/product-page-2" element={<Product2/>}/>
                    <Route path="/detail-page" element={<Details/>}/>
                    <Route path="/add-to-cart" element={<Cart/>}/>
                    <Route path="/column-3" element={<ThreeCol/>}/>
                    <Route path="/column-4" element={<FourCol/>}/>
                    <Route path="/product-sidebar-all" element={<SideBar/>}/>
                    <Route path="/product-rightsidebar" element={<RightBar/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default AllRoutes;