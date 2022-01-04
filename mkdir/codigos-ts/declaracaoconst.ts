/*
//implementar um objeto literal para alterar suas propriedades
const idParticipantes ={
    participanteA: 1,
    participanteB: 2,
    participanteC: 3,
    participanteD: 4
}

//exibido o objeto
console.log(idParticipantes)

//acessar uma propriedade especifica do objeto constante

idParticipantes.participanteB = 875
console.log(idParticipantes.participanteB)
console.log(idParticipantes) */

// criar uma variavell com a declaracao let

let vidaGatos: number= 9

// criando o objeto literal
const dadosGato = {
    nome: 'Mila Burns',
    qtdeVidas: vidaGatos
}

//exibir objeto
console.log(dadosGato)

// aplicar as alteraçoes do objeto
dadosGato.nome = 'Frajola Jenkins'
dadosGato.qtdeVidas = 89

//exibindo as alateraçoes realizadas
console.log('Quantidade de vidas de  ', dadosGato.nome, 'é igual a', dadosGato.qtdeVidas)

console.log(dadosGato)