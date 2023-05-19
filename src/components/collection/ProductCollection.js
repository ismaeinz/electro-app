import React from "react";
import "./ProductCollection.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Container } from "react-bootstrap";

const ProductCollection = ({ imgSrc, title }) => {
  return (
    // <Container>
    <div className="img-container">
      <div className="img-product">
        <img src={imgSrc} alt={imgSrc} />
      </div>
      <div className="imgDescription">
        <p>{title} </p>
        <span> SHOP NOW</span>
        <BsFillArrowRightCircleFill
          style={{ color: "white", padding: "2px" }}
        />
      </div>
    </div>
    // </Container>
  );
};

export default ProductCollection;
