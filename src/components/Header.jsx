import React, { Component } from 'react';
import LoginButton from './buttons/Login';


export default class Header extends Component {
    render() {
        return (
            <>
               <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="menu">
                 <div className="container">
                     <a className="navbar-brand" id="title" href="index">sal&salsa  </a> <LoginButton/>
                     
                 </div>
                </nav>
            </>
        )
    }
}
