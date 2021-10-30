function desc() { 
    var produto = prompt("Qual o produto você está comprando?")
    var preco = Number(prompt(`Qual o valor do ${produto}?`).toLocaleString("pt-BR",  {style: "currency", currency: "BRL"}))
    var desconto = preco * 0.1
    var final = preco - desconto

    var resp = document.getElementById('saida')
    resp.innerHTML = `<p><strong>Calculando o desconto de 10% para o ${produto}</strong></p>`
    resp.innerHTML += `<p>O preço original era de R$ ${preco}</p>`
    resp.innerHTML += `<p>Você acaba de ganhar R$ ${desconto} reais de desconto (-10%)</p>`
    resp.innerHTML += `<p>No fim, você vai pagar R$ ${final} reais no produto ${produto}</p>`
}