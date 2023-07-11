import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoAddSharp } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReservationRestaurant = () => {
  const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);

  const { restaurantId } = useParams();
  console.log("l'id di questo ristorante è: " + restaurantId);
  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [orarioPrenotazione, setOrarioPrenotazione] = useState("");
  const [numeroPersone, setNumeroPersone] = useState(1);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      dataPrenotazione,
      orarioPrenotazione,
      numeroPersone,
      idCliente: utenteLoggato.id,
      idRistorante: restaurantId,
    };

  
  };

  return (
    <div className="container text-center fw-bold mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="mb-3">
            Prenota ristorante
          </h3>
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

