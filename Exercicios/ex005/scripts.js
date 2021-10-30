alert('Olá, Seja bem vindo ao TOR!')

function calc() {
    var num = Number(prompt('Digite um número: '))
    //var resp = document.getElementById('resp')
    resp.innerHTML = `<p>O dobro de ${num} é ${num * 2}</p> e a metade é ${num / 2}!`
    console.log('Ok')
}