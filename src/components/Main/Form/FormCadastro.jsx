import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { BtnDefault } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";
import SelectCreate from "./../Select/SelectCreate";
import { formSchema } from "../../../Validators/Schema";
import InputCad from "./InputCad";

import { FormLoginContext } from "../../../providers/FormLoginContext";

function FormCadastro({ navigate }) {
  // Usando o userContext, esta bugando o campo validação de nomes
  // const { register, handleSubmit, reset, errors } =
  //   useContext(FormLoginContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async (data) => {
    console.log(data);
    try {
      const response = await api.post("users", data);

      navigate("/");
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      console.error(error);
      toast.error(
        "Algo deu errado, verifique se todos os dados foram inserido corretamente"
      );
    }
  };

  const handleEvent = (event) => {
    event.preventDefault();

    navigate("/home");
  };

  return (
    <FormCreate onSubmit={handleSubmit(onSubmitFunction)}>
      <InputCad register={register} errors={errors} />
      {/* <SelectCreate register={register} />
      {errors.course_module?.message} */}
      <BtnDefault type="submit">Cadastrar</BtnDefault>
      <Link to="/home">Voltar</Link>
    </FormCreate>
  );
}

export default FormCadastro;
