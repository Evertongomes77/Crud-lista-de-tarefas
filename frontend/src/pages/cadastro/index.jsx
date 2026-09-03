import Header from "../../components/header";
import user from '../../assets/user.png'
import { Campoinputs, Container, Form, Titles, Camposelct, Button, Divbuttons } from "./style";
import {Link} from 'react-router-dom'
import { useState,useRef } from "react";
import api from "../../services/api";

function Cadastro() {
    const [nome,setnome]= useState('');
    const escola= useRef('');

    async function cadastrar(){
        if(nome=='' || escola.current.value==''){
            alert('Preencha todos os campos!')
        }
        else{
            await api.post('/usuarios',{
                nome,
                escola: escola.current.value
            });

            alert('usuário cadastrado com sucesso!')
            escola.current.value='';
            setnome('')
        };
    }
    
    return(
        <>
            <Header />
            <Container>
                <Form>
                    <Titles>
                        <img src={user} alt="imagem de usuário" />
                        <h2>Cadastro de presença</h2>
                    </Titles>

                    <Campoinputs>
                        <p>Nome da pessoa</p>
                        <input type="text" placeholder="Digite o seu nome" value={nome} onChange={((nome)=>setnome(nome.target.value))}/>
                    </Campoinputs>

                    <Camposelct>
                        <p>Escola</p>
                        <select name="" id="" defaultValue={''} ref={escola}>
                            <option disabled value="">Selecione uma instituição</option>
                            <option value="afya">Afya</option>
                            <option value="estacio">Estácio</option>
                            <option value="ifro">Ifro</option>
                        </select>
                    </Camposelct>

                    <Divbuttons>
                        <Button onClick={cadastrar}>Cadastrar</Button>
                        <Link to={'/users'}><Button>Ver listas</Button></Link>
                    </Divbuttons>
                </Form>
            </Container>
        </>
    )
}

export default Cadastro;