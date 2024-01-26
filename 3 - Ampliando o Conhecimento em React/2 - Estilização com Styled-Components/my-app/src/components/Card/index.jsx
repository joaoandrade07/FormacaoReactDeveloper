import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'

import { FiThumbsUp } from "react-icons/fi"

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src=''/>
      <Content>
        <UserInfo>
            <UserPicture src='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
            <div>
                <h4>João Andrade</h4>
                <p>Há 8 minutos</p>
            </div>
        </UserInfo>
        <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito o curso de html e css no bootcamp dio do Global avanade...<strong>Saiba Mais</strong> </p>
        </PostInfo>
        <HasInfo>
            <h4>#HTML #CSS #Javascript</h4>
            <p>
                <FiThumbsUp /> 10
            </p>
        </HasInfo>
      </Content>
    </CardContainer>
  )
}

export default Card
