import React, { Component } from 'react';
import LoginButton from '../buttons/Login';
import Contacto from '../Contacto';
import Home from '../Home';


export default class Header extends Component {
    render() {
        return (
            <>
               <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="menu">
                 <div className="container" id="header-container">
                     <a className="navbar-brand" id="title" href={Home}>sal&salsa  </a> <LoginButton/>
                     <a href={Contacto}> Contacto </a>
                 </div>
                </nav>
            </>
        )
    }
}
