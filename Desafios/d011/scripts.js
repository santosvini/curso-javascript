const bissexto = () => {
  const ano = prompt('Qual o ano que você quer verificar?')
  if (ano % 4 == 0  || ano % 100 == 0) {
    result.innerHTML = `<p>Ano de ${ano} é ano Bissexto!</p>`
  } else {
    result.innerHTML = `<p>Não é ano bissexto!</p>`
  }
}