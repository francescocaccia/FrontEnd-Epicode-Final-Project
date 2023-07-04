import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRestaurant } from "../redux/actions";
import { Button, Form } from "react-bootstrap";
import { GrRestaurant } from "react-icons/gr";
import { IoAddSharp } from "react-icons/io5";
import { BsImageAlt } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineDelete, MdRestaurantMenu, MdTableRestaurant } from "react-icons/md";
import { GiCook } from "react-icons/gi";
import { IoIosRestaurant } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";

function AddRestaurant() {
  const dispatch = useDispatch();
  const [totaleCoperti, setTotaleCoperti] = useState("");
  const [tipoCucina, setTipoCucina] = useState("");
  const [menu, setMenu] = useState([{ nomePiatto: "", prezzo: "" }]);
  const [luogo, setLuogo] = useState({ regione: "", citta: "", indirizzo: "", numeroCivico: "" });
  const [cardImmagini, setCardImmagini] = useState([""]);
  const [nomeRistorante, setNomeRistorante] = useState("");


  const tipoCucinaOptions = [
    "Cucina italiana",
    "Cucina indiana",
    "Cucina di pesce",
    "Stak house",
    "Cucina vegana",
    "Cucina vegetariana",
    "Cucina libanese"
  ];


  const regioneOptions = [
    "Valle d'Aosta",
    "Piemonte",
    "Lombardia",
    "Trentino-Alto Adige",
    "Veneto",
    "Friuli-Venezia Giulia",
    "Liguria",
    "Emilia-Romagna",
    "Toscana",
    "Umbria",
    "Marche",
    "Lazio",
    "Abruzzo",
    "Molise",
    "Campania",
    "Puglia",
    "Basilicata",
    "Calabria",
    "Sicilia",
    "Sardegna",
  ];

  const handleAddText = () => {
    const updatedCardImmagini = [...cardImmagini, ""];
    setCardImmagini(updatedCardImmagini);
  };
  const handleDeleteText = (index) => {
    if (cardImmagini.length === 1) {
      return;
    }

    const updatedCardImmagini = [...cardImmagini];
    updatedCardImmagini.splice(index, 1);
    setCardImmagini(updatedCardImmagini);
  };

  const handleChangeText = (index, value) => {
    const updatedCardImmagini = [...cardImmagini];
    updatedCardImmagini[index] = value;
    setCardImmagini(updatedCardImmagini);
  };

  const handleChangeMenu = (index, field, value) => {
    const updatedMenu = [...menu];
    updatedMenu[index] = { ...updatedMenu[index], [field]: value };
    setMenu(updatedMenu);
  };

  const handleAddFieldMenu = () => {
    setMenu([...menu, { nome: "", descrizione: "" }]);
  };

  const handleDeleteFieldMenu = index => {
    const updatedMenu = [...menu];
    updatedMenu.splice(index, 1);
    setMenu(updatedMenu);
  };

 

  const showDeleteButton = cardImmagini.length > 1;

  const handleSubmit = (event) => {
    const restaurantData = {
      totaleCoperti: Number(totaleCoperti),
      tipoCucina,
      menu: {
        piatti: menu,
      },
      luogo: {
        regione: luogo.regione,
        citta: luogo.citta,
        indirizzo: luogo.indirizzo,
        numeroCivico: luogo.numeroCivico,
      },
      cardImmagini: {
        immagine1: cardImmagini[0],
        immagine2: cardImmagini[1],
        immagine3: cardImmagini[2],
      },
    };

    const token = localStorage.getItem("token");

    fetch("http://localhost:8080/ristoranti/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`

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
    event.preventDefault();
  };

  return (
    <div className="container mt-5 text-center fw-bold">
      <GrRestaurant className="fs-1" />
      <h2>
        Inserisci il tuo ristorante
      </h2>
      <Form.Group className="mb-3" controlId="nomeRistorante">
        <Form.Label>
          Nome Ristorante
          <IoIosRestaurant />
        </Form.Label>
        <Form.Control type="text" value={nomeRistorante} onChange={e => setNomeRistorante(e.target.value)} required />
      </Form.Group>
      <Form className="text-center" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="totaleCoperti">
          <Form.Label>
            Totale Coperti
            <MdTableRestaurant />
          </Form.Label>
          <Form.Control
            type="number"
            value={totaleCoperti}
            onChange={e => setTotaleCoperti(e.target.value)}
            min="5"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tipoCucina">
          <Form.Label>
            Tipo Cucina
            <GiCook />
          </Form.Label>
          <Form.Control
            as="select"
            value={luogo.regione}
            onChange={e => setLuogo({ ...luogo, regione: e.target.value })}
            required
          >
            <option value="">Tipo cucina - selezioan un opzione</option>
            {tipoCucinaOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <p className="mt-3">
          Menù <MdRestaurantMenu />
        </p>
        {menu.map((item, index) => (
          <Form.Group className="mb-3" controlId={`menu-${index}`} key={index}>
            <Form.Label>
              Piatto {index + 1}
              <BiSolidDish />
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome del piatto"
              value={item.nomePiatto}
              onChange={e => handleChangeMenu(index, "nomePiatto", e.target.value)}
              required
            />
            <Form.Control
              type="number"
              placeholder="Prezzo"
              value={item.prezzo}
              onChange={e => handleChangeMenu(index, "prezzo", e.target.value)}
              required
            />
            {index > 0 && (
              <Button className="mt-2" variant="danger" onClick={() => handleDeleteFieldMenu(index)}>
                Cancella
                <MdOutlineDelete />
              </Button>
            )}
          </Form.Group>
        ))}

        <Button variant="info" onClick={handleAddFieldMenu}>
          Aggiungi <IoAddSharp />
        </Button>

        <Form.Group className="mb-3 mt-5" controlId="luogo">
          <Form.Label>
            Luogo
            <FaMapMarkerAlt />
          </Form.Label>
          {/* <Form.Group className="mb-3" controlId="regione"> */}
          <Form.Control
            as="select"
            value={luogo.regione}
            onChange={e => setLuogo({ ...luogo, regione: e.target.value })}
            required
          >
            <option value="">Regione - Seleziona una opzione</option>
            {regioneOptions.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
          {/* </Form.Group> */}
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
          <Form.Control
            type="text"
            placeholder="Numero civico"
            value={luogo.numeroCivico}
            onChange={e => setLuogo({ ...luogo, numeroCivico: e.target.value })}
            required
          />
        </Form.Group>
        <p className="mt-3">
          {" "}
          Immagine <BsImageAlt />
        </p>
        <div>
          {cardImmagini.map((cardImmagini, index) => (
            <Form.Group key={index}>
              Immagine {index + 1}
              <Form.Control type="text" value={cardImmagini} onChange={e => handleChangeText(index, e.target.value)} />
              {index > 0 && (
                <Button className="mt-2" variant="danger" onClick={() => handleDeleteText(index)} hidden={!showDeleteButton}>
                  Rimuovi <MdOutlineDelete />
                </Button>)}
            </Form.Group>
          ))}
          <Button className="mt-2" variant="info" onClick={handleAddText} hidden={cardImmagini.length > 2}>
            Aggiungi <IoAddSharp />
          </Button>
        </div>

        {/* <Button className="mb-4" variant="info" onClick={handleAddField}>
          Aggiungi
        </Button> */}

        <div className="justify-content-center mb-3 mt-5 ">
          <Button className="fw-bold" variant="primary" type="submit" onClick={handleSubmit} >
            Inserisci ristorante <IoAddSharp />
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddRestaurant;
