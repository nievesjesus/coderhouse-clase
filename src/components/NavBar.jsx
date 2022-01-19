import React from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Image from 'react-bootstrap/Image'
import { Search } from 'react-bootstrap-icons';
import logo from '../assets/images/logo.svg';

const NavBar = () => {
    return (
        <Navbar sticky="top" style={{ fontSize: "0.8rem", backgroundColor: "#fff159" }} variant="light" expand="lg">
            <Container> 
                <Navbar.Brand href="#home"><Image height={22} src={logo} /></Navbar.Brand>
                    <Form className="d-flex">
                        <InputGroup>
                            <InputGroup.Text><Search /></InputGroup.Text>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" />
                        </InputGroup>                    
                    </Form>                  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav-2">
                <Nav>
                    <Nav.Link href="#categorias">Categorias</Nav.Link>
                    <Nav.Link href="#categorias">Ofertas</Nav.Link>
                    <Nav.Link href="#categorias">Historial</Nav.Link>                
                </Nav>                 
                </Navbar.Collapse>

                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>                   
                    <NavDropdown title={<><Image width={22} src='https://nievesjesus.com/images/avatar-1.svg' fluid={true} roundedCircle={true} /> Jesus</>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#">Configuracion</NavDropdown.Item>
                        <NavDropdown.Item href="#">Perfil</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#">Salir</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#categorias"> Mis Compras</Nav.Link>                
                    <Nav.Link href="#link"><CartWidget /></Nav.Link>
                </Nav>
                </Navbar.Collapse>              
            </Container>
        </Navbar>
    )
}

export default NavBar;