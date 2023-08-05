import { createContext, useState } from "react";

export const ModalTechContext = createContext({});

export const ModalTechProvider = ({ children }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalUserEdit, setShowModalUserEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const modalShowEdit = (event) => {
    if (showModalEdit === false) {
      setShowModalEdit(true);
    } else {
      setShowModalEdit(false);
    }
  };

  const modalShowUserEdit = (event) => {
    if (showModalUserEdit === false) {
      setShowModalUserEdit(true);
    } else {
      setShowModalUserEdit(false);
    }
  };

  const modalShowAdd = () => {
    if (showModalAdd === false) {
      setShowModalAdd(true);
    } else {
      setShowModalAdd(false);
    }
  };

  return (
    <ModalTechContext.Provider
      value={{
        showModalEdit,
        setShowModalEdit,
        showModalUserEdit,
        setShowModalUserEdit,
        showModalAdd,
        setShowModalAdd,
        modalShowAdd,
        modalShowEdit,
        modalShowUserEdit,
      }}
    >
      {children}
    </ModalTechContext.Provider>
  );
};
