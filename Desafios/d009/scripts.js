function reajuste_sal() {
    var nome = prompt('Qual o nome do funcionário?')
    var salario = Number(prompt(`Qual o salário de ${nome}`).replace(',' , '.'))
    var aumento = Number(prompt(`Qual a porcentagem do salário de ${nome}`).replace("%", ""))

    var reajuste = salario * (aumento / 100)
    var novo_salario = salario + reajuste

    var resp = document.getElementById('saida')
    resp.innerHTML = `<p><strong>${nome} recebeu um aumento salarial!</strong></p>`
    resp.innerHTML += (`<p>O salário atual era de ${moneyFormat(salario)}.</p>`)
    resp.innerHTML += (`<p>Com um aumento de ${aumento}%, o salário vai aumentar R$ ${moneyFormat(reajuste)} no próximo mês.</p>`)
    resp.innerHTML += (`<p>E a partir dai ${nome} vai passar a ganha ${moneyFormat(novo_salario)}</p>`)
}

function moneyFormat(element) {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(element);
  }