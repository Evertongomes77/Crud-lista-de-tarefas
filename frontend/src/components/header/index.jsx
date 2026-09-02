import chapeu from '../../assets/chapeu.png';
import { Campoescrito, Container } from './styles';

function Header(){

    return(
        <Container>
            <Campoescrito>
                <img src={chapeu} alt="chapeu de formatura" />
                <h2>Dev list</h2>
            </Campoescrito>
        </Container>
    )
}

export default Header;