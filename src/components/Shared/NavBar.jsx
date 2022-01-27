import React from 'react';
import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Image from 'react-bootstrap/Image'
import { Search } from 'react-bootstrap-icons';
import logo from '../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = ({ categories }) => {

    const [onSearch, setOnSearch ] = useState(false);
    const [query, setOnQuery] = useState("");

    const onSearchCange = (event) => {
        event.preventDefault();
        if (/^(?:[A-Za-z]+|\d+)$/.test(event.target.value)) {
            console.log("letras")
            setOnQuery(event.target.value)
        } 
    }

    const onKeyDownSearch = (event) => {
        let blockList = ["a", "e", "i", "o", "u"];
        if (blockList.includes(event.key.toLowerCase())) {
            event.preventDefault();
        }
    }

    return (
        <Navbar sticky="top" style={{ fontSize: "0.8rem", backgroundColor: "#fff159" }} variant="light" expand="lg">
            <Container> 
                <Navbar.Brand as={Link} to="/"><Image height={22} src={logo} /></Navbar.Brand>
                    <Form style={{ position: "relative" }} className="d-flex">
                        <InputGroup>
                            <InputGroup.Text><Search /></InputGroup.Text>
                            <FormControl onKeyDown={onKeyDownSearch} id="inlineFormInputGroupUsername" placeholder="Buscar" />
                        </InputGroup>     
                        {onSearch ?
                        <div style={{ position: "absolute", left: 0, top:36, width: 250, height: 300, backgroundColor: "white"}}>
                            <li onClick={ () => setOnSearch(false)}>resultado </li>
                            <li onClick={ () => setOnSearch(false)}>resultado </li>
                            <li onClick={ () => setOnSearch(false)}>resultado </li>
                            <li onClick={ () => setOnSearch(false)}>resultado </li>
                            <li onClick={ () => setOnSearch(false)}>resultado </li>
                            <li onClick={ () => setOnSearch(false)}>resultado </li>                                
                        </div>                          
                        :
                        null
                        }               
                      
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
                    <Nav.Link href="#link"><CartWidget /></Nav.Link>
                </Nav>
                </Navbar.Collapse>              
            </Container>
        </Navbar>
    )
}

export default NavBar;