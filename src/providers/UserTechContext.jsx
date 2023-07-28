import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserTechContext = createContext({});

export const UserTechProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [renderTech, setRenderTech] = useState([]);
  const [attTech, setAttTech] = useState(null);

  const token = JSON.parse(localStorage.getItem("@CDM-Token"));

  useEffect(() => {
    async function listUser() {
      try {
        const response = await api.get("contacts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRenderTech(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listUser();
  }, []);

  return (
    <UserTechContext.Provider
      value={{
        user,
        setUser,
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
