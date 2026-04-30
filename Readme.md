```md
# 🌱 API de Produtos Sustentáveis

Uma API simples desenvolvida com Node.js e Express com o objetivo de gerenciar e exibir produtos sustentáveis. O projeto também permite o upload de imagens, simulando um pequeno sistema de catálogo de produtos.

Este projeto é ideal para estudos de APIs REST, manipulação de arquivos e organização de backend com dados locais.

---

## 📌 Objetivo

O principal objetivo deste projeto é demonstrar na prática:

- Criação de uma API com Node.js
- Estruturação de rotas com Express
- Manipulação de dados em arquivos JSON
- Upload de arquivos utilizando Multer
- Organização básica de um backend

---

## ⚙️ Funcionalidades

- ✅ Rota inicial para teste da API
- 📦 Listagem de produtos sustentáveis
- 🖼️ Upload de imagens
- 💾 Armazenamento local de arquivos
- 📄 Leitura de dados via JSON

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** – ambiente de execução JavaScript
- **Express** – framework para criação da API
- **Multer** – middleware para upload de arquivos
- **JavaScript**
- **JSON** – armazenamento dos dados

---

## 📂 Estrutura do Projeto

```

Criacao-de-API-de-produtos/
│
├── imagens/               # Pasta onde as imagens são armazenadas
├── produtos.json         # Base de dados dos produtos
├── TelaDeProdutos.png    # Exemplo visual da aplicação
├── server.js             # Arquivo principal da aplicação
├── package.json          # Dependências do projeto
└── Readme.md             # Documentação

````

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Ellensramalho/Criacao-de-API-de-produtos.git
````

### 2. Acesse a pasta do projeto

```bash
cd Criacao-de-API-de-produtos
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
node server.js
```

### 5. Acesse no navegador

```
http://localhost:3000
```

---

## 🔗 Endpoints da API

### 📍 Rota inicial

```http
GET /
```

Retorna uma mensagem indicando que a API está funcionando.

---

### 📦 Listar produtos

```http
GET /produtos
```

Retorna uma lista de produtos sustentáveis cadastrados no arquivo JSON.

#### Exemplo de resposta:

```json
[
  {
    "id": 1,
    "nome": "Copo sustentável",
    "descricao": "Feito com materiais recicláveis",
    "preco": 19.99
  }
]
```

---

### 🖼️ Upload de imagens

```http
POST /upload
```

Permite o envio de imagens para o servidor.

#### 📌 Requisitos:

* Método: `POST`
* Tipo: `multipart/form-data`
* Nome do campo: `imagens`

#### Exemplo usando Postman:

* Body → form-data
* Key: `imagens`
* Tipo: File

As imagens enviadas serão armazenadas na pasta:

```
/imagens
```

---
---

## 🖼️ Demonstração

![Tela de produtos](./TelaDeProdutos.png)
