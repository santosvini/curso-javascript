const preco = () => {
  const antes = parseFloat(prompt('Qual era o preço anterior do produto?'))
  const depois = parseFloat(prompt('Qual era o preço atual do produto?'))
  var resp = document.getElementById('resp')

  resp.innerHTML = `<h2><p><strong>Analisando os valores informados</strong></p>
  </h2>`
  resp.innerHTML += `O produto custava R$ ${antes.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} reais e agora custa R$ ${depois.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} reais`

  
  if (depois < antes) {
    const valor = antes - depois
    const percent =- (((antes / depois) -1) * 100)
    resp.innerHTML += `<p>Hoje o produto está mais barato.</p>`
    resp.innerHTML += `<p> o preço caiu ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} reais em relação ao preço anterior.</p>`
    resp.innerHTML += `<p>Uma variação de ${parseFloat(percent).toFixed(2)}% para baixo.</p>`
    } else if (depois > antes){
        const valor = depois - antes
        const percent = (((depois / antes) -1) * 100)
        resp.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        resp.innerHTML += `<p>O preço subiu ${valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} reais em relação ao preço anterior.</p>`
        resp.innerHTML += `<p>Uma variação de ${parseFloat(percent).toFixed(2)}% para cima.
        </p>`
  }
}