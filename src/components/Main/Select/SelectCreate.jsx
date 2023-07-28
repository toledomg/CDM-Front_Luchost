import React from "react";

function SelectCreate({ errors, register }) {
  return (
    <>
      <label htmlFor="selectModulo">Selecionar módulo</label>
      <select {...register("course_module")}>
        <option value="">Selecionar módulo</option>
        <option id="m1" value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option id="m2" value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option id="m3" value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option id="m4" value=" Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
    </>
  );
}

export default SelectCreate;
