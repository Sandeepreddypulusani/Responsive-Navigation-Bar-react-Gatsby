import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from "react-bootstrap";


const Menu = () => (
<>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Menu Bar</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/">About</Nav.Link>
      <Nav.Link href="/">Portfolio</Nav.Link>
      <Nav.Link href="/">Contact</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
</>
)

export default Menu
