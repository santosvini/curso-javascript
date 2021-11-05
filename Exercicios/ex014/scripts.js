function info() {
  var data = new Date();

  var resp = document.getElementById('saida')
  resp.innerHTML = `<p> O que eu recebi do sistema foi <mark>${data}</mark>.</p>`
}