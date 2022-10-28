/* eslint-disable react/no-string-refs */
import { LoginContainer, Main, SubmitButton } from '../styles/pages/login';
import { LoginForm } from '../components/LoginForm';
import Link from "next/link";
import AvatarPic from '../assets/avatar.png';
import Avatar from '../components/Avatar';


function Login() {

  return (
    <Main>
      <LoginContainer>
        <Avatar src={AvatarPic} height={250} width={250} />
        <LoginForm />
        <Link href="#">
          <a> Esqueceu a senha ?</a>
        </Link>

        <SubmitButton type="submit">
          Entrar
        </SubmitButton>


      </LoginContainer>
    </Main>

  )
}



export default Login
