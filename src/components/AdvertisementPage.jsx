import React from "react";

function AdvertisementPage() {
  return (
    <div className="container mb-5">
      <div className="mb-5">
        <h1 className="text-center">Scelti da noi</h1>
        <div className="d-flex justify-content-center">
          <div className="card mx-2" style={{ width: "18rem" }}>
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
          <div className="card mx-2" style={{ width: "18rem" }}>
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
          <div className="card mx-2" style={{ width: "18rem" }}>
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
      </div>
      <h4>Newsletter</h4>
      <h6>Vieni a scoprire i vini più buoni d'Italia</h6>
      <div className="d-flex mt-3">
        <div className="me-3 ">
          <img
            src="https://www.compriamoitaliano.it/wp-content/uploads/2019/04/VINO-ITALIANO-1200x630.jpg"
            alt="Advertisement"
            width={250}
            height={250}
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum excepturi necessitatibus consequuntur
            libero ullam, neque maxime voluptatibus dolores iusto. Consectetur assumenda quis nostrum consequuntur quos
            aliquam et ex hic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae qui exercitationem,
            adipisci, officiis ipsa doloremque minima cumque tenetur non perferendis harum ullam placeat nam
            necessitatibus earum, corrupti ad voluptatem itaque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita, quae commodi veritatis deserunt quisquam a provident animi accusantium officia eligendi quia
            velit recusandae iusto ratione praesentium? Assumenda quis impedit esse.
          </p>
        </div>
      </div>

      <div className="d-flex mt-5">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsum excepturi necessitatibus consequuntur
            libero ullam, neque maxime voluptatibus dolores iusto. Consectetur assumenda quis nostrum consequuntur quos
            aliquam et ex hic Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae qui exercitationem,
            adipisci, officiis ipsa doloremque minima cumque tenetur non perferendis harum ullam placeat nam
            necessitatibus earum, corrupti ad voluptatem itaque. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Expedita, quae commodi veritatis deserunt quisquam a provident animi accusantium officia eligendi quia
            velit recusandae iusto ratione praesentium? Assumenda quis impedit esse.
          </p>
        </div>
        <div className="ms-3">
          <img
            src="https://www.cantineprovima.it/wp-content/uploads/2022/07/matelica-wine-festival-2022-1240x704.jpg"
            alt="Advertisement"
            width={250}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvertisementPage;
