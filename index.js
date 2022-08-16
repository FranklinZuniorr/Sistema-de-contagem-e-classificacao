console.log("Sistema de contagem e classificação: ");

const prompt = require("prompt-sync")();
const fs = require('fs');

var quantidade = 0;
var nomes = [];
var dat = [];

pergunta();

function pergunta(){
nomes[quantidade] = prompt("Qual o nome do aluno?")
quantidade++;
console.log(quantidade);
perg = prompt("Deseja adicionar mais um aluno? (s ou n)");

if(perg == "s" || perg == "S"){
pergunta();
}

else if(perg == "n" || perg == "N"){
    console.log("-------------------------");
    console.log("Relatório:");
    console.log("-------------------------");
    for(x = 0; x < quantidade; x++){
        if(x == 0){
            console.log("" + nomes[x] + ", Seção: " + x + ", Zero localizado!");
            dat = dat + "" + nomes[x] + ", Seção: " + x + ", Zero localizado!\n";
        }
        else if(x % 2 == 0){
            console.log("" + nomes[x] + ", Seção: " + x + ", Número par encontrado!");
            dat = dat + "" + nomes[x] + ", Seção: " + x + ", Número par encontrado!\n";
        }
        else{
            console.log("" + nomes[x] + ", Seção: " + x + ", Número ímpar encontrado!");
            dat = dat + "" + nomes[x] + ", Seção: " + x + ", Número ímpar encontrado!\n";
        }
        };
    console.log("-------------------------");
}
projeto = prompt("Qual será o nome do relatório?");
log();
}

function log(){
      
    const data = "-------------------------\n" + "Relatório:\n" + "-------------------------\n" + dat + "-------------------------";
    fs.writeFileSync(projeto + ".txt", data);
    console.log("Relatório adicionado à pasta do sistema!");
      
    prompt("Sistema finalizado!");
    }

