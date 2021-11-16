const media = () => {
  var nome = String(prompt('Qual o nome do aluno?'))

  var nota1 = Number(parseFloat(prompt(`Primeira nota de ${nome}:`)))
  var nota2 = Number(parseFloat(prompt(`Segunda nota de ${nome}:`)))

  var media = parseFloat(nota1 + nota2) / 2

  var res = document.getElementById('res')
  res.innerHTML = `<h2><p>Analisando a situação de ${nome}</p></h2>` 
  res.innerHTML += `<p>Com as notas ${nota1} e ${nota2}, <strong>a média é 
  ${media}</strong></p>`

if(media <= 3) {
  res.innerHTML += `<p>Com a média abaixo de 3, o aluno está <mark style="background-color:red"}><strong>REPROVADO</strong></mark></p>`
    }else if(media <= 6 && media > 3){
      res.innerHTML += `<p>Com média entre 3 e 6 o aluno está em <mark style="background-color:yellow"}><strong>RECUPERAÇÃO</strong></mark></p>`
    }
      if(media > 6)
        res.innerHTML += `<p>Com média acima de 6 o aluno está em <mark style="background-color:green"}><strong>APROVADO</strong></mark></p>`
}