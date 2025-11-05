// let frutas = ["maçã", "banana", "laranja", "uva"];
// frutas.unshift("goiaba");
// frutas.push("goiaba");
// frutas.pop();
// frutas.pop();
// frutas.shift();

const carrinhoCompra = [
  {
    nome: "Coxinha",
    preco: 6.0,
    emEstoque: true,
  },
  {
    nome: "Esfiha",
    preco: 2.0,
    emEstoque: true,
  },
  {
    nome: "Pizza",
    preco: 36.0,
    emEstoque: true,
  },
];

function calcularTotalPreco(carrinho = []) {
  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    total = total + carrinho[i].preco;
  }
  return total;
}

function formatarValorEmReais(valor) {
  return "R$" + valor.toFixed(2);
}
let valor = calcularTotalPreco(carrinhoCompra);

console.log(formatarValorEmReais(valor));

function imprimirNotaFiscal(carrinho = []) {
  let valorTotal = calcularTotalPreco(carrinho);
  console.log("------Nota fiscal-----");
  for (let i = 0; i < carrinho.length; i++) {
    console.log(`
        Descrição: ${carrinho[i].nome} - ${formatarValorEmReais(
      carrinho[i].preco
    )}
        `);
  }

  console.log(`
        total: ${formatarValorEmReais(valorTotal)}
    `);
    console.log("------------Fim-----------");

}

imprimirNotaFiscal(carrinhoCompra)
 