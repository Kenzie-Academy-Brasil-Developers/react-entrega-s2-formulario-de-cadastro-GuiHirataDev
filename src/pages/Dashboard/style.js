import styled from "styled-components";

export const MainContent = styled.main`
  background-color: #121214;
  width: 100vw;
  height: 100vh;

  header {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    width: 60%;
    margin: 0 auto;
  }

  header h2 {
    color: #ff577f;
    font-size: 20px;
    font-weight: 600;
  }

  header button {
    background-color: #212529;
    color: #f8f9fa;
    width: 67px;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
`;

export const UserContent = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: #121214;

  .userBar {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    width: 60%;
    margin: 40px auto;
  }

  .userBar h3 {
    font-size: 18px;
    color: #f8f9fa;
    font-weight: 700;
  }

  .userBar p {
    font-size: 12px;
    font-weight: 600;
    color: #868e96;
  }

  .technologies {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headerTechnologies {
    display: flex;
    width: 60%;
    justify-content: space-between;
    margin: 20px 0px 0px 0px;
    color: #f8f9fa;
  }

  .headerTechnologies h3 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 700;
  }

  .headerTechnologies button {
    background-color: #212529;
    color: #f8f9fa;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const TechContainer = styled.div`
  background-color: #282d32;
  color: #f8f9fa;
  display: flex;
  width: 60%;
  margin-top: 20px;
  border-radius: 10px;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px 0px;
  }

  li {
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 15px 10px;
    margin: 10px 0px;
    border-radius: 5px;
    background-color: #121214;
  }

  li:hover {
    background-color: #2f3338;
  }

  li h3 {
    font-size: 17px;
    font-weight: 700;
  }

  span {
    display: flex;
  }

  span p {
    margin: 0px 15px;
    font-size: 12px;
    font-weight: 600;
    color: #868e96;
  }

  button {
    color: #f8f9fa;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export const TechAdd = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 30px;
  background-color: #212529f0;

  .modal {
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    color: #f8f9fa;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }

  form {
    width: 369px;
    height: 292px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #343b41;
    border-radius: 0px 0px 5px 5px;
  }

  input {
    width: 330px;
    height: 48px;
    background-color: #252a2e;
    border: none;
    outline: none;
    color: #f8f9fa;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  input:focus {
    border: 1px solid #f8f9fa;
  }

  select {
    width: 330px;
    height: 48px;
    background-color: #252a2e;
    border: none;
    outline: none;
    color: #f8f9fa;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
  }

  select:focus {
    border: 1px solid #f8f9fa;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 369px;
    border-radius: 5px 5px 0px 0px;
    background-color: #414950;
  }

  span h2 {
    font-size: 14px;
    font-weight: 700;
    padding: 5px;
    border-radius: 5px;
    color: #f8f9fa;
    margin-left: 5px;
  }

  span .closeButton {
    background-color: transparent;
    border: none;
    color: #f8f9fa;
    font-size: 16px;
    cursor: pointer;
    margin-right: 5px;
  }

  .addButton {
    width: 330px;
    height: 48px;
    background-color: #ff577f;
    color: #f8f9fa;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
  }

  p {
    color: #e56161;
    margin-top: 10px;
  }
`;
