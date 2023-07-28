import React from "react";
import { Link } from "react-router-dom";
import { HeaderHubDash } from "./styles";
function HeaderD({ exitPage }) {
  return (
    <>
      <HeaderHubDash>
        <span>CDM LucHost</span>
        <Link onClick={exitPage} to="/home">
          Sair
        </Link>
      </HeaderHubDash>
    </>
  );
}

export default HeaderD;
