class Hero {

    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    atacar(type) {

        if (this.type == "mago") {
            let ataque = "magia"

            console.log(`o tipo ${this.type} atacou usando o ${ataque}`)
        } else if (this.type == "guerreiro") {
            let ataque = "espada"

            console.log(`o tipo ${this.type} atacou usando o ${ataque}`)
        } else if (this.type == "monge") {
            let ataque = "artes marciais"

            console.log(`o tipo ${this.type} atacou usando o ${ataque}`)
        } else if (this.type == "ninja") {
            let ataque = "shuriken"

            console.log(`o tipo ${this.type} atacou usando o ${ataque}`)
        } else {
            console.log("Tipo não existente")
        }

    }

}

let mago = new Hero("Mago das Sombras", 900, "mago")
let guerreiro = new Hero("Guerreiros das Trevas", 6000, "guerreiro")
let monge = new Hero("Monge da Paz", 55, "monge")
let ninja = new Hero("Ninja Ninjago", 25, "ninja")
let pessoa = new Hero("Pessoa Normal", 33, "pessoa")

mago.atacar()
guerreiro.atacar()
monge.atacar()
ninja.atacar()
pessoa.atacar() //retorna "Tipo não existente"