import PromptSync from "prompt-sync"

const prompt = PromptSync()


/*const nome = prompt("Digite seu nome:")
console.log(`Olá ${nome}!`)



const temp = Number(prompt("Digite a temperatura: "))

if(temp >38){
    console.log("Febre")
} 


else if(temp < 26){
    console.log("Irá falecer, tranquilo.")
}


else{
    console.log("Tudo ok")
} */


const salarioAtual = Number(prompt("Digite o seu salário atual:"))
const percentual = Number(prompt("Digite o percentual de aumento:"))

const percentoDecimal = parseInt(percentual) / 100; 
const aumento =  percentoDecimal * salarioAtual; 
const novoSalario = salarioAtual + aumento; 

console.log(`Seun novo salário é: ${novoSalario}!`)


const anoNascimento = Number(prompt("Qual a seu ano de nascimento?"))
const anoHoje = new Date()
const anoAtual = anoHoje.getFullYear()
const idade = anoAtual - anoNascimento




if(idade >= 18){

    console.log(`Você tem ${idade}, e já pode tirar a habilitação.`)
}

else{
    console.log(`Você não pode tirar habilitação ainda.`)
}

