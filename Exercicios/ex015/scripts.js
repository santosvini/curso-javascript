function info() {
  var agora = new Date()
  var dia = agora.getDate()
  var mes = agora.getMonth()
  var ano = agora.getFullYear()
  var sem = agora.getDay()
  var hora = agora.getHours()
  var min = agora.getMinutes()
  var seg = agora.getSeconds()
  
  var resp = document.getElementById('saida')
  resp.innerHTML = `<p> Dia: <mark>${dia}</mark></p>`
  resp.innerHTML += `<p> Mes: <mark>${mes}</mark></p>`
  resp.innerHTML += `<p> Ano: <mark>${ano}</mark></p>`
  resp.innerHTML += `<p> Dia da semana: <mark>${sem}</mark></p>`
  resp.innerHTML += `<p> Hora: <mark>${hora}</mark></p>`
  resp.innerHTML += `<p> Minutos: <mark>${min}</mark></p>`
  resp.innerHTML += `<p> Segundos: <mark>${seg}</mark></p>`
}