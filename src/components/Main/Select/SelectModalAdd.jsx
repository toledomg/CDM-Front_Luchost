import React from "react";

function SelectModalAdd({ errors, register }) {
  return (
    <>
      <label htmlFor="selectModulo">Selecionar status</label>
      <select {...register("status")}>
        <option value="">Selecionar status</option>
        <option id="ini" value="Iniciante">
          Iniciante
        </option>
        <option id="int" value="Intermediário">
          Intermediário
        </option>
        <option id="ava" value="Avançado">
          Avançado
        </option>
      </select>
    </>
  );
}

export default SelectModalAdd;
