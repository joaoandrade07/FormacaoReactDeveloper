import Header from "../../components/Header";
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "./styles";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useNavigate } from 'react-router-dom'
import { MdEmail, MdLock} from 'react-icons/md';


const Login = () => {

  const navigate = useNavigate();

  const handleClickSingIn = () =>{
    navigate('/feed')
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
            <form>
              <Input placeholder="Email" type="email" leftIcon={<MdEmail size="100%"/>}/>
              <Input placeholder="Senha" type="password" leftIcon={<MdLock size="100%"/>}/>
              <Button title="Entrar" variant="Secondary" onClick={handleClickSingIn} type="button"/>
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
      </Container>
    </div>
  )
}

export default Login;