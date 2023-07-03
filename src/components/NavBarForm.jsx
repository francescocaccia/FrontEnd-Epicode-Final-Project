import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarForm = () => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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

  return (
    <div className={`bg-light text-right d-flex justify-content-end p-1 ${showSearch ? "show-search" : ""}`}>
      {showSearch && (
        <Form className="d-flex">
          <Form.Control size="sm" type="text" placeholder="Città" />
          <Form.Control size="sm" type="text" placeholder="Tipo cucina, Nome del Ristorante" />
          <Button type="submit">Cerca</Button>
        </Form>
      )}
    </div>
  );
};

export default NavbarForm;
