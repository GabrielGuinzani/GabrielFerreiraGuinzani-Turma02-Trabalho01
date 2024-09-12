const Biblioteca = require('../src/Trabalho01Turma02.js');

describe('Biblioteca Class', () => {
    let biblioteca;

    beforeEach(() => {
        biblioteca = new Biblioteca();
    });

    test('deve inicializar com listas de membros e livros vazias', () => {
        expect(biblioteca.listarLivros()).toEqual([]);
        expect(biblioteca.listarMembros()).toEqual([]);
    });

    test('Deve adicionar um livro corretamente', () => {
        const livro = { id: 1, titulo: 'Titulo Livro Teste', autor: 'Nome Autor', genero: 'Genero Teste', ano: 2024 };
        biblioteca.adicionarLivro(livro);
        expect(biblioteca.listarLivros()).toContain(livro);
    });

    test('Deve remover um livro por ID especificado', () => {
        const livro = { id: 1, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024 };
        biblioteca.adicionarLivro(livro);
        biblioteca.removerLivro(1);
        expect(biblioteca.buscarLivroPorId(1)).toBeUndefined();
    });

    test('Deve Buscar um Livro por ID especificado', () => {
        const livro = { id: 458, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024 };
        biblioteca.adicionarLivro(livro);
        expect(biblioteca.buscarLivroPorId(458)).toEqual(livro);
    });

    test('Deve buscar um Livro por Título', () => {
        const livro = { id: 48, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024 };
        biblioteca.adicionarLivro(livro);
        expect(biblioteca.buscarLivroPorTitulo('Asas No Coliseu')).toContain(livro);
    });

    test('Deve Listar todos os livros', () => {
        const livro1 = { id: 48, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024 };
        const livro2 = { id: 2, titulo: 'Dracula', autor: 'Bram Stoker', genero: 'Infantil', ano: 2024 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        expect(biblioteca.listarLivros()).toEqual([livro1, livro2]);
    });

    test('Deve adicionar um membro corretamente', () => {
        const membro = { id: 1, nome: 'Sr Teste' };
        biblioteca.adicionarMembro(membro);
        expect(biblioteca.listarMembros()).toContain(membro);
    });

    test('Deve remover um Membro por ID especificado', () => {
        const membro = { id: 1, nome: 'Sr Teste' , cpf: '11222222222'};
        biblioteca.adicionarMembro(membro);
        biblioteca.removerMembro(1);
        expect(biblioteca.buscarMembroPorId(1)).toBeUndefined();
    });

    test('Deve Buscar um Membro por ID especificado', () => {
        const membro = { id: 1, nome: 'Sr Teste' , cpf: '11222222222'};
        biblioteca.adicionarMembro(membro);
        expect(biblioteca.buscarMembroPorId(1)).toEqual(membro);
    });

    test('Deve emprestar e devolver Livros corretamente', () => {
        const livro = { id: 1, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024, emprestado : false };
        const membro = { id: 1, nome: 'Sr Teste' , cpf: '11222222222'};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarMembro(membro);

        expect(biblioteca.emprestarLivro(1, 1)).toBe(true);
        expect(biblioteca.buscarLivroPorId(1).emprestado).toBe(true);

        expect(biblioteca.devolverLivro(1)).toBe(true);
        expect(biblioteca.buscarLivroPorId(1).emprestado).toBe(false);
    });

    
    test('Deve não permitir emprestar livros já emprestados', () => {
        const livro = { id: 1, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024, emprestado : true };
        const membro = { id: 1, nome: 'Sr Teste' , cpf: '11222222222'};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarMembro(membro);

        expect(biblioteca.emprestarLivro(1, 1)).toBe(false);
        expect(biblioteca.buscarLivroPorId(1).emprestado).toBe(true);

    });

    test('Deve não permitir devolver livros não emprestados', () => {
        const livro = { id: 1, titulo: 'Asas No Coliseu', autor: 'Ferreira', genero: 'Nerd', ano: 2024, emprestado : false };
        const membro = { id: 1, nome: 'Sr Teste' , cpf: '11222222222'};
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarMembro(membro);

        expect(biblioteca.devolverLivro(1)).toBe(false);
        expect(biblioteca.buscarLivroPorId(1).emprestado).toBe(false);

    });

    test('Deve Listar Livros Emprestados e Disponíveis', () => {
        const livro1 = { id: 1, titulo: 'Livro Emprestado', emprestado: true };
        const livro2 = { id: 2, titulo: 'Livro Disponível', emprestado: false };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);

        expect(biblioteca.listarLivrosEmprestados()).toContain(livro1);
        expect(biblioteca.listarLivrosDisponiveis()).toContain(livro2);
    });

    test('Deve contar Livros e Membros Corretamente', () => {
        const livro = { id: 1, titulo: 'Book Title' };
        const livro2 = { id: 2, titulo: 'Livro Disponível', emprestado: false };
        const membro = { id: 1, nome: 'Member Name' };
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarMembro(membro);

        expect(biblioteca.contarLivros()).toBe(2);
        expect(biblioteca.contarMembros()).toBe(1);
    });

    test('Deve listar livros por autor e por Genero', () => {
        const livro1 = { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', genero: 'Romance' };
        const livro2 = { id: 2, titulo: 'Frankenstein', autor: 'Mary Shelley', genero: 'Terror' };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);

        expect(biblioteca.listarLivrosPorAutor('Machado de Assis')).toContain(livro1);
        expect(biblioteca.listarLivrosPorAutor('Mary Shelley')).toContain(livro2);
        
        expect(biblioteca.listarLivrosPorGenero('Romance')).toEqual([livro1]);
        expect(biblioteca.listarLivrosPorGenero('Terror')).toEqual([livro2]);
    });

    test('Deve atualizar corretamente informações dos livros', () => {
        const livro = { id: 1, titulo: 'Titulo Antigo' };
        biblioteca.adicionarLivro(livro);
        biblioteca.atualizarInformacaoLivro(1, { titulo: 'Titulo Novo', ano: 2024 });

        expect(biblioteca.buscarLivroPorId(1)).toEqual({ id: 1, titulo: 'Titulo Novo', ano: 2024 });
    });

    test('Deve listar os Livros por ano corretamente', () => {
        const livro1 = { id: 1, titulo: 'livro 1', ano: 2024 };
        const livro2 = { id: 2, titulo: 'livro 2', ano: 2023 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);

        expect(biblioteca.listarLivrosPorAno(2024)).toContain(livro1);
        expect(biblioteca.listarLivrosPorAno(2023)).toContain(livro2);
    });
});
