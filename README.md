Bom dia/Boa Noite

Vou estar explicando como funciona o código que eu fiz. Estarei tentado deixar o mais claro possivel.

º class Atletas - Definição de classe.
º constructor(nome, idade, peso, altura, notas){
       this.nome = nome;
       this.idade = idade;
       this.peso = peso;
       this.altura = altura;
       this.notas = notas;
  } 
- Definição do método constructor(), para a aplicação de funções.
º  calculaCategoria() - A etapa em que utilizei o método "if/else" para calcular a categoria e definir a categoria do atleta.
º  calculaIMC() - Calculo do IMC. Sendo: this.peso / (this.altura * this.altura), na função. 
º  calculaMediaValida() - Começei primeiro definindo 2 variaveis para no final obter a divisão, sendo elas "soma", "calculo". Com o return calculo / soma.length, no caso seria a quantidade de números divididos pelos números já atuálizados. 
º  obterNomeAtleta() - Obter o nome do atleta e o retorno.
º  obtemIdadeAtleta() - Obter a idade do atleta e o retorno.
º  obterPesoAtleta() - Obtero peso do atleta e o retorno.
º  obterAltura() - Obter a altura do atleta e o retorno. 
Obs: No enunciado não estava para por a altura porém no exemplo de saída estava, então decidi colocar mesmo assim.
º  obterNotasAtleta() - Obter notas do atleta e o retorno.
º  obterCategoria() - Obter categoria e o retorno.
º  obtemIMC() - Obter o IMC e o retorno.
º  obterMediaValida() - Obter a média e o retorno.
º  Definição da variável "atleta" e os "console.log()"
