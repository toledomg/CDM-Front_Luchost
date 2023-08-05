import { createContext, useEffect, useState, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

import { UserTechContext } from "./UserTechContext";
import { ModalTechContext } from "./ModalTechContext";
import { UserContext } from "./UserContext";

export const UserEditContext = createContext({});

export const UserEditProvider = ({ children }) => {
  const { showModalUserEdit, setShowModalUserEdit } =
    useContext(ModalTechContext);

  const { attUser, setAttUser } = useContext(UserContext);

  const { renderUser, setRenderUser } = useContext(UserContext);

  const userProfile = async (id) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    try {
      const response = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Sucesso");
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    }
  };

  const editUserProfile = async (data, id) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    try {
      const response = await api.patch(`users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRenderUser([
        ...renderUser.filter((profile) => profile.id !== id),
        response.data,
      ]);

      setShowModalUserEdit(false);
      toast.success(
        `Perfil de ${response.data.name} foi atualizado com sucesso`
      );
    } catch (error) {
      console.log(error);

      toast.error("Algo deu errado");
    }
  };

  const deleteUserProfile = async (id) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));

    try {
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRenderUser(renderUser.filter((profile) => profile.id !== id));
      setShowModalUserEdit(false);
      toast.success("Perfil deletado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  return (
    <UserEditContext.Provider
      value={{
        editUserProfile,
        deleteUserProfile,
        userProfile,
        renderUser,
        setRenderUser,
        attUser,
        setAttUser,
      }}
    >
      {children}
    </UserEditContext.Provider>
  );
};
