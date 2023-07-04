import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Login from "./Login";
import { LiaUserCircle } from "react-icons/lia";
import NavbarForm from "./NavBarForm";
import { Link } from "react-router-dom";

const MyNavBar = () => {
  return (
    <>
      <div className="bg-light text-right d-flex justify-content-end p-2">
        <Link className="text-info fs-5 text-decoration-none ms-3 text-end" to="/addRestaurant">
          Registra il tuo ristorante
        </Link>
      </div>
      <Navbar className="sticky-top navbar-with-shadow" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://th.bing.com/th/id/R.d4444042ff824f986d8921872b6d433b?rik=MtQXglCoUEhONg&riu=http%3a%2f%2fupaluku.cz%2fwp-content%2fuploads%2flogo_white.png&ehk=iZlktW0OQm6mHu%2bSMQY2QLXWfztsLAgfaAjzotLy9qA%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
              width={45}
              height={45}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/restaurant">Restaurant</Nav.Link>
              <Nav.Link href="/registrationPage">Contact</Nav.Link>
            </Nav>
            <NavbarForm />
            <Nav className="ms-auto">
              <Dropdown>
                <Dropdown.Toggle className="text-light btn-lg btn-block" variant="info" id="dropdown-basic">
                  <LiaUserCircle className="text-light fs-3" />
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ right: "0", left: "auto" }}>
                  <Login />
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
