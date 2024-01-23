class Atletas {
  constructor(nome, idade, peso, altura, notas){
       this.nome = nome;
       this.idade = idade;
       this.peso = peso;
       this.altura = altura;
       this.notas = notas;
  }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
  }
  calculaIMC(){
    let imc = this.peso / (this.altura * this.altura)
    return imc;
  }
  calculaMediaValida(){
    let soma = this.notas.filter(nota => nota >= 0 && nota <= 10)
    let calculo = soma.reduce((a, b) => a + b, 0) 
    return calculo / soma.length
  }
  obterNomeAtleta(){
    return `${this.nome}`
  }
  obtemIdadeAtleta(){
    return `${idade}`
  }
  obterPesoAtleta(){
    return `${this.peso}`
  }
  obterAltura(){
    return `${this.altura}`
  }
  obterNotasAtleta(){
    return this.notas.join(`, `)
  }
  obterCategoria(){
    return `${this.calculaCategoria()}`
  }
  obtemIMC(){
    return `${this.calculaIMC()}`
  }
  obterMediaValida(){
    return `${this.calculaMediaValida()}`
  }
}
 let atleta = new Atletas("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
    console.log(`Nome: ${atleta.nome}`)
    console.log(`Idade: ${atleta.idade}`)
    console.log(`Peso: ${atleta.obterPesoAtleta()}`)
    console.log(`Altura: ${atleta.obterAltura()}`)
    console.log(`Notas: ${atleta.obterNotasAtleta()}`)
    console.log(`Categoria: ${atleta.calculaCategoria()}`)
    console.log(`IMC: ${atleta.obtemIMC()}`)
    console.log(`Média válida: ${atleta.obterMediaValida()}`)
    console.log(`\n`)



 
