import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { fetchDataSuccess } from '../redux/actions';
import { useNavigate } from "react-router-dom";


const NavbarForm = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [city, setCity] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
const navigate= useNavigate();



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 520) {
        setShowSearch(true);
      } else {
        setShowSearch(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // ...
  
  const handleSearch = async (e) => {
      e.preventDefault();
      // Costruisci l'URL della richiesta
      let url = `http://localhost:8080/ristoranti/cerca`;
      if (searchValue && city) {
          url += `?perStringa=${searchValue}&citta=${city}`;
      } else if (searchValue) {
          url += `?perStringa=${searchValue}`;
      } else {
          url += `?citta=${city}`;
      }
      // Invia la richiesta al server
      try {
          const response = await fetch(url);
          if (response.ok) {
              const data = await response.json();
              dispatch(fetchDataSuccess(data));
              // Reindirizza l'utente alla pagina dei risultati della ricerca
              navigate("/restaurant");
          } else {
              alert("Si è verificato un errore durante la ricerca dei ristoranti");
          }
      } catch (error) {
          alert("Si è verificato un errore durante la ricerca dei ristoranti:", error);
      }
  };
  

  return (
    <div className={`bg-light text-right d-flex justify-content-end p-1 ${showSearch ? "show-search" : ""}`}>
      {showSearch && (
        <Form className="d-flex search-form" onSubmit={handleSearch}>
          <Form.Control size="sm" type="text" placeholder="Città" value={city} onChange={(e) => setCity(e.target.value)} />
          <Form.Control size="sm" type="text" placeholder="Ristorante, Tipo cucina" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <Button type="submit">
            <BsSearch />
          </Button>
        </Form>
      )}
    </div>
  );
};

export default NavbarForm;

