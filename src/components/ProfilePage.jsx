import React, { useEffect, useState } from 'react';
import logo from "../logo.png";
import { Container, Row, Col, Button, Card, ListGroup, ListGroupItem, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DELETE_RECENSIONE, DELETE_RESERVATION, deleteRistorante, getUserLoggedAction, setUtenteLoggato } from "../redux/actions";
import { BiSolidStar } from 'react-icons/bi';


const ProfilePage = () => {

    const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);
    const ristoranti = useSelector(state => state.home.ristoranti);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [currentReservation, setCurrentReservation] = useState(null);
    const [newNumPeople, setNewNumPeople] = useState(null);
    const [reviews, setReviews] = useState([]);




    //Mostra Modale e modifica prenotazione
    const handleEditClick = (prenotazione) => {
        setCurrentReservation(prenotazione);
        setNewNumPeople(prenotazione.numeroPersone);
        setShowModal(true);
    }


    //Logout
    const handleLogout = () => {
        if (window.confirm("Sei sicuro di voler effettuare il Logout?")) {
            if (localStorage.getItem("token")) {
                localStorage.clear();
                dispatch(setUtenteLoggato(null));
                alert("Logout effettuato");
                navigate("/");
            }
        }
    };

    //recupera i dati dell'utente loggato
    useEffect(() => {
        dispatch(getUserLoggedAction());

    }, []);

    //recupera token utente
    useEffect(() => { setToken(localStorage.getItem("token")) },
        [])

    //rimuovi ristorante
    const removeRestaurant = async (ristoranteId) => {
        if (window.confirm("Sei sicuro di voler rimuovere questo ristorante?")) {
            const URL = `http://localhost:8080/ristoranti/delete/${ristoranteId}`;
            const headers = {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            };
            try {
                const risposta = await fetch(URL, headers);
                if (risposta.ok) {
                    alert("ristorante eliminato: " + ristoranteId);
                    dispatch(deleteRistorante(ristoranteId));
                    dispatch(getUserLoggedAction())
                }
            } catch (error) {
                console.log(error);
            }
        }
    };


    //put per modifica prenotazione
    const handleSaveChanges = async () => {
        const Payload = {
            dataPrenotazione: currentReservation.dataPrenotazione,
            numeroPersone: parseInt(newNumPeople),
            idCliente: utenteLoggato.id,
            idRistorante: currentReservation.idRistorante,
        };
        if (window.confirm("Sei sicuro di voler modificare questa prenotazione?")) {
            // Invia la richiesta PUT per aggiornare la prenotazione con il nuovo numero di persone
            const URL = `http://localhost:8080/prenotazione/modifica/${currentReservation.idPrenotazione}`;
            const headers = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(Payload)
            };
            try {
                const risposta = await fetch(URL, headers);
                if (risposta.ok) {
                    alert("Prenotazione aggiornata");
                    dispatch(getUserLoggedAction());
                    setShowModal(false);
                } else {
                    risposta.text().then(r => {
                        alert(r);
                    })
                }
            } catch (error) {
                console.log(error);
            }
        }
    }
    //DELETE RESERVATION ELIMINA LA PRENOTAZIONE++++++++++++++++

    const deleteReservation = (clienteId, idPrenotazione) => {
        return (dispatch) => {
            if (window.confirm("Sei sicuro di voler cancellare questa prenotazione?")) {
                fetch(`http://localhost:8080/prenotazione/elimina/${clienteId}/${idPrenotazione}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            dispatch({
                                type: DELETE_RESERVATION,
                                payload: idPrenotazione,
                            });
                            alert("prenotazione eliminata con successo")
                        } else {
                            throw new Error("Errore durante l'eliminazione della prenotazione");
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        };
    };

    // get recensioni per utente
    useEffect(() => {
        const fetchReviews = async (userId) => {
            try {
                const token = localStorage.getItem("token");
                const response = await fetch(`http://localhost:8080/recensioni/utente/${userId}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    setReviews(data);
                } else {
                    // gestisci gli errori qui
                }
            } catch (error) {
                // gestisci gli errori qui
            }
        };

        if (utenteLoggato) {
            fetchReviews(utenteLoggato.id);
        }
    }, [utenteLoggato]);

    //DELETE RECENSIONE 
    const deleteRecensione = (clienteId, idRecensione) => {
        return (dispatch) => {
            if (window.confirm("Sei sicuro di voler cancellare questa prenotazione?")) {
                fetch(`http://localhost:8080/recensioni/delete/${clienteId}/${idRecensione}`, {
                    method: "DELETE",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                })
                    .then((response) => {
                        if (response.ok) {
                            dispatch({
                                type: DELETE_RECENSIONE,
                                payload: idRecensione,
                            });
                            alert("prenotazione eliminata con successo")
                        } else {
                            throw new Error("Errore durante l'eliminazione della prenotazione");
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        };
    };


    return (
        <>
            <Container className="profile-container mb-5">
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} className="text-center mb-5">
                        <img
                            src={logo}
                            alt="logo"
                            className="logo-image"
                            width={180}
                            height={180}
                        />
                        <h4>Il mio Account</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} sm={6} md={4} className="text-center">
                        <img
                            src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800043/61010830-user-icon-man-profil-homme-d-affaires-avatar-personne-glyphe-vector-illustration.jpg?ver=6"
                            alt="Profilo"
                            className="profile-image"
                        />
                    </Col>
                    <Col xs={12} sm={6} md={8}>
                    <h4>Il mio profilo</h4>
                        <Card>
                            <Card.Body>                          
                                <Card.Title> {utenteLoggato.nome} {utenteLoggato.cognome}</Card.Title>
                                <Card.Subtitle className="mb-2 fs-5 text-muted">{utenteLoggato.email}</Card.Subtitle>
                                <Card.Text>
                                    <span className='fw-semibold fs-5'> Numero di telefono: </span>{utenteLoggato.numeroTelefono}<br />
                                    <span className='fs-5'> ID Utente: {utenteLoggato.id}</span><br />
                                    <span className='fs-5'> Ruolo: {utenteLoggato.role}</span>
                                </Card.Text>
                                <Button variant="danger" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </Card.Body>
                        </Card>
                        {utenteLoggato && utenteLoggato.role === 'ADMIN' && (
                            <>
                                <h4 className="mt-3">I miei ristoranti</h4>
                                {utenteLoggato.ristorante.map((ristorante) => (
                                    <Card key={ristorante.id} className="mt-3">
                                        <Card.Body>
                                            <Card.Title>{ristorante.nomeRistorante}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">ID Ristorante: {ristorante.id}</Card.Subtitle>
                                            <Button variant="danger" onClick={() => removeRestaurant(ristorante.id)}>Elimina ristorante</Button>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </>
                        )}
                        <h4 className="mt-3">Prenotazioni</h4>
                        {utenteLoggato.prenotazioni.length === 0 ? (
                            <p>Non hai prenotazioni</p>
                        ) : (
                            <Card className="mt-3">
                                <Card.Body>
                                    <Card.Title>Le mie prenotazioni</Card.Title>
                                    {utenteLoggato.prenotazioni.map((prenotazione) => {
                                        const dataPrenotazione = new Date(prenotazione.dataPrenotazione);
                                        const opzioniData = { year: 'numeric', month: '2-digit', day: '2-digit' };
                                        const opzioniOra = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
                                        const dataFormattata = dataPrenotazione.toLocaleDateString('it-IT', opzioniData);
                                        const oraFormattata = dataPrenotazione.toLocaleTimeString('it-IT', opzioniOra);
                                        return (
                                            <ListGroup key={prenotazione.idPrenotazione} className="mt-3">
                                                <ListGroupItem><span className='fs-5'>Prenotazione al ristorante: {prenotazione.nomeRistorante}</span></ListGroupItem>
                                                <ListGroupItem><span className='fs-5'>Data prenotazione: {dataFormattata} {oraFormattata}</span></ListGroupItem>
                                                <ListGroupItem><span className='fs-5'> Numero persone: {prenotazione.numeroPersone}</span></ListGroupItem>
                                                <ListGroupItem>
                                                    <Button className="mb-2 mb-sm-0 me-sm-2" variant="primary" onClick={() => handleEditClick(prenotazione)}>
                                                        Modifica prenotazione
                                                    </Button>
                                                    <Button variant="danger" onClick={() => dispatch(deleteReservation(utenteLoggato.id, prenotazione.idPrenotazione))}>
                                                        Elimina prenotazione
                                                    </Button>
                                                </ListGroupItem>
                                            </ListGroup>
                                        );
                                    })}
                                </Card.Body>
                            </Card>
                        )}
                        {reviews.length > 0 ? (
                            <>
                                <h4>Le tue recensioni:</h4>
                                {reviews.map((review) => {
                                    const ristorante = ristoranti.find(r => r.id === review.idRistorante);
                                    return (
                                        <Card key={review.idRecensione} className="mt-3">
                                            <Card.Body>
                                                <Card.Title>ID Recensione: {review.idRecensione}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    Valutazione:
                                                    {[...Array(review.numeroStelle)].map((_, i) => (
                                                        <BiSolidStar
                                                            key={i}
                                                            style={{ color: review.numeroStelle >= 4 ? '#FFD700' : 'gray' }}
                                                            className='fs-5'
                                                        />
                                                    ))}
                                                </Card.Subtitle>
                                                <Card.Text>
                                                    <span className="fs-5">Recensione: {review.contenutoRecensione}</span>
                                                </Card.Text>
                                                {/* Visualizza il nome del ristorante */}
                                                {ristorante && <Card.Text>Nome Ristorante: {ristorante.nomeRistorante}</Card.Text>}
                                                <Button
                                                    variant="danger"
                                                    onClick={() => dispatch(deleteRecensione(utenteLoggato.id, review.idRecensione))}
                                                >
                                                    Elimina recensione
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    );
                                })}
                            </>
                        ) : (
                            <p className='fs-5 fw-semibold mt-4'>Non hai ancora scritto nessuna recensione.</p>
                        )}

                    </Col>
                </Row>
            </Container>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica prenotazione</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {currentReservation && (
                        <>
                            <ListGroup className="mt-3">
                                <ListGroupItem>Prenotazione al ristorante: {currentReservation.nomeRistorante}</ListGroupItem>
                                <ListGroupItem>
                                    Data prenotazione: {
                                        new Date(currentReservation.dataPrenotazione)
                                            .toLocaleDateString('it-IT', { year: 'numeric', month: '2-digit', day: '2-digit' })
                                    } Alle ore : {
                                        new Date(currentReservation.dataPrenotazione)
                                            .toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
                                    }
                                </ListGroupItem>
                                <ListGroupItem>Numero persone: {currentReservation.numeroPersone}</ListGroupItem>
                            </ListGroup>
                            <Form.Group controlId="formNumPeople" className="mt-3">
                                <Form.Label>Modifica numero persone</Form.Label>
                                <Form.Control type="number" value={newNumPeople} onChange={(e) => setNewNumPeople(e.target.value)} />
                            </Form.Group>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSaveChanges} type="submit">
                        Salva modifiche
                    </Button>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Annulla
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
}

export default ProfilePage;

