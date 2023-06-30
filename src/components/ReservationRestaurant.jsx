import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function ReservationRestaurant() {
  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [numeroPersone, setNumeroPersone] = useState(1);
  const [idCliente, setIdCliente] = useState(null);
  const [idRistorante, setIdRistorante] = useState(null);

  const handleSubmit = () => {
    const payload = {
      dataPrenotazione: dataPrenotazione,
      numeroPersone: numeroPersone,
      idCliente: idCliente,
      idRistorante: idRistorante,
    };

    // Esegui la tua richiesta POST con il payload

    // Resetta i valori dei campi dopo la submit
    setDataPrenotazione("");
    setNumeroPersone(1);
    setIdCliente(null);
    setIdRistorante(null);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dataPrenotazione">
              <Form.Label>Data prenotazione</Form.Label>
              <Form.Control
                type="date"
                value={dataPrenotazione}
                onChange={e => setDataPrenotazione(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="numeroPersone">
              <Form.Label>Numero persone</Form.Label>
              <Form.Control
                type="number"
                value={numeroPersone}
                onChange={e => setNumeroPersone(parseInt(e.target.value))}
                min="1"
                required
              />
            </Form.Group>

            <Form.Group controlId="idCliente">
              <Form.Label>ID cliente</Form.Label>
              <Form.Control type="text" value={idCliente} onChange={e => setIdCliente(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="idRistorante">
              <Form.Label>ID ristorante</Form.Label>
              <Form.Control type="text" value={idRistorante} onChange={e => setIdRistorante(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Invia
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ReservationRestaurant;
