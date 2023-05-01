import React from "react";
import "./TopHeader.css";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoUsd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const TopHeader = () => {
  return (
    <nav className="nav-container">
      <ul className={"nav-ul__left"}>
        <li className="nav-ul__item">
          <span>
            <BiPhoneCall />
          </span>
          <p>+2010101010101</p>
        </li>
        <li className="nav-ul__item">
          <span>
            <AiOutlineMail />
          </span>
          <p>email@email.com</p>
        </li>
        <li className="nav-ul__item">
          <span>
            <BiLocationPlus />
          </span>
          <p>+ 1734 Stonechat Road</p>
        </li>
      </ul>
      <ul className="nav-ul__right">
        <li className="nav-ul__item">
          <span>
            <IoLogoUsd />
          </span>
          <p> +USD </p>
        </li>
        <li className="nav-ul__item">
          <span>
            <CgProfile />
          </span>
          <p> My Account </p>
        </li>
      </ul>
    </nav>
  );
};

export default TopHeader;
