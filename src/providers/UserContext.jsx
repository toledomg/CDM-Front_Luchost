import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [renderUser, setRenderUser] = useState([]);

  const [user, setUser] = useState(null);

  const [userData, setUserData] = useState([]);
  const [attUser, setAttUser] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@CDM-Token"));
    if (token) {
      const decodedToken = jwtDecode(token);
      const id = decodedToken.sub;

      async function loadUser() {
        try {
          setLoading(true);
          const response = await api.get(`users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      }

      loadUser();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userData,
        setUserData,
        renderUser,
        setRenderUser,
        attUser,
        setAttUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
