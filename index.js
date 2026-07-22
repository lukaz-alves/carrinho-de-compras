let carrinho = [];

carrinho.push({id: 1, nome: "Arroz", preco: 20.00, quantidade: 2});
carrinho.push({id: 2, nome: "Feijão", preco: 6.50, quantidade: 4});
carrinho.push({id: 3, nome: "Açucar", preco: 3.20, quantidade: 5});

console.log('Adicionando itens no carrinho:');
console.log(carrinho);

carrinho = carrinho.filter(item => item.id !==3);

console.log('Removendo um intem do carrinho:');
console.log(carrinho);