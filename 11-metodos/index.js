let usuario = {
    nome: 'Kellyson',
    excluir: function() {
        console.log('O usuário ' + this.nome + 'foi excluído!')
    }
}

usuario.excluir()//O parênteses chama o método