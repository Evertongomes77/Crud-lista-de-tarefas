import {styled} from 'styled-components';


export const Container= styled.div`
width: 100vw;
height: 100vh;
background-color: #aea9a9;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Form= styled.div`
padding: 20px;
width: 600px;
border-radius: 20px;
height: 500px;
background-color: #ffffff;
display: flex;
align-items: center;
flex-direction: column;
img{
    width: 80px;
    margin-bottom: 10px;
}
h1{
    color: #1A237E;
}
@media (max-width: 615px){
    width: 330px;

}
`

export const Imputcampo= styled.div`
input{
    width: 300px;
    background-color: #E6F6FF;
    color: #6B7280;
    height: 35px;
    padding-left: 20px;
    border-radius: 10px;
    border: 1px solid #837f7f;
    outline: none;
    @media (max-width:615px){
        width: 250px;
    }
}
p{
    font-size: 16px;
    margin: 5px 0px;
    color: #454652;
}
`


export const Buttonentrar= styled.button`
width: 200px;
height: 40px;
background-color: #1A237E;
color: white;
border-radius: 10px;
margin: 15px 0px;
cursor: pointer;
border: none;
`

export const Trocarsenha= styled.p`
color: #1A237E;
font-size: 19px;
margin: 5px 0px;
cursor: pointer;
`

export const Criarconta= styled.p`
color: #00BFA5;
font-size: 19px;
margin: 10px 0px;
cursor: pointer;
`

export const Separador= styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 300px;
`