const entrada = "janoel 2200";

function ranking(entrada) {

    const [nome, xpStr] = entrada.trim().split(' ');

    const xp = parseInt(xpStr);

    if (xp <= 1000) {
        console.log(`O herói de nome ${nome} de nível Ferro!`)
    } else if (xp > 1000 && xp <= 2000) {
        console.log(`O herói de nome ${nome} de nível Bronze!`)
    } else if (xp > 2000 && xp <= 5000) {
        console.log(`O herói de nome ${nome} de nível Prata!`)
    } else if (xp > 6000 && xp <= 7000) {
        console.log(`O herói de nome ${nome} de nível Ouro!`)
    } else if (xp > 7000 && xp <= 8000) {
        console.log(`O herói de nome ${nome} de nível Platina!`)
    } else if (xp > 8000 && xp <= 9000) {
        console.log(`O herói de nome ${nome} de nível Ascendente!`)
    } else if (xp > 9000 && xp <= 10000) {
        console.log(`O herói de nome ${nome} de nível Imortal!`)
    } else if (xp > 10000) {
        console.log(`O herói de nome ${nome} de nível Radiante!`)
    }

}


ranking(entrada)