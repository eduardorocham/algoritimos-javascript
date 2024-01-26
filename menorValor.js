const livros = require("./listaLivros");

const menorValor = (arr, posicaoInicial) => {
  let maisBarato = posicaoInicial;

  for (let atual = posicaoInicial; atual < arr.length; atual++) {
    if (arr[atual].preco < arr[maisBarato].preco) {
      maisBarato = atual;
    }
  }

  return maisBarato;
};

module.exports = menorValor;
