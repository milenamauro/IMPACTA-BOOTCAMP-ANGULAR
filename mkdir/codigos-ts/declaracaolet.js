// criando e declarando muitas variaveis com let
var numeroUm = 1;
//Criar uma função para trabalhar com a declaracao ler
function declarandoLet() {
    var numeroDois = 2;
    //bloco de decisão dentro da função
    if (numeroUm > numeroDois) {
        var numeroTres = 3;
        numeroTres++;
        console.log(numeroTres);
        //bloco de repeticao dentro da função
        while (numeroUm < numeroDois) {
            var numeroQuatro = 4;
            numeroUm++;
            console.log(numeroUm);
            console.log(numeroQuatro);
        }
        console.log(numeroUm);
        console.log(numeroDois);
    }
    // criando o "chamador" da função
    declarandoLet();
}
