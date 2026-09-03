import express from 'express';
import { PrismaClient } from "../backend/generated/prisma/index.js";
const prisma= new PrismaClient();
import cors from 'cors';
const app= express();
app.use(express.json());
app.use(cors());


app.get('/usuarios', async (req,res)=>{
    const usuarios= await prisma.users.findMany();
    res.status(200).json({total: usuarios.length,data:usuarios})
});


app.post('/usuarios', async(req,res)=>{
    const {nome,escola}= req.body;
    const usuario=await prisma.users.create({
        data:{
            nome,
            escola
        }
    })
    res.json(usuario);
});

app.delete('/usuarios/:id', async (req,res)=>{
    await prisma.users.delete({
            where:{
                id: req.params.id
            }
    })
    res.status(201).json({"message": "usuário deletado com sucesso!"});
})


app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000!')
});