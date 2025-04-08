<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1 align="center" id="inicio">Chatbot - Back-End</h1>
  <p align="center"><img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/></p>

  <header>
    <p>API back-end do chatbot, responsável por gerenciar as requisições, respostas e armazenamento dos dados.</p>
  </header>

  <section>
    <h2>Descrição</h2>
    <p>Este é o back-end do chatbot, desenvolvido com Node.js, Express e MongoDB. Ele recebe as perguntas enviadas pelo usuário no front-end, se comunica com a API do Gemini e armazena o histórico de interações.</p>
  </section>

  <section>
    <h2>Como Rodar o Projeto</h2>
    <p>Para rodar o back-end localmente, siga os passos abaixo:</p>
    <ul>
      <li>1. Clone o repositório no seu computador:</li>
      <pre><code>git clone https://github.com/SEU_USUARIO/chatbot-backend.git</code></pre>
      <li>2. Navegue até a pasta do projeto:</li>
      <pre><code>cd chatbot-backend</code></pre>
      <li>3. Instale as dependências:</li>
      <pre><code>npm install</code></pre>
      <li>4. Crie um arquivo <code>.env</code> na raiz do projeto com o seguinte conteúdo:</li>
      <pre><code>
PORT=3000
MONGO_URI=mongodb://localhost:27017/chatbot
GEMINI_API_KEY=sua_chave_api
      </code></pre>
      <li>5. Inicie a aplicação:</li>
      <pre><code>npm start</code></pre>
    </ul>
    <p>O servidor será iniciado em: <code>http://localhost:3000</code></p>
  </section>

  <section>
    <h2>Rotas da API</h2>
    <ul>
      <li><strong>POST</strong> <code>/chat</code> — Envia uma pergunta e retorna a resposta do chatbot</li>
      <li><strong>GET</strong> <code>/historico</code> — Retorna o histórico de perguntas salvas</li>
    </ul>
  </section>

  <section>
    <h2>Funcionalidades</h2>
    <ul>
      <li>Comunicação com a API do Gemini</li>
      <li>Armazenamento de histórico no MongoDB</li>
      <li>API com rotas de envio e listagem</li>
    </ul>
  </section>

  <section>
    <h2>Tecnologias Utilizadas</h2>
    <ul>
      <li>Node.js</li>
      <li>Express</li>
      <li>MongoDB</li>
      <li>Axios</li>
      <li>dotenv</li>
    </ul>
  </section>

  <footer>
    <p>Desenvolvido por Arthur Pimentel</p>
    <p>2025</p>
  </footer>
</body>
</html>
