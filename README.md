# ServeresT — E2E Teste de automação com Cypress 
[![Print do teste](https://github.com/user-attachments/assets/2b6833c3-a8fd-4510-82e3-7c66b5747f1f)](https://front.serverest.dev/login)
Projeto de testes automatizados criado com Cypress, desenvolvido como estudo e prática de automação de testes end-to-end (E2E).

- Sobre o projeto

Este repositório contém meus primeiros testes automatizados utilizando o Cypress, com o objetivo de aprender e praticar conceitos de automação de testes para aplicações web.

- Tecnologias utilizadas
Node.js
Cypress
- Instalação

Clone o repositório:

bash
git clone https://github.com/gustavogf27157-glitch/cypress-primeiro-projeto.git
cd cypress-primeiro-projeto

Instale as dependências:

bash
npm install
 Como executar os testes

Para abrir a interface visual do Cypress:

bash
npx cypress open

Para rodar os testes em modo headless (sem interface, direto no terminal):

bash
npx cypress run
- Estrutura do projeto
cypress/
  ├── e2e/            # Arquivos de teste
  ├── fixtures/       # Dados de teste (mocks)
  └── support/        # Comandos e configurações auxiliares
cypress.config.js      # Configuração do Cypress
package.json
