import React, { useEffect } from "react";
import { Container, Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';



const RestaurantPage = () => {
  const ristoranti = useSelector(state => state.home.ristoranti);
  useEffect(() => { console.log(ristoranti) }, [ristoranti])

  return (
    <Container>
      <Card id="restaurantCard">
        <Card.Body>
          <div className="d-flex flex-column flex-md-row align-items-md-center">
            <Carousel className="custom-carousel mr-md-4 mb-3 mb-md-0" interval={ristoranti && ristoranti.length > 1 ? 2000 : null}>
              {ristoranti !== null &&
                ristoranti.map((ristorante, index) => (
                  <Carousel.Item key={index}>
                    <Link to="/ReservationRestaurant">
                      <img
                        className="carousel-image"
                        src={ristorante.cardImmagini.immagine1}
                        alt={ristorante.nomeRistorante}
                      />
                    </Link>
                  </Carousel.Item>
                ))}
              {ristoranti !== null && ristoranti.length < 3 && (
                <Carousel.Item>
                  <Link to="/ReservationRestaurant">
                    <img
                      className="carousel-image"
                      src={ristoranti[0].cardImmagini.immagine2}
                      alt="Seconda immagine"
                    />
                  </Link>
                </Carousel.Item>
              )}
              {ristoranti !== null && ristoranti.length < 2 && (
                <Carousel.Item>
                  <Link to="/ReservationRestaurant">
                    <img
                      className="carousel-image"
                      src={ristoranti[0].cardImmagini.immagine3}
                      alt="Terza immagine"
                    />
                  </Link>
                </Carousel.Item>
              )}
            </Carousel>
            <blockquote className="blockquote">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );

};
export default RestaurantPage;