/**
 * TIPO DA VARIAVEL DINAMICAMENTE ATRIBUIDO
 * DIFERENÇA ENTRE ESCOPOS
 * VAR -> GLOBAL DO ARQUIVO
 * LET -> DE ESCOPO
 * CONST -> CONSTANTE IMUTAVEL
 *
 * NULL E UNDEFINED SÃO COISAS DIFERENTES
 */
const int = 10;
const interpolacao = `o valor é: ${int}`;
var variavelGlobal = 5;
let variavelDeEscopo = 5;
const constantes_imutavel = 5;

/**
 * FUNÇÕES TAMBEM DINAMICAS EM QUESTAO DO RETORNO
 * OS PARAMETROS NÃO PRECISAM SER TIPADOS
 */
function NomeDaFuncao(parametro1) {
  let variavelDaFuncao = 1;
  // CONST SÃO VARIAVEIS DE ESCOPO
  const x = "pode?";
  return parametro1;
}

/**
 * ARRAY É LISTA
 * ARRAY PODE SER CONST, LET OU VAR
 */
let array = [0, "Uma String", { objeto: "x" }, 3, 4, 5];

// =========== LAÇOS DE REPETIÇÃO
// FOR NORMAL
// RETORNA O ELEMENTO DA POSIÇÃO DO LAÇO
// FOR IN OU OF = FOREACH
for (let i = 0; i < array.length; i++) {
  console.log("ELEMENTO -> ", array[i]);
}

// RETORNAR CADA ELEMENTO
// FOR OF
for (let elemento of array) {
  console.log("Elemento -> ", elemento);
}

// RETORNAR CADA INDICE
// FOR IN
for (let indice in array) {
  console.log("Indice -> ", indice);
}

// IGUAL AO PYTHON, RECEBE UMA EXPRESSAO BOOLEANA
let laco = 5;
while (laco >= 0) {
  console.log(laco);
  laco--;
}

// CONDICIONAIS
// SEGUEM O MESMO PRINCIPIO DO PYTHON
let condicinal = false;
let condicional2 = false;
if (condicinal) {
  // CONDICIONAL PRINCIPAL
} else {
  // FLUXO ALTERNATIVO
}

if (condicinal) {
  // CONDICINAL PRINCIPAL
}

if (condicinal) {
  // CONDICINAL PRINCIPAL
} else if (condicional2) {
  // FLUXO ALTERNATIVO DA CONDICINAL1
} else {
  // FLUXO ALTERNATIVO DA CONDICINAL2
}

// SWITCH ELE TESTA DETERMINADO VALOR OU VARIAVEL AFIM DE ENCONTRAR UM CASE QUE SE ENCAIXE
// O VALOR PODE SER QLQER COISA.
let valorSwitch = 1;
switch (valorSwitch) {
  case 0:
    console.log("O valor é 0");
    break;

  case 1:
    console.log("O valor é 1");
    break;

  case 2:
    console.log("O valor é 2");
    break;

  default:
    console.log("Valor default");
    break;
}
