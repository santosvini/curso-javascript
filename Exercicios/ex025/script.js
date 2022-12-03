function contagem() {
  let saida = document.getElementById("saida");
  let num = Number(document.getElementById("fnum").value);

  saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`;

  if (num < 0) {
    saida.innerHTML += `O número ${num} é negativo`  
  } else {
     for (cont = 0; cont <= num; cont++) {
      saida.innerHTML += ` ${cont} &#x1F449;`;
    }
    saida.innerHTML += ` &#x1F3C1;`;
  }
}
