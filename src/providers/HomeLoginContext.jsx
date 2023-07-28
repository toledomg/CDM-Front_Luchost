import { createContext } from "react";

export const HomeLoginContext = createContext({});

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const HomeLoginProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitFunction = async (data) => {
    console.log(data);
  };

  return (
    <HomeLoginContext.Provider
      value={{
        register,
        handleSubmit,
        errors,
        onSubmitFunction,
      }}
    >
      {children}
    </HomeLoginContext.Provider>
  );
};
