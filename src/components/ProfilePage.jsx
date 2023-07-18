import React, { useEffect, useState } from 'react';
import logo from "../logo.png";
import { Container, Row, Col, Button, Card, ListGroup, ListGroupItem, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DELETE_RESERVATION, deleteRistorante, getUserLoggedAction, setUtenteLoggato } from "../redux/actions";


const ProfilePage = () => {

    const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [currentReservation, setCurrentReservation] = useState(null);
    const [newNumPeople, setNewNumPeople] = useState(null);
    const [recensioniUtente, setRecensioniUtente] = useState([]);
    const { restaurantId } = useParams();
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

    // get recensioni
    // useEffect(() => {
    //     const RecensioniUtente = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:8080/recensioni/search/${ristoranteId}`);
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 setRecensioniUtente(data);
    //             } else {
    //                 alert('Si è verificato un errore durante il recupero delle recensioni utente');
    //             }
    //         } catch (error) {
    //             alert('Si è verificato un errore durante il recupero delle recensioni utente:', error);
    //         }
    //     };

    //     RecensioniUtente();
    // }, []);


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
                        <Card>
                            <Card.Body>
                                <h4>Il mio profilo</h4>
                                <Card.Title>{utenteLoggato.nome} {utenteLoggato.cognome}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{utenteLoggato.email}</Card.Subtitle>
                                <Card.Text>
                                    Numero di telefono: {utenteLoggato.numeroTelefono}<br />
                                    ID Utente: {utenteLoggato.id}<br />
                                    Ruolo: {utenteLoggato.role}
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
                                                <ListGroupItem>Prenotazione al ristorante: {prenotazione.nomeRistorante}</ListGroupItem>
                                                <ListGroupItem>Data prenotazione: {dataFormattata} {oraFormattata}</ListGroupItem>
                                                <ListGroupItem>Numero persone: {prenotazione.numeroPersone}</ListGroupItem>
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
                        {/* ... */}
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

