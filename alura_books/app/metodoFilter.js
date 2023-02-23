const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDiponibilidade() : filtrarPorCategoria(categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = caucularValorTotoalDELivrosNaTela (livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }

}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDiponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
    `
}

//const filhosDeAndre = [
//  {
//       name:"José",
//        age:27
//    },
//    {
//        name:"Julia",
//        age:25
//    },
//    {
//        name:"Waldir",
//        age:18
//    },
//   {
//        name:"Anna",
//        age:15
//    },
//    {
//        name:"Henrique",
//        age:8
//    }
//]

//const podeDirigir = filhosDeAndre.filter( jaPodeDirigir => {
//    return jaPodeDirigir.age >= 18})
//const lista = filhosDeAndre.map(idade => {return  idade == 'Waldir' })


//    console.log(podeDirigir)
//    console.log(filhosDeAndre)
//    console.log(lista)