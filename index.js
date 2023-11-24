class heroi{
    constructor (nome, idade, tipo, ataque){
            this.nome = nome
            this.idade = idade
            this.tipo = tipo
            this.ataque = ataque
    }
    tostring(){
    	console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
        //outro tipo de saída a baixo:
        //console.log(`O heroi ${this.nome} é um ${this.tipo} de ${this.idade} anos e atacou usando ${this.ataque}`)

}

let heroiA = new heroi("SuperDev", 4500, "mago", "magia")
let heroiB = new heroi("SuperJav", 2500, "guerreiro", "espada")
let heroiC = new heroi("SuperPyt", 1500, "monje", "artes marciais")
let heroiD = new heroi("SuperSharp", 750, "ninja", "shuriken")


heroiA.tostring()
