/* eslint-disable react/no-string-refs */
import { LoginContainer, Logo, SubmitButton } from '../styles/pages/login';
import Image from 'next/future/image'
import Avatar from '../assets/avatar.png';
import { LoginForm } from '../components/LoginForm';
import Link from "next/link";


function Login() {

  return (
    <>
      <LoginContainer>

        <Logo>
          <Image src={Avatar} width={250} height={250} alt="" />
        </Logo>


        <LoginForm />
        <Link href="#">
          <a> Esqueceu a senha ?</a>
        </Link>

        <SubmitButton type="submit">
          Entrar
        </SubmitButton>


      </LoginContainer>
    </>

  )






}
export default Login
