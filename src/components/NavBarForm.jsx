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
  const handleSearch = () => {
    dispatch(getRistorantibyStringAndCity(searchValue, city));
  };

  
  const getRistorantibyStringAndCity = (stringa, city) => {

    let minuscolo = stringa.toLowerCase();
    let primaMaiuscola = minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1);
    let url = `http://localhost:8080/ristoranti/cerca`
    if (primaMaiuscola !== "" && city !== "") {
      url = url + `?perStringa=${primaMaiuscola}&citta=${city}`
    } else if (primaMaiuscola !== "") {
      url = url + `?perStringa=${primaMaiuscola}`
    } else {
      url = url + `?citta=${city}`
    }

    return async () => {
      try {
        const resp = await fetch(url)
        if (resp.ok) {
          const data = await resp.json();
          if (data.length !== 0) {
            dispatch(fetchDataSuccess(data));
            navigate(`/restaurant/${data[0].idRistorante}`);
          } else {
            alert("non sono stati trovati ristoranti con questi parametri")
          }
        }
      } catch (error) {
        alert('Si è verificato un errore:', error);
      }
    };

  }

  return (
    <div className={`bg-light text-right d-flex justify-content-end p-1 ${showSearch ? "show-search" : ""}`}>
      {showSearch && (
        <Form className="d-flex search-form" onSubmit={getRistorantibyStringAndCity}>
          <Form.Control size="sm" type="text" placeholder="Città" value={city} onChange={(e) => setCity(e.target.value)} />
          <Form.Control size="sm" type="text" placeholder="Ristorante, Tipo cucina" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
          <Button className="my-button"  disabled={!city && !searchValue} onClick={handleSearch}>
            <BsSearch />
          </Button>
        </Form>
      )}
    </div>
  );
};

export default NavbarForm;

