# Estudo de JavaScript - Curso em Vídeo

## Interações básicas com usuário
~~~javascript
- window.alert
- window.prompt
- window.confirm
- document.write

## Conversão para Inteiro
 - Number.parserInt()

## Conversão para Real
- Number.parserFloat()

## Conversão para String
 - .toString() ou String()
 ~~~

## Interações com a a página

~~~javascript
- var.length // qntdade de caracteres de uma string
- var.toUpperCase() // tudo p/ MAIUSCULAS
- var.toLowerCase() // tudo p/ minusculo

- .toFixed() // quantidade de casas após a (,)
- .replace('.', ',') // troca de ponto para (,)
- .toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
  // String por localização / Monetização
~~~

## Operadores Lógicos
- ! -> negação (true/false) ou **NOT**
- && -> conjunção ou **AND**
- || -> disjunção ou **OR**

## Comparação
- Igual (==) = Retorna TRUE caso os operandos sejam iguais.

- Não igual (!=) = Retorna TRUE caso os operandos não sejam iguais.

- Estritamente igual (===) = Retorna TRUE caso os operandos sejam iguais e do mesmo tipo.

- Estritamente não igual (!==) = Retorna TRUE caso os operandos não sejam iguais e/ou não sejam do mesmo tipo.

- Maior que (>) = Retorna TRUE caso o operando da esquerda seja maior que o da direita.

- Maior que ou igual (>=) = Retorna TRUE caso o operando da esquerda seja maior ou igual ao da direita.

- Menor que (<) = Retorna TRUE caso o operando da esquerda seja menor que o da direita.

- Menor que ou igual (<=) = Retorna TRUE caso o operando da esquerda seja menor ou igual ao da direita.

## Ternários
- (?) -> ternario true
- : -> ternario false

Ex: condicao ? valor1 : valor2;

## Usando a DOM
### Há 5 métodos de acesso ao DOM -> (Marca, ID, Nome, Classe e Seletor)

~~~javascript
- Marca = getElementsByTagName()
- ID = getElementByID()
- Nome = getElementsByName()
- Classe = getElementsByClassName()
- Selector = querySelector()/querySelectorAll()
~~~

- O id é representado pela (#)
- E o class pelo (.)

- Usar o addEventListener para escutar qualquer objeto da DOM.

~~~javascript
var.addEventListener('click', clicar);
~~~

- Usar o style.background para alterar o estilo do tag ou seletor em questão.

~~~javascript
var.style.background = 'orange';
~~~

- Utilizar o innerText e innerHTML para manipulação do texto

~~~javascript
var.innerText = 'Estou aguardando'
var.innerHTML = 'Vou mudar a escrita'
~~~

