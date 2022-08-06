import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import { AiFillEye } from "react-icons/ai"
import { formLoginSchema } from "../../services/Schema"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { MainContent } from "./style"

const Login = () => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formLoginSchema)
    })

    const toastSucessLogin = () => {
        toast.success("Login realizado com sucesso")
    }

    const toastErrorLogin = () => {
        toast.error("Não foi possivel realizar o Login")
    }

    const navigate = useNavigate()

    const onSubmit = (data) => {
        const urlLogin = "https://kenziehub.herokuapp.com/sessions"

        axios.post(urlLogin, data)
        .then(res => {
        window.localStorage.setItem("@TOKEN", res.data.token)
        window.localStorage.setItem("@USERID", res.data.user.id)
        setTimeout(navigate, 1500, "/dashboard")
        })
        .then(toastSucessLogin)
        .catch(toastErrorLogin)

    }
    
    const showPassword = () => {
        const input = document.getElementById("pass")
        input.type = "text"
    }

    const redirectRegister = () => {
        navigate("/register")
    }

    return(
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
                            type="password" 
                            placeholder="********"
                            {...register("password")}
                        />
                        <button onClick={showPassword}
                        className="eyeButton"
                        >
                            <AiFillEye/>
                        </button>
                    </span>
                    <p>{errors.password?.message}</p>
                </label>
                <button 
                    type="submit"
                    className="entryButton"
                >Entrar
                </button>
                <Link to="/register" className="link">Ainda não possui uma conta?</Link>
                <button onClick={redirectRegister} className="registerButton">Cadastre-se</button>
            </form>
        </MainContent>
    )
}

export default Login


