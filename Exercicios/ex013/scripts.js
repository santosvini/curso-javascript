function maior() {
  var num1 = Number(prompt('Digite um número:'))
  var num2 = Number(prompt('Digite outro número: '))

  var msg = ''
  if (num1 < num2) {
    msg = ` O MAIOR valor é ${num2}`
  } else if (num1 > num2) {
    msg = ` O MAIOR valor é ${num1}`
  } else {
    msg = ` são IGUAIS`
  }

  var resp = document.getElementById('res')
  resp.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark><strong>${msg}</strong>.</p>`
}