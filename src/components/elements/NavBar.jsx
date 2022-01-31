import React from 'react';
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Image from 'react-bootstrap/Image'
import { Search } from 'react-bootstrap-icons';
import logo from '../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { CartProvider } from '../../contexts/CarContext';

const NavBar = ({ categories }) => {

    return (
        <Navbar sticky="top" style={{ fontSize: "0.8rem", backgroundColor: "#fff159" }} variant="light" expand="lg">
            <Container> 
                <Navbar.Brand as={Link} to="/"><Image height={22} src={logo} /></Navbar.Brand>
                    <Form style={{ position: "relative" }} className="d-flex">
                        <InputGroup>
                            <InputGroup.Text><Search /></InputGroup.Text>
                            <FormControl id="inlineFormInputGroupUsername" placeholder="Buscar" />
                        </InputGroup>                  
                    </Form>                  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav-2">
                <Nav>
                    <Nav.Link as={NavLink} to="/" activeclassname="active">Inicio</Nav.Link> 
                    <NavDropdown title={"Categorias"} id="basic-nav-dropdown">                      
                        {categories.slice(0,6).map(category => { return (<NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`}>{category.name}</NavDropdown.Item>)})}
                        <NavDropdown.Item as={Link} to={`/categories`}>Ver todas</NavDropdown.Item>                          
                    </NavDropdown>             
                    <Nav.Link as={NavLink} to="/offers" activeclassname="active">Ofertas</Nav.Link>
                    <Nav.Link as={NavLink} to="/history" activeclassname="active">Historial</Nav.Link>                
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
                    <Nav.Link href="#link"><CartProvider><CartWidget /></CartProvider></Nav.Link>
                </Nav>
                </Navbar.Collapse>              
            </Container>
        </Navbar>
    )
}

export default NavBar;