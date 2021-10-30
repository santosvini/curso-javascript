function convert() {
    var dist = Number.parseFloat(prompt('Digite uma distância em metros (m)').replace('.' , ','))

    var conv = document.getElementById('resultado')
    conv.innerHTML = `<p><strong>A distância de ${dist} metros, corresponde a...</strong><br>`
    conv.innerHTML += `<p>${dist/1000} Quilômetros(km)`.toLocaleString("pt-BR").replace('.' , ',').fixed(3)
    conv.innerHTML += `<p>${dist/100} Hectômetros(hm)`.toLocaleString("pt-BR").replace('.' , ',').fixed(3)
    conv.innerHTML += `<p>${dist/10} Decâmetros(dam)`.toLocaleString("pt-BR").replace('.' , ',').fixed(3)
    conv.innerHTML += `<p>${dist*10} decímetros(dm)`.toLocaleString("pt-BR").replace('.' , ',').fixed(3)
    conv.innerHTML += `<p>${dist*100} Centímetros(cm)`.toLocaleString("pt-BR").replace('.' , ',').fixed(3)
    conv.innerHTML += `<p>${dist*1000} Milímetros(mm)`.toLocaleString("pt-BR").replace('.' , ',').fixed(3)
}