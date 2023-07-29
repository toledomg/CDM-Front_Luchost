import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

import { UserTechContext } from "./UserTechContext";
import { ModalTechContext } from "./ModalTechContext";

export const UserTechAddContext = createContext({});

export const UserTechAddProvider = ({ children }) => {
  const { setShowModalAdd, setShowModalEdit } = useContext(ModalTechContext);
  const { renderTech, setRenderTech } = useContext(UserTechContext);

  const createTechProfile = async (data) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    try {
      const response = await api.post("contacts", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderTech([...renderTech, response.data]);
      setShowModalAdd(false);
      toast.success(`Contato ${response.data.name} foi cadastrado com sucesso`);
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    }
  };

  const editTechProfile = async (data, id) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    try {
      const response = await api.patch("/contacts/" + id, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderTech([
        ...renderTech.filter((tech) => tech.id !== id),
        response.data,
      ]);

      setShowModalEdit(false);
      toast.success(`O Contato ${response.data.name} foi editado com sucesso`);
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    }
  };

  const deleteTechProfile = async (id) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));

    try {
      const response = await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRenderTech(renderTech.filter((tech) => tech.id !== id));
      setShowModalEdit(false);
      toast.success("Cadastro deletado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  return (
    <UserTechAddContext.Provider
      value={{
        createTechProfile,
        editTechProfile,
        deleteTechProfile,
        renderTech,
        setRenderTech,
      }}
    >
      {children}
    </UserTechAddContext.Provider>
  );
};
