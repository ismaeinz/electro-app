import React from "react";
import "./SlideCollection.css";
import P1 from "../img/shop01.png";
import P2 from "../img/shop02.png";
import P3 from "../img/shop03.png";
import ProductCollection from "./ProductCollection";
import { Container } from "react-bootstrap";
const SlideCollection = () => {
  return (
    <Container>
      <div className="slidecollection-container">
        <ProductCollection imgSrc={P1} title={"Accessories Collection"} />
        <ProductCollection imgSrc={P2} title={"Accessories Collection"} />
        <ProductCollection imgSrc={P3} title={"Cameras Collection"} />
      </div>
    </Container>
  );
};

export default SlideCollection;
