import styled from "styled-components"

export const MainContent = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #121214;

    h2 {
        color: #FF577F;
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
        color: #F8F9FA;
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

    .entryButton {
        width: 324px;
        height: 48px;
        background-color: #FF577F;
        color: #F8F9FA;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .link {
        text-decoration: none;
        color: #868E96;
        font-size: 12px;
    }

    .registerButton {
        width: 324px;
        height: 48px;
        background-color: #868E96;
        color: #F8F9FA;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`


