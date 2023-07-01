import React from "react";

function AdvertisementPage() {
  return (
    <div className="container mb-5">
      <div className="mb-5">
        <h1 className="text-center mb-4">Scelti da noi</h1>
        <div className="row justify-content-center">
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://magazine.misya.info/wp-content/uploads/2018/07/bottura-1024x682.jpg"
                className="card-img-top"
                alt="Item 1"
              />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Description for Card 1</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://gr-images.viamichelin.com/images/michelin_guide/max/236541_pro_9.jpg"
                className="card-img-top"
                alt="Item 2"
              />
              <div className="card-body">
                <h5 className="card-title">Card 2</h5>
                <p className="card-text">Description for Card 2</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://th.bing.com/th/id/OIP.T6Ps0-3RdiPgPoxvku7w1gAAAA?pid=ImgDet&rs=1"
                className="card-img-top"
                alt="Item 3"
              />
              <div className="card-body">
                <h5 className="card-title">Card 3</h5>
                <p className="card-text">Description for Card 3</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <div className="card" style={{ width: "100%" }}>
              <img
                src="https://th.bing.com/th/id/OIP.T6Ps0-3RdiPgPoxvku7w1gAAAA?pid=ImgDet&rs=1"
                className="card-img-top"
                alt="Item 4"
              />
              <div className="card-body">
                <h5 className="card-title">Card 4</h5>
                <p className="card-text">Description for Card 4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertisementPage;
