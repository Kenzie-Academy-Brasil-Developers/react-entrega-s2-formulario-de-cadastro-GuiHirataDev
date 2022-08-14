import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { MainContent, UserContent, TechContainer, TechAdd } from "./style";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { TechContext } from "../../contexts/TechContext";

const Dashboard = () => {
  const { user, navigate } = useContext(UserContext);
  const {
    registerDash,
    handleSubmitDash,
    errorsDash,
    onSubmitDash,
    deleteTech,
  } = useContext(TechContext);

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <MainContent>
      <header>
        <h2>Kenzie Hub</h2>
        <button onClick={logout}>Sair</button>
      </header>
      <UserContent>
        <section className="userBar">
          <h3>Olá, {user.name}</h3>
          <p>{user.course_module}</p>
        </section>
        <section className="technologies">
          <div className="headerTechnologies">
            <h3>Tecnologias</h3>
            <button onClick={openModal}>+</button>
          </div>
          {user.techs.lenght !== 0 && (
            <TechContainer>
              <ul>
                {user.techs.map((tech) => {
                  return (
                    <li key={tech.id}>
                      <h3>{tech.title}</h3>
                      <span>
                        <p>{tech.status}</p>
                        <button onClick={() => deleteTech(tech.id)}>
                          <BsFillTrashFill />
                        </button>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </TechContainer>
          )}
        </section>
        {modal === true && (
          <TechAdd>
            <div className="modal">
              <span>
                <h2>Cadastrar Tecnologia</h2>
                <button className="closeButton" onClick={closeModal}>
                  <AiOutlineClose />
                </button>
              </span>
              <form onSubmit={handleSubmitDash(onSubmitDash)}>
                <label>
                  Nome
                  <input
                    type="text"
                    placeholder="Digite uma tecnologia"
                    {...registerDash("title")}
                  />
                  <p>{errorsDash.technologie?.message}</p>
                </label>
                <label>
                  Selecionar Status
                  <select {...registerDash("status")}>
                    <option>Iniciante</option>
                    <option>Intermediário</option>
                    <option>Avançado</option>
                  </select>
                </label>
                <button className="addButton">Cadastrar Tecnologia</button>
              </form>
            </div>
          </TechAdd>
        )}
      </UserContent>
    </MainContent>
  );
};

export default Dashboard;
