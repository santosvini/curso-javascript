var contador = 0
let total = document.querySelectorById('res')
// As variáveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do programa inteiro

function contar() {
    contador ++ // É a mesma coisa que contador = contador + 1
    res.innerHTML =`<p>O contador está com <mark>${contador}</mark> clique(s).</p>`
}

function zerar() {
    contador = 0
    res.innerHTML =  null //`<p>O contador está zerado</p>`
}