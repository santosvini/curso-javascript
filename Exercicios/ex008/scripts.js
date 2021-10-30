function calc() {
    var num = Number(prompt('Digite um número: '))

    var resp = document.getElementById('res')
    resp.innerHTML = `<p>O número a ser analisado é o <strong>${num}</strong>
    </p><hr>`
    resp.innerHTML += `<p> O seu valor absoluto é ${Math.abs(num)}</p>`
    resp.innerHTML += `<p> A sua parte inteira é ${Math.trunc(num)}</p>`
    resp.innerHTML += `<p> O valor inteiro mais próximo é ${Math.round(num)}<p>`
    resp.innerHTML += `<p> A sua raíz quadrada é ${Math.sqrt(num)}<p>`
    resp.innerHTML += `<p> A sua raíz cúbica é ${Math.cbrt(num)}<p>`
    resp.innerHTML += `<p> O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}</p>`
    resp.innerHTML += `<p> O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}</p>`
}