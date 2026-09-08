import { styled } from 'styled-components';


export const Container = styled.div`
width: 100vw;
height: calc(100vh - 60px);
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
h1{
    color: #172554;
    font-size: 100px;
}
h2{
    font-size: 30px;
}
p{
    color: #64748B;
    font-size: 20px;
}
a{
    text-decoration: none;
}
`


export const Botaosecundario = styled.button`
    background-color: #E2E8F0;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    color: #334155;
    border: none;
    margin: 10px 0px;
    cursor: pointer;
    font-size: 18px;
`

export const Botaoprimario= styled.button`
 background-color: #172554;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    color: #ffffff;
    border: none;
    margin: 10px 0px;
    cursor: pointer;
    font-size: 18px;
`