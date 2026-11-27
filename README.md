# Blogs API

API RESTful desenvolvida em **Node.js**, **Express** e **Sequelize** para gerenciamento de usuários, categorias e postagens de blog, com autenticação via **JWT**.

## Sobre o Projeto

A **Blogs API** estrutura um serviço back-end com arquitetura em camadas, relacionamentos entre entidades no banco de dados relacional, validação de requisições e controle de acesso por token.

### Principais Recursos Implementados

- **Autenticação com JWT**: Login com validação de credenciais e emissão de token para proteção das rotas de escrita e consulta.
- **Usuários e Categorias**: Cadastro e consulta de usuários e categorias com validações de payload.
- **Gerenciamento de Postagens**: Criação, listagem, busca, edição e exclusão de posts vinculando autor e categorias.
- **ORM e Relacionamentos**: Modelagem de tabelas, associações e transações com **Sequelize**.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **Sequelize**
- **MySQL**
- **JWT (JSON Web Token)**
- **ESLint**

## Como Executar Localmente

1. Clone este repositório:
   ``bash
   git clone [https://github.com/Nadi0301/blogs-api.git](https://github.com/Nadi0301/blogs-api.git)
   ``

2. Acesse a pasta do projeto:
   ``bash
   cd blogs-api
   ``

3. Instale as dependências:
   ``bash
   npm install
   ``

4. Configure as variáveis de ambiente e o banco de dados, depois inicie a aplicação conforme os scripts do package.json.

---

Desenvolvido por **Nadijane Souza** — [GitHub](https://github.com/Nadi0301)
