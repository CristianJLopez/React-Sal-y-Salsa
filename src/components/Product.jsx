import React, { Component } from 'react'

export default class Product extends Component {
    render(props) {
        return (
            <div>
                 <div className="card mb-4 shadow-sm" id="card">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-bold">{this.props.nombre}</h4>
                    </div>
                    <div className="card-body">
                        <img src={this.props.imagen} className="card-img-top"  alt="imagen1"/>
                        <h1 className="card-title pricing-card-title precio">$<span >{this.props.precio}</span></h1>
                        <a href="./nuevo.jsx" className="btn btn-block btn-success agregar-carrito" data-id="1">Agregar</a>
                    </div>
                </div>
            </div>
        )
    }
}
