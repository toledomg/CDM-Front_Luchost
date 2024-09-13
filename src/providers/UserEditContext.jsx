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

  const handleRequestError = (error) => {
    if (error.response) {
      const errorMessage = error.response.data.message;

      if (
        error.response.status === 409 &&
        errorMessage === "Email already exists"
      ) {
        toast.error("Por favor, tente outro Email.");
      } else {
        toast.error(
          "Ocorreu um erro na solicitação. Por favor, tente novamente mais tarde."
        );
      }
    } else if (error.request) {
      toast.error(
        "Não foi possível realizar a solicitação. Verifique sua conexão de internet."
      );
    } else {
      toast.error("Ocorreu um erro ao processar a solicitação.");
    }
  };

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
      const response = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (data.password === "") {
        delete data.password;
      }

      if (data.email === response.data.email) {
        const updateData = { ...data, email: undefined };

        const updateResponse = await api.patch(`users/${id}`, updateData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRenderUser([
          ...renderUser.filter((profile) => profile.id !== id),
          updateResponse.data,
        ]);

        setAttUser(updateResponse.data);
        setUser(updateResponse.data);

        setShowModalUserEdit(false);

        toast.success(
          `${updateResponse.data.name} seu perfil foi atualizado com sucesso`
        );
      } else {
        const updateResponse = await api.patch(`users/${id}`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(updateResponse.data);

        setRenderUser([
          ...renderUser.filter((profile) => profile.id !== id),
          updateResponse.data,
        ]);

        setAttUser(updateResponse.data);
        setUser(updateResponse.data);

        setShowModalUserEdit(false);

        toast.success(
          `${updateResponse.data.name} seu perfil foi atualizado com sucesso`
        );
      }
    } catch (error) {
      handleRequestError(error);
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
