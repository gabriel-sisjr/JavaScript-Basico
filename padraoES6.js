/**
 * ES = ECMA SCRIPT É UM PADRÃO DE CODIFICAÇÃO (VALE A LEITURA, MAS NAO SE PRENDA A ISSO)
 * VARIAVEIS PODEM SER FUNCOES, SE DECLARADAS DESSE MODO ABAIXO, SENDO O PARENTESES O RECEPTOR DE PARAMETROS
 * O ARROW, É SEMPRE RETORNO, CASO SEJA 1 INSTRUÇÃO APENAS.
 * ARROW FUNCTION (SAO ESSAS FUNÇÕES COM =>), NÃO PRECISAM DE CHAVES/RETURN CASO SEJA 1 INSTRUÇÃO APENAS
 * CASO POSSUA MAIS INSTRUÇÕES, DEVE-SE EXPLICITAR O RETORNO E USAR CHAVES
 */

const variavelQueEFuncaoSemChaves = (valor) => valor;
const variavelQueEFuncaoComChaves = (valor) => {
  // Duas instruções, usar chave.
  valor + 0;
  return valor;
};

console.log(variavelQueEFuncaoSemChaves("x"));
console.log(variavelQueEFuncaoComChaves("y"));
