import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";

import { ModalSection, FormEditTech } from "./style";
import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";

import { ModalTechContext } from "../../../providers/ModalTechContext";

import InputDefer from "../../../components/Main/Form/InputDefer";
import { UserEditContext } from "../../../providers/UserEditContext";
import { UserContext } from "../../../providers/UserContext";

function ModalUserEdit() {
  const { modalShowUserEdit } = useContext(ModalTechContext);

  const { user, attUser } = useContext(UserContext);

  const { userProfile, deleteUserProfile, editUserProfile } =
    useContext(UserEditContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: attUser.name,
      email: attUser.email,
      phone: attUser.phone,
    },
  });

  const list = (data) => {
    userProfile(user.id);
  };

  const submit = (data) => {
    editUserProfile(data, user.id);
  };

  const delUser = () => {
    deleteUserProfile(user.id);
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
