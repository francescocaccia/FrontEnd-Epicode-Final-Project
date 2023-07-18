import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReservationRestaurant = () => {
  const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);
  const ristoranti = useSelector(state => state.home.ristoranti);
  const { restaurantId } = useParams();
  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [orarioPrenotazione, setOrarioPrenotazione] = useState("");
  const [numeroPersone, setNumeroPersone] = useState(1);
  const [token, setToken] = useState("");
  const ristorante = ristoranti.find(r => r.idRistorante === parseInt(restaurantId));

  const dispatch = useDispatch();
  useEffect(() => { setToken(localStorage.getItem("token")) },
    [])


    
    const handleSubmit = async (e) => {
      e.preventDefault();
      // Combina la data e l'orario in un unico valore
      const dataOraPrenotazione = new Date(`${dataPrenotazione}T${orarioPrenotazione}`);
      const payload = {
          dataPrenotazione: dataOraPrenotazione.toISOString().split('.')[0],
          numeroPersone,
          idCliente: utenteLoggato.id,
          idRistorante: parseInt(restaurantId),
      };
      if (window.confirm('Sei sicuro di voler prenotare questo ristorante?')) {
          const response = await fetch("http://localhost:8080/prenotazione/prenota", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(payload)
          });
          // Gestisci la risposta del server
          if (response.ok) {
              alert("ristorante: " + ristorante.nomeRistorante + " prenotato");
          } else {
              response.text().then(r => {
                  alert(r);
              })
          }
      }
  };
  

  return (
    <div className="container text-center fw-bold mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="mb-3">
            Prenota ristorante
          </h3>
          <h5 className="fw-bold">{ristorante.nomeRistorante}</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dataPrenotazione">
              <Form.Label>
                Data prenotazione
              </Form.Label>
              <Form.Control
                type="date"
                value={dataPrenotazione}
                onChange={(e) => setDataPrenotazione(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="orarioPrenotazione">
              <Form.Label>
                Orario prenotazione
              </Form.Label>
              <Form.Control
                type="time"
                value={orarioPrenotazione}
                onChange={(e) => setOrarioPrenotazione(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="numeroPersone">
              <Form.Label>
                Numero persone
              </Form.Label>
              <Form.Control
                type="number"
                value={numeroPersone}
                onChange={(e) => setNumeroPersone(parseInt(e.target.value))}
                min="1"
                required
              />
            </Form.Group>
            <div>
              <Button className="mt-3 fw-bold" variant="info" type="submit">
                Prenota <IoAddSharp />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReservationRestaurant;

