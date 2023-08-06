import { createContext, useContext } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

import { ModalTechContext } from "./ModalTechContext";
import { UserContext } from "./UserContext";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const UserEditContext = createContext({});

export const UserEditProvider = ({ children }) => {
  const { showModalUserEdit, setShowModalUserEdit } =
    useContext(ModalTechContext);

  const { attUser, setAttUser, renderUser, setRenderUser, user, setUser } =
    useContext(UserContext);

  const navigate = useNavigate();

  const User = user;

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
      setAttUser(response.data);
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
    const decodedToken = jwtDecode(token);
    const ID = decodedToken.sub;

    try {
      const response = await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRenderUser(renderUser.filter((profile) => profile.id !== id));
      localStorage.removeItem("@CDM-Token");
      localStorage.removeItem("@CDM-ID");
      setShowModalUserEdit(false);
      navigate("/");
      toast.success("Perfil deletado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Algo deu errado");
    }
  };

  return (
    <UserEditContext.Provider
      value={{
        userProfile,
        editUserProfile,
        deleteUserProfile,
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
