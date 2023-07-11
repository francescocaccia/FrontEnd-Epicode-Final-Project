import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteRistorante, getUserLoggedAction, setUtenteLoggato } from "../redux/actions";


const ProfilePage = () => {

    const utenteLoggato = useSelector((stato) => stato.home.clienteLoggato);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState("");

    const handleLogout = () => {
        if (localStorage.getItem("token")) {
            localStorage.clear();
            dispatch(setUtenteLoggato(null));
            alert("Logout effettuato");
            navigate("/");
        }
    };


    useEffect(() => {
        dispatch(getUserLoggedAction());

    }, []);


    useEffect(() => { setToken(localStorage.getItem("token")) },
        [])



    const removeRestaurant = async (ristoranteId) => {
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
    };

    return (
        <Container className="profile-container mb-5">
            <Row className="justify-content-center">
                <Col xs={12} sm={6} md={4} className="text-center mb-5">
                    <img
                        src="https://th.bing.com/th/id/R.d4444042ff824f986d8921872b6d433b?rik=MtQXglCoUEhONg&riu=http%3a%2f%2fupaluku.cz%2fwp-content%2fuploads%2flogo_white.png&ehk=iZlktW0OQm6mHu%2bSMQY2QLXWfztsLAgfaAjzotLy9qA%3d&risl=&pid=ImgRaw&r=0"
                        alt="logo"
                        className="logo-image"
                        width={90}
                        height={90}
                    />
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
                <Col className="bg-dark text-light profile-details" xs={12} sm={6} md={8}>
                    <div className="profile-content">
                        <h1 className="text-uppercase mt-5">{utenteLoggato.nome} {utenteLoggato.cognome}</h1>
                        <p className="email">Email: {utenteLoggato.email}</p>
                        <p className="phone ">Numero di telefono: {utenteLoggato.numeroTelefono}</p>
                        <p className="user-id">ID Utente: {utenteLoggato.id}</p>
                        {utenteLoggato && utenteLoggato.ristorante && utenteLoggato.ristorante.map((ristorante) => (
                            <div key={ristorante.id} className="ristorante-item">
                                <h6>proprietario del/dei Ristoranti</h6>
                                <p>{ristorante.nomeRistorante}</p>
                                <p>{ristorante.id}</p>
                                <Button onClick={() => removeRestaurant(ristorante.id)} className='bg-primary'>Elimina</Button>
                            </div>
                        ))}
                        <p className="role">Ruolo: {utenteLoggato.role}</p>
                        <Button variant="danger" onClick={handleLogout} className="logout-button mb-5">
                            Logout
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ProfilePage;

