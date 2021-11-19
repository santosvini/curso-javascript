var res = document.querySelector('section#result')
var computador = 0
var jogador = 0

function sortear() {
  let min = 1
  let max = 100
  let dif = max - min
  let aleatorio = Math.random()
  computador = min + Math.trunc(dif * aleatorio)
}

function jogar() {
  jogador = Number(prompt("Qual o seu palpite?"))
  if (jogador < computador) { 
    res.innerHTML += `<p>Você falou ${jogador}. Meu número é <b>MAIOR</b></p>`
  } else if (jogador > computador) {
      res.innerHTML += `<p>Você falou ${jogador}. Meu número é <b>MENOR</b></p>`
      } else if (jogador == computador) {
        res.innerHTML +=`<p><b>Parabén!</b> você acertou! Eu tinha sorteado o valor ${jogador}.</p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}

function limpar() {
  let limpa = document.querySelector('p#sair')
  res.innerHTML = null
  document.getElementById('botao2').style.visibility = 'hidden'
}