import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Section, SectionInfo } from "./styles";
import { api } from "../../services/api";
import { motion } from "framer-motion";
import { BtnAdd, BtnProfile } from "../../style/Global/Buttons";

import { ModalTechContext } from "../../providers/ModalTechContext";
import { UserContext } from "../../providers/UserContext";

import RenderTech from "../../components/Tech/RenderTech/RenderTech";
import Header from "../../components/Header/Header";

import jwtDecode from "jwt-decode";
import spinner from "../../assets/img/spinner.svg";

import ModalAdd from "../Home/Modal/ModalContactAdd";
import ModalEdit from "../Home/Modal/ModalContacEdit";
import ModalUserEdit from "../Home/Modal/ModalUserEdit";

let Name = [];
let Email = [];

function Dashboard() {
  const {
    showModalEdit,
    setShowModalEdit,
    showModalAdd,
    setShowModalAdd,
    showModalUserEdit,
    setModalShowUserEdit,
    modalShowAdd,
    modalShowEdit,
    modalShowUserEdit,
  } = useContext(ModalTechContext);

  const { user, setUser, loading, setLoading, setAttUser, attUser } =
    useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    const decodedToken = jwtDecode(token);
    const id = decodedToken.sub;
    async function loadUser() {
      try {
        setLoading(true);
        const response = await api.get(`users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
        setAttUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const exitPage = () => {
    localStorage.removeItem("@CDM-Token");
    localStorage.removeItem("@CDM-ID");
    setUser(null);
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ opacity: 1 }}
    >
      {showModalEdit && <ModalEdit setShowModalEdit={setShowModalEdit} />}
      {showModalAdd && <ModalAdd setShowModalAdd={setShowModalAdd} />}
      {showModalUserEdit && (
        <ModalUserEdit setModalShowUserEdit={setModalShowUserEdit} />
      )}

      <Nav>
        <Header exitPage={exitPage} />
      </Nav>
      <Section>
        <div>
          <h1>Olá</h1>
          <BtnProfile
            onClick={() => modalShowUserEdit()}
            className="material-symbols-outlined"
            title="Editar Usuário"
          >
            edit
          </BtnProfile>
        </div>

        <SectionInfo>
          <div>
            <h2>Lista de Contatos</h2>
            <BtnAdd onClick={() => modalShowAdd()} title="Adicionar Contatos">
              +
            </BtnAdd>
          </div>
          {loading ? (
            <div className="loading">
              <img src={spinner} />
            </div>
          ) : (
            <RenderTech />
          )}
        </SectionInfo>
      </Section>
    </motion.div>
  );
}

export default Dashboard;
