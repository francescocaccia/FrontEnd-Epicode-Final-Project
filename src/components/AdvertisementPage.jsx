import React from "react";
import { Card, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GlassFork from "../GlassFork.png";
function AdvertisementPage() {
  return (
    <div className="container mb-5">
      <div className="mb-5">
        <h1 className="text-center mb-4">Scelti da noi</h1>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://www.napolidavivere.it/wp-content/uploads/bfi_thumb/I-ristoranti-piu%CC%80-instagrammabili-di-Napoli-dove-si-mangia-bene-6l0n4gs6wybx5v5oqmxvnfetefe42yk8ggxksqnlwac.jpg"
                  alt="Item 1"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Alberto I°</Card.Title>
                  <Card.Text>Napoli</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%", }}>
                <Card.Img
                  src="https://media-cdn.tripadvisor.com/media/photo-p/0f/c0/42/6d/fiorentina.jpg"
                  alt="Item 2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Da Benito</Card.Title>
                  <Card.Text>Orentano (PI)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://tse1.mm.bing.net/th/id/OIP.Ki5MZY89_ZR5h1GaYOoyYgAAAA?pid=ImgDet&w=207&h=207&c=7&dpr=1,3"
                  alt="Item 3"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Il Tartufo</Card.Title>
                  <Card.Text>Acqualagna (PU)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/0a/71/e6/8e/carne-salada-di-black.jpg"
                  alt="Item 4"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>La Giandrina</Card.Title>
                  <Card.Text>Matelica (MC)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <h3>Per gli amanti del sushi</h3>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://www.sushicorner.it/wp-content/uploads/2021/05/CORNER-ROLL.jpg"
                  alt="Item 1"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Sushi Corner</Card.Title>
                  <Card.Text>Senigallia</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%", }}>
                <Card.Img
                  src="https://www.scattidigusto.it/wp-content/uploads/2019/12/G-sushi-Oriental-Pleasure-Milano.jpg"
                  alt="Item 2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>G Sushi</Card.Title>
                  <Card.Text>Milano</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://ams3.digitaloceanspaces.com/tmi-images/kokkoya_sushi_545/gallery/GEgtAJYPcTCmKKiDt.jpg"
                  alt="Item 3"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Kokkoya Sushi</Card.Title>
                  <Card.Text>Porto San Giorgio(AP)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/10/dc/56/47/mix-di-uramaki.jpg"
                  alt="Item 4"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Orchidea</Card.Title>
                  <Card.Text>Rimini</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          {/* New section with text and image */}
          {/* Image */}
          <div className="col-sm-12 mb-4 text-center mt-5">
            {/* Image */}
            <img
              src={GlassFork}
              alt="GlassFork"
              width={185}
              height={185}
            />

            {/* Text */}
            <h3 className="mt-4">Benvenuti nella sezione dedicata agli amanti del vino!</h3>
          </div>

          {/* New full-width cards */}
          {/* Card with image on the left */}
          <div className="col-sm-12 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Row className="align-items-center">
                {/* Image */}
                <Col sm={12} md={6}>
                  <img
                    src="https://media-assets.lacucinaitaliana.it/photos/61fb123519ad4b37e96bce76/16:9/w_2560%2Cc_limit/vino-senza-glutine.jpg"
                    alt="Item 5"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </Col>

                {/* Text */}
                <Col sm={12} md={6}>
                  <h5>Restaurant Name</h5>
                  <p>Location</p>
                </Col>
              </Row>
            </Link>
          </div>

          {/* Card with image on the right */}
          <div className="col-sm-12 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Row className="align-items-center flex-row-reverse">
                {/* Image */}
                <Col sm={12} md={6}>
                  <img
                    src="https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/03/come-si-fa-vino.jpg"
                    alt="Item 6"
                    style={{ width: "100%", height: "200px", objectFit: "cover" }}
                  />
                </Col>

                {/* Text */}
                <Col sm={12} md={6}>
                  <h5>Restaurant Name</h5>
                  <p>Location</p>
                </Col>
              </Row>
            </Link>
          </div>
            {/* New full-width carousel */}
      <div className="col-sm-12 mb-4">
        <h4>Vieni a scoprire i territori da cui provengono i nostri vini e buon viaggio culinario... </h4>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.radiogold.tv/wp-content/uploads/2021/11/P6020128_OK.jpg"
              alt="Slide 1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://www.aiafood.com/sites/default/files/articles/degustazione_vino_in_casa.jpg"
              alt="Slide 2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://maiorifestival.it/wp-content/uploads/2021/06/Degustazione-vini.jpg"
              alt="Slide 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
        </div>
      </div>
    </div>

  );
}

export default AdvertisementPage;
