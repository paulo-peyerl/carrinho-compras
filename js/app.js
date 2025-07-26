let carrinho = [];

function adicionar() {
    let produtos = document.querySelector('#produto').value;
    let quantidadeDeProdutos = document.getElementById('quantidade').value;

    let item = {
        produto: produtos,
        quantidade: quantidadeDeProdutos
    };
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
        produtoEl.innerHTML = `<span class="texto-azul">${item.quantidade}X</span> ${nome} <span class="texto-azul">R$${preco}</span>`
        
        lista.appendChild(produtoEl);

        total += preco * Number(item.quantidade);

        document.getElementById('valor-total').textContent = `R$${total}`;
    })

}