let carrinho = [];

let produtos = [
    {id: 1, nome: "Arroz", preco: 20.00, quantidade: 2},
    {id: 2, nome: "Feijão", preco: 6.50, quantidade: 4},
    {id: 3, nome: "Açucar", preco: 3.20, quantidade: 5}
];

carrinho.push(...produtos);

console.log('Adicionando itens no carrinho:');
console.log(carrinho);

carrinho = carrinho.filter(item => item.id !==3);

console.log('Removendo um intem do carrinho:');
console.log(carrinho);

const produto = produtos.find(p => p.id === 3);

carrinho.push({
    id: produto.id,
    nome: produto.nome,
    preco: produto.preco,
    quantidade: 5
});

console.log('Carrinho após readicionar o açúcar:');
console.log(carrinho);