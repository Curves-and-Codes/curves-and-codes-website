import react from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";


const RouteLayout=()=> {
  return (
    <div>
        <Navbar/>
        <div className="">
        <Outlet/>
        </div>
    </div>
  );
}


export default RouteLayout;
