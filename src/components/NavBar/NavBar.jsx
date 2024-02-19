import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faGamepad } from "@fortawesome/free-solid-svg-icons";
import ModalPopup from "../ModalPopup/ModalPopup";
import { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faGamepad} />
            GAME CENTER
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Consolas</Nav.Link>
              <NavDropdown title="Videojuegos" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Playstation</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Nintendo</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Xbox</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faCartShopping} />
              </Nav.Link>
            </Nav>
            <Form className="d-flex gap-3">
              <Button variant="primary">Log In</Button>
              <Button variant="outline-primary" onClick={handleShow}>
                Sign Up
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalPopup show={show} handleClose={handleClose}></ModalPopup>
    </>
  );
}

export default NavBar;
