import { createContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDashSchema } from "../services/Schema";
import api from "../services/Api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const {
    register: registerDash,
    handleSubmit: handleSubmitDash,
    formState: { errors: errorsDash },
  } = useForm({
    resolver: yupResolver(formDashSchema),
  });

  const toastSucessDash = () => {
    toast.success("Tecnologia criada com sucesso");
  };
  const toastErrorDash = () => {
    toast.error("Não foi possível criar a tecnologia");
  };
  const toastSucessDeleteDash = () => {
    toast.success("Tecnologia excluída com sucesso");
  };

  const onSubmitDash = (data) => {
    api.post("/users/techs", data).then(toastSucessDash).catch(toastErrorDash);
  };

  const deleteTech = (techId) => {
    api.delete(`/users/techs/${techId}`).then(toastSucessDeleteDash);
  };

  return (
    <TechContext.Provider
      value={{
        registerDash,
        handleSubmitDash,
        errorsDash,
        onSubmitDash,
        deleteTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
