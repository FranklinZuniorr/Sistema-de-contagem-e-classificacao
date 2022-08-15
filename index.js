console.log("Sistema de contagem e classificação: ");

const prompt = require("prompt-sync")();

var quantidade = prompt("Qual será a quantidade de números? ");

for(x = 0; x <= quantidade; x++){
if(x == 0){
    console.log(x + " Zero localizado!");
}
else if(x % 2 == 0){
    console.log(x + " Número par encontrado!");
}
else{
    console.log(x + " Número ímpar encontrado!");
}
};
