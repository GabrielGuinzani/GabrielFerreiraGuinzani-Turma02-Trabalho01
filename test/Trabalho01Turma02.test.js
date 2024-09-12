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

});
