function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<h2> Contagem Regressiva de 10 a 1</h2>`

  for (let cont = 10; cont >= 1; cont--) {
    saida.innerHTML += `${cont} &#x1F449;`
  }
  saida.innerHTML += ` &#x1F3C1;`
}