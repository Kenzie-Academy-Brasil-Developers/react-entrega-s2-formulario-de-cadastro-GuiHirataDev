import axios from "axios";
import { toastSucessRegister, toastErrorRegister } from "../../pages/Register";
import { toastSucessLogin, toastErrorLogin } from "../../pages/Login";
import { useNavigate } from "react-router-dom" 

const urlRegister = "https://kenziehub.herokuapp.com/users"

const urlLogin = "https://kenziehub.herokuapp.com/sessions"

export const ApiRegister = (data) => {

    axios.post(urlRegister, data)
    .then(toastSucessRegister)
    .catch(toastErrorRegister)
}

export const ApiLogin = (data) => {
    axios.post(urlLogin, data)
    .then(res => {
    window.localStorage.setItem("@TOKEN", res.data.token)
    window.localStorage.setItem("@USERID", res.data.user.id)
    })
    .then(toastSucessLogin)
    .catch(toastErrorLogin)
}



