import styled from "styled-components";

export const MainContent = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #121214;

  h2 {
    color: #ff577f;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;
    background-color: #212529;
    width: 369px;
    height: 502px;
    color: #f8f9fa;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
  }

  h3 {
    font-size: 18px;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #f8f9fa;
  }

  input {
    width: 329px;
    height: 48px;
    background-color: #343b41;
    border: none;
    outline: none;
    color: #f8f9fa;
    border-radius: 5px;
    margin-top: 10px;
    text-align: center;
  }

  input:focus {
    border: 1px solid #f8f9fa;
  }

  .eyeButton {
    border: none;
    background-color: transparent;
    color: #f8f9fa;
    position: absolute;
    top: 28px;
    left: 300px;
    font-size: 17px;
    cursor: pointer;
  }

  span {
    display: flex;
    position: relative;
  }

  p {
    color: #e56161;
    margin-top: 10px;
  }

  .entryButton {
    width: 324px;
    height: 48px;
    background-color: #ff577f;
    color: #f8f9fa;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .link {
    text-decoration: none;
    color: #868e96;
    font-size: 12px;
  }

  .registerButton {
    width: 324px;
    height: 48px;
    background-color: #868e96;
    color: #f8f9fa;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;
