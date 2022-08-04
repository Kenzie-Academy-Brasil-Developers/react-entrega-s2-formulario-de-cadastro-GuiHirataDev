import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link } from "react-router-dom"
import { AiFillEye } from "react-icons/ai"
import { ApiLogin } from "../../services/Api"
import { formLoginSchema } from "../../services/Schema"
import { toast } from "react-toastify"

const Login = () => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formLoginSchema)
    })

    const onSubmit = (data) => {
        ApiLogin(data)
    }

    return(
        <main>
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
                <label>
                    Senha
                    <input 
                        type="text" 
                        placeholder="********"
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                    <button>
                        <AiFillEye/>
                    </button>
                </label>
                <button type="submit">Entrar</button>
                <Link to="/register">Ainda não possui uma conta?</Link>
                <button>Cadastre-se</button>
            </form>
        </main>
    )
}

export default Login

export const toastSucessLogin = () => {
    toast.success("Login realizado com sucesso")
}

export const toastErrorLogin = () => {
    toast.error("Não foi possivel realizar o Login")
}