import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Body, DivLoading } from "./style";

const Dashboard = () => {
  const [user, setUser] = useState("");

  const userRequest = () => {
    const user = window.localStorage.getItem("@USERID");
    const urlGetUser = `https://kenziehub.herokuapp.com/users/${user}`;
    axios
      .get(urlGetUser)
      .then((res) => setUser(res.data))
      .catch((err) => err);
  };

  userRequest();

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {user !== "" ? 
        <Body>
          <header>
            <h2>Kenzie Hub</h2>
            <button onClick={logout}>Sair</button>
          </header>
          <main>
            <section className="userBar">
              <h3>Olá, {user.name}</h3>
              <p>{user.course_module}</p>
            </section>
            <section className="development">
              <h3>Que pena! Estamos em desenvolvimento :( </h3>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades.
              </p>
            </section>
          </main>
        </Body>
        : 
        <DivLoading>Carregando informações...</DivLoading>
      }
    </>
  );
};

export default Dashboard;
