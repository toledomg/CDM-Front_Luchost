import { createContext } from "react";

export const FormLoginContext = createContext({});

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { loginSchema } from "../Validators/Schema";

export const FormLoginProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormLoginContext.Provider
      value={{
        register,
        handleSubmit,
        reset,
        errors,
      }}
    >
      {children}
    </FormLoginContext.Provider>
  );
};
