import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MainContent } from "./style";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const Register = () => {
  const {
    registerRegister,
    handleSubmitRegister,
    errorsRegister,
    onSubmitRegister,
    navigate,
  } = useContext(UserContext);

  const [typePassword, setTypePassword] = useState("password");

  const showPassword = (e) => {
    e.preventDefault();
    setTypePassword("text");
  };
  const hidePassword = (e) => {
    e.preventDefault();
    setTypePassword("password");
  };

  const redirectLogin = () => {
    navigate("/login");
  };

  return (
    <MainContent>
      <div>
        <h2>Kenzie Hub</h2>
        <button onClick={redirectLogin}>Voltar</button>
      </div>
      <form onSubmit={handleSubmitRegister(onSubmitRegister)}>
        <h3>Crie sua conta</h3>
        <h4>Rapido e grátis, vamos nessa</h4>
        <label>
          Nome
          <input
            type="text"
            placeholder="Digite aqui seu nome"
            {...registerRegister("name")}
          />
          <p>{errorsRegister.name?.message}</p>
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="example@email.com"
            {...registerRegister("email")}
          />
          <p>{errorsRegister.email?.message}</p>
        </label>
        <label>
          Senha
          <span>
            <input
              id="pass"
              type={typePassword}
              placeholder="********"
              {...registerRegister("password")}
            />
            {typePassword === "password" ? (
              <button onClick={showPassword} className="eyeButton">
                <AiFillEye />
              </button>
            ) : (
              <button onClick={hidePassword} className="eyeButton">
                <AiFillEyeInvisible />
              </button>
            )}
          </span>
          <p>{errorsRegister.password?.message}</p>
        </label>
        <label>
          Confirme sua senha
          <span>
            <input
              id="pass2"
              type={typePassword}
              placeholder="********"
              {...registerRegister("confirmPassword")}
            />
            {typePassword === "password" ? (
              <button onClick={showPassword} className="eyeButton">
                <AiFillEye />
              </button>
            ) : (
              <button onClick={hidePassword} className="eyeButton">
                <AiFillEyeInvisible />
              </button>
            )}
          </span>
          <p>{errorsRegister.confirmPassword?.message}</p>
        </label>
        <label>
          Bio
          <input
            type="text"
            placeholder="Fale sobre você"
            {...registerRegister("bio")}
          />
          <p>{errorsRegister.bio?.message}</p>
        </label>
        <label>
          Contato
          <input
            type="text"
            placeholder="Opção de contato"
            {...registerRegister("contact")}
          />
          <p>{errorsRegister.contact?.message}</p>
        </label>
        <label>
          Selecionar módulo
          <select {...registerRegister("course_module")} required>
            <option value={"Nenhum módulo selecionado"}>
              Selecione uma opção
            </option>
            <option>Primeiro Módulo (Introdução ao Frontend)</option>
            <option>Segundo Módulo (Frontend Avançado)</option>
            <option>Terceiro Módulo (Introdução ao Backend)</option>
            <option>Quarto Módulo (Backend Avançado)</option>
          </select>
        </label>
        <button type="submit" className="registerButton">
          Cadastrar
        </button>
      </form>
    </MainContent>
  );
};

export default Register;
