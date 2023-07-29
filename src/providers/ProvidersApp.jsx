import React from "react";
import { HomeLoginProvider } from "./HomeLoginContext";
import { FormLoginProvider } from "./FormLoginContext";

const ProvidersApp = ({ children }) => {
  return (
    <>
      <HomeLoginProvider>
        <FormLoginProvider>{children}</FormLoginProvider>
      </HomeLoginProvider>
    </>
  );
};

export default ProvidersApp;
