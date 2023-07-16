import React, { useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Login from "./Login";
import { LiaUserCircle } from "react-icons/lia";
import NavbarForm from "./NavBarForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../logo.png";


const MyNavBar = () => {
  const [shoWAddRestaurant, setshoWAddRestaurant] = useState(false);

  const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);


  const tokenAndAdminPresent = () => {
    const token = localStorage.getItem('token');
    if (token !== null && utenteLoggato && utenteLoggato.role === 'ADMIN') {
      return true;
    }
    return false
  }

  return (
    <>
      {utenteLoggato !== null && (
        <div className="bg-light text-right d-flex justify-content-end p-2">
          <Link
            className="text-info fs-5 text-decoration-none ms-3 text-end add-restaurant-link fw-bold"
            hidden={!tokenAndAdminPresent()}
            to="/addRestaurant"
          >
            Registra il tuo ristorante
          </Link>
        </div>
      )}
      <Navbar className="sticky-top navbar-with-shadow" bg="light" expand="lg" >
        <Container>
          <Link className="navBar-brand" to={"/"}>
            <img
              src={logo}
              alt="logo"
              width={85}
              height={85}
            />
          </Link>
          <Navbar.Toggle   aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav">
            <Nav className="me-auto">
            
            </Nav>
            <NavbarForm />
            <Nav className="ms-auto">
              {utenteLoggato === null ? (
                <Dropdown >
                  <Dropdown.Toggle className="text-light btn-lg btn-block" style={{backgroundColor: "#17a2b8", border: 'none' }}  id="dropdown-basic">
                    <LiaUserCircle  className="text-light fs-3" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ right: "0", left: "auto" }}>
                    <Login />
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle className="text-light btn-lg btn-block bg-info border-0" id="dropdown-basic">
                    <span className="fs-6">{utenteLoggato.nome}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ right: "0", left: "auto" }}>
                    <Link className="nav-link" to={"/profilePage"}>profilo di: {utenteLoggato.nome}</Link>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
