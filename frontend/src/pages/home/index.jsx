import chapeu from '../../assets/chapeu.png';
import { Buttonentrar, Container, Criarconta, Form, Imputcampo, Separador, Trocarsenha } from './styles';
import { useState } from 'react';
import { login } from '../../services/auth';
import { useNavigate } from 'react-router-dom'

function Home() {
    const [usuario, setusuario] = useState('');
    const [password, setpassword] = useState('');
    const navigate= useNavigate();

    function Login() {
        const sucesso = login(usuario, password);
        if (sucesso) {
            alert('login realizado')
            navigate('/cadastro')

            setusuario('')
            setpassword('');

        }
        else{
            alert('usuário ou senha incorretos!')
        }
    }

    return (
        <Container>

            <Form>
                <img src={chapeu} alt="chapeu de formatura" />
                <h1>Lista Escolar</h1>
                <Imputcampo>
                    <p>Nome do usuário</p>
                    <input type="text" value={usuario} placeholder="nome de usuário" onChange={(e) => setusuario(e.target.value)} />
                </Imputcampo>

                <Imputcampo>
                    <p>Senha</p>
                    <input type="password" value={password} placeholder="Sua senha" onChange={(e) => setpassword(e.target.value)} />
                </Imputcampo>
                <Buttonentrar onClick={Login}>Entrar</Buttonentrar>

                <Trocarsenha>Esqueci minha senha</Trocarsenha>
                <Separador>
                    <p>ou</p>
                </Separador>
                <p>Não tem uma conta?</p>
                <Criarconta><a href="/criar-conta">Criar conta </a></Criarconta>

            </Form>

        </Container>
    )
}


export default Home;