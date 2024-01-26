import Header from "../../components/Header"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { Container, Title, SubTitle, Wrapper, TextLink } from './styles'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { MdPerson, MdEmail, MdLock} from 'react-icons/md';
import { useNavigate } from "react-router-dom"
import { api } from "../../services/api"


const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('O email não está válido').required('Campo obrigatório'),
    password: yup.string().min(8, "Minímo de 8 caracteres!").required('Campo obrigatório')
})

const Cadastro = () => {

    // const [email, setEmail] = useState("");
    // const [name, setName] = useState("");
    // const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors }} = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    })

    
    
    const onSubmit = async (data) => {
        try{
            const response = await api.post('users',{
                id: 1,
                name: data.name,
                email: data.email,
                senha: data.password
            })
            console.log(response)
        }catch{
            alert("Error ao cadastrar usuário!")
        }
    }

  return (
    <>
        <Header />
        <Container>
            <Title>
                A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.
            </Title>
            <Wrapper>
                <Title>
                    Comece agora grátis
                </Title>
                <SubTitle>Crie sua conta e make the change._</SubTitle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input name="name" placeholder="Nome completo" errorMessage={errors?.name?.message} control={control} leftIcon={<MdPerson size="100%"/>}/>
                    <Input name="email" placeholder="Email" errorMessage={errors?.email?.message} control={control} leftIcon={<MdEmail size="100%"/>}/>
                    <Input name="password" placeholder="Senha" errorMessage={errors?.password?.message} control={control} leftIcon={<MdLock size="100%"/>}/>
                    
                    <Button variant="variant" title='Criar minha conta' type="submit" />
                </form>
                

                <SubTitle>
                    Ao clicar em "criar minha conta grátis",
                    declaro que aceito as Políticas de Privacidade 
                    e os Termos de Uso da DIO.
                </SubTitle>

                <TextLink>
                    Já tenho conta. <span onClick={click => navigate('/login')}>Fazer login</span>
                </TextLink>


            </Wrapper>
        </Container>
    </>
  )
}

export default Cadastro;
