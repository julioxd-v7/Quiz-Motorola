// =====================
// CONFIGURAÇÕES DO QUIZ
// =====================

// Define o tempo (em segundos) que o usuário tem para responder cada pergunta
let tempoPorPergunta = 30;

// Lista com todas as perguntas do quiz, suas alternativas,
// a resposta correta e a pontuação de cada questão
const quiz = [
  {
    pergunta: "Em que ano a Motorola foi fundada?",
    alternativas: ["1918", "1928", "1938", "1948", "1958"],
    correta: 1,
    pontos: 10
  },
  {
    pergunta: "Qual foi o primeiro produto criado pela Motorola?",
    alternativas: [
      "Um celular portátil",
      "Um rádio para automóveis",
      "Um telefone fixo",
      "Um microchip",
      "Um walkie-talkie"
    ],
    correta: 1,
    pontos: 10
  },
  {
    pergunta: "Qual foi o primeiro telefone celular comercial do mundo lançado pela Motorola?",
    alternativas: [
      "Moto G",
      "Motorola V3",
      "Motorola StarTAC",
      "Motorola DynaTAC 8000X",
      "Moto X"
    ],
    correta: 3,
    pontos: 10
  },
  {
    pergunta: "Qual slogan ficou mundialmente conhecido pela Motorola?",
    alternativas: [
      "Connecting People",
      "Think Different",
      "Hello Moto",
      "Just Do It",
      "Power to You"
    ],
    correta: 2,
    pontos: 10
  },
  {
    pergunta: "A Motorola teve papel importante em qual missão da NASA?",
    alternativas: [
      "Voyager 1",
      "Apollo 11",
      "Space Shuttle Columbia",
      "Hubble",
      "Estação Espacial Internacional"
    ],
    correta: 1,
    pontos: 10
  },
  {
    pergunta: "Atualmente, a Motorola pertence a qual empresa?",
    alternativas: [
      "Google",
      "Samsung",
      "Lenovo",
      "Microsoft",
      "Sony"
    ],
    correta: 2,
    pontos: 10
  },
  {
    pergunta: "Qual linha da Motorola é conhecida pelo bom custo-benefício?",
    alternativas: [
      "Moto Z",
      "Moto G",
      "Motorola Edge Ultra",
      "Motorola Razr",
      "DynaTAC"
    ],
    correta: 1,
    pontos: 10
  },
  {
    pergunta: "Qual sistema operacional os smartphones Motorola utilizam?",
    alternativas: [
      "iOS",
      "Windows Phone",
      "HarmonyOS",
      "Android",
      "KaiOS"
    ],
    correta: 3,
    pontos: 10
  },
  {
    pergunta: "O Motorola Razr ficou famoso principalmente por:",
    alternativas: [
      "Ser o primeiro Android",
      "Ter antena externa",
      "Design dobrável e compacto",
      "Ser resistente à água",
      "Ter câmera profissional"
    ],
    correta: 2,
    pontos: 10
  },
  {
    pergunta: "Uma característica marcante dos celulares Motorola é:",
    alternativas: [
      "Interface totalmente personalizada",
      "Sistema próprio",
      "Android puro ou próximo do puro",
      "Apps exclusivos obrigatórios",
      "Atualizações pagas"
    ],
    correta: 2,
    pontos: 10
  }
];

// =====================
// IMAGENS DE FUNDO
// =====================

// Cada imagem é usada como fundo de uma pergunta diferente
const fundos = [
  "url('imagens/moto1.jfif')",
  "url('imagens/moto2.jfif')",
  "url('imagens/moto3.jfif')",
  "url('imagens/moto4.jfif')",
  "url('imagens/moto5.jfif')",
  "url('imagens/moto6.jfif')",
  "url('imagens/moto7.jfif')",
  "url('imagens/moto8.jfif')",
  "url('imagens/moto9.jfif')",
  "url('imagens/moto10.jfif')"
];

// =====================
// VARIÁVEIS DE CONTROLE
// =====================

// Guarda qual pergunta está sendo exibida
let indice = 0;

// Guarda a pontuação total do usuário
let pontuacao = 0;

// Variáveis usadas para controlar o tempo
let tempo;
let contador;

// Guarda as respostas escolhidas pelo usuário
let respostasUsuario = [];

// =====================
// FUNÇÕES PRINCIPAIS
// =====================

// Carrega a pergunta atual, as alternativas e inicia o tempo
function iniciarPergunta() {

  // Muda o fundo da página conforme a pergunta
  document.body.style.backgroundImage = fundos[indice] || "none";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  // Se todas as perguntas já foram respondidas, mostra o resultado
  if (indice >= quiz.length) {
    mostrarResultado();
    return;
  }

  const q = quiz[indice];
  document.getElementById("question-text").textContent = q.pergunta;

  const opcoesDiv = document.getElementById("options");
  opcoesDiv.innerHTML = "";

  // Cria os botões das alternativas
  q.alternativas.forEach((alt, i) => {
    const letras = ["A", "B", "C", "D", "E"];

    const btn = document.createElement("button");
    btn.textContent = `${letras[i]}) ${alt}`;

    // Quando o usuário clica, a resposta é enviada
    btn.onclick = () => responder(i);

    opcoesDiv.appendChild(btn);
  });

  // Reinicia o tempo da pergunta
  tempo = tempoPorPergunta;
  document.getElementById("time-left").textContent = tempo;
  iniciarTimer();
}

// Controla a contagem do tempo da pergunta
function iniciarTimer() {
  clearInterval(contador);

  contador = setInterval(() => {
    tempo--;
    document.getElementById("time-left").textContent = tempo;

    // Quando o tempo acaba, pula para a próxima pergunta
    if (tempo <= 0) {
      clearInterval(contador);
      indice++;
      iniciarPergunta();
    }
  }, 1000);
}

// Trata a resposta escolhida pelo usuário
function responder(i) {
  clearInterval(contador);

  const q = quiz[indice];

  // Salva a resposta escolhida
  respostasUsuario.push(i);

  // Soma pontos se a resposta estiver correta
  if (i === q.correta) {
    pontuacao += q.pontos;
  }

  // Avança para a próxima pergunta
  indice++;
  iniciarPergunta();
}

// Mostra a pontuação final e o gabarito completo
function mostrarResultado() {
  let gabaritoHTML = "";

  quiz.forEach((q, i) => {
    const acertou = respostasUsuario[i] === q.correta;

    gabaritoHTML += `
      <div style="margin-bottom:15px;">
        <strong>${i + 1}. ${q.pergunta}</strong><br>
        Sua resposta:
        <span style="color:${acertou ? 'green' : 'red'}">
          ${q.alternativas[respostasUsuario[i]] || "Não respondeu"}
        </span><br>
        Resposta correta:
        <span style="color:green">
          ${q.alternativas[q.correta]}
        </span>
      </div>
    `;
  });

  document.getElementById("quiz-container").innerHTML = `
    <h2>Resultado Final</h2>
    <p><strong>Pontuação:</strong> ${pontuacao}</p>
    <hr>
    <h3>Gabarito</h3>
    ${gabaritoHTML}
  `;
}

// Inicia o quiz ao carregar a página
iniciarPergunta();