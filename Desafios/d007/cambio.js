function cambio() {
    let reais = prompt('Quantos R$ você tem na carteira?')

    let dolar = reais / cotacao_usd

    let resp = document.getElementById("saida")
    resp.innerHTML = `<p>Você vai conseguir comprar ${dolar} dólares</p>`.replace('.' , ',').toLocaleString('en-us', {style: 'currency', currency: 'USD'})
}