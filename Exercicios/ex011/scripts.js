function calc() {
  var nome = String(prompt('Qual o nome do aluno?'))
  var nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
  var nota2 = Number(prompt(`Qual foi a segunda nota de ${nome}?`))
  var media = (nota1 + nota2) / 2

  var msg = ''
  if (media >= 6) {
    msg = 'Meus parabéns!'
  } else {
    msg = 'Estude mais um pouco....'
  }

  var res = document.getElementById('res')
  res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
  res.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>`
  res.innerHTML += `<p>A média final será <mark>${media}</mark>.</p>`
  res.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`
}