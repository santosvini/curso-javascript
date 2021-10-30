function troco() {
    var prod = String(prompt('Qual é o seu produto?'))
    var preço = Number.parseFloat(prompt('Qual valor do seu produto?'))
    var dinheiro = Number.parseFloat(prompt('Qual valor será pago pelo produto?'))
    var troco = dinheiro - preço

alert(`Você comprou um ${prod} que custou R$ ${preço} reais.
Foi pago em dinheiro R$ ${dinheiro} reais e o seu troco é R$ ${troco} reais
Volte Sempre!`)
}