import { Container, Row, Col, Form, Carousel, Button, InputGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import MyFooter from "./MyFooter";
import AdvertisementPage from "./AdvertisementPage";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataSuccess } from "../redux/actions";
import { getUserLoggedAction } from "../redux/actions";
import sfondo from "../sfondo.png";
function InitialFormPage() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  const [citiesData, setCitiesData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

  const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);

  useEffect(() => {

  }, [utenteLoggato]);


  const handleSearch = () => {

    dispatch(getRistorantibyStringAndCity(searchValue, city));

  };


  const getRistorantibyStringAndCity = (stringa, city) => {

    let minuscolo = stringa.toLowerCase();
    let primaMaiuscola = minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1);
    let url = `http://localhost:8080/ristoranti/cerca`
    if (primaMaiuscola !== "" && city !== "") {
      url = url + `?perStringa=${primaMaiuscola}&citta=${city}`
    } else if (primaMaiuscola !== "") {
      url = url + `?perStringa=${primaMaiuscola}`
    } else {
      url = url + `?citta=${city}`
    }

    return async () => {
      try {
        const resp = await fetch(url)
        if (resp.ok) {
          const data = await resp.json();
          if (data.length !== 0) {
            dispatch(fetchDataSuccess(data));
            navigate("/restaurant");
          } else {
            alert("non sono stati trovati ristoranti con questi parametri")
          }
        }
      } catch (error) {
        alert('Si è verificato un errore:', error);
      }
    };

  }




  //aggiorna lo stato del dropdown ogni volta++++++++++++++
  useEffect(() => {
    const fetchCitiesData = async () => {
      try {
        const response = await fetch('http://localhost:8080/luogo/citta');
        const data = await response.json();
        setCitiesData(data);
      } catch (error) {
        alert('Si è verificato un errore:', error);
      }
    };

    fetchCitiesData();
  }, []);



  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${sfondo})`,
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
            <FloatingLabel controlId="floatingInput" className="mb-3 home-search-form">
              <InputGroup>
                <Form.Control
                  type="text"
                  as="select"
                  placeholder="Inserisci la città"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                >
                  <option value="" >Seleziona una città</option>
                  {citiesData.map((cityData, index) => (
                    <option key={index} value={cityData}>
                      {cityData}
                    </option>
                  ))}
                </Form.Control>
              </InputGroup>
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" className="mt-3 home-search-form">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Nome ristorante o tipo"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Button variant="info" disabled={!city && !searchValue} onClick={handleSearch}>
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
                    src="https://www.ilgiornaledelcibo.it/wp-content/uploads/2017/08/uliassi-senigallia.jpg"
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
                    <p>Modena</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>


        {/*    +++++++++++++++++++++++++++++    SECONDO CAROSELLO   YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY*/}


        <h2 className="text-dark mt-5">I Must</h2>
        <Carousel className="mt-3" interval={null} indicators={false}>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://media.hrs.com/media/image/80/27/d7/Da_Vittorio-Brusaporto-Aussenansicht-2-477556.jpg"
                    alt="Ristorante 1"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.fashioninfusion.it/wp-content/uploads/2018/02/da-vittorio-ristorazione-esterna-1024x683.jpg"
                    alt="Ristorante 2"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://media-assets.lacucinaitaliana.it/photos/6356739b6046cfb35635cf08/16:9/w_1280,c_limit/Bobo%20Cerea%20che%20manteca%20i%20paccheri.jpg"
                    alt="Ristorante 3"
                  />
                  <Carousel.Caption>
                    <h3>Da Vittorio</h3>
                    <p>Bergamo</p>
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
                    src="https://blog.stayromac.com/wp-content/uploads/2016/03/ristorante-laperloga-panorama.jpg"
                    alt="Ristorante 4"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.elizabethminchilli.com/wp-content/uploads/2015/01/La_Pergola_Elizabeth_Minchilli_in_Rome-05.jpg"
                    alt="Ristorante 5"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://mojeh.com/wp-content/uploads/2022/09/Rome-Cavalieri-CE-Terrazza-degli-Aranci-Rooftop-event-space-with-view-of-Rome-1-1600x1000.jpg"
                    alt="Ristorante 6"
                  />
                  <Carousel.Caption>
                    <h3>La Pergola</h3>
                    <p>Roma</p>
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
                    src="https://media-cdn.tripadvisor.com/media/photo-s/1b/17/e1/48/esterno.jpg"
                    alt="Ristorante 7"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://res.cloudinary.com/tf-lab/image/upload/restaurant/11a1d1bb-c871-4b5a-83ec-b4e7e4ee9ad9/5eee1e0d-c481-4e94-8a18-6ffb492acf9d.jpg"
                    alt="Ristorante 8"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.larivieradivenezia.com/inc/gallery/hotel/13.jpg"
                    alt="Ristorante 9"
                  />
                  <Carousel.Caption>
                    <h3>Riviera</h3>
                    <p>Venezia</p>
                  </Carousel.Caption>
                </Link>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
      <div className="mt-5">
        <AdvertisementPage />
        <MyFooter/>
      </div>
    </div>
  );
}

export default InitialFormPage;

