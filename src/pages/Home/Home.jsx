import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HomeSection } from "./style";
import logo from "/logo.png";

import { HomeLoginContext } from "./../../providers/HomeLoginContext";

import FormLogin from "../../components/Main/Form/FormLogin";
import LogoImg from "./image";

function Home() {
  const { register, handleSubmit, errors, onSubmitFunction } =
    useContext(HomeLoginContext);

  const navigate = useNavigate();
  const CadPage = () => navigate("/cadastro");

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 1 }}
      >
        <HomeSection>
          {/* <span>CDM LucHost</span> */}
          <img src={logo} title="Logo da LucHost"></img>
          <div>
            <h2>Login</h2>
            <FormLogin
              onSubmit={handleSubmit(onSubmitFunction)}
              navigate={navigate}
            />
            <div>
              <span>Ainda não possui uma conta?</span>

              <Link to="/cadastro">Cadastre-se</Link>
            </div>
          </div>
        </HomeSection>
        <LogoImg />
      </motion.div>
    </>
  );
}

export default Home;
