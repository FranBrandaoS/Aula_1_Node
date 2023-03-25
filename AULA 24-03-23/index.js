import express from "express"
const app = express()
const port = 3000


app.get('/', (req,res)=> {
    res.send("oioiaaaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
})




const Pessoa1 ={
    nome: "Agnaldo",
    email: "agnaldinhodograu@yahoo.com.br",
    idade: 77,
    hobbies: ["jogar truco","beber cerveja"]
}


const Pessoa2 ={
    nome: "Jorginho",
    email: "jojo@hotmail.com",
    idade: 15,
    hobbies: ["comer bolacha","tomar suquinho"]
}


const Pessoa3 ={
    nome: "Maluco",
    email: "doidchao@gmail.com",
    idade: 19,
    hobbies: ["fazer maluquice","dormir"]
}




app.get('/auau',(req,res)=>{
   
    const auauJson = JSON.stringify(Pessoa1)
    res.setHeader("Content-Type","application/json")
    res.send(auauJson)
})


app.get('/miau',(req,res)=>{
        const  listaDosCaras=[Pessoa1,Pessoa2,Pessoa3]
       const miauJson = JSON.stringify(listaDosCaras)
    res.setHeader("Content-Type","application/json")
    res.send(miauJson)
})




let soma = 0
app.get('/somar', (req,res)=>{
    soma++
    res.send(JSON.stringify(soma))
})

app.listen(port,()=>{
    console.log('App executando na porta '+port)
})