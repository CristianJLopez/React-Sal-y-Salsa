import React, { Component } from 'react';
import Map from './Map';
import "../css/Footer.css";

class Footer extends Component {
    render() {
        return (
            <>
            <section id="footer">
            <div className="row">
                <div className="col">
                    <img src="images/logo.png" alt="logo"/>
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
                <div className="col" id="Map">
                   <Map/>
                </div>
            </div>
        </section>
            </>
        );
    }
}

export default Footer;