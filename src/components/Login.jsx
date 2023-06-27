import React from "react";
import { Button, Form } from "react-bootstrap";
import { IoLogIn } from "react-icons/io5";

const Login = () => {
  return (
    <Form className="login-form">
      <div className="login-header">
        <IoLogIn className="fs-1" />
        <h4>Esegui il Login per prenotare il tuo ristorante</h4>
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
