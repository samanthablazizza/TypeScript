interface Produto{
    tipo: string,
    cor: string,
    valor: number
}

const Produto1 : Produto = {
    tipo: "Notebook",
    cor: "Chumbo",
    valor: 2750.99
  }

const Produto2 : Produto = {
    tipo: "Celular",
    cor: "Violeta",
    valor: 1899.9
  }
  
const listaProdutos : Produto[] = [Produto1, Produto2];
console.log(...listaProdutos);
