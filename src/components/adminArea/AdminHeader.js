import React from "react";
import LogoutButton from "../buttons/Logout";

const AdminHeader = () =>{

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="menu">
        <div className="container">
            <a className="navbar-brand" id="title" href="index">sal&salsa  </a> <LogoutButton/>
        </div>
    </nav>
    
    );
};

export default AdminHeader;