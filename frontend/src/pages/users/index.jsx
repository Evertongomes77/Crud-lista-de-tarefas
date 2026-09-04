import Header from "../../components/header";
import lupa from '../../assets/lupa.png'
import usuario from '../../assets/icon-usuario.png'
import lixeiro from '../../assets/lixeiro.png'
import { Campodados, Campofiltro, Campousuario, Container, Listausers, Totalpessoas } from "./styled";
import { useState, useEffect, Children } from "react";
import api from "../../services/api";

function Users() {
    const [usuarios, setusuarios] = useState([]);
    const [totalusuarios, settotalusuarios] = useState(0);
    const [filtro, setfiltro] = useState('');


    async function getUsuarios() {
        const response = await api.get('/usuarios');
        setusuarios(response.data.data)
        settotalusuarios(response.data.total)

    }

    useEffect(() => {
        getUsuarios();
    }, [usuarios]);

    async function deletarusuario(id) {
        await api.delete(`/usuarios/${id}`)
        const usuariosAtualizados = usuarios.filter(user => user.id !== id);
        setusuarios(usuariosAtualizados);
    }

    async function buscafiltrada(nome) {
        console.log(nome)
    }

    return (
        <>
            <Header />
            <Container>

                <Totalpessoas>
                    <p>Status geral</p>
                    <h3>Total: {totalusuarios}</h3>
                </Totalpessoas>

                <Campofiltro>
                    <img src={lupa} alt="imagem lupa" />
                    <input type="text" placeholder="Filtar por nome ou pessoa" onChange={(nome) => buscafiltrada(nome.target.value)} />
                </Campofiltro>

                <p style={{ fontSize: 24, color: '#767683', fontWeight: '800', margin: 20 }}>resultado</p>
                <hr style={{ width: '100%' }} />

                <Listausers>
                    {usuarios.map((user) => {
                        return (
                            <Campousuario key={user.id}>
                                <img src={usuario} alt="icone de usuário" />
                                <Campodados>
                                    <h5>{user.nome}</h5>
                                    <p>{user.escola}</p>
                                </Campodados>
                                <img src={lixeiro} alt="imagem de um lixeiro" onClick={() => deletarusuario(user.id)} style={{ cursor: 'pointer' }} />
                            </Campousuario>
                        )
                    })}
                </Listausers>

            </Container>
        </>
    )
};

export default Users;