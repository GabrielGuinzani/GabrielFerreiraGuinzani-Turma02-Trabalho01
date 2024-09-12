Aqui está uma versão adaptada do README com as informações solicitadas:

---

# JEST Unit Tests

Este projeto é parte do trabalho desenvolvido para a disciplina de **Automação de Testes**, onde são criados e executados testes unitários utilizando o framework Jest.

## GitHub Actions

[![Build and Tests](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/ugioni/unit-tests-jest/actions/workflows/node.js.yml)

## SonarCloud

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=ugioni_unit-tests-jest&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=ugioni_unit-tests-jest)

## Getting Started

Para executar este projeto, siga os passos abaixo:

1. Instale [Node JS](https://nodejs.org/) (versão >= 18.x)
1. Execute `npm install` para instalar todas as dependências do projeto
1. Execute `npm run test` para rodar a suíte completa de testes
1. Execute `npm run coverage` para rodar a suíte completa de testes com cobertura de código

Os artefatos de execução podem ser encontrados em `./coverage`. Para removê-los, execute `npm run clean`.

## Sobre os Testes

Os testes unitários neste projeto cobrem as principais funcionalidades da classe `Biblioteca`, como:
- **Manipulação de Livros**: Adicionar, remover, buscar, listar, atualizar informações de livros e verificar a disponibilidade ou empréstimo.
- **Manipulação de Membros**: Adicionar, remover, buscar e listar membros.
- **Empréstimos**: Funções para gerenciar o empréstimo e devolução de livros.
- **Outras Funcionalidades**: Como listar livros por autor, gênero e ano de publicação, além de gerar contagens de livros e membros.

Essa versão inclui as informações básicas sobre os testes e a natureza acadêmica do projeto.