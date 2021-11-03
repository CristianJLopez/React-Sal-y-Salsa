import React, {Fragment, useState} from 'react';
import "../../css/UserAuth.css"
import Swal from 'sweetalert2';

const AddProduct = ()=> {

    const [product, setProduct] = useState({
        name: '',
        price: null,
        Image: null
    });

    const handleChange = (e) =>{
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) =>{
        setProduct({
            ...product,
            image: e.target.files[0]
        });
    };

    const handleSubmit = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('image', product.image);

        saveProduct(formData);

    };

    const saveProduct = formData =>{
        Swal.fire(
            'Producto Nuevo',
            'Agregado',
            'success'
        )
    };

    return(
        <Fragment>
            <hr/>
            <h3>Agregar nuevo producto </h3>
            <br/>
            <form onSubmit = {handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nombre:  &nbsp; </label>
                    <input type="text" className="form-control-sm" name="name" placeholder="Ingrese nombre"
                     defaultValue={product.name} onChange={handleChange} required/>&nbsp;&nbsp;
                     <label htmlFor="price">Precio: &nbsp; </label>
                    <input type="number" step="1" min="0"
                     className="form-control-sm" name="price" placeholder="Ingrese precio"
                     defaultValue={product.price} onChange={handleChange} required/>&nbsp;&nbsp;
                      <label htmlFor="image">Imagen: &nbsp; </label>
                    <input type="file" className="form-control-sm" name="image" 
                      onChange={handleImage} />
                </div>
                <br/>
                <button type="submit" className="btn-success  btn-lg">Agregar producto</button>
            </form>
        </Fragment>
    );
};

export default AddProduct;