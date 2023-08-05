import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ModalSection, FormEditTech } from "./style";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";
import SelectModalAdd from "../../../components/Main/Select/SelectModalAdd";

import { yupResolver } from "@hookform/resolvers/yup";

import { UserContext } from "../../../providers/UserContext";
import { UserEditContext } from "../../../providers/UserEditContext";
import { ModalTechContext } from "../../../providers/ModalTechContext";
import InputDefer from "../../../components/Main/Form/InputDefer";
import jwtDecode from "jwt-decode";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

let User = [];

function ModalUserEdit() {
  const { modalShowUserEdit, setShowModalUserEdit, modalShowEdit } =
    useContext(ModalTechContext);

  const [renderUser, setRenderUser] = useState([]);
  const navigate = useNavigate();
  //
  const userProfile = async (id) => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    try {
      const response = await api.get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Sucesso");
      console.log(response.data);
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
    const decodedToken = jwtDecode(token);
    const ID = decodedToken.sub;
    console.log(ID);
    console.log(id);

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
  //

  const token = JSON.parse(localStorage.getItem("@CDM-Token"));

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

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
        User = response.data;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: User.name,
      email: User.email,
      phone: User.phone,
    },
  });

  const list = (data) => {
    userProfile(Id);
  };

  const submit = (data) => {
    editUserProfile(data, User.id);
  };

  const delUser = () => {
    deleteUserProfile(User.id);
  };

  return (
    <ModalSection className="modalBox" role="dialog">
      <section className="containerModal">
        <section className=" divTitle">
          <p>Detalhes do Usuário</p>
          <i
            className="material-symbols-outlined"
            onClick={() => modalShowUserEdit()}
            title="Fechar Editar"
          >
            close
          </i>
        </section>
        <FormEditTech onSubmit={handleSubmit(submit)}>
          <InputDefer
            label="Nome"
            type="text"
            id="name"
            placeholder="Novo Nome do Usuário"
            {...register("name")}
          />

          <InputDefer
            label="Email"
            type="text"
            id="email"
            placeholder="Novo Email do Usuário"
            {...register("email")}
          />
          <InputDefer
            label="Telefone"
            type="text"
            id="phone"
            placeholder="Novo Telefone do Usuário"
            {...register("phone")}
          />
          <div className="buttonModal">
            <BtnDefault type="submit">Salvar Alterações</BtnDefault>
            <BtnMedium onClick={handleSubmit(delUser)} type="submit">
              Excluir
            </BtnMedium>
          </div>
        </FormEditTech>
      </section>
    </ModalSection>
  );
}

export default ModalUserEdit;
