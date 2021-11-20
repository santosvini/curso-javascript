function estações() {
  let mês = String(prompt("Digite o mês por extenso (ex: Novembro)"));
  let saida = document.getElementById("saida");
  let estacao;
  switch (mês.toUpperCase()) {
    case "JANEIRO":
    case "FEVEREIRO":
    case "MARÇO":
      estação = "INVERNO";
      break
    case "ABRIL":
    case "MAIO":
    case "JUNHO":
      estação = "PRIMAVERA";
      break
    case "JULHO":
    case "AGOSTO":
    case "SETEMBRO":
      estação = "VERÃO";
      break
    case "OUTUBRO":
    case "NOVEMBRO":
    case "DEZEMBRO":
      estação = "OUTONO";
      break
    default:
      estação = "INDEFINIDA";
      break
  }
  saida.innerHTML = `<p>No mês de <mark>${mês}</mark>, estamos na estação <mark><strong>${estação}</strong></mark></p>.`

}
