import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoAddSharp } from "react-icons/io5";
import { BsCalendar } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ReservationRestaurant = () => {
  const { id, nomeRistorante } = useParams();
  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [numeroPersone, setNumeroPersone] = useState(1);
  const [idCliente, setIdCliente] = useState(null);
  const [idRistorante, setIdRistorante] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      dataPrenotazione: dataPrenotazione,
      numeroPersone: numeroPersone,
      idCliente: idCliente,
      idRistorante: idRistorante,
    };

  };

  return (
    <div className="container text-center fw-bold mt-3">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="mb-3">
            Prenota ristorante
          </h3>
          <h5 className="mb-3">{nomeRistorante}</h5>
          <h5 className="mb-3">{id}</h5>
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

