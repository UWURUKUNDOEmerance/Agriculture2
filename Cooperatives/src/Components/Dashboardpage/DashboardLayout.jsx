import React from "react";
import Sidebar  from"./Sidebar";
import { Outlet } from "react-router-dom";
function DashboardLayout(){
return(

    <>
    <Sidebar/>
 <Outlet/>
    </>
)
}
export default DashboardLayout;