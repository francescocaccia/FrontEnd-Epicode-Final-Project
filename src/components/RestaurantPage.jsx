import React, { useEffect, useState } from "react";
import { Container, Card, Carousel, Button, Modal, Form, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { MdEditCalendar } from "react-icons/md";
import { BiPen } from "react-icons/bi";
import { BiSolidStar } from "react-icons/bi";



const RestaurantPage = () => {

  const ristoranti = useSelector(state => state.home.ristoranti);
  const [reviewText, setReviewText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState("");
  const [currentRestaurant, setCurrentRestaurant] = useState(null);
  const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  useEffect(() => { setToken(localStorage.getItem("token")) },
    [])

  useEffect(() => {
    const selectedRestaurant = ristoranti.find(
      (ristorante) => ristorante.idRistorante === parseInt(restaurantId)
    );
    setCurrentRestaurant(selectedRestaurant);
  }, [ristoranti, restaurantId]);



  //funzione recensione star
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }


  // funzione per gestire il click sul pulsante "Lascia una recensione"
  const handleReviewClick = (ristorante) => {
    setCurrentRestaurant(ristorante);
    setShowModal(true);
  };

  // verifica che l'utente sia loggato per poter effettuare la prenotazione
  const handleReservationClick = (ristorante) => {
    if (utenteLoggato) {
      navigate(`/reservationRestaurant/${ristorante.idRistorante}`);
    } else {
      alert('Per favore, esegui il login per poter prenotare un ristorante');
    }
  }

  // Aggiungi una funzione per gestire il submit del form
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifica che l'utente abbia inserito il testo della recensione e la valutazione a stelle
    if (!reviewText || currentValue === 0) {
      alert('Per favore, inserisci sia il testo della recensione che la valutazione a stelle.');
      return;
    }

    const payload = {
      numeroStelle: currentValue,
      contenutoRecensione: reviewText,
      idCliente: utenteLoggato.id,
      idRistorante: parseInt(currentRestaurant.idRistorante)
    };
    const response = await fetch("http://localhost:8080/recensioni/create", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      alert("recensione creata");
      setShowModal(false);
    } else {
      response.text().then(r => {
        alert(r);
      })
    }
  };

  // get per le recensioni

  useEffect(() => {
    const RecensioniRistorante = async () => {
      try {
        const response = await fetch(`http://localhost:8080/recensioni/search/${restaurantId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        if (response.ok) {
          const data = await response.json();
          RecensioniRistorante(data);
        } else {
          alert('Si è verificato un errore durante il recupero delle recensioni utente');
        }
      } catch (error) {
        alert('Si è verificato un errore durante il recupero delle recensioni utente:', error);
      }
    };
    RecensioniRistorante();
  }, []);



  return (
    <>
      <Container className="mt-5 container-with-bg">
        <h3 className="mb-5">Risultati della ricerca:</h3>
        <Row>
          <Col xs={12} md={4}>
            {ristoranti !== null &&
              ristoranti.map((ristorante, index) => (
                <Card id="restaurantCard" key={index} className="mb-5">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={12}>
                        <Carousel className="custom-carousel mb-3">
                          <Carousel.Item>
                            <img className="carousel-image img-fluid" src={ristorante.cardImmagini.immagine1} alt={ristorante.nomeRistorante} />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="carousel-image img-fluid" src={ristorante.cardImmagini.immagine2} alt={ristorante.nomeRistorante} />
                          </Carousel.Item>
                          <Carousel.Item>
                            <img className="carousel-image img-fluid" src={ristorante.cardImmagini.immagine3} alt={ristorante.nomeRistorante} />
                          </Carousel.Item>
                        </Carousel>
                        <blockquote className="blockquote" style={{ fontSize: '0.9rem' }}>
                          <span>Nome ristorante: {ristorante.nomeRistorante}</span>
                          <br />
                          <span>Tipo cucina: {ristorante.tipoCucina}</span>
                          <br />
                          <span>Regione: {ristorante.luogo.regione}</span>
                          <br />
                          <span>Città: {ristorante.luogo.citta}</span>
                          <br />
                          <p>Recensioni: {ristorante.recensione}</p>
                          <div className="text-end">
                            <small onClick={() => handleReservationClick(ristorante)} className="me-5 fw-semibold text-info">
                              <MdEditCalendar className="fs-5" />
                              prenota ristorante
                            </small>
                            {utenteLoggato && (
                              <small onClick={() => { setCurrentRestaurant(ristorante); handleReviewClick(ristorante) }} className=" fw-semibold">
                                <BiPen className="fs-5" />
                                scrivi una recensione
                              </small>
                            )}
                          </div>
                        </blockquote>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
          </Col>
          {/* colonna per la mappa */}
          <Col xs={12} md={8}>
            <div className="fixed-image" style={{ display: 'flex', justifyContent: 'center', position: 'fixed', top: '20%' }}>
              <img src="https://www.cimasristorazione.com/wp-content/uploads/2019/01/cimas-piatti-italiani.jpg" alt="italia" style={{ maxWidth: '100%' }} />
            </div>
          </Col>
        </Row>
        {/* ... */}
      </Container>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Lascia una recensione</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            {/*  contenuto del modale per lasciare una recensione */}
            {currentRestaurant && (
              <>
                <p>Stai lasciando una recensione per il ristorante: {currentRestaurant.nomeRistorante}</p>
                <Form.Group controlId="reviewText">
                  <Form.Label>La tua recensione:</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}//si prende il contenuto del testo
                  />
                </Form.Group>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <div id="star">
              <div>
                {stars.map((_, index) => {
                  return (
                    <BiSolidStar
                      className={` ${(
                        hoverValue || currentValue
                      ) > index ? 'star-active' : 'star-inactive'}`}
                      key={index}
                      size={25}
                      style={{ marginRight: 10, cursor: 'pointer' }}
                      onClick={() => handleClick(index + 1)}
                      onMouseOver={() => handleMouseOver(index + 1)}
                      onMouseLeave={handleMouseLeave}
                    />
                  )
                })}
              </div>
            </div>
            <Button onClick={handleSubmit} variant="primary" type="submit">
              Invia recensione
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
};
export default RestaurantPage;
