// banco.test.js
const Banco = require('../src/banco');

describe('Banco', () => {
    let conta1, conta2;

    beforeEach(() => {
        conta1 = new Banco('Conta 1', 1000);
        conta2 = new Banco('Conta 2', 500);
    });

    test('deve inicializar com saldo correto', () => {
        expect(conta1.obterSaldo()).toBe(1000);
    });

    test('deve depositar dinheiro corretamente', () => {
        conta1.depositar(500);
        expect(conta1.obterSaldo()).toBe(1500);
    });

    test('deve sacar dinheiro corretamente', () => {
        conta1.sacar(200);
        expect(conta1.obterSaldo()).toBe(800);
    });

    test('deve lançar erro ao sacar mais do que o saldo', () => {
        expect(() => conta1.sacar(1200)).toThrow('Saldo insuficiente');
    });

    test('deve transferir dinheiro para outra conta corretamente', () => {
        conta1.transferir(300, conta2);
        expect(conta1.obterSaldo()).toBe(700);
        expect(conta2.obterSaldo()).toBe(800);
        expect(conta1.obterHistorico().find(transacao => transacao.tipo === 'Transferência')).toStrictEqual({ tipo: 'Transferência', valor:300, destino: 'Conta 2' })
        expect(conta1.obterHistorico().find(transacao => transacao.tipo === 'Saque')).toStrictEqual({ tipo: 'Saque', valor:300 })
        expect(conta2.obterHistorico().find(transacao => transacao.tipo === 'Depósito')).toStrictEqual({ tipo: 'Depósito', valor:300 })
    });

    test('deve aplicar juros corretamente', () => {
        conta1.aplicarJuros(5); // 5% de juros
        expect(conta1.obterSaldo()).toBe(1050);
    });

    test('deve pagar uma conta corretamente', () => {
        conta1.pagarConta(100, 'Pagamento de conta de luz');
        expect(conta1.obterSaldo()).toBe(900);
        expect(conta1.obterHistorico().find(transacao => transacao.tipo === 'Pagamento')).toEqual({
            tipo: 'Pagamento',
            valor: 100,
            descricao: 'Pagamento de conta de luz'
        });
    });

    test('deve obter o total depositado corretamente', () => {
        conta1.depositar(200);
        conta1.depositar(300);
        expect(conta1.obterTotalDepositado()).toBe(500);
    });

    test('deve definir e verificar limite de saque', () => {
        conta1.definirLimiteDeSaque(500);
        expect(conta1.verificarLimiteDeSaque(400)).toBe(true);
        expect(() => conta1.verificarLimiteDeSaque(600)).toThrow('Saque acima do limite permitido');
    });

    test('deve obter o histórico de transações corretamente', () => {
        conta1.depositar(200);
        conta1.sacar(100);
        const historicoEsperado = [
            { tipo: 'Depósito', valor: 200 },
            { tipo: 'Saque', valor: 100 }
        ];
        expect(conta1.obterHistorico()).toEqual(historicoEsperado);
    });
});
