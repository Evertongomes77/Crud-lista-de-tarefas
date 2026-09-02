import {Route,Routes} from 'react-router-dom';
import Home from './pages/home';
import Users from './pages/users';
import Cadastro from './pages/cadastro';
import Erro from './pages/erro';

function Rotas(){

    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cadastro" element={<Cadastro />} />

            <Route path='*' element={<Erro />} />
        </Routes>
    )
}


export default Rotas;