//alert('Ola, Bem Vindo a escola!')
function media() {
    var nome = prompt('Qual o nome do aluno?')
    var nota1 = Number(prompt(`Qual a primeira nota do ${nome}?`))
    var nota2 = Number(prompt(`Qual a segunda nota do ${nome}?`))
    m = (nota1 + nota2)/2

    var resp = document.getElementById('saida')
    resp.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    resp.innerHTML += `<p>As notas obtidas foram <mark>${nota1}</mark> e <mark>${nota2}</mark>.</p>`
    resp.innerHTML += `<p>A média final será <mark>${m}</mark>.</p>`
}