var produtos = [
    {
    nome: "Produto 1",
    descricao: "Bola de basquete",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 580,00"
    },
    {
    nome: "Produto 2",
    descricao: "Halteres de 5kg",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 58,99"
    },
    {
    nome: "Produto 3",
    descricao: "Tênis de basquete",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 769,99"
    },
    {
    nome: "Produto 4",
    descricao: "Bola de vôlei",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 350,00"
    },
    {
    nome: "Produto 5",
    descricao: "Boné",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 30,00"
    },
    {
    nome: "Produto 6",
    descricao: "Garrafa térmica",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 26.99"
    },
    {
    nome: "Produto 7",
    descricao: "colchonete",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 22,50"
    },
    {
    nome: "Produto 8",
    descricao: "Whey protein",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 136,00"
    },
    {
    nome: "Produto 9",
    descricao: "Shorts esportivo",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 50,00"
    },
    {
    nome: "Produto 10",
    descricao: "Caixa com 7 barrinhas de proteina",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 11,00"
    },
    {
    nome: "Produto 11",
    descricao: "Camisa térmica",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 25,00"
    },
    {
    nome: "Produto 12",
    descricao: "Tenis da Nike - corrida",
    imagem: "https://via.placeholder.com/150",
    valor: "R$ 300,50"
    },
];

var conteudoPrincipal = document.getElementById('conteudo-principal');

for (var produto of produtos) {
    
    var conteudoProduto = document.createElement('div')
    conteudoProduto.className = "conteudo-produto"
    
    var nomeProduto = document.createElement('h2')
    nomeProduto.textContent = produto.nome
    conteudoProduto.appendChild(nomeProduto)

    
    var imagem = document.createElement('img')
    imagem.src = produto.imagem
    conteudoProduto.appendChild(imagem)
    
    var descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    conteudoProduto.appendChild(descricaoProduto)

    var valorProduto = document.createElement('p')
    valorProduto.textContent = produto.valor
    conteudoProduto.appendChild(valorProduto)
 
 
    var botoes = document.createElement('div')
    botoes.className = "btn"
    conteudoProduto.appendChild(botoes)
 
    var botaoComprar = document.createElement('button')
    botaoComprar.textContent = "Comprar"
    botoes.appendChild(botaoComprar)
 
 
    conteudoProduto.appendChild(botoes)
 
    conteudoPrincipal.appendChild(conteudoProduto)
}