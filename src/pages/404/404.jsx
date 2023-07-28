import { React } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { BtnText } from "../../style/Global/Buttons";
import { NotFound } from "./../404/styles";

function NotFoundPage() {
  const navigate = useNavigate();

  const backHomePage = () => navigate("/home");
  return (
    <NotFound>
      <h1>404 - Page Not Found</h1>
      <Link to="/home">Voltar</Link>
    </NotFound>
  );
}

export default NotFoundPage;
