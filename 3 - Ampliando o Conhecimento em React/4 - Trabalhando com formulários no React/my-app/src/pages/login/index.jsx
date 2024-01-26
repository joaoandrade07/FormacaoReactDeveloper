import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock} from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from "../../services/api"

const schema = yup
  .object({
    email: yup.string().email('Email não é válido').required('Campo obrigatório'),
    password: yup.string().min(8, 'No minimo 8 caracteres').required("Campo obrigatório"),
  })
  .required()



const Login = () => {

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  console.log(isValid, errors);

  const onSubmit = async formData => {

    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`)
      if(data.length >= 1){
        navigate('/feed')
      }else{
        alert("Email ou Senha inválidos")
      }
    }catch{
      alert('Houve um erro, tente novamente!')
    }

    // console.log(formData.email)
  }


  return (
    <div>
      <Header/>
      <Container>
        <Column>
            <Title>
            A plataforma para você aprender com experts,
             dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>
            
        </Column>
          <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name ="email" control={control} errorMessage={errors?.email?.message} placeholder="Email" type="email" leftIcon={<MdEmail size="100%"/>}/>
              <Input name="password" control={control} errorMessage={errors?.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock size="100%"/>}/>
              <Button title="Entrar" variant="Secondary" type="submit"/>  {/*onClick={handleClickSingIn} */}
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText onClick={click => navigate('/cadastro')}>Criar conta</CriarText>
            </Row>
          </Wrapper>
      </Container>
    </div>
  )
}

export default Login;