function calc() {
  var n1 = Number(prompt("Primeiro Valor:"));
  var n2 = Number(prompt("Segundoo Valor:"));
  var op = Number(prompt(`Valores informados: ${n1} e ${n2}.
  \nO que vamos fazer? 
  \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`));

  var saida = document.getElementById("saida");
  saida.innerHTML = `<h2>Calculando...</h2>`;
  switch (op) {
    case 1:
      saida.innerHTML += `<p>${n1} + ${n2} = <strong>${n1 + n2}</strong></p>`;
      break
    case 2:
      saida.innerHTML += `<p>${n1} - ${n2} = <strong>${n1 - n2}</strong></p>`;
      break
    case 3:
      saida.innerHTML += `<p>${n1} x ${n2} = <strong>${n1 * n2}</strong></p>`;
      break
    case 4:
      saida.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1 / n2).toLocaleString("pt-BR")}
      </strong></p>`;
      break
    default:
      saida.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles. </p>`;
      break
  }
}
