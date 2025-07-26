let carrinho = [];
document.querySelector('#lista-produtos').innerHTML = 'Nenhum produto no carrinho';
document.getElementById('valor-total').textContent = 'R$0'

function adicionar() {
    let produtos = document.querySelector('#produto').value;
    let quantidadeDeProdutos = document.getElementById('quantidade').value;

    let item = {
        produto: produtos,
        quantidade: quantidadeDeProdutos
    };

    if(quantidadeDeProdutos === '' || quantidadeDeProdutos <= 0) {
        alert('Quantidade inválida. Por favor, insira um número maior que zero.');
    }
    
    carrinho.push(item);

    atualizarCarrinho();
}

function atualizarCarrinho() {
    const lista = document.querySelector('#lista-produtos');
    lista.innerHTML = '';
    
    let total = 0;

    carrinho.forEach(item => {
        const [nome, precoTexto] = item.produto.split('- R$');
        const preco = Number(precoTexto);

        const produtoEl = document.createElement('section');
        produtoEl.className = 'carrinho__produtos__produto';
        produtoEl.innerHTML = `<span class="texto-azul">${item.quantidade}x</span> ${nome} <span class="texto-azul">R$${preco}</span>`
        
        lista.appendChild(produtoEl);

        total += preco * Number(item.quantidade);

        document.getElementById('valor-total').textContent = `R$${total}`;
        document.getElementById('quantidade').value = '';
    })

}

function limpar() {
    carrinho = [];
    const lista = document.querySelector('#lista-produtos');
    lista.innerHTML = 'Nenhum produto no carrinho';
    document.getElementById('valor-total').textContent = 'R$0';
}