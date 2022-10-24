import { CheckBox, EmailInput, Form, PasswordInput } from "../styles/pages/components/LoginForm";
import { Envelope, Lock } from 'phosphor-react';





export function LoginForm() {



    return (
        <>
            <Form action="">
                <label >Digite o E-mail</label>
                <EmailInput>
                    <Envelope size={20} />
                    <input type="email" placeholder="johndoe@email.com" />
                </EmailInput>

                <label>Digite a Senha</label>
                <PasswordInput>
                    <Lock size={16} />
                    <input type="password" placeholder="****" />
                </PasswordInput>
                <CheckBox>
                    <label>Manter Senha por 30 dias</label>
                    <input type="checkbox" checked />
                </CheckBox>
            </Form>
        </>

    )

}



{/* <button type="submit">Entrar</button> */ }

{/* <CheckBox>
          <label>Manter Senha por 30 dias</label>
          <input type="checkbox" />
        </CheckBox>


        <Link href="#">
          <a> Esqueceu a senha ?</a>
        </Link>

 */}