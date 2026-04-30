const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const produtos = require("./produtos.json");

const app = express();
const PORT = 3000;

if (!fs.existsSync("imagens")) {
  fs.mkdirSync("imagens");
}
app.use("/imagens", express.static("imagens"));

app.get("/", (req, res) => {
  res.send(`
    <h1 style="text-align:center;">API Funcionando 🚀</h1>
    <p style="text-align:center;">
      <a href="/produtos">Ver Produtos</a>
    </p>
  `);
});

app.get("/produtos", (req, res) => {
  let html = `
  <html>
  <head>
    <title>Produtos</title>
  </head>

  <body style="
    font-family:Arial;
    background:#f2f2f2;
    margin:0;
    padding:30px;
  ">

    <h1 style="
      text-align:center;
      margin-bottom:30px;
    ">
      Produtos Sustentáveis 🌱
    </h1>

    <div style="
      display:flex;
      flex-wrap:wrap;
      gap:20px;
      justify-content:center;
    ">
  `;

  produtos.forEach(produto => {
    html += `
      <div style="
        width:280px;
        background:white;
        padding:15px;
        border-radius:12px;
        box-shadow:0 0 10px rgba(0,0,0,0.1);
      ">

        <img
          src="/imagens/${produto.imagem}"
          width="250"
          style="
            display:block;
            margin:auto;
            border-radius:10px;
          "
        >

        <h2>${produto.nome}</h2>

        <p style="
          color:#555;
          min-height:70px;
        ">
          ${produto.descricao}
        </p>

        <h3 style="
          color:green;
        ">
          R$ ${produto.preco}
        </h3>

      </div>
    `;
  });

  html += `
    </div>
  </body>
  </html>
  `;

  res.send(html);
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "imagens/");
  },

  filename: (req, file, cb) => {
    const nome =
      Date.now() +
      "-" +
      Math.floor(Math.random() * 9999) +
      path.extname(file.originalname);

    cb(null, nome);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Somente imagens!"), false);
  }
};

const upload = multer({
  storage,
  fileFilter
});

app.post("/upload", upload.array("imagens", 100), (req, res) => {
  const arquivos = req.files.map(file => ({
    nome: file.filename,
    tamanho: file.size
  }));

  res.json({
    mensagem: "Imagens enviadas com sucesso!",
    total: arquivos.length,
    arquivos
  });
});
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});