import * as yup from "yup"

export const formLoginSchema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória")
})

export const formRegisterSchema = yup.object().shape({
    name: yup
        .string()
        .required("Nome obrigatório"),
    email: yup
        .string()
        .required("E-mail obrigatório")
        .email("E-mail inválido"),
    password: yup
        .string()
        .required("Senha obrigatória")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])(?=.{8,})/, "Deve conter 8 caraceteres, uma maiúscula, uma minúscula, um número e um caracter especial"),
    confirmPassword: yup
        .string()
        .required("Confirmação de senha obrigatória")
        .oneOf([yup.ref('password')], "Confirmação deve ser igual a senha"),
    bio: yup
        .string()
        .required("Biografia obrigatória"),
    contact: yup
        .string()
        .required("Forma de contato obrigatória"),
})