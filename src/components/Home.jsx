import React, { Component } from 'react';
import ProductContainer from './ProductContainer';

class Home extends Component {
    render() {
        return (
            <>
            <div className="container">
                <h1 className="display-5 mt-3" id="h1title">Nuestros Productos</h1>
                <ProductContainer/>
                <ProductContainer/>
                <ProductContainer/>
            </div>
            </>
        );
    }
}

export default Home;