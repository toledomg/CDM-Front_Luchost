/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import logo from "/luchost.svg";
import { StyledImageDiv } from "./styles.Image";

const LogoImg = () => (
  <StyledImageDiv className="pokeball-Bg">
    <img src={logo} alt="logo imagem" />
  </StyledImageDiv>
);

export default LogoImg;
