# Lógica Binária

## Valores Lógicos

Um valor lógico representa uma resposta à uma pergunta que nós fazemos ao computador.
A resposta pode ser `sim` ou `não`.

O computador é meio estúpido quando o assunto é responder perguntas básicas.
Vamos comparar a resposta de um humano com a de um computador.
Se eu perguntar para você: "22 é maior do que 22?", você poderia responder
"22 é igual a 22". Mas se fizermos a mesma pergunta para um computador
(dentro de nosso programa), ele vai responder simplesmente: "Não".

### Valores Lógicos em Javascript

Em javascript, esse `sim` e `não` são representados por `true` e `false`, respectivamente.

## Trabalhando Com Valores Lógicos

Em programação, podemos obter valores lógicos das seguintes maneiras:

* Utilizando o valor literal

  * ```javascript
       const podeTirarPassaporte = true
    ```

* Utilizando uma expressão de comparação

  * ```javascript
    const idade = 18
    const podeTirarPassaporte = idade >= 18
    ```

  * Nesse caso a expressão `idade >= 18` resultará em `true` (_verdadeiro, sim_)
    pois `18` (que o valor da variável `idade`) é igual a `18`.

* Utilizando **operadores lógicos** (isso é explicado mais abaixo)

  * ```javascript
    const idade = 16
    const emancipado = true
    const podeTirarPassaporte = idade > 17 || emancipado

  * Nesse caso a variável `podeTirarPassaporte` terá o valor `true`.
    A idade (`16`) **não** é maior que `17`, **porém** `emancipado` é `true`.

## Expressões de comparação

Expressões de comparação resultam em valores lógicos (`true` ou `false`).

### Maior que

Essa expressão resulta em um valor verdadeiro se o primeiro operando é
**maior do que** o segundo.

#### Exemplo em javascript (>)

Em javascript, esse operador é `>`.

```javascript
const temperaturaEmCelsius = 25
const aguaEstadoLiquido = temperaturaEmCelsius > 0
/*
Podemos ler o código acima da seguinte maneira:
A agua está no estado líquido se a temperatura é maior do que zero.
(Nesse exemplo, o valor é true, pois a temperatura é de 25 graus)
*/
```

### Maior ou igual

Essa expressão resulta em um valor verdadeiro se o primeiro operando é
**maior do que ou igual a**o segundo.

#### Exemplo em javascript (>=)

Em javascript, esse operador é `>=`.

```javascript
const idade = 18
const maiorDeIdade = idade >= 18
/*
Podemos ler o código acima da seguinte maneira:
A pessoa é maior de idade se tiver 18 anos OU MAIS.
(Nesse exemplo, o valor é true, pois a idade é IGUAL a 18)
*/
```

### Menor que

Essa expressão resulta em um valor verdadeiro quando o primeiro operando é
**menor do que** o segundo.

#### Exemplo em javascript (<)

Em javascript, esse operador é `<`.

```javascript
const temperaturaEmCelsius = 25
const aguaEstadoSolido = temperaturaEmCelsius < 0
/*
Podemos ler o código acima da seguinte maneira:
A agua está no estado sólido se a temperatura for MENOR do que zero.
(Nesse exemplo, o valor é false, pois a temperatura (25) é maior do que zero)
*/
```

### Menor ou igual a

Essa expressão resulta em um valor verdadeiro se o primeiro operando é
**menor ou igual a**o segundo.

#### Exemplo em javascript (<=)

Em javascript, esse operador é `<=`.

```javascript
const temperaturaEmCelsius = 25
const aguaEstadoSolido = temperaturaEmCelsius <= 0
/*
Podemos ler o código acima da seguinte maneira:
A agua está no estado sólido se a temperatura é MENOR OU IGUAL A zero.
(Nesse exemplo, o valor é false, pois a temperatura é de 25 graus)
*/
```

### Igual a

Essa expressão resulta em um valor verdadeiro se o primeiro operando é
**igual a**o segundo.

#### Exemplo em javascript (==)

Em javascript, esse operador é `==`.

```javascript
const velocidade = 0
const veiculoParado = velocidade == 0
/*
Podemos ler o código acima da seguinte maneira:
O veiculo está parado se sua velocidade É IGUAL A zero.
(Nesse exemplo o valor é true, pois a velocidade (0) é igual a 0)
*/
```

### Diferente de

Essa expressão resulta em um valor verdadeiro se o primeiro operando é
**diferente do** segundo.

#### Exemplo em javascript (!=)

Em javascript, esse operador é `!=`.

```javascript
const velocidadeEmKmH = -5
const veiculoEmMovimento = velocidadeEmKmH != 0
/*
Podemos ler o código acima da seguinte maneira:
O veículo está em movimento se sua velocidade for DIFERENTE DE zero.
(Nesse exemplo o resultado é true, pois o veículo está andando a menos cinco km/h,
ou seja, está andando de ré, mas não está parado.
*/
```

## Operadores Lógicos

Existem 2 tipos de operadores lógicos. **Operadores binários** e **operadores unários**.

### Operadores Lógicos Binários

Os operadores binários possuiem esse nome pois trabalham com dois ou mais operandos.

#### Operador AND (e)

O operador **AND** resulta em um valor **verdadeiro** somente se os **todos**
os operandos **são verdadeiros**. Para todas as outras possibilidades,
o operador **AND** resulta em **falso**.

##### Exemplo em javascript (&&)

Em javascript, o operador **AND** é representado por dois _e comerciais_: `&&`.

```javascript
const filhosNaEscola = true // Os filhos estão na escola
const baixaRenda = true // Família de baixa renda

const podeTerBolsaFamilia = filhosNaEscola && baixaRenda
/*
O código acima pode ser lido da seguinte forma:
para poder ter bolsa família a pessoa precisa ter os filhos na escola E possuir
baixa renda.(Nesse caso o resultado é true, pois a pessoa possui os filhos na
escola E tem baixa renda)
*/
```

#### Operador OR (ou)

O operador **OR** resulta em um valor **verdadeiro** se **qualquer** um dos
operandos for **verdadeiro**. Para todas as outras possibilidades, o operador
**OR** resulta em **falso**.

##### Exemplo em javascript (||)

Em javascript, o operador **OR** é representado por dois _pipes_: `||`.

```javascript
const idade = 16 // Possui 16 anos
const emancipado = true // É emancipado

const podeTirarPassaporte = idade >= 18 || emancipado
/*
O código acima pode ser lido da seguinte forma:
Para poder tirar passaporte é preciso ser maior de idade OU ser emancipado.
(Nesse exemplo o resultado é true, pois a pessoa NÃO é maior de idade, MAS É emancipada)
*/
```

### Operador Lógico Unário

O operador unário tem esse nome porque trabalha somente com um operando.
Existe apenas um operador lógico unário, ele se chama **operador de negação**
ou simplesmente **operador "NOT"**.

#### Operador NOT

O operador **NOT** resulta no valor invertido do seu operando.

> ### Retornar Valores
>
> Escrevi que o operador NOT **resulta** no valor **invertido** do operando
para deixar claro que ele **não altera** o valor de uma variável, ele somente
**retorna** o valor invertido. Veremos o que significa _retornar um valor_
mais ao longo do curso.

Para uma variável que possui o valor `true`, se a **negarmos**, o resultado
dessa negação será `false`. E para uma variável que possui o valor `false`,
se a **negarmos**, o resultado dessa negação será `true`.

#### Exemplo em javascript (!)

Em javascript esse operador é escrito usando o ponto de exclamação: "`!`".

```javascript
const filhosNaEscola = true // Os filhos estão cadastrados em uma escola
const pagaImpostoDeRenda = false // não paga imposto de renda

const podeTerBolsaFamilia = filhosNaEscola && !pagaImpostoDeRenda
/*
O código acima pode ser lido da seguinte forma:
Para poder ter bolsa família tem que ter os filhos na escolas e NÃO pagar
imposto de renda (devido a renda ser baixa).
*/
```

## Tabela Verdade Dos Operadores Lógicos

Para você ter uma referência de como os operadores lógicos funcionam,
leia a tabela abaixo.
As colunas **X** e **Y** representam valores (operandos).
A coluna **Expresão** é um exemplo de expressão em javascript.

> ### Valores Literais e Expressões
>
> Valores literais `true` e `false` podem ser substituídos por expressões de
comparação. Ex.: `18 > 17` vai resultar em `true`, `20 < 19` resulta em `false`.

| Operador | X | Y | Expressão | Resultado |
|-|-|-|-|-|
| AND | `false` | `false` | `false && false` | `false` |
| AND | `false` | `true` | `false && true` | `false` |
| AND | `true` | `false` | `true && false` | `false` |
| AND | `true` | `true` | `true && true` | `true` |
| OR | `false` | `false` | `false \|\| false` | `false` |
| OR | `false` | `true` | `false \|\| true` | `true` |
| OR | `true` | `false` | `true \|\| false` | `true` |
| OR | `true` | `true` | `true \|\| true` | `true` |
| NOT | `false` | | `!false` | `true` |
| NOT | `true` | | `!true` | `false` |

## Exemplo de uso

Segue abaixo um exemplo onde utilizamos valores e expressões lógicas:

```javascript
v1 = true
v2 = false
v3 = v1 || v2
```

Agora o mesmo exemplo, porém com a expressão lógica resolvida.

```javascript
v1 = true
v2 = false
v3 = true
```

### Explicação

`v1` recebe o valor `true`, então o valor de `v1` é simplesmente `true`.
O mesmo acontece com `v2`, recebe o valor `false` e por isso seu valor é `false`.
`v3` ao invés de receber o valor literal (`false` ou `true`), recebe uma expressão lógica `OU` (representado por `||` em javascript),
essa expressão é avaliada e se transforma em um resultado e esse resultado é o que `v3` vai receber.
A expressão em questão é `v1 || v2`. `v1` contem o valor `true` (previamente definido nas linhas acima), `v2` contem o valor `false`.
Logo, a expressão vira `true || false`. Sabemos que `true OU false` é igual a `true`. Então `v3` recebe `true`.

### Exercício

Responda qual o valor que cada `v` (`v1, v2, v3`) recebe.

```javascript
v1 = true
v2 = false
v3 = !v1
v4 = !v2
v5 = 18 > 19
v6 = 18 == 18
v7 = 18 != 18
v8 = 18 < 19
v9 = true || false
v10 = true && true
v11 = 18 > 19 || 20 < 18
v12 = 18 == 18 && 17 == 17
v13 = v1 || v2
v14 = v1 && v2
v15 = v2 && 17 == 17 && v1
v16 = !(v2 && 17 == 17 && v1)
```