import styled from "styled-components";

export const MainContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #121214;

    div {
        display: flex;
        margin-top: 20px;
    }

    div h2 {
        color: #FF577F;
        font-size: 21px;
        font-weight: 600;
        width: 370px;
        justify-content: space-around;
    }

    div button {
        background-color: #212529;
        color: #F8F9FA;
        width: 67px;
        height: 40px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    form {
        width: 370px;
        height: 892px;
        background-color: #212529;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        color: #F8F9FA;
        align-items: center;
        border-radius: 10px;
    }

    h3 {
        font-size: 18px;
    }

    h4 {
        font-size: 12px;
        color: #868E96;
    }

    label {
        display: flex;
        flex-direction: column;
        font-size: 12px;
        color: #F8F9FA;
    }

    input {
        width: 329px;
        height: 48px;
        background-color: #343B41;
        border: none;
        outline: none;
        color: #F8F9FA;
        border-radius: 5px;
        margin-top: 10px;
        text-align: center;
    }

    input:focus {
        border: 1px solid #F8F9FA;
    }

    .eyeButton {
        border: none;
        background-color: transparent;
        color: #F8F9FA;
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

    select {
        width: 329px;
        height: 48px;
        background-color: #343B41;
        border: none;
        outline: none;
        color: #F8F9FA;
        border-radius: 5px;
        margin-top: 10px;
        text-align: center;
    }

    .registerButton {
        width: 324px;
        height: 48px;
        background-color: #59323F;
        color: #F8F9FA;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`