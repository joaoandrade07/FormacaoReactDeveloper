import Button from '../Button';
import {Link} from "react-router-dom";

import logo from '../../assets/logo-dio.png'

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles';

const Header = ({autenticate}) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt='Logo da dio' className='img'></img>
          {
            autenticate
            ?
            <>
              <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
              </BuscarInputContainer>
              <Menu href='$'>Live Code</Menu>
              <Menu href='$'>Global</Menu>
            </>
            :
            null
          }
        </Row>
        <Row>
          {
            autenticate
            ?
            <>
              <UserPicture src='https://avatars.githubusercontent.com/u/114431775?s=400&v=4' />
            </>
            :
            <>
              <Link to="/" className='link'><MenuRight>Home</MenuRight></Link>
              <Link to="/login"><Button title="Entrar"/></Link>
              <Link to="/cadastro"><Button title="Cadastrar"/></Link>
            </>
          }
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Header;
