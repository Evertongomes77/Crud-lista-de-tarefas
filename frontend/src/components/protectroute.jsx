import { Navigate } from "react-router-dom";
import { GetUsuarioLogado } from "../services/auth";


function RotasProtegidas( {children} ){
    const usuario= GetUsuarioLogado();

    if(!usuario){
        alert('você precisa está logado!');
        return <Navigate to={'/'} />
    }
    
    return children;
}


export default RotasProtegidas;