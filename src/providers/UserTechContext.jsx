import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserTechContext = createContext({});

export const UserTechProvider = ({ children }) => {
  const [renderTech, setRenderTech] = useState([]);
  const [attTech, setAttTech] = useState(null);

  const token = JSON.parse(localStorage.getItem("@CDM-Token"));

  useEffect(() => {
    async function listContactUser() {
      try {
        const response = await api.get("contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRenderTech(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listContactUser();
  }, []);

  return (
    <UserTechContext.Provider
      value={{
        renderTech,
        setRenderTech,
        attTech,
        setAttTech,
      }}
    >
      {children}
    </UserTechContext.Provider>
  );
};
