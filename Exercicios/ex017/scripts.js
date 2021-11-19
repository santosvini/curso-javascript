const gerar = () => {
  const min = 1
  const max = 100
  const dif = max - min
  const aleatorio = Math.random()
  const num = min + Math.trunc(dif * aleatorio)

  var saida = document.getElementById('saida') 
  saida.innerHTML +=`<p>Acabei de pensar no número <mark>${num}</mark>.</p>`
}

const limpar = () => {
  saida.innerHTML = null
}
