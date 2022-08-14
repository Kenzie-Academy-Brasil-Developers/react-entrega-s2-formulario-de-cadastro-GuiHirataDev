import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MainContent } from "./style";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { register, handleSubmit, errors, onSubmit, navigate } =
    useContext(UserContext);
  const [typePassword, setTypePassword] = useState("password");

  const showPassword = (e) => {
    e.preventDefault();
    setTypePassword("text");
  };
  const hidePassword = (e) => {
    e.preventDefault();
    setTypePassword("password");
  };

  const redirectRegister = () => {
    navigate("/register");
  };

  return (
    <MainContent>
      <h2>Kenzie Hub</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Login</h3>
        <label>
          Email
          <input
            type="text"
            placeholder="example@email.com"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </label>
        <label className="labelButton">
          Senha
          <span>
            <input
              id="pass"
              type={typePassword}
              placeholder="********"
              {...register("password")}
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
          <p>{errors.password?.message}</p>
        </label>
        <button type="submit" className="entryButton">
          Entrar
        </button>
        <Link to="/register" className="link">
          Ainda não possui uma conta?
        </Link>
        <button onClick={redirectRegister} className="registerButton">
          Cadastre-se
        </button>
      </form>
    </MainContent>
  );
};

export default Login;
