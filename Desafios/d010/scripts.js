function bhaskara() {
    var a = (Number(prompt('Qual é o valor de a')))
    var b = (Number(prompt('Qual é o valor de b')))
    var c = (Number(prompt('Qual é o valor de c')))

    var x = ((b**2) - 4*a*c)

    var resp = document.getElementById('saida')

    resp.innerHTML = `<h1><p><strong>Resolvendo Bhaskara</strong></p></h1>`
    resp.innerHTML += `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c}x = 0<strongp>`
    resp.innerHTML += `<p>O cálculo realizado será <strong>\u0394 = ${b}<sup>2</sup> - 4.${a}.${c}</strong></p>`
    resp.innerHTML += `<p>O valor calculado foi <strong><mark>\u0394 = ${x}
    </mark></strong></p>`
}