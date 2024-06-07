var pix = {
    chavePix: '(11) 98546-3307',
    valorTransferencia: 300.00,
    dataTransacao: '24/06/2024',
    descricaoPagamento: 'Pagamentos das despesas',
    pagador: {
    nome: 'Samuel Barbosa',
    documento: '53.764.986-2',
    },
    recebedor: {
    nome: 'Daniel Duarte',
    documento: '12.543.657-1',
    },
    historicoTransacoes: [
        {
            data: '12/02/2024',
            valor: 120.50,
            descricao: 'Conta de Luz'
        },
        {
            data:'12/02/2024',
            valor: 102.05,
            descricao: 'Conta de Água'
        },
        {
            data: '12/03/2024',
            valor: 98.00,
            descricao: 'Conta de Telefone'
        },
    ]
}

console.log(pix)
