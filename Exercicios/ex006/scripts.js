alert('Olá, Eu sou a calculator!')

function calc() {
    var num1 = Number(prompt('Digite um número: '))
    var num2 = Number(prompt('Digite um outro número: '))
    soma = num1 + num2

    var resp = document.getElementById('resp')
    resp.innerHTML = `<p>A soma entre <mark>${num1}</mark> e <mark>${num2}</mark> é igual a <strong>${soma}</strong><p>!`
}