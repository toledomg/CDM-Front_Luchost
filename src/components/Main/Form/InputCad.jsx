import React, { useState } from "react";
import InputDefer from "./InputDefer";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function InputCad({ register, errors }) {
  const [cadIsHidden, setCadIsHidden] = useState(true);
  const [cadConfirmIsHidden, setCadConfirmIsHidden] = useState(true);
  return (
    <>
      <InputDefer
        label="Nome"
        type="text"
        id="name"
        placeholder="Digite aqui seu Nome"
        {...register("name")}
        error={errors.name?.message}
      />

      <InputDefer
        label="Email"
        type="email"
        id="email"
        placeholder="Digite seu Email"
        {...register("email")}
        error={errors.email?.message}
      />

      <section className="cad_verifyPass">
        <InputDefer
          label="Senha"
          type={cadIsHidden ? "password" : "text"}
          id="password"
          placeholder="Digite sua Senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <i id="visibility" onClick={() => setCadIsHidden(!cadIsHidden)}>
          {cadIsHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </i>
      </section>

      <section className="cad_verifyPass">
        <InputDefer
          label="Confirmar Senha"
          type={cadConfirmIsHidden ? "password" : "text"}
          id="passwordConfirm"
          placeholder="Digite novamente sua Senha"
          {...register("passwordConfirm")}
          error={errors.passwordConfirm?.message}
        />
        <i
          id="visibility"
          className="material-symbols-outlined"
          onClick={() => setCadConfirmIsHidden(!cadConfirmIsHidden)}
        >
          {cadConfirmIsHidden ? <MdVisibility /> : <MdVisibilityOff />}
        </i>
      </section>

      <InputDefer
        label="Telefone"
        type="text"
        id="phone"
        placeholder="Telefone"
        {...register("phone")}
        error={errors.phone?.message}
      />
    </>
  );
}

export default InputCad;
