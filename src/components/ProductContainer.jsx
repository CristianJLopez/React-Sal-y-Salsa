import React, { Component } from 'react';
import Product from './Product';
import Img1 from '../images/arroz_mar.jpg'


export default class ProductContainer extends Component {
    render() {
        return (
         
                <div className="card-deck mb-3 text-center" id="lista-productos" >
                    <Product nombre="Arroz de mar" precio="22000" imagen={Img1}/>
                    <Product nombre="Camarones al ajillo" precio="33000" imagen={Img1}/>
                    <Product nombre="Mojarra frita" precio="18000" imagen={Img1}/>
                </div>
            
        )
    }
}
