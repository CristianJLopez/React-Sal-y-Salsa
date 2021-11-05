import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddProduct from "./AddProduct";
import LogoutButton from "../buttons/Logout"


const UserAuthenticated = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando informacion...</div>;
  }

  return (
    isAuthenticated && (
      <div className="row">
        <div className="col-6" id="col1">
        <br/><br/>
        <h5>Nombre funcionario: <small><i>{user.name}</i></small> </h5>
        <p>Foto de perfil</p>
        <img src={user.picture} alt={user.name} />
        <br/><br/>
        <p>Correo: {user.email}</p>

        <br/>
        <LogoutButton/>
        </div>
        <div className="col-6">
        <AddProduct/>
        </div>
        
        
      </div>
      
    )
  );
};

export default UserAuthenticated;