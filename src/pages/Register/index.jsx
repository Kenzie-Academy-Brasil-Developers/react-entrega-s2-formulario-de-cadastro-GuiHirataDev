import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillEye } from "react-icons/ai"
import { formRegisterSchema } from "../../services/Schema"
import { toast } from "react-toastify"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { MainContent } from "./style"

const Register = () => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formRegisterSchema)
    })

    const toastSucessRegister = () => {
        toast.success("Usuário criado com sucesso")
    }
    const toastErrorRegister = () => {
        toast.error("Não foi possivel realizar o cadastro")
    }

    const navigate = useNavigate()

    const onSubmit = (data) => {
        const urlRegister = "https://kenziehub.herokuapp.com/users"

        axios.post(urlRegister, data)
        .then(res => {
            if(res.status === 201){
                setTimeout(navigate, 1500, "/login")
            }
        })
        .then(toastSucessRegister)
        .catch(toastErrorRegister)
    }

    const showPassword = () => {
        const input = document.getElementById("pass")
        input.type = "text"
    }
    const showConfirmPassword = () => {
        const input = document.getElementById("pass2")
        input.type = "text"
    }

    const redirectLogin = () => {
        navigate("/login")
    }
    
    return(
        <MainContent>
            <div>
                <h2>Kenzie Hub</h2>
                <button onClick={redirectLogin}>Voltar</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Crie sua conta</h3>
                <h4>Rapido e grátis, vamos nessa</h4>
                <label>
                    Nome
                    <input
                        type="text"
                        placeholder="Digite aqui seu nome"
                        {...register("name")} 
                    />
                    <p>{errors.name?.message}</p>
                </label>
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
                    <span>
                        <input
                            id="pass" 
                            type="password"
                            placeholder="********"
                            {...register("password")} 
                        />
                        <button onClick={showPassword} className="eyeButton">
                            <AiFillEye/>
                        </button>
                    </span>
                    <p>{errors.password?.message}</p>
                </label>
                <label>
                    Confirme sua senha
                    <span>
                        <input 
                            id="pass2"
                            type="password"
                            placeholder="********"
                            {...register("confirmPassword")} 
                        />
                        <button onClick={showConfirmPassword} className="eyeButton">
                            <AiFillEye/>
                        </button>
                    </span>
                    <p>{errors.confirmPassword?.message}</p>
                </label>
                <label>
                    Bio
                    <input 
                        type="text" 
                        placeholder="Fale sobre você"
                        {...register("bio")}
                    />
                    <p>{errors.bio?.message}</p>
                </label>
                <label>
                    Contato
                    <input 
                        type="text" 
                        placeholder="Opção de contato"
                        {...register("contact")}
                    />
                    <p>{errors.contact?.message}</p>
                </label>
                <label>
                    Selecionar módulo
                    <select 
                        name="" 
                        id=""
                        {...register("course_module")}
                        required
                    >
                        <option value={"Nenhum módulo selecionado"}
                        >Selecione uma opção</option>
                        <option>Primeiro Módulo (Introdução ao Frontend)</option>
                        <option>Segundo Módulo (Frontend Avançado)</option>
                        <option>Terceiro Módulo (Introdução ao Backend)</option>
                        <option>Quarto Módulo (Backend Avançado)</option>
                    </select>
                </label>
                <button 
                    type="submit"
                    className="registerButton"
                >Cadastrar</button>
            </form>
        </MainContent>
    )
}

export default Register

