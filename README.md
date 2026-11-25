# Blogs API

**Desenvolvedora: Nadijane Souza**

API REST para gerenciamento de conteúdo de blog, desenvolvida com Node.js, Express e MySQL, utilizando Sequelize.

Projeto desenvolvido durante minha formação em desenvolvimento de software na Trybe, com foco em práticas de desenvolvimento backend.

## Tecnologias utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- JWT
- Joi
- Docker

## Funcionalidades

- Cadastro e consulta de usuários.
- Login e autenticação com JWT.
- Cadastro e listagem de categorias.
- Criação e consulta de publicações.
- Pesquisa de publicações.
- Proteção de rotas.

## Estrutura do projeto

- `controllers`: controle das requisições.
- `services`: regras de negócio.
- `models`: modelos do banco de dados.
- `routes`: rotas da API.
- `middlewares`: autenticação e validações.
- `migrations`: estrutura do banco de dados.

## Como executar

Pré-requisitos: Node.js 16 ou superior e MySQL.

1. Clone o repositório:

   `git clone https://github.com/Nadi0301/blogs-api.git`

2. Entre na pasta:

   `cd blogs-api`

3. Instale as dependências:

   `npm install`

4. Configure seu arquivo `.env` usando `env.example` como referência.

5. Inicie a aplicação:

   `npm start`

**Importante:** não publique seu arquivo `.env` nem compartilhe suas senhas.

## Objetivo

Praticar desenvolvimento backend, APIs REST, autenticação, validação de dados e integração com banco de dados relacional.