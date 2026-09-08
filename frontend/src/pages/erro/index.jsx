import Header from '../../components/header';
import { Botaoprimario, Botaosecundario, Container } from './styled';
import { Link } from 'react-router-dom';

function Erro(){

    return(
        <>
        <Header />
        <Container>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>O link que você tentou acessar não existe</p>

                <Link to={'/cadastro'}><Botaoprimario>Voltar ao início</Botaoprimario></Link>
                <Link to={'/users'}><Botaosecundario>Ver lista de presença</Botaosecundario></Link>

        </Container>
        </>
    )
}


export default Erro;