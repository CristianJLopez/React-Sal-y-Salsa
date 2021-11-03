import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AddProduct from "./AddProduct";
import AdminHeader from "./AdminHeader";


const UserAuthenticated = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Cargando informacion...</div>;
  }

  return (
    isAuthenticated && (
      <div className="contenido">
        <AdminHeader/>
        <br/>
        <img src={user.picture} alt={user.name} />
        <h3> {user.name} </h3>
        <p>Correo: {user.email}</p>
        <br/>
        <AddProduct/>
      </div>
    )
  );
};

export default UserAuthenticated;