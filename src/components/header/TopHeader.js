import React from "react";
import "./TopHeader.css";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoUsd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Container } from "react-bootstrap";

const TopHeader = () => {
  return (
    <nav className="nav-container">
      <Container>
        <nav className="nav">
          <ul className={"nav-ul__left"}>
            <li className="nav-ul__item">
              <p>
                <BiPhoneCall />
              </p>
              <p>+2010101010101</p>
            </li>

            <li className="nav-ul__item">
              <p>
                <AiOutlineMail />
              </p>
              <p>email@email.com</p>
            </li>
            <li className="nav-ul__item">
              <p>
                <BiLocationPlus />
              </p>
              <p>+ 1734 Stonechat Road</p>
            </li>
          </ul>
          <ul className="nav-ul__right">
            <li className="nav-ul__item">
              <p>
                <IoLogoUsd />
              </p>
              <p> +USD </p>
            </li>
            <li className="nav-ul__item">
              <p>
                <CgProfile />
              </p>
              <p> My Account </p>
            </li>
          </ul>
        </nav>
      </Container>
    </nav>
  );
};

export default TopHeader;
