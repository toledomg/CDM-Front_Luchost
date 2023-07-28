import { createContext, useState } from "react";

export const ModalTechContext = createContext({});

export const ModalTechProvider = ({ children }) => {
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);

  const modalShowEdit = (event) => {
    if (showModalEdit === false) {
      setShowModalEdit(true);
    } else {
      setShowModalEdit(false);
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
        showModalAdd,
        setShowModalAdd,
        modalShowAdd,
        modalShowEdit,
      }}
    >
      {children}
    </ModalTechContext.Provider>
  );
};
