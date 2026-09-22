

function criarSenha(username, password){
    const usuario={username, password};

    localStorage.setItem('usuario', JSON.stringify(usuario));
}


 export function login(username, password){
    const usuario= JSON.parse(localStorage.getItem('usuario'));

    if(usuario && usuario.username===username && usuario.password===password){
        localStorage.setItem('logado',username);
        return true
    }

    return false
}


export function GetUsuarioLogado(){
    return localStorage.getItem('logado');
}







export default criarSenha;