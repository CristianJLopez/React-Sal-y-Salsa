import React, { Component } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import LoginButton from './buttons/Login';

export default class MenuPrincipal extends Component {
    render() {
        return (
            <div>
                <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><h1>Sal&Salsa</h1></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/contact">Contacto</Nav.Link>
      <Nav.Link href="/users">Usuarios</Nav.Link>
      
      <LoginButton/>
    </Nav>
    </Container>
  </Navbar>
</>
            </div>
        )
    }
}
