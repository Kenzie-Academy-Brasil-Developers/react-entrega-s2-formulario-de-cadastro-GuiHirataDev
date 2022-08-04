import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillEye } from "react-icons/ai"
import { ApiRegister } from "../../services/Api"
import { formRegisterSchema } from "../../services/Schema"
import { toast } from "react-toastify"

const Register = () => {

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(formRegisterSchema)
    })

    const onSubmit = (data) => {
        ApiRegister(data)
    }

    return(
        <main>
            <div>
                <h2>Kenzie Hub</h2>
                <button>Voltar</button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Crie sua conta</h3>
                <p>Rapido e grátis, vamos nessa</p>
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
                    <input 
                        type="password"
                        placeholder="********"
                        {...register("password")} 
                    />
                    <p>{errors.password?.message}</p>
                    <button>
                        <AiFillEye/>
                    </button>
                </label>
                <label>
                    Confirme sua senha
                    <input 
                        type="password"
                        placeholder="********"
                        {...register("confirmPassword")} 
                    />
                    <p>{errors.confirmPassword?.message}</p>
                    <button>
                        <AiFillEye/>
                    </button>
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
                    >
                        <option>Seleciona uma opção</option>
                        <option>Primeiro Módulo (Introdução ao Frontend)</option>
                        <option>Segundo Módulo (Frontend Avançado)</option>
                        <option>Terceiro Módulo (Introdução ao Backend)</option>
                        <option>Quarto Módulo (Backend Avançado)</option>
                    </select>
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </main>
    )
}

export default Register

export const toastSucessRegister = () => {
    toast.success("Usuário criado com sucesso")
}

export const toastErrorRegister = () => {
    toast.error("Não foi possivel realizar o cadastro")
}
