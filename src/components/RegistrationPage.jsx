import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../redux/actions";
import { BsFacebook, BsTwitter, BsInstagram, BsGoogle } from "react-icons/bs";
import { GiItalia, GiMeal } from "react-icons/gi";
import { Alert, Button, Form } from "react-bootstrap";

function RegistrationPage() {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numeroTelefonico, setNumeroTelefonico] = useState("");
  const [isRistoratore, setIsRistoratore] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleClick = () => {
    const userData = {
      nome: nome,
      cognome: cognome,
      email: email,
      password: password,
      numeroTelefono: numeroTelefonico,
      role: isRistoratore === true ? "ADMIN" : "USER",
    };

    fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(response => {
        if (response.ok) {
          setSuccess("Registrazione eseguita con successo!");
          // Aggiungi qui il reindirizzamento alla pagina desiderata
          return response.json();
        } else {
          throw new Error("Credenziali errate");
        }
      })
      .then(data => {
        console.log(data);
        dispatch(signUpUser(userData));
      })
      .catch(error => {
        console.error(error);
        setError("Credenziali errate");
      });
  };

  return (
    <>
      <div className="container-fluid bg-secondary">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "400px" }}>
              <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
                <h2 className="fw-bold mb-2 text-uppercase">SIGN UP</h2>
                <GiMeal className="fs-1" />
                <p>Iscriviti subito per tenere traccia del Gusto!</p>
                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">{success}</Alert>}
                <div className="mb-4 mx-5 w-100">
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="clicca se sei un  Ristoratore"
                      checked={isRistoratore}
                      onChange={e => setIsRistoratore(e.target.checked)}
                    />
                  </Form>
                  <label htmlFor="nome" className="form-label text-white">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nome"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                  />
                </div>

                <div className="mb-4 mx-5 w-100">
                  <label htmlFor="cognome" className="form-label text-white">
                    Cognome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cognome"
                    value={cognome}
                    onChange={e => setCognome(e.target.value)}
                  />
                </div>
                <div className="mb-4 mx-5 w-100">
                  <label htmlFor="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 mx-5 w-100">
                  <label htmlFor="password" className="form-label text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4 mx-5 w-100">
                  <label htmlFor="numeroTelefonico" className="form-label text-white">
                    Numero Telefonico
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="numeroTelefonico"
                    value={numeroTelefonico}
                    onChange={e => setNumeroTelefonico(e.target.value)}
                  />
                </div>

                <Button className="btn btn-outline-light mx-2 fw-bold  px-5" type="button" onClick={handleClick}>
                  Iscriviti
                </Button>

                <div className="d-flex flex-row mt-5">
                  <Button className="btn btn-outline-light m-3" style={{ color: "white" }}>
                    <BsFacebook />
                  </Button>

                  <Button className="btn btn-outline-light m-3" style={{ color: "white" }}>
                    <BsTwitter />
                  </Button>

                  <Button className="btn btn-outline-light m-3" style={{ color: "white" }}>
                    <BsInstagram />
                  </Button>
                  <Button className="btn btn-outline-light m-3" style={{ color: "white" }}>
                    <BsGoogle />
                  </Button>
                </div>

                <div>
                  <GiItalia className="fs-2 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegistrationPage;
