import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

import { ModalSection, ModalSectionTrash, FormEditTech } from "./style";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";
import SelectModalAdd from "../../../components/Main/Select/SelectModalAdd";

import { UserTechAddContext } from "../../../providers/UserTechAddContext";
import { UserTechContext } from "./../../../providers/UserTechContext";
import { ModalTechContext } from "./../../../providers/ModalTechContext";
import InputDefer from "../../../components/Main/Form/InputDefer";

function ModalEdit() {
  const { editTechProfile, deleteTechProfile, renderTech } =
    useContext(UserTechAddContext);

  const { attTech, setAttTech } = useContext(UserTechContext);

  const { modalShowEdit } = useContext(ModalTechContext);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: attTech.title,
      status: attTech.status,
    },
  });

  const submit = (data) => {
    editTechProfile(data, attTech.id);
  };

  const delTech = () => {
    deleteTechProfile(attTech.id);
  };

  return (
    <>
      <ModalSection className="modalBox" role="dialog">
        <section className="containerModal">
          <section className=" divTitle">
            <p>Detalhes do Contato</p>
            <i
              className="material-symbols-outlined"
              onClick={() => modalShowEdit()}
            >
              close
            </i>
          </section>
          <FormEditTech onSubmit={handleSubmit(submit)}>
            <InputDefer
              label="Nome"
              type="text"
              id="name"
              placeholder="Digite aqui o novo Nome"
              {...register("name")}
            />
            <InputDefer
              label="Email"
              type="text"
              id="email"
              placeholder="Digite aqui o novo email"
              {...register("email")}
            />
            <InputDefer
              label="Telefone"
              type="text"
              id="phone"
              placeholder="Digite aqui o novo Telefone"
              {...register("phone")}
            />

            {/* <input type="text" {...register("email")} />
            <SelectModalAdd register={register} /> */}

            <div className="buttonModal">
              <BtnDefault type="submit">Salvar Alterações</BtnDefault>
              <BtnMedium onClick={handleSubmit(delTech)} type="submit">
                Excluir
              </BtnMedium>
            </div>
          </FormEditTech>
        </section>
      </ModalSection>
    </>
  );
}

export default ModalEdit;
