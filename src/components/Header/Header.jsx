import React from "react";
import { Link } from "react-router-dom";
import { HeaderHubDash } from "./styles";
function HeaderD({ exitPage }) {
  return (
    <>
      <HeaderHubDash>
        {/* <span>CDM LucHost</span> */}
        <img src="src\assets\img\logo.png" title="Logo da LucHost"></img>
        <Link onClick={exitPage} to="/home">
          Sair
        </Link>
      </HeaderHubDash>
    </>
  );
}

export default HeaderD;
