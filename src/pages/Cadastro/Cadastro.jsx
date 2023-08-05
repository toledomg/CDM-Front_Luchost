import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

import logo from "/logo.png";

import { CadSection } from "./style";
import FormCadastro from "./../../components/Main/Form/FormCadastro";

function Cadastro() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 1 }}
    >
      <CadSection>
        <section>
          <img src={logo} title="Logo da LucHost"></img>
        </section>
        <div>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>
          <FormCadastro navigate={navigate} />
        </div>
      </CadSection>
    </motion.div>
  );
}

export default Cadastro;
