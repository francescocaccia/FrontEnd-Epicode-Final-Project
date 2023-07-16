import React from "react";
import { Button, Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import GlassFork from "../GlassFork.png";
import ChiliLoversSection from "./ChiliLoversSection";
import vantaggiLavorare from "../vantaggiLavorare.png";
import recensione from "../recensione.png";
import lavoratoriAderiscono from "../lavoratoriAderiscono.png";
import aderire from "../aderire.png";

function AdvertisementPage() {

  return (
    <div className="container mb-5">
      <div className="mb-5">
        <h1 className="text-center mb-4">Scelti da noi</h1>
        {/* ristoranti attraverso l'iatlia */}
        <h3 className="mb-4">Un viaggio culinario che attraversa l'Italia...</h3>
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
                  src="https://tse1.mm.bing.net/th/id/OIP.KCpRu_tir33W2upGEaEoOwHaE8?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                  alt="Item 2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>La Carbonella</Card.Title>
                  <Card.Text>San Vito lo Capo (TP)</Card.Text>
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
          {/* amanti del sushi+++++++++++++++++++ */}
          <h3 className="mb-4">Per gli amanti del sushi</h3>
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
          {/* sapori della toscana++++++++++++++++++++++++ */}
          <h3 className="mb-4">Sapori della Toscana</h3>
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
              <Card style={{ width: "100%", }}>
                <Card.Img
                  src="https://www.classic-collection.co.uk/blog/wp-content/uploads/2017/09/82112833_ml-medium.jpg"
                  alt="Item 2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Cantuccio</Card.Title>
                  <Card.Text>San Gimignano (SI)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://tse3.mm.bing.net/th/id/OIP.SdGMzgn80tpV8wclaLUKSgHaE8?pid=ImgDet&rs=1"
                  alt="Item 3"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Sette di Vino</Card.Title>
                  <Card.Text>Lucca</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://tse2.mm.bing.net/th/id/OIP.afCqFOEBQRkynQfsgLWV9wAAAA?pid=ImgDet&rs=1"
                  alt="Item 4"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Taverna Montepulciano</Card.Title>
                  <Card.Text>Firenze</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          {/* Delizie del Piemonte++++++++++++++++++++++++ */}
          <h3 className="mb-4">Delizie del Piemonte</h3>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%", }}>
                <Card.Img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/23/42/39/3b/carne-cruda-battuta-al.jpg"
                  alt="Item 2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Il Trittico Osteria</Card.Title>
                  <Card.Text>Alba (CN)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%", }}>
                <Card.Img
                  src="https://menu.sluurpy.it/foto-piatti/165515/1820909.jpg"
                  alt="Item 2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>La Taverna Dei Mercanti</Card.Title>
                  <Card.Text>Torino (TO)</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/reservationRestaurant" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://qul.imgix.net/bdc8e097-c8dd-4ef9-bb06-6aee49a37290/642270_sld.jpg"
                  alt="Item 3"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Osteria San Maurizio</Card.Title>
                  <Card.Text>Ivrea </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-3 mb-4">
            <Link to="/" className="custom-link text-decoration-none text-dark">
              <Card style={{ width: "100%" }}>
                <Card.Img
                  src="https://media-cdn.tripadvisor.com/media/photo-s/1b/b0/4c/b3/patata-souffle-carne.jpg"
                  alt="Item 4"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title>Condividere</Card.Title>
                  <Card.Text>Torino</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
          {/* amanti del vino */}
          <div className="col-sm-12 mb-4 text-center mt-5">
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
                  <h5>“Scoprite i tesori del nostro territorio: degustate i nostri pregiati vini italiani”</h5>
                  <p>“Scoprite i tesori nascosti del nostro territorio attraverso i nostri vini di qualità. Vi invitiamo a degustare i nostri pregiati vini italiani, accuratamente selezionati per offrirvi un’esperienza unica e indimenticabile. Lasciatevi conquistare dai sapori autentici e dalle note fruttate dei nostri vini, perfetti da abbinare ai piatti della nostra cucina locale. Non perdete l’occasione di vivere un viaggio sensoriale attraverso i nostri vigneti e di scoprire i segreti della nostra tradizione vinicola. Vi aspettiamo!”</p>
                </Col>
              </Row>
            </Link>
          </div>
          {/* Card with image on the right */}
          <div className="col-sm-12 mb-4 mt-4">
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
                  <h5>Viaggio sensoriale attraverso i nostri vigneti: scoprite i nostri pregiati vini italiani</h5>
                  <p>“Immergetevi nella bellezza del nostro territorio e scoprite i nostri pregiati vini italiani. Vi invitiamo a degustare i nostri vini di qualità, prodotti con passione e dedizione dai nostri viticoltori. Lasciatevi conquistare dai profumi intensi e dalle note fruttate dei nostri vini, perfetti da abbinare ai piatti della nostra cucina locale. Non perdete l’occasione di vivere un viaggio sensoriale attraverso i nostri vigneti e di scoprire i segreti della nostra tradizione vinicola. Vi aspettiamo!”</p>
                </Col>
              </Row>
            </Link>
          </div>
          {/* Vieni a scoprire i territori da cui provengono i nostri vini e buon viaggio culinario...*/}
          <div className="col-sm-12 mb-4 text-center">
            <h4 className="mb-4">Vieni a scoprire i territori da cui provengono i nostri vini e buon viaggio culinario... </h4>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://bottleofitaly.com/cdn/shop/articles/d5c217f535024a9bbac42914f1e9b956-768x530_grande.jpg?v=1662647258"
                  alt="Slide 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-image"
                  src="https://www.slowfood.it/slowine/assets/2022/07/belisario.jpg"
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
          {/* Per gli amanti del peperoncino peperoncinooooooooooooooooooooooooooooooooooooooooooooooooooooo!!!!!!!!!!!!!!!*/}
          <div>
            <ChiliLoversSection />
          </div>
          {/* card section per ristroratori */}
          <h4 className="d-flex justify-content-center mt-5 mb-4">A proposito di App&tito </h4>
          <p >App&tito è la principale piattaforma di prenotazione e scoperta di ristoranti online in Italia. Scopri migliaia tra i migliori ristoranti a Roma, Milano, Napoli, Firenze e molte altre città grazie alla nostra selezione imbattibile di ristoranti per ogni esigenza. Cerca la disponibilità dei ristoranti in qualsiasi momento e al miglior prezzo. Con recensioni verificate per guidarti, puoi scoprire il ristorante perfetto su App&tito.
            Ogni giorno e per ogni occasione, puoi usufruire di sconti e promozioni speciali sui tuoi piatti preferiti.
            Hai voglia di mangiare pizza a Napoli, sushi a Milano o vuoi scoprire un ristorante stellato a Roma? Sei un amante dei piccoli locali particolari a Firenze, desideroso di un brunch domenicale a Torino o in cerca di un’atmosfera romantica a Venezia? Segui la guida e trova i migliori ristoranti su App&tito!</p>
          <Container>
            {/* Aggiungi altre sezioni qui */}
            <Row className="my-4 text-center">
              <Col>
                <img src={vantaggiLavorare} roundedCircle
                  alt="vantaggiLavorare"
                  width={100}
                  height={100}/>
                <p>Scopri i vantaggi di lavorare con noi</p>
              </Col>
              <Col>
                <img src={recensione} roundedCircle 
                  alt="recensione"
                  width={100}
                  height={100}/>
                <p>Lasciaci una recensione</p>
              </Col>
              <Col>
                <img src={lavoratoriAderiscono} roundedCircle 
                  alt="lavoratoriAderiscono"
                  width={100}
                  height={100}/>
                <p>Come trattiamo i ristoratori che aderiscono</p>
              </Col>
              <Col>
                <img src={aderire}roundedCircle 
                    alt="aderire"
                    width={100}
                    height={100}/>
                <p>Info per aderire</p>
              </Col>
            </Row>
          </Container>
          <Card className="mt-5">
            <Card.Body>
              <div className="d-flex">
                <div className="flex-shrink-0">
                  <Card.Img variant="top" src="https://viviallestero.com/wp-content/uploads/2021/05/Ristorante-italiano-assume-cuochi-a-Valencia.jpg" />
                </div>
                <div className="flex-grow-1 ms-3">
                  <Card.Title>Registra il tuo ristorante</Card.Title>
                  <Card.Text>
                    Sei il proprietario di un ristorante e vuoi aumentare la visibilità e le prenotazioni? Registrati su App&tito e raggiungi una vasta comunità di amanti del cibo alla ricerca dei migliori ristoranti in Italia. Con la nostra piattaforma di prenotazione online, puoi gestire facilmente le prenotazioni e attirare nuovi clienti. Unisciti a noi oggi e fai crescere il tuo business!
                  </Card.Text>
                  <Button variant="outline-info" className="sharp-corners">
                    Aggiungi un ristorante
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>

  );
}

export default AdvertisementPage;
