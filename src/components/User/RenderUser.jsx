import React, { useState, useContext } from "react";

import { ModalTechContext } from "./../../../providers/ModalTechContext";
import { UserContext } from "../../providers/UserContext";

function RenderUser() {
  const { renderUser, setAttUser } = useContext(UserContext);
  const { modalShowEdit } = useContext(ModalTechContext);

  return (
    <>
      {renderUser.length !== 0 ? (
        renderUser.map((user, index) => (
          <li key={index}>
            <p>{user.name}</p>
            <section>
              <p>{user.email}</p>
              <p>{user.phone}</p>
            </section>
            <section>
              <i
                onClick={() => modalShowEdit(setAttUser(user))}
                className="material-symbols-outlined"
                title="Editar Contatos"
              >
                edit
              </i>
            </section>
          </li>
        ))
      ) : (
        <section>
          <div>
            <h2>Seja Bem - Vindo</h2>
          </div>
          <div>
            <h3>Você ainda não cadastrou nenhum Contato</h3>
          </div>
        </section>
      )}
    </>
  );
}

export default RenderUser;
