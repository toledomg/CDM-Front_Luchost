import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import jwtDecode from "jwt-decode";

import { api } from "./../../../services/api";
import { toast } from "react-toastify";

import { BtnDefault, BtnMedium } from "../../../style/Global/Buttons";

import { FormCreate } from "./FomCreate";
import { FormLoginContext } from "./../../../providers/FormLoginContext";

function FormLogin({ navigate }) {
  const { register, handleSubmit, reset, errors } =
    useContext(FormLoginContext);

  const [isHidden, setIsHidden] = useState(true);

  const onSubmitFunction = async (data) => {
    try {
      const response = await api.post("login", data);

      localStorage.setItem("@CDM-Token", JSON.stringify(response.data.token));

      const tokenJSON = localStorage.getItem("@CDM-Token");
      const decodedToken = jwtDecode(tokenJSON);

      localStorage.setItem("@CDM-ID", JSON.stringify(decodedToken.sub));

      navigate("/dashboard");

      toast.success("Login realizado com sucesso");
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado");
    }
  };

  return (
    <FormCreate onSubmit={handleSubmit(onSubmitFunction)}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        {...register("email")}
        id="email"
        placeholder="Digite seu Email"
      />
      {errors.email?.message}
      <label htmlFor="password">Senha</label>
      <section className="verify_pass">
        <input
          type={isHidden ? "password" : "text"}
          {...register("password")}
          id="password"
          placeholder="Digite sua Senha"
        />
        <p>{errors.password?.message}</p>
        <span
          id="visibility"
          className="material-symbols-outlined"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </span>
      </section>
      <BtnDefault type="submit">Entrar</BtnDefault>
    </FormCreate>
  );
}

export default FormLogin;
