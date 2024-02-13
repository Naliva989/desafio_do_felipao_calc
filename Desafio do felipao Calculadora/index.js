const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para calcular o saldo de ranqueadas e determinar o nível do jogador
function calcularNivel(vitorias, derrotas) {
    var saldoVitorias = vitorias - derrotas;
    var nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

rl.question('Digite a quantidade de vitórias: ', (vitorias) => {
  rl.question('Digite a quantidade de derrotas: ', (derrotas) => {
    const resultado = calcularNivel(parseInt(vitorias), parseInt(derrotas));
    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
    rl.close();
  });
});
