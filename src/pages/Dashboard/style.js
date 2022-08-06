import styled from "styled-components";

export const Body = styled.body`
    background-color: #121214;
    width: 100vw;
    height: 100vh;

    header {
        display: flex;
        justify-content: space-around;
        padding-top: 40px;
    }

    header h2 {
        color: #FF577F;
        font-size: 20px;
        font-weight: 600;
    }

    header button {
        background-color: #212529;
        color: #F8F9FA;
        width: 67px;
        height: 40px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }

    main {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
    }

    main .userBar {
        display: flex;
        margin-top: 40px;
        justify-content: space-around;
    }

    main .userBar h3 {
       font-size: 18px;
       color: #F8F9FA;
       font-weight: 700;
    }

    main .userBar p {
        font-size: 12px;
        font-weight: 600;
        color: #868E96;
    }

    .development {
        display: flex;
        flex-direction: column;
        margin: 50px 0px 0px 40px;
        color: #F8F9FA;
    }

    .development h3 {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
    }

    .development p {
        font-size: 16px;
        font-weight: 400;
    }
`

export const DivLoading = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #121214;
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: #fff;
    padding: 40px;
`