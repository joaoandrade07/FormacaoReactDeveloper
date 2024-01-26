import Header from "../../components/Header";
import banner from '../../assets/banner.png'
import { Container, TextContent, Title, TitleHighLight } from "./styles";
import { useNavigate } from 'react-router-dom'
import Button from "../../components/Button";

const Home = () => {

  const navigate = useNavigate();

  const handleClickSingIn = () =>{
    navigate('/login')
  }

  return (
    <div>
      <Header/>
      <Container>
        <div>
            <Title>
                <TitleHighLight>
                    Implemente
                    <br/> 
                </TitleHighLight>
                o seu futuro global agora!
            </Title>
            <TextContent>
                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo
                e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title='Começar agora!' variant="secondary" onClick={handleClickSingIn}/>
        </div>
        <div>
            <img src={banner} alt="Imagem principal"/>
        </div>
      </Container>
    </div>
  )
}

export default Home;
