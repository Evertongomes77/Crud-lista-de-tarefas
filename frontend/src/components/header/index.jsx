import chapeu from '../../assets/chapeu.png';
import { Campoescrito, Container } from './styles';
import { Link } from 'react-router-dom'

function Header(){

    return(
        <Container>
            <Campoescrito>
                <img src={chapeu} alt="chapeu de formatura" />
                <Link to={'/cadastro'}><h2>Dev list</h2></Link>
            </Campoescrito>
        </Container>
    )
}

export default Header;