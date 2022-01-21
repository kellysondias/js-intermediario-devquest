'use strict'

//console.log(this)
/* console.log(window === this)
console.log(window)
 */

/* this.name = 'Kellyson'

function saudar() {
    console.log('This no contexto da função' , this)
    console.log('Olá ' + this.name + '!')
}

saudar() */

/* let usuario = {
    nome: 'Kellyson',
    saudar: function () {
        console.log('this no contexto do método ', this)

        console.log('this.name no contexto do método:', this.nome)
    }
}

usuario.saudar() */

let comida = {
    nome: 'Cochurros',
    temperatura: 0,
    cozinhar: function(temperaturaDeCozimento) {
        console.log('this no contexto do objeto comida', this)
        this.temperatura = temperaturaDeCozimento;
    }
}

comida.cozinhar(100)

console.log(comida)