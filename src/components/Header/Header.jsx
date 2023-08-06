import React from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import { HeaderHubDash } from "./styles";
function HeaderD({ exitPage }) {
  return (
    <HeaderHubDash>
      <a href="/dashboard" className="reset-link">
        <img src={logo} title="Logo da LucHost" />
      </a>
      <Link onClick={exitPage} to="/home" title="Fazer Logout">
        Sair
      </Link>
    </HeaderHubDash>
  );
}

export default HeaderD;
