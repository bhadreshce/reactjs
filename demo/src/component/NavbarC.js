import React from 'react'
import  Navbar   from 'react-bootstrap/Navbar';
import { Container, NavDropdown, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types'
import { Link, Route, NavLink  } from "react-router-dom";
 
export default function NavbarC(props) {

  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link>
                  <NavLink
            to="about"
           
          >
             {props.aboutText}
          </NavLink>
               </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
NavbarC.propTypes = {aboutText:PropTypes.string.isRequired}