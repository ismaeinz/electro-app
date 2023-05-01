import React from "react";
import { SlBasket } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";

import "./Header.css";
import TopHeader from "./TopHeader";
import Logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <TopHeader />
      <ul className={"header-container__ul"}>
        <li>
          <img src={Logo} alt="logo" />
        </li>
        <li>
          <input type="search" placeholder="Search here" />
        </li>

        <li className="ul-item">
          <div className="cart">
            <span className="quantity">1</span>
            <i className="icon">
              <SlBasket />
            </i>
          </div>
          <p>Your Wishlist </p>
        </li>

        <li className="ul-item">
          <div className="cart">
            <span className="quantity">1</span>
            <i className="icon">
              <AiOutlineHeart />
            </i>
          </div>
          <p>Your Wishlist </p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
