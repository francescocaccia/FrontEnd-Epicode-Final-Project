import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
}

export default AdvertisementPage;
