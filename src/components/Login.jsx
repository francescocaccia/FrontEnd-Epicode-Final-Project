import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoLogIn } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const sendLogin = async e => {
    e.preventDefault();

    try {
      const response = await fetch(`https://b2cd-2001-b07-6469-8e8d-ec87-b24a-3e17-abba.ngrok-free.app/`, {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.accessToken);

        setLogin({
          email: "",
          password: "",
        });

        // Reindirizzamento a un'altra pagina
        window.location.href = "/restaurantPage";
      } else {
        // Errore nella richiesta
        const errorData = await response.json();
        alert("Credenziali errate: " + errorData.message);
      }
    } catch (error) {
      console.log(error);
      alert("Si è verificato un errore: " + error);
      window.location.href = "https://www.google.com";
    }
  };

  return (
    <>
      <Form className="login-form" onSubmit={sendLogin}>
        <div className="login-header">
          <IoLogIn className="fs-1" />
          <h4>Esegui il Login per prenotare il tuo ristorante</h4>
        </div>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            value={login.email}
            onChange={e => setLogin({ ...login, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Password"
            value={login.password}
            onChange={e => setLogin({ ...login, password: e.target.value })}
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit" className="mb-3">
            Login
          </Button>
          <br />
          <div className="text-center">
            <Link
              className="text-dark fw-bold fs-6"
              to="/RegistrationPage"
              style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <span>Se non sei iscritto clicca qui e iscriviti subito</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
