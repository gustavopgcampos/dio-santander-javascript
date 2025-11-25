function mmr(wins, loses) {

    let result = wins - loses
    let ranking = ""

    if (result <= 10) {
        ranking = "Ferro"
    } else if (result > 10 && result <= 20) {
        ranking = "Bronze"
    } else if (result > 20 && result <= 50) {
        ranking = "Prata"
    } else if (result > 50 && result <= 80) {
        ranking = "Ouro"
    } else if (result > 80 && result <= 90) {
        ranking = "Diamante"
    } else if (result > 90 && result <= 100) {
        ranking = "Lendário"
    } else if (result >= 101) {
        ranking = "Imortal"
    }

    return `O Herói tem de saldo de ${wins} está no nível de ${ranking}`

}

let vitorias = 144
let derrotas = 22

console.log(mmr(vitorias, derrotas))