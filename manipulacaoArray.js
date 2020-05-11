/**
 * MAP = APLICAR DETERMINADO COMPORTAMENTO/FUNÇÃO PARA CADA ITEM DO ARRAY E RETORNAR UM NOVO COM AS ALTERAÇÕES
 * É POSSIVEL MANIPULAR 3 PARAMETROS NO MAP QUE SÃO: VALUE, INDEX, ARRAY RESPECTIVAMENTE.
 *
 * REDUCE = EXECUTAR UM COMPORTAMENTO/FUNÇÃO PARA CADA ELEMENTO, RETORNANDO 1 VALOR APENAS.
 * É POSSIVEL MANIPULAR 4 PARAMETROS NO REDUCE QUE SÃO: PREVIOUS, CURRENT, CURRENTINDEX, ARRAY RESPECTIVAMENTE (ANTERIOR, ATUAL, INDEXATUAL, ARRAY)
 *
 * FILTER = EXECUTAR UM COMPORTAMENTO/FUNÇÃO PARA CADA ELEMENTO, E RETORNA TODOS QUE PASSAREM NO TESTE IMPLEMENTADO NO COMPORTAMENTO.
 * É POSSIVEL MANIPULAR 3 PARAMETROS NO REDUCE QUE SÃO: VALUE, INDEX, ARRAY RESPECTIVAMENTE.
 *
 * TANTO MAP QUANTO REDUCE E OUTROS METODOS TEM O CONCEITO DE IMUTABILIDADE, OU SEJA, PRESERVAM O DADO ORIGINAL E CRIA UM NOVO.
 */

// Criando o array
const array = [0, 2, 5, 10, 4, 1];

// Atribuição via for normal.
// for (let x = 0; x < array.length; x++) {
//   array[x] *= 2;
// }

// Manipulação sem ES
function multiplicarPorTres(elemento) {
  return elemento * 3;
}
const arrayComFuncao = array.map(function (v) {
  return multiplicarPorTres(v);
});

// Manipulação com ES
const arrayComES6 = array.map((v) => v * 3);

console.log("ARRAY ORIGINAL ->", array);
console.log("ARRAY COM FUNÇÃO ->", arrayComFuncao);
console.log("ARRAY COM ES6 ->", arrayComES6);

// SOMADOR = PREVIOUS VALUE
// VALORATUAL = CURRENT VALUE
const arrayReduce = array.reduce((somador, valorAtual) => valorAtual + somador);
console.log("ARRAY REDUZIDO ->", arrayReduce);

const arrayFilter = array.filter((v) => v < 10);
console.log("ARRAY FILTRADO ->", arrayFilter);
