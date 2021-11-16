import React from "react";

import Footer from "./Footer";
import MenuPrincipal from "./MenuPrincipal";

 function Layout(props){
     return <>
        <div className="wrapper">
           <MenuPrincipal/>
                <div className="container"> {props.children} </div>
             <Footer/>
        </div>
        
     </>;
 }
 export default Layout;