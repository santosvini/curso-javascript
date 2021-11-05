function idade() {
  var nascto = Number(prompt('Em que ano você nasceu?'))
  var hoje = new Date()
  var atual = hoje.getFullYear()

  var idade = atual - nascto

  var resp = document.getElementById('saida')
  resp.innerHTML = `<p> Quem nasceu em ${nascto} vai completar 
  <b>${idade}</b> anos em ${atual}`
}