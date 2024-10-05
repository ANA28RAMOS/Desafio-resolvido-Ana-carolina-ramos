/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas

*/

function numeroDeMedalhas() {
    let paises = ['Brasil', 'França', 'Argentina'];
    let medalhas = {
        'Brasil': { ouro: 0, prata: 0, bronze: 0 },
        'França': { ouro: 0, prata: 0, bronze: 0 },
        'Argentina': { ouro: 0, prata: 0, bronze: 0 }
    };

    while (true) {
        let paisEscolhido = prompt("Digite o nome do país (ou 'sair' para encerrar):");

        if (paisEscolhido.toLowerCase() === 'sair') {
            break;
        }

        if (!paises.includes(paisEscolhido)) {
            alert("País inválido! Tente novamente.");
            continue;
        }

        let ouro = parseInt(prompt(Digite o número de medalhas de ouro para ${paisEscolhido}:));
        let prata = parseInt(prompt(Digite o número de medalhas de prata para ${paisEscolhido}:));
        let bronze = parseInt(prompt(Digite o número de medalhas de bronze para ${paisEscolhido}:));

        medalhas[paisEscolhido].ouro += ouro;
        medalhas[paisEscolhido].prata += prata;
        medalhas[paisEscolhido].bronze += bronze;
    }

    console.log("Ranking de Medalhas:");
    for (let pais in medalhas) {
        let total = medalhas[pais].ouro + medalhas[pais].prata + medalhas[pais].bronze;
        console.log(${pais}: ${total} medalhas (Ouro: ${medalhas[pais].ouro}, Prata: ${medalhas[pais].prata}, Bronze: ${medalhas[pais].bronze}));
    }
}

numeroDeMedalhas();





















