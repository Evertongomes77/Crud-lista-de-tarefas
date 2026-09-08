import chapeu from '../../assets/chapeu.png';
import { Buttonentrar, Container,Criarconta,Form, Imputcampo, Separador, Trocarsenha } from './styles';

function Home() {

    return (
        <Container>
        
            <Form>
                <img src={chapeu} alt="chapeu de formatura" />
                <h1>Lista Escolar</h1>
                    <Imputcampo>
                        <p>Nome do usuário</p>
                        <input type="text" placeholder="nome de usuário" />
                    </Imputcampo>

                    <Imputcampo>
                        <p>Senha</p>
                        <input type="password" placeholder="Sua senha" />
                    </Imputcampo>
                    <Buttonentrar>Entrar</Buttonentrar>

                    <Trocarsenha>Esqueci minha senha</Trocarsenha>
                    <Separador>
                        <p>ou</p>
                    </Separador>
                    <p>Não tem uma conta?</p>
                    <Criarconta>Criar conta</Criarconta>

            </Form>

        </Container>
    )
}


export default Home;