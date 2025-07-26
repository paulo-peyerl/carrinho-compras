let carrinho = [];

function adicionar() {
    let produtos = document.querySelector('#produto').value;
    let quantidadeDeProdutos = document.getElementById('quantidade').value;

    let item = {
        produto: produtos,
        quantidade: quantidadeDeProdutos
    };
    carrinho.push(item);
}