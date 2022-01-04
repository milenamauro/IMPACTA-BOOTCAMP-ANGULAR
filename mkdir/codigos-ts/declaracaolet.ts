// criando e declarando muitas variaveis com let
let numeroUm: number =1


//Criar uma função para trabalhar com a declaracao ler
function declarandoLet(){
    let numeroDois: number = 2
    //bloco de decisão dentro da função

    if(numeroUm > numeroDois){
        let numeroTres: number = 3
        numeroTres++
        console.log(numeroTres)

        //bloco de repeticao dentro da função
        while (numeroUm < numeroDois){
            let numeroQuatro: number = 4
            numeroUm++
            console.log(numeroUm)
           // console.log(numeroQuatro)


        }
        console.log(numeroUm)
        console.log(numeroDois)
        

    }
    // criando o "chamador" da função
    declarandoLet()

}