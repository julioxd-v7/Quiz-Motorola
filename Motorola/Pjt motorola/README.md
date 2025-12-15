# Quiz Motorola

## Descrição

Este projeto consiste em um quiz interativo sobre a empresa Motorola, desenvolvido utilizando HTML, CSS e JavaScript puro. O objetivo é testar conhecimentos sobre a história, produtos e características da Motorola por meio de perguntas de múltipla escolha.

O sistema controla o tempo de resposta, calcula a pontuação automaticamente e exibe, ao final, um gabarito completo informando quais questões foram acertadas e quais foram respondidas incorretamente.

---

## Tecnologias Utilizadas

* HTML5 para estruturação da página
* CSS3 para estilização e centralização do layout
* JavaScript para a lógica do quiz, temporizador, pontuação e exibição do gabarito

---

## Estrutura de Pastas do Projeto

```
Pjt motorola
 ├── index.html
 ├── css/
 │   └── style.css
 ├── js/
 │   └── script.js
 ├── img/
 │   ├── moto1.jfif
 │   ├── moto2.jfif
 │   ├── moto3.jfif
 │   ├── moto4.jfif
 │   ├── moto5.jfif
 │   ├── moto6.jfif
 │   ├── moto7.jfif
 │   ├── moto8.jfif
 │   ├── moto9.jfif
 │   └── moto10.jfif
 └── readme/
     └── read.me
```

As imagens presentes na pasta img são utilizadas como plano de fundo do site e mudam conforme o avanço das perguntas.

---

## Funcionalidades

* Quiz com 10 perguntas sobre a Motorola
* Alternativas de resposta padronizadas em A, B, C, D e E
* Temporizador configurável por pergunta
* Sistema de pontuação automática
* Alteração dinâmica do plano de fundo
* Exibição do resultado final
* Gabarito detalhado com resposta do usuário e resposta correta

---

## Configuração do Tempo

O tempo disponível para cada pergunta pode ser ajustado diretamente no arquivo JavaScript:

```js
let tempoPorPergunta = 30;
```

---

## Sistema de Pontuação

Cada pergunta possui uma quantidade de pontos definida individualmente. A pontuação total é calculada automaticamente e exibida ao final do quiz.

---

## Execução do Projeto

O quiz funciona totalmente offline.
Para executar, basta abrir o arquivo index.html diretamente no navegador.

Navegador testado: Google Chrome.

---

## Alterações em relação ao código-base

* A partir do código-base fornecido pelo professor, o grupo realizou as seguintes alterações:

* Separação do código em arquivos externos de HTML, CSS e JavaScript, organizados em pastas.

* Adaptação do quiz para o tema da empresa Motorola, com novas perguntas e respostas.

* Implementação de temporizador configurável por pergunta.

* Inclusão de imagens de fundo diferentes para cada questão, armazenadas localmente.

* Implementação de sistema de pontuação automática e gabarito detalhado ao final do quiz.

* Ajustes visuais no CSS para melhorar a organização e a legibilidade da interface.

---

## Identificação

Trabalho da 2ª Avaliação  
Curso: ADS  
Período: Manhã  
Turma: 2MB 
Data de entrega: 15/12/2025  

Integrantes:
- Nícolas Sousa  Vieira — 01812457
- Júlio Vinícius de Almeida Uchôa Correia — 01810246
- Silvio Matheus da Silva Teixeira — 01831909