import {styled} from 'styled-components';


export const Container= styled.div`
width: 100vw;
height: calc(100vh - 60px );
display: flex;
align-items: center;
background-color: #fefefe;
flex-direction: column;
`

export const Form= styled.div`
width: 600px;
height: 300px;
display: flex;
margin-top: 40px;
align-items: center;
flex-direction: column;
border-radius: 20px;
background-color: #FFFFFF;
border: 1px solid #C6C5D4;
`

export const Titles= styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin: 20px 0px;
`

export const Campoinputs= styled.div`
p{
    font-size: 14px;
    color: #006B5C;
    font-style: italic;
    font-weight: bold;
    margin-bottom: 5px;
}
input{
    width: 300px;
    height: 35px;
    padding-left: 20px;
    border-radius: 10px;
    border: 1px solid #C6C5D4;
    outline: none;
}
`

export const Camposelct= styled.div`
p{
    font-size: 14px;
    color: #006B5C;
    font-style: italic;
    font-weight: bold;
    margin: 8px;
}
select{
    width: 300px;
    height: 35px;
    border-radius: 10px;
    border: 1px solid #C6C5D4;
    outline: none;
    padding-left: 10px;
}
`

export const Button= styled.button`
width: 200px;
height: 40px;
background-color: #1A237E;
color: white;
border-radius: 10px;
cursor: pointer;
margin-top: 20px;
border: none;
`

export const Divbuttons=styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 30px;
`