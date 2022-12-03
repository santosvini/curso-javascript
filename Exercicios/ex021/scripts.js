function contar() {
  let saida = document.getElementById('saida')
    
  saida.innerHTML += `<h2> Contando de 1 até 10</h2>`

  for (let cont = 1; cont <= 10; cont++) {
    saida.innerHTML += `${cont} &#x1F449;`
  }
  saida.innerHTML += ` &#x1F3C1;`
}