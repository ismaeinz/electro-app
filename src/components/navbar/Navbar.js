import React from "react";
import classes from "./Navbar.module.css";
import { BiPhone, BiLocationPlus } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogoUsd } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <span>
              <BiPhone />
            </span>
            <p>+2010101010101</p>
          </li>
          <li>
            <span>
              <AiOutlineMail />
            </span>
            <p>email@email.com</p>
          </li>
          <li>
            <span>
              <BiLocationPlus />
            </span>
            <p>+ 1734 Stonechat Road</p>
          </li>
        </ul>
        <ul>
          <li>
            <span>
              <IoLogoUsd />
            </span>
            <p> +USD </p>
          </li>
          <li>
            <span>
              <CgProfile />
            </span>
            <p> My Account </p>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
