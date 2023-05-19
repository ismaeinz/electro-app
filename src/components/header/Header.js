import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";

import "./Header.css";
import TopHeader from "./TopHeader";
import Logo from "../img/logo.png";
import { Container } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [collapse, setCollapse] = useState(true);
  const collapseClass = collapse ? "show" : "close";
  return (
    <>
      <TopHeader />
      <ul className={"header-container"}>
        <Container>
          <ul className={"header-container__ul "}>
            <li className="collapse-container">
              <img src={Logo} alt="logo" />
              <button
                className="close-button"
                onClick={() => setCollapse(!collapse)}
              >
                <AiOutlineClose />
              </button>
            </li>

            <li className="header-search">
              <input
                className={`${collapseClass}`}
                type="search "
                placeholder=" what are you looking about ?"
              />
            </li>
            <li className={`${collapseClass}`}>
              <li className="cart-container">
                <div className="cart">
                  <span className="quantity">1</span>
                  <i className="icon">
                    <SlBasket />
                  </i>
                </div>
                <p>Your Wishlist </p>
              </li>
            </li>
            <li className={`${collapseClass}`}>
              <li className="cart-container">
                <div className="cart">
                  <span className="quantity">1</span>
                  <i className="icon">
                    <AiOutlineHeart />
                  </i>
                </div>
                <p>Your Wishlist </p>
              </li>
            </li>
          </ul>
        </Container>
      </ul>
    </>
  );
};

export default Header;
