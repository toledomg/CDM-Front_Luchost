import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome é obrigatório.")
    .matches(/(\D)/, "Não pode iniciar com número"),

  email: yup
    .string()
    .required("E-mail é obrigatório.")
    .email("E-mail inválido."),

  password: yup
    .string()
    .required("Senha é obrigatório.")
    .matches(/(\d)/, "Precisa conter um numero")
    .matches(/[a-z]/, "Precisa conter uma letra minúscula")
    .matches(/[A-Z]/, "Precisa conter uma letra maiúscula")
    .matches(/[\W|_]/, "Precisa conter uma caractere especial")
    .matches(/.{8,}/, "Precisa conter no mínimo 8 caracteres"),

  passwordConfirm: yup
    .string()
    .required("Confirmar a senha é obrigatório.")
    .oneOf([yup.ref("password")], "Senhas não são iguais."),

  bio: yup.string().required("Bio é obrigatório."),

  contact: yup
    .string()
    .url("Deve ser em formato de url")
    .required("Linkedin é obrigatório."),

  course_module: yup.string().required("Selecione 1 modulo por favor."),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
  password: yup.string().required("Senha obrigatório"),
});

export const ModalEditSchema = yup.object().shape({
  title: yup.string().required("Favor digite uma tecnologia"),
  status: yup.string().required("Favor Selecionar um status"),
});
