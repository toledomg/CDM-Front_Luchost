import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { ModalSection, FormEditTech } from "./style";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";

import { UserTechAddContext } from "../../../providers/UserTechAddContext";
import { UserTechContext } from "../../../providers/UserTechContext";
import { ModalTechContext } from "../../../providers/ModalTechContext";
import InputDefer from "../../../components/Main/Form/InputDefer";
import { ModalEditSchema } from "../../../Validators/Schema";

function ModalEdit() {
  const { editTechProfile, deleteTechProfile } = useContext(UserTechAddContext);

  const { attTech } = useContext(UserTechContext);

  const { modalShowEdit } = useContext(ModalTechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: attTech.name,
      email: attTech.email,
      phone: attTech.phone,
    },
    resolver: yupResolver(ModalEditSchema),
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
              placeholder="Novo Nome do Contato"
              {...register("name")}
            />
            {errors.name?.message}

            <InputDefer
              label="Email"
              type="text"
              id="email"
              placeholder="Novo Email do Contato"
              {...register("email")}
            />
            {errors.email?.message}

            <InputDefer
              label="Telefone"
              type="text"
              id="phone"
              placeholder="Novo Telefone do COntato"
              {...register("phone")}
            />
            {errors.phone?.message}

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
