import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button className="btn-primary" onClick={() => loginWithRedirect()}>Ingresar al area administrativa</button>;
  };
  
  export default LoginButton;