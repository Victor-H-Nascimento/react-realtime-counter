# React Realtime Counter App

Este projeto é uma aplicação simples em React que explora o conceito de interação em tempo real utilizando WebSockets. A aplicação possui duas páginas: uma para adicionar e subtrair valores e outra para exibir o valor atualizado em tempo real.

## Funcionalidades

- **Página Home** (`/`): Possui dois botões, "Adicionar" e "Subtrair", que alteram um valor numérico.
- **Página Contador** (`/contador`): Exibe o valor numérico atualizado em tempo real conforme os botões da página Home são clicados.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface do usuário.
- **Socket.IO**: Biblioteca para comunicação em tempo real entre o cliente e o servidor via WebSockets.
- **Node.js**: Plataforma para executar JavaScript no lado do servidor.
- **Express**: Framework web para Node.js (opcional, mas pode ser utilizado no servidor WebSocket).

## Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados na sua máquina.

## Como Rodar o Projeto

1. **Clonar o Repositório**

   ```bash
   git clone https://github.com/seu-usuario/react-realtime-counter.git
   cd react-realtime-counter

   ```

2. **Instalar as Dependências**

   ```bash
   npm install
   ```

   Instale as dependências do servidor WebSocket:

   ```bash
   cd server
   npm install
   cd ..
   ```

3. **Rodar o Servidor WebSocket**

   Em um terminal execute o servidor:

   ```bash
   node server/index.js
   ```

4. **Rodar a Aplicação React**

   Em um segundo terminal execute a aplicação React:

   ```bash
   npm start
   ```

# Considerações Finais

Este projeto é um exemplo básico de como usar React em conjunto com WebSockets para criar uma aplicação interativa em tempo real. Ele pode ser expandido com autenticação, persistência em banco de dados, ou melhorias na UI.

Se tiver algum problema ou sugestão, sinta-se à vontade para contribuir!
