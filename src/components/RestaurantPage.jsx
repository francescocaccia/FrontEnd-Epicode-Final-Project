import React, { useEffect, useState } from "react";
import { Container, Card, Carousel, Button, Modal, Form, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { MdRateReview } from "react-icons/md";


const RestaurantPage = () => {
  const ristoranti = useSelector(state => state.home.ristoranti);
  const [reviewText, setReviewText] = useState("");//si prende il contenuto del testo
  useEffect(() => { }, [ristoranti])
  console.log(ristoranti);

  // Aggiungi lo stato per gestire la visibilità del modale
  const [showModal, setShowModal] = useState(false);
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  // Aggiungi una funzione per gestire il click sul pulsante "Lascia una recensione"
  const handleReviewClick = (ristorante) => {
    setCurrentRestaurant(ristorante);
    setShowModal(true);
  };

  // Aggiungi una funzione per gestire il submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitReview = async (reviewText, restaurantId) => {
      try {
        const response = await fetch('/api/reviews', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: reviewText,
            restaurantId: restaurantId
          })
        });
        if (!response.ok) {
          throw new Error("errore nell' inserimento della recensione");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Si è verificato un problema:', error);
      }
    };
    console.log(`Recensione inviata: ${reviewText}`);
  };


  return (
    <>
      <Container className="mt-5 container-with-bg">
        <h3>ecco i ristoranti di:</h3>
        {ristoranti !== null &&
          ristoranti.map((ristorante, index) => (
            <Card id="restaurantCard" key={index} className="mb-3">
              <Card.Body>
                <Row className="align-items-center">
                  <Col xs={12} md={6}>
                    <Carousel className="custom-carousel mb-3">
                      <Carousel.Item>
                        <Link to={`/reservationRestaurant/${ristorante.idRistorante}`}>
                          <img
                            className="carousel-image"
                            src={ristorante.cardImmagini.immagine1}
                            alt={ristorante.nomeRistorante}
                          />
                        </Link>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Link to={`/reservationRestaurant/${ristorante.idRistorante}`}>
                          <img
                            className="carousel-image"
                            src={ristorante.cardImmagini.immagine2}
                            alt={ristorante.nomeRistorante}
                          />
                        </Link>
                      </Carousel.Item>
                      <Carousel.Item>
                        <Link to={`/reservationRestaurant/${ristorante.idRistorante}`}>
                          <img
                            className="carousel-image"
                            src={ristorante.cardImmagini.immagine3}
                            alt={ristorante.nomeRistorante}
                          />
                        </Link>
                      </Carousel.Item>
                    </Carousel>
                  </Col>
                  <Col xs={12} md={6}>
                    <blockquote className="blockquote ms-5" style={{ fontSize: '0.9rem' }}>
                      <span>Nome ristorante: {ristorante.nomeRistorante}</span>
                      <span> - </span>
                      <span>Tipo cucina: {ristorante.tipoCucina}</span>
                      <span> - </span>
                      <span>Città: {ristorante.luogo.citta}</span>
                      <p>recensione: {ristorante.recensione}</p>
                      <p>citta: {ristorante.luogo.citta}</p>
                      <p className="text-end">
                        <MdRateReview variant="primary" onClick={() => handleReviewClick(ristorante)} className="fs-4" />
                        Lascia una recensione
                      </p>
                    </blockquote>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Lascia una recensione</Modal.Title>
          </Modal.Header>
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              {/* Aggiungi qui il contenuto del modale per lasciare una recensione */}
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
              <Button onClick={handleSubmit} variant="primary" type="submit">
                Invia recensione
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </Container>
    </>
  );

};
export default RestaurantPage;