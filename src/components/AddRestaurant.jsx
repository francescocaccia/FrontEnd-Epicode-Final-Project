import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRestaurant } from "../redux/actions";
import { Button, Form } from "react-bootstrap";
import { MdAddBox } from "react-icons/md";
import { IoAddSharp } from "react-icons/io5";
function AddRestaurant() {
  const dispatch = useDispatch();
  const [totaleCoperti, setTotaleCoperti] = useState("");
  const [tipoCucina, setTipoCucina] = useState("");
  const [menu, setMenu] = useState("");
  const [luogo, setLuogo] = useState("");
  const [cardImmagini, setCardImmagini] = useState("");
  const tipoCucinaOptions = [
    "cucina_vegana",
    "cucina_italiana",
    "cucina_indiana",
    "cucina_libanese",
    "cucina_di_pesce",
    "steak_house",
    "cucina_vegetariana",
  ];

  const handleSubmit = () => {
    const restaurantData = {
      totaleCoperti: Number(totaleCoperti),
      tipoCucina,
      menu,
      luogo,
      cardImmagini,
    };

    fetch("http://localhost:3001/ristoranti/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurantData),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });

    dispatch(createRestaurant(restaurantData));
  };

  return (
    <div className="container mt-5 text-center">
      <h2>
        Inserisci il tuo ristorante <MdAddBox />
      </h2>
      <Form className="text-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="totaleCoperti">
          <Form.Label>Totale Coperti</Form.Label>
          <Form.Control
            type="number"
            value={totaleCoperti}
            onChange={e => setTotaleCoperti(e.target.value)}
            required
            min={5}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipoCucina">
          <Form.Label>Tipo Cucina</Form.Label>
          <Form.Control as="select" value={tipoCucina} onChange={e => setTipoCucina(e.target.value)} required>
            <option value="">Seleziona una opzione</option>
            {tipoCucinaOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="menu">
          <Form.Label>Menu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome del piatto"
            value={menu.nome}
            onChange={e => setMenu({ ...menu, nome: e.target.value })}
            required
          />
          <Form.Control
            as="textarea"
            placeholder="Descrizione del piatto"
            value={menu.descrizione}
            onChange={e => setMenu({ ...menu, descrizione: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="luogo">
          <Form.Label>Luogo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Città"
            value={luogo.citta}
            onChange={e => setLuogo({ ...luogo, citta: e.target.value })}
            required
          />
          <Form.Control
            type="text"
            placeholder="Indirizzo"
            value={luogo.indirizzo}
            onChange={e => setLuogo({ ...luogo, indirizzo: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cardImmagini">
          <Form.Label>Immagine</Form.Label>
          <Form.Control type="text" value={cardImmagini} onChange={e => setCardImmagini(e.target.value)} required />
        </Form.Group>
        <div className="justify-content-center">
          <Button variant="primary" type="submit">
            Aggiungi <IoAddSharp />
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddRestaurant;
