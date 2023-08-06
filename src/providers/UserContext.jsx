import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [renderUser, setRenderUser] = useState([]);

  const [user, setUser] = useState(null);

  const [userData, setUserData] = useState([]);
  const [attUser, setAttUser] = useState(null);

  const [loading, setLoading] = useState(false);

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
