function calc() {
  var número = prompt("Digite um número")
  
  var msg = ''
  if (número % 2 == 0) {
    msg = 'PAR'
  } else {
    msg = 'ÍMPAR'
  }
  
  var res = document.getElementById('res')
  res.innerHTML = `<p> O número ${número} que foi digitado é <strong>${msg}</strong>.</p>`
}