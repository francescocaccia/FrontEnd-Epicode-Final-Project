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
                  src="https://magazine.misya.info/wp-content/uploads/2018/07/bottura-1024x682.jpg"
                  alt="Item 1"
                />
                <Card.Body>
                  <Card.Title>Card 1</Card.Title>
                  <Card.Text>Description for Card 1</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://gr-images.viamichelin.com/images/michelin_guide/max/236541_pro_9.jpg"
                  alt="Item 2"
                />
                <Card.Body>
                  <Card.Title>Card 2</Card.Title>
                  <Card.Text>Description for Card 2</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://th.bing.com/th/id/OIP.T6Ps0-3RdiPgPoxvku7w1gAAAA?pid=ImgDet&rs=1"
                  alt="Item 3"
                />
                <Card.Body>
                  <Card.Title>Card 3</Card.Title>
                  <Card.Text>Description for Card 3</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://th.bing.com/th/id/OIP.T6Ps0-3RdiPgPoxvku7w1gAAAA?pid=ImgDet&rs=1"
                  alt="Item 4"
                />
                <Card.Body>
                  <Card.Title>Card 4</Card.Title>
                  <Card.Text>Description for Card 4</Card.Text>
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
