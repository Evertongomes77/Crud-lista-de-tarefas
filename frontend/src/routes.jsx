import {Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import Cadastro from './pages/cadastro';
import Erro from './pages/erro';
import RotasProtegidas from './components/protectroute';
import CriarConta from './pages/criarConta';

function Rotas(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={ <RotasProtegidas> <Users /> </RotasProtegidas>} />
            <Route  path='/criar-conta' element={<CriarConta />}/>
            <Route path="/cadastro" element={<RotasProtegidas> <Cadastro /> </RotasProtegidas>} />

            <Route path='*' element={<Erro />} />
        </Routes>
    )
}


export default Rotas;