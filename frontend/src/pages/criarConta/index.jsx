import { useState } from "react"
import criarSenha from "../../services/auth";

function CriarConta() {
    const [username, setusername] = useState('');
    const [password, setpassword]= useState('');

    function cadastrar(){
        criarSenha(username,password);
        setusername('');
        setpassword('');
    }

    return (
        <div>
            <input type="text" placeholder="Nome de usuário" value={username} onChange={(e)=> setusername(e.target.value)} />
            <input type="password" placeholder="Sua senha" value={password} onChange={(e)=> setpassword(e.target.value)} />
            <button onClick={cadastrar}>Cadastrar</button>
        </div>
    )
}


export default CriarConta;