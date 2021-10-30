function inicio() {
    let nome = prompt('Qual é o seu nome?')
    let res = document.getElementById('resultado')
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! 
    É um prazer conhecer você! &#x1F596;</p>`
}