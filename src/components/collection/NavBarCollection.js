import React from "react";
import "./NavBarCollection.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NavBarCollection = () => {
  return (
    <Container>
      <ul className="navBarCollections-ul">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hotdeals">Hot Deals</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/laptops">Laptops</Link>
        </li>
        <li>
          <Link to="/smartphones">Smartphones</Link>
        </li>
        <li>
          <Link to="/cameras">Cameras</Link>
        </li>
        <li>
          <Link to="/accessories">Accessories</Link>
        </li>
      </ul>
      <hr />
    </Container>
  );
};

export default NavBarCollection;
