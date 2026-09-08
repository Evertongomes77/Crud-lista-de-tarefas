import {styled} from 'styled-components';


export const Container= styled.div`
width: 100vw;
display: flex;
align-items: center;
overflow: hidden;
flex-direction: column;
height: calc(100vh - 60px);
background-color: #ffffff;
`

export const Totalpessoas= styled.div`
width: 400px;
height: 100px;
background-color: #1A237E;
display: flex;
align-items: center;
justify-content:center;
flex-direction: column;
margin-top: 30px;
border-radius: 20px;
p{
    font-size: 25px;
    color: #ffffff;
    font-weight: 700;
}
h3{
    font-size: 30px;
    color: #ffffff;
    font-weight: 900;
}
@media (max-width:431px){
    width: 300px;
}
`

export const Campofiltro= styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;
img{
    width: 30px;
    position: relative;
    left: 40px;
}
input{
    width: 358px;
    height: 45px;
    padding-left: 40px;
    border-radius: 10px;
    border: 1px solid #767683;
    outline: none;
    @media (max-width: 431px){
        width: 258px;
    }
}
`

export const Listausers= styled.div`
width: 100%;
margin: 20px;
height: auto;
display: flex;
overflow-y: scroll;
overflow-x: hidden;
padding: 0px 20px;
align-items: center;
justify-content: center;
flex-direction: column;
`


export const Campousuario= styled.div`
width: 350px;
border-radius: 10px;
border: 1px solid #C6C5D4;
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 0px;
padding: 10px 10px;
@media (max-width:431px){
    width: 280px;
}
img{
    width: 24px;
}
`


export const Campodados= styled.div`
p{
    color: #006B5C;
    font-size: 16px;
}
h5{
    font-size: 18px;
    font-style:normal;
    font-weight: 700;
}
`

export const Lixeiro= styled.img`
cursor: pointer;
`