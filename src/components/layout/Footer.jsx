import React, { Component } from 'react';
import Map from '../Map';
import "../../css/Footer.css"
import Logo from "../../images/logo.png"

class Footer extends Component {
    render() {
        return (
            <>
            <div id="footer">
            <div className="row">
                <div className="col">
                    <img src={Logo} alt="logo"/>
                </div>
                <div className="col" id="enlaces">
                    <a href="../html/mapasitio.html">MAPA DEL SITIO</a>
                    <a href="../html/contactenos.html">CONTACTANOS</a>
                    <a href="../html/contactenos.html">RESERVAS</a>
                
                    <p>Restaurante sal y salsa Ltda. <br/>
                        Calle 19 No 7 - 30, Bogota <br/>
                        reservas@salysalsa.com <br/>
                        31232525321 <br/>
                        &copy;Copyright 2020</p>
                </div>
                <div className="col" id="Mapa">
                   <Map/>
                </div>
            </div>
        </div>
            </>
        );
    }
}

export default Footer;