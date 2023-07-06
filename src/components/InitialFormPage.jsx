import { Container, Row, Col, Form, Carousel, Button, Placeholder, InputGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import MyFooter from "./MyFooter";
import AdvertisementPage from "./AdvertisementPage";
import { Link } from "react-router-dom";
import { searchRestaurants } from "../redux/actions";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";


function InitialFormPage() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/luogo/citta')
      .then(response => response.json())
      .then(data => {
        setCitiesData(data);
      })
      .catch(error => {
        console.error('Si è verificato un errore:', error);
      });
  }, []);

  console.log(citiesData);

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url('https://image.freepik.com/foto-gratuito/gustosi-ingredienti-freschi-appetitosi-di-cibo-italiano-su-sfondo-scuro_1220-1741.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <Container className="d-flex align-items-center justify-content-start" style={{ minHeight: "100vh" }}>
        <Row>
          <Col xs={12} md={8} lg={12}>
            <h2 className="text-light">Scopri e prenota i migliori ristoranti</h2>
            <FloatingLabel controlId="floatingInput" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  as="select"
                  placeholder="Inserisci la città"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="" disabled>Seleziona una città</option>
                  {citiesData.map((cityData) => (
                    <option key={cityData.id} value={cityData}>
                      {cityData}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" className="mt-3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="nome ristorante o tipo"
                  value={""}
                  onChange={(e) => (e.target.value)}
                />
                <Button variant="info">
                  Cerca
                </Button>
              </InputGroup>
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          position: "absolute",
          top: 100,
          right: 20,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: 10,
          borderRadius: 5,
          zIndex: -1,
        }}
      ></div>
      <Container className="mt-5 mb-5">
        <h2 className="text-dark">La Top 3 del mese</h2>
        <Carousel className="mt-3" interval={null} indicators={false}>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://u.tfstatic.com/restaurant_photos/547/439547/169/612/cavallini-food-wine-spirits-piatto-del-giorno-787a7.jpg"
                    alt="Ristorante 1"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://cdn.squaremile.com/gallery/5de91cc9313d9.jpeg"
                    alt="Ristorante 2"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://u.tfstatic.com/restaurant_photos/547/439547/169/612/cavallini-food-wine-spirits-piatto-del-giorno-2f35c.jpg"
                    alt="Ristorante 3"
                  />
                  <Carousel.Caption>
                    <h3>Ristorante Cavallini</h3>
                    <p>San Severino Marche</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.lucianopignataro.it/wp-content/uploads/2016/06/unnamed-6-e1465852643536.jpg"
                    alt="Ristorante 4"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://gipsyhomerestaurant.files.wordpress.com/2015/12/linguine-chef-antonio-cannavacciuoloc3b2.jpg?w=300"
                    alt="Ristorante 5"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.lucianopignataro.it/wp-content/uploads/2016/06/unnamed-6-e1465852643536.jpg"
                    alt="Ristorante 6"
                  />
                  <Carousel.Caption>
                    <h3>Ristorante Uliassi</h3>
                    <p>Senigallia</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/15/b3/36/da/local-lamb-with-burnt.jpg"
                    alt="Ristorante 7"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://ximg.retty.me/resize/s880x880/-/retty/img_ebisu/restaurant/100000034136/archive/525056-5b865e0961848.jpg"
                    alt="Ristorante 8"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://s1.at.atcdn.net/wp-content/uploads/2013/08/Entrecote-Pymble.jpg"
                    alt="Ristorante 9"
                  />
                  <Carousel.Caption>
                    <h3>Osteria Francescana</h3>
                    <p>Descrizione del ristorante 3</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        <h2 className="text-dark mt-5">I must</h2>
        <Carousel className="mt-3" interval={null} indicators={false}>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://u.tfstatic.com/restaurant_photos/547/439547/169/612/cavallini-food-wine-spirits-piatto-del-giorno-787a7.jpg"
                    alt="Ristorante 1"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://cdn.squaremile.com/gallery/5de91cc9313d9.jpeg"
                    alt="Ristorante 2"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://u.tfstatic.com/restaurant_photos/547/439547/169/612/cavallini-food-wine-spirits-piatto-del-giorno-2f35c.jpg"
                    alt="Ristorante 3"
                  />
                  <Carousel.Caption>
                    <h3>Ristorante Cavallini</h3>
                    <p>San Severino Marche</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.lucianopignataro.it/wp-content/uploads/2016/06/unnamed-6-e1465852643536.jpg"
                    alt="Ristorante 4"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://gipsyhomerestaurant.files.wordpress.com/2015/12/linguine-chef-antonio-cannavacciuoloc3b2.jpg?w=300"
                    alt="Ristorante 5"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.lucianopignataro.it/wp-content/uploads/2016/06/unnamed-6-e1465852643536.jpg"
                    alt="Ristorante 6"
                  />
                  <Carousel.Caption>
                    <h3>Ristorante Uliassi</h3>
                    <p>Senigallia</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/15/b3/36/da/local-lamb-with-burnt.jpg"
                    alt="Ristorante 7"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://ximg.retty.me/resize/s880x880/-/retty/img_ebisu/restaurant/100000034136/archive/525056-5b865e0961848.jpg"
                    alt="Ristorante 8"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://s1.at.atcdn.net/wp-content/uploads/2013/08/Entrecote-Pymble.jpg"
                    alt="Ristorante 9"
                  />
                  <Carousel.Caption>
                    <h3>Osteria Francescana</h3>
                    <p>Descrizione del ristorante 3</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="mt-5">
        <AdvertisementPage />
        <MyFooter />
      </div>
    </div>
  );
}

export default InitialFormPage;

