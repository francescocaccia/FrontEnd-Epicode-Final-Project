import React from "react";
import { Container, Card, Carousel } from "react-bootstrap";

const RestaurantCard = () => (
  <Container>
    <Card id="restaurantCard">
      <Card.Body>
        <div className="d-flex">
          <Carousel className="custom-carousel">
            <Carousel.Item>
              <a href="/link-pagina-1">
                <img
                  className="carousel-image"
                  src="https://cdn.squaremile.com/gallery/5de91cc9313d9.jpeg"
                  alt="Prima immagine"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/link-pagina-2">
                <img
                  className="carousel-image"
                  src="https://u.tfstatic.com/restaurant_photos/547/439547/169/612/cavallini-food-wine-spirits-piatto-del-giorno-2f35c.jpg"
                  alt="Seconda immagine"
                />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a href="/link-pagina-3">
                <img
                  className="carousel-image"
                  src="https://www.lucianopignataro.it/wp-content/uploads/2016/06/unnamed-6-e1465852643536.jpg"
                  alt="Terza immagine"
                />
              </a>
            </Carousel.Item>
          </Carousel>
          <blockquote className="blockquote mb-0">
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

export default RestaurantCard;
