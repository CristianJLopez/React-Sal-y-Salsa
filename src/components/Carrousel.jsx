import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Logo from "../images/logo.png";
import img1 from "../images/foto1.png";
import img2 from "../images/foto2.png";
import img3 from  "../images/otra.jpg";

export default class Carrousel extends Component {
    render() {
        return (
            <div>
                
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="imagen1"
                    />
                    <Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={Logo}
                    alt="Logo"
                    />
                    <p>Sabores que exaltan tus sentidos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="imagen2"
                    />

                    <Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={Logo}
                    alt="Logo"
                    />
                    <p>Sabores que exaltan tus sentidos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="imagen3"
                    />

                    <Carousel.Caption>
                    <img
                    className="d-block w-100"
                    src={Logo}
                    alt="Logo"
                    />
                    <p>Sabores que exaltan tus sentidos</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
