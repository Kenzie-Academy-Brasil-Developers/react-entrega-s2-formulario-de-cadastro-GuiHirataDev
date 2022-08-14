import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formLoginSchema, formRegisterSchema } from "../services/Schema";
import { toast } from "react-toastify";
import api from "../services/Api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formLoginSchema),
  });
  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: errorsRegister },
  } = useForm({
    resolver: yupResolver(formRegisterSchema),
  });

  const toastSucessLogin = () => {
    toast.success("Login realizado com sucesso");
  };
  const toastErrorLogin = () => {
    toast.error("Não foi possivel realizar o Login");
  };
  const toastSucessRegister = () => {
    toast.success("Usuário criado com sucesso");
  };
  const toastErrorRegister = () => {
    toast.error("Não foi possivel realizar o cadastro");
  };

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        window.localStorage.setItem("@TOKEN", res.data.token);
        window.localStorage.setItem("@USERID", res.data.user.id);
        setTimeout(navigate, 1500, "/dashboard");
      })
      .then(toastSucessLogin)
      .catch(toastErrorLogin);
  };
  const onSubmitRegister = (data) => {
    api
      .post("/users", data)
      .then((res) => {
        if (res.status === 201) {
          setTimeout(navigate, 1500, "/login");
        }
      })
      .then(toastSucessRegister)
      .catch(toastErrorRegister);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const profile = await api.get("/profile");
          setUser(profile.data);
        } catch (err) {
          window.localStorage.clear();
        }
      }
      setLoading(false);
    };
    loadUser();
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        register,
        registerRegister,
        handleSubmit,
        handleSubmitRegister,
        errors,
        errorsRegister,
        onSubmit,
        onSubmitRegister,
        navigate,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
