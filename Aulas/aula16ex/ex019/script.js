let num = document.querySelector('input#fnum')
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let val = []

function isNumber(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
     return true
  } else {
     return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
     return true
  } else {
     return false
  }
}

function add() {
  if (isNumber(num.value) && !inLista(num.value, val)) {
     val.push(Number(num.value))
     let item = document.createElement('option')
     item.text = `Valor ${num.value} adicionado`
     lista.appendChild(item)
     res.innerHTML = ''
  } else {
     alert("Valor inválido ou já adicionado!")
  }
  num.value = ''
  num.focus()
}

function enterBnt() {
  document.addEventListener('keypress', function(event) {;
  if(event.key === "Enter") {
    var btn = document.querySelector("#submit")
    btn.click()
    }
  })
}
enterBnt()

function finalizar() {
  if(val.length == 0) {
    alert("Adicione valores antes de continuar!")
} else {
   let total = val.length
   let maior = val[0]
   let menor = val[0]
   let soma = 0
   let media = 0
  for (let pos in val) {
    soma += val[pos]
    if (val[pos] > maior)
      maior = val[pos]
    if (val[pos] < menor) 
      menor = val[pos]
  }
   media = soma / total
   res.innerHTML = ''
   res.innerHTML += `<p>Ao todo, temos ${total} número(s) cadastrado(s).</p>`
   res.innerHTML += `<p>O maior valor informado é ${maior}.</p>`
   res.innerHTML += `<p>O menor valor informado é ${menor}.</p>`
   res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
   res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
  }
}