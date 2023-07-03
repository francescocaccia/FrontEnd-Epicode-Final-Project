import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoAddSharp } from "react-icons/io5";
import { TbBrandBooking } from "react-icons/tb";
import { RxCalendar } from "react-icons/rx";
import { IoMdPeople } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getRistorantiAction, getUserLoggedAction } from "../redux/actions";
import { useParams } from "react-router-dom";

const ReservationRestaurant = () => {
  const { id,nomeRistorante } = useParams();
  const [dataPrenotazione, setDataPrenotazione] = useState("");
  const [numeroPersone, setNumeroPersone] = useState(1);
  const [idCliente, setIdCliente] = useState(null);
  const [idRistorante, setIdRistorante] = useState(null);
  const dispatch = useDispatch();
useEffect(()=>{dispatch(getUserLoggedAction())},[]);
const user = useSelector(state => state.home.clienteLoggato)
useEffect(()=>{dispatch(getRistorantiAction())},[]);
const ristoranti = useSelector(state => state.home.ristoranti)


  const handleSubmit = async e => {
    e.preventDefault();
    const payload = {
      dataPrenotazione: dataPrenotazione,
      numeroPersone: numeroPersone,
      idCliente: idCliente,
      idRistorante: idRistorante,
    };

  fetch(`http://localhost:8080/prenota/${user.id}/${ristoranti.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

    // Resetta i valori dei campi dopo la submit
    setDataPrenotazione("");
    setNumeroPersone(1);
    setIdCliente(null);
    setIdRistorante(null);
  };

  return (
    <div className="container text-center fw-bold mt-3 ">
      <div className="row justify-content-center">
        <div className="col-6">
          <h3 className="mb-3">
            Prenota ristorante <TbBrandBooking />
          </h3>
          <h5 className="mb-3">{nomeRistorante}</h5>  
            <h5 className="mb-3">{id}</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="dataPrenotazione">
              <Form.Label>
                Data prenotazione <RxCalendar />
              </Form.Label>
              <Form.Control
                type="date"
                value={dataPrenotazione}
                onChange={e => setDataPrenotazione(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="numeroPersone">
              <Form.Label>
                Numero persone
                <IoMdPeople />
              </Form.Label>
              <Form.Control
                type="number"
                value={numeroPersone}
                onChange={e => setNumeroPersone(parseInt(e.target.value))}
                min="1"
                required
              />
            </Form.Group>
            <div>
              <Button className="mt-3 fw-bold" variant="info" type="submit">
                prenota <IoAddSharp />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ReservationRestaurant;
