import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Section, SectionInfo } from "./styles";
import { api } from "../../services/api";
import { motion } from "framer-motion";
import Header from "../../components/Header/Header";
import { BtnAdd } from "../../style/Global/Buttons";
import RenderTech from "../../components/Tech/RenderTech/RenderTech";

import jwtDecode from "jwt-decode";
import spinner from "../../assets/img/spinner.svg";

import ModalAdd from "../Home/Modal/ModalAdd";
import ModalEdit from "../Home/Modal/ModalEdit";
import { ModalTechContext } from "../../providers/ModalTechContext";
import { FooterPage } from "../../components/Footer/footer";

let Name = [];
let Phone = [];

function Dashboard() {
  const {
    showModalEdit,
    setShowModalEdit,
    showModalAdd,
    setShowModalAdd,
    modalShowAdd,
    modalShowEdit,
  } = useContext(ModalTechContext);

  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("@CDM-Token"));

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    const tokenJSON = localStorage.getItem("@CDM-Token");
    const decodedToken = jwtDecode(tokenJSON);
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
        Phone = response.data.email;
        Name =
          response.data.name[0].toUpperCase() + response.data.name.substr(1);
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
    navigate("/");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 1 }}
      >
        {showModalEdit && <ModalEdit setShowModalEdit={setShowModalEdit} />}
        {showModalAdd && <ModalAdd setShowModalAdd={setShowModalAdd} />}
        <Nav>
          <Header exitPage={exitPage} />
        </Nav>
        <Section>
          <div>
            <h1>Olá {Name}.</h1>
            <p>Email: {Phone}</p>
          </div>

          <SectionInfo>
            <div>
              <h2>Lista de Contatos</h2>
              <BtnAdd onClick={() => modalShowAdd()} title="Adicionar Contatos">
                +
              </BtnAdd>
            </div>
            {loading ? (
              <>
                <div className="loading">
                  <img src={spinner} />
                </div>
              </>
            ) : (
              <RenderTech />
            )}
          </SectionInfo>
        </Section>
        <FooterPage></FooterPage>
      </motion.div>
    </>
  );
}

export default Dashboard;
