import React, { useEffect } from "react";
import { Container, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



const RestaurantPage = () => {
  const ristoranti = useSelector(state => state.home.ristoranti);
  useEffect(() => { console.log(ristoranti) }, [ristoranti])
  // console.log(ristoranti[1].idRistorante);
  return (
    <Container className="mt-5">
      <h3>ecco i ristoranti di:</h3>
  {ristoranti !== null &&
    ristoranti.map((ristorante, index) => (
      <Card id="restaurantCard" key={index} className="mb-3">
        <Card.Body>
          <div className="d-flex flex-column flex-md-row align-items-md-center">
            <Carousel className="custom-carousel mr-md-4 mb-3 mb-md-0">
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
            <blockquote className="blockquote">
              <p>{ristorante.nomeRistorante}</p>
              <footer className="blockquote-footer">
                {ristorante.indirizzo}
              </footer>
            </blockquote>
          </div>
        </Card.Body>
      </Card>
    ))}
</Container>


  );

};
export default RestaurantPage;