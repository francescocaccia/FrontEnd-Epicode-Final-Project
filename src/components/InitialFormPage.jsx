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


        <h2 className="text-dark mt-5">I must</h2>
        <Carousel className="mt-3" interval={null} indicators={false}>
          <Carousel.Item>
            <Row>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.foodconfidential.it/wp-content/uploads/2019/07/The-Court-Roma.png"
                    alt="Ristorante 1"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://qul.imgix.net/d74466dd-7570-42fc-ae2b-3d17b82a0cc0/355710_sld.jpg"
                    alt="Ristorante 2"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://media-cdn.tripadvisor.com/media/photo-s/12/e7/4f/48/roof-garden.jpg"
                    alt="Ristorante 3"
                  />
                  <Carousel.Caption>
                    <h3>Ristorante Colosseo</h3>
                    <p>Roma</p>
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
                    src="https://cdn1.discovertuscany.com/img/food/florence/borgo-san-jacopo-ponte-vecchio.jpg?auto=compress,enhance,format&w="
                    alt="Ristorante 4"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="/reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://blog.scuolaleonardo.com/wp-content/uploads/2017/10/La-Menagere-2-620x420.jpg"
                    alt="Ristorante 5"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.firenzemadeintuscany.com/assets/w=1500&h=740&fit=fill&f=center___images.ctfassets.net_7dc7gq8ix1ml_6XckIYSX6C9IR4iDkpRBA4_6bf4766c5c9409b1eba64a590418cdc1_cover-bucaLapi.jpg"
                    alt="Ristorante 6"
                  />
                  <Carousel.Caption>
                    <h3>Ristorante Al Ponte</h3>
                    <p>Firenze</p>
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
                    src="https://static.gamberorosso.it/2020/06/club-del-doge-dellhotel-gritti-palace.jpg"
                    alt="Ristorante 7"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://www.archibio.com/wp-content/uploads/2021/06/dove-mangiare-a-Venezia.jpg"
                    alt="Ristorante 8"
                  />
                </Link>
              </Col>
              <Col xs={4}>
                <Link to="reservationRestaurant">
                  <img
                    className="d-block w-100 carousel-image"
                    src="https://venetosecrets.com/wp-content/uploads/2017/01/28122016-L1160665.jpg"
                    alt="Ristorante 9"
                  />
                  <Carousel.Caption>
                    <h3>Ristorantino San Marco</h3>
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
        <MyFooter />
      </div>
    </div>
  );
}

export default InitialFormPage;

