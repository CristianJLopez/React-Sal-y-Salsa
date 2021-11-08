import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import AdminImg from "../../images/admin.PNG"

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="btn" id="btn-admin" onClick={() => loginWithRedirect()}>
      <img src={AdminImg} alt="adminImg" className="nav-link dropdown-toggle img-fluid" height="20px"
                            width="70px" ></img>
    </button>;
  };
  
  export default LoginButton;