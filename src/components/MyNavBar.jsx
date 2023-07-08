import React, { useEffect, useState } from "react";
import { Button, Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import Login from "./Login";
import { LiaUserCircle } from "react-icons/lia";
import NavbarForm from "./NavBarForm";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfilePage from "./ProfilePage";


const MyNavBar = () => {
  const [shoWAddRestaurant, setshoWAddRestaurant] = useState(false);

  const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);
  const utenteLoggato2 = useSelector((stato) => stato.home.clienteLoggato);
  const utenteLoggato3 = useSelector((stato) => stato.home.clienteLoggato);

  useEffect(() => {
    if (tokenPresent()) {
      setshoWAddRestaurant(true);
    } else {
      setshoWAddRestaurant(false);
    }

  }, []);

  const tokenPresent = () => {
    const token = localStorage.getItem('token');
    if (token == null) {
      return false;
    }
    return true
  }

  return (
    <>
      {utenteLoggato !== null &&
        <div className="bg-light text-right d-flex justify-content-end p-2" >
          <Link className="text-info fs-5 text-decoration-none ms-3 text-end" hidden={!shoWAddRestaurant} to="/addRestaurant">
            Registra il tuo ristorante
          </Link>
        </div>}
      <Navbar className="sticky-top navbar-with-shadow" bg="light" expand="lg">
        <Container>
          <Link className="navBar-brand" to={"/"}>
            <img
              src="https://th.bing.com/th/id/R.d4444042ff824f986d8921872b6d433b?rik=MtQXglCoUEhONg&riu=http%3a%2f%2fupaluku.cz%2fwp-content%2fuploads%2flogo_white.png&ehk=iZlktW0OQm6mHu%2bSMQY2QLXWfztsLAgfaAjzotLy9qA%3d&risl=&pid=ImgRaw&r=0"
              alt="logo"
              width={45}
              height={45}
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to={"/"}>Home</Link>
              <Link className="nav-link" to={"/restaurant"}>Restaurant</Link>
              <Link className="nav-link" to={"/registrationPage"}>Contact</Link>
            </Nav>
            <NavbarForm />
            <Nav className="ms-auto">
              {utenteLoggato2 === null ? (
                <Dropdown>
                  <Dropdown.Toggle className="text-light btn-lg btn-block" variant="info" id="dropdown-basic">
                    <LiaUserCircle className="text-light fs-3" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ right: "0", left: "auto" }}>
                    <Login />
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Dropdown>
                  <Dropdown.Toggle className="text-light btn-lg btn-block bg-info border-0" id="dropdown-basic">
                    <span className="fs-6">{utenteLoggato2.nome}</span>
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ right: "0", left: "auto" }}>
                    <Link className="nav-link" to={"/profilePage"}>profilo di: {utenteLoggato3.nome}</Link>
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
