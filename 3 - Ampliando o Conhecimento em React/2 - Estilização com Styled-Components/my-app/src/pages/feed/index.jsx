import Header from "../../components/Header";
import { Container, Column, Title, TitleHighLight } from "./styles";
import Card from "../../components/Card";
import UserInfo from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticate='true'/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </Column>
        <Column flex={1}>
          <TitleHighLight>#RANKING 5 TOP DA SEMANA</TitleHighLight>
          <UserInfo percentual={90} name='João Andrade' image='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
          <UserInfo percentual={35} name='João Andrade' image='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
          <UserInfo percentual={51} name='João Andrade' image='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
          <UserInfo percentual={78} name='João Andrade' image='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
          <UserInfo percentual={15} name='João Andrade' image='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
          <UserInfo percentual={65} name='João Andrade' image='https://avatars.githubusercontent.com/u/114431775?s=400&v=4'/>
        </Column>
      </Container>
    </>
  )
}

export default Feed;
