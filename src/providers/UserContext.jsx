import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [renderUser, setRenderUser] = useState([]);
  const [attUser, setAttUser] = useState(null);

  const token = JSON.parse(localStorage.getItem("@CDM-Token"));

  useEffect(() => {
    async function listUser() {
      try {
        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setRenderUser(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    listUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        renderUser,
        setRenderUser,
        attUser,
        setAttUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
