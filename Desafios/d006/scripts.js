function temp() {
    var celsius = prompt("Digite a temperatura em graus °C (Celsius)".toLocaleString("pt-BR").replace('.' , ',').fixed(1))

    var resp = document.getElementById('tmp')
    resp.innerHTML = `<p><strong>A temperatura de ${celsius}°C, corresponde a......`
    resp.innerHTML += (`<p>${(celsius + 273.15)}°K (Kelvin)`.toLocaleString("pt-BR").replace('.' , ',').fixed(2))
    resp.innerHTML += (`<p>${(celsius * 9/5) + 32}°F (Fahrenheit)`.toLocaleString("pt-BR").replace('.' , ',').fixed(2))

}