let amigo = {
  nome: 'Vinicius',
  sexo: 'M',
  peso: 90,
  engordar(p=0) {
    this.peso += p
  }
}

amigo.engordar(5)
console.log(`${amigo.nome} tem ${amigo.peso}kg e o sexo é ${amigo.sexo}`)