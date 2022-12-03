function estações() {
  let mês = String(prompt("Digite o mês por extenso (ex: Novembro)"));
  let saida = document.getElementById("saida");
  let estacao;
  switch (mês.toUpperCase()) {
    case "JANEIRO":
    case "FEVEREIRO":
    case "MARÇO":
      estacao = "INVERNO";
      break
    case "ABRIL":
    case "MAIO":
    case "JUNHO":
      estacao = "PRIMAVERA";
      break
    case "JULHO":
    case "AGOSTO":
    case "SETEMBRO":
      estacao = "VERÃO";
      break
    case "OUTUBRO":
    case "NOVEMBRO":
    case "DEZEMBRO":
      estacao = "OUTONO";
      break
    default:
      estacao = "INDEFINIDA";
      break
  }
  saida.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estacao <mark><strong>${estacao}</strong></mark></p>.`

}
