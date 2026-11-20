# Saragix — De Enxadrista para Enxadristas

Plataforma aberta, moderna e profissional de revisão, treinamento e análise de partidas de xadrez, desenvolvida com React, Vite, Tailwind CSS e motor Stockfish 19 NNUE executado diretamente no navegador via WebAssembly.

Criado pelo Mestre Nacional Pedro Henrique (Brasil).

---

## Filosofia do Projeto

O Saragix nasceu com a missão de fornecer a toda a comunidade de xadrez uma ferramenta de alto nível técnico, 100% livre, aberta e sem restrições ou paywalls para revisão de partidas.

Inspirado na precisão analítica do Chess.com e na liberdade de dados abertos do Lichess, o Saragix une o melhor dos dois mundos: algoritmos rigorosos de avaliação, livro de aberturas profundo e motor Stockfish de última geração rodando localmente no dispositivo do usuário.

---

## Funcionalidades Principais

### 1. Revisão Completa de Partidas (Game Review)
- **Classificação Rigorosa de Lances:**
  - Sistema com critérios estritos: Brilhante, Grande Lance, Melhor Lance, Excelente, Bom, Livro Teórico, Novidade Teórica, Imprecisão, Erro, Vitória Perdida e Capivara.
  - Eliminação de falsos "Melhores Lances": a classificação de Melhor Lance é reservada estritamente à primeira linha da engine ou lances com 0.00 de perda objetiva.
  - Critério de Lance Brilhante restrito a sacrifícios reais de material (Static Exchange Evaluation positiva) que mantenham a vantagem decisiva.
- **Precisão Geral (CAPS):** Cálculo estatístico ponderado da precisão das Brancas e Pretas.
- **Precisão por Fase do Jogo:** Abertura, Meio-jogo e Finais avaliados individualmente.
- **Gráfico de Vantagem Interativo:** Curva lance a lance com demarcação visual dos divisores de fase.
- **Análise Temporal de Relógio:** Gráfico de consumo de tempo por lance extraído de tags PGN ([%clk]).

### 2. Árvore Real de Variantes (MoveTree Hierárquica)
- Estrutura de dados em árvore hierárquica completa: linha principal e variantes alternativas com profundidade ilimitada.
- Navegação fluida por cliques, toque na tela ou atalhos de teclado.
- Promoção instantânea de qualquer variante para Linha Principal.
- Exclusão segura de subárvores e lances incorretos.
- Edição de anotações manuais (!, ?, !?, ?!, !!, ??) e comentários textuais salvos diretamente no arquivo PGN.
- Compatibilidade total de importação e exportação nos formatos PGN e FEN.

### 3. Biblioteca de Mestres & Base Histórica da FIDE
- **Coleção Curada de 371 Obras-Primas:**
  - Todos os 18 Campeões Mundiais oficiais da história: de Wilhelm Steinitz (1886) até D. Gukesh (conquista do Campeonato Mundial de 2024 em Singapura contra Ding Liren).
  - Obras-primas de Mestres do Brasil: Luis Paulo Supi vs Magnus Carlsen 2020 (com o célebre sacrifício 18.Qc6!!), Henrique Mecking (Mequinho) vs Bobby Fischer (Interzonal 1970), Mecking vs Polugaevsky (Interzonal Petrópolis 1973), além de partidas históricas de Jaime Sunye Neto, Gilberto Milos e Rafael Leitão.
  - Partidas imortais e confrontos históricos: Anderssen vs Kieseritzky (Imortal 1851), Anderssen vs Dufresne (Sempre Viva 1852), Paul Morphy na Ópera (1858), Donald Byrne vs Bobby Fischer (Jogo do Século 1956), Kasparov vs Topalov (Wijk aan Zee 1999), Deep Blue vs Kasparov (1996), AlphaZero vs Stockfish (2017).
- **Filtros e Busca em Tempo Real:** Pesquisa instantânea por jogador, abertura, código ECO, ano ou evento, com filtros por campeão mundial, época histórica e resultado.
- **1 Clique para Analisar:** Carrega os lances diretamente no tabuleiro com árvore interativa e avaliação pronta.

### 4. Livro Teórico de Aberturas (Offline + Base de Mestres)
- **Livro Local Offline:** Mais de 3.950 aberturas catalogadas e 9.030 posições teóricas únicas compiladas em formato compacto, funcionando em 0ms sem necessidade de conexão com a internet.
- **Cobertura Teórica Profunda:** Linhas mestras de até 20 lances cobrindo variantes da Defesa Siciliana (Najdorf, Dragão, Sveshnikov, Richter-Rauzer, Taimanov, Kan, Rossolimo, Alapin), Caro-Kann, Ruy Lopez (Berlim, Marshall, Breyer, Chigorin, Zaitsev), Italiana, Francesa, Gambito da Dama, Eslava, Semi-Eslava, Grünfeld, Índia do Rei, Catalã, Nimzoíndia, Sistema London, Benoni, Reti e Inglesa.
- **Base de Mestres Online (FIDE):** Integração com mais de 2,5 milhões de partidas de mestres FIDE 2200+ (1952–2026).
- **Detecção de Novidades Teóricas (N):** Identificação de lances inéditos jogados a partir de posições sólidas de mestres.

### 5. Jogar contra o Computador
- Níveis de dificuldade ajustáveis de 100 a 3200 de rating Elo.
- Suporte a múltiplos ritmos de tempo: Bullet, Blitz, Rápida e Clássica.
- Partidas a partir da posição inicial ou de qualquer abertura do repertório.
- Envio direto da partida finalizada para a tela de revisão e análise profunda.

### 6. Editor de Tabuleiro & Recursos Avançados
- Montagem livre de posições com paleta de peças estilo Lichess.
- Validação automática de legalidade da posição FEN.
- Envio direto da posição montada para análise com Stockfish ou partida contra bot.
- Tabela de Finais Syzygy integrada (avaliação exata de posições com 7 peças ou menos).
- Detecção automática de empate por repetição tripla e regra dos 50 lances.
- Transmissões ao vivo de torneios oficiais com visualização de partidas em tempo real.

---

## Atalhos de Teclado

| Tecla | Ação |
|---|---|
| Seta Direita / Seta Esquerda | Avançar / Voltar lance na árvore |
| Seta Cima / Seta Baixo | Alternar entre variantes irmãs na posição atual |
| Barra de Espaço | Ligar / Desligar o motor Stockfish |
| F | Girar o tabuleiro (inverter visão Brancas/Pretas) |
| P | Promover variante selecionada para Linha Principal |
| Delete / Backspace | Apagar lance selecionado e sua subárvore |
| Home / End | Ir para a posição inicial / Ir para o último lance |

---

## Arquitetura e Tecnologias

- **Frontend:** React 18, Vite 5, Tailwind CSS
- **Motor de Xadrez:** Stockfish 19 NNUE compilado em WebAssembly (.wasm) com Web Workers
- **Regras e Lógica de Jogo:** chess.js
- **Renderização do Tabuleiro:** react-chessboard com temas de peças vetorizadas (SVG)
- **Persistência Local:** LocalStorage e IndexedDB para partidas salvas e configurações
- **Internacionalização:** Suporte nativo a Português (pt-BR), Inglês (en) e Espanhol (es)

---

## Estrutura do Código-Fonte

```
chess-reviewer/
├── public/                 # Assets públicos, workers do Stockfish e arquivos estáticos
├── scripts/
│   ├── build-opening-book.mjs       # Compilador do livro de aberturas
│   ├── generate-deep-mainlines.mjs  # Gerador e validador de linhas profundas
│   └── verifySite.js                # Suite de 50 testes automatizados
├── src/
│   ├── components/         # Componentes modulares da interface
│   │   ├── MasterGamesModal.jsx     # Navegador da Biblioteca de Mestres
│   │   ├── GameReviewDashboard.jsx  # Painel de revisão estilo Chess.com
│   │   ├── BoardEditor.jsx          # Editor visual de tabuleiro
│   │   ├── PlayVsComputer.jsx       # Módulo de jogo contra bot
│   │   ├── Broadcasts.jsx           # Transmissões oficiais ao vivo
│   │   └── ...
│   ├── data/
│   │   ├── masterLibrary.js         # Base consolidada de 371 partidas de mestres
│   │   └── dailyGames.js            # 365 partidas históricas anotadas
│   ├── i18n/               # Dicionários de tradução (pt, en, es)
│   ├── utils/
│   │   ├── chessAnalysis.js         # Algoritmo de classificação oficial
│   │   ├── moveTree.js              # Estrutura de dados em árvore hierárquica
│   │   ├── openings.js              # Detector de aberturas e novidades teóricas
│   │   ├── openingBookData.js       # Livro com 9.032 posições teóricas
│   │   ├── lichessExplorer.js       # Conexão com a base FIDE Lichess Masters
│   │   ├── repetitionDetector.js    # Repetição tripla e regra dos 50 lances
│   │   └── tablebaseService.js      # Integração com finais Syzygy
│   ├── App.jsx             # Orquestrador central e roteamento
│   └── main.jsx            # Ponto de entrada da aplicação
├── package.json
└── README.md
```

---

## Instalação e Execução Local

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou pnpm

### Passos de Instalação

1. Clone o repositório do GitHub:
```bash
git clone https://github.com/SEU_USUARIO/Site-Saragix.git
cd Site-Saragix
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
O aplicativo estará disponível em `http://localhost:5173`.

4. Para compilar a versão final otimizada para produção:
```bash
npm run build
```
Os arquivos prontos para publicação serão gerados na pasta `dist/`.

5. Para executar os testes automatizados de qualidade:
```bash
node scripts/verifySite.js
```

---

## Publicação Online (Deploy Gratuito)

O Saragix é 100% estático no frontend e pode ser publicado gratuitamente em plataformas globais:

- **Vercel:** Conecte sua conta do GitHub, selecione o repositório `Site-Saragix` e clique em *Deploy*.
- **Netlify:** Selecione o repositório, configure o comando de build como `npm run build` e o diretório de publicação como `dist`.
- **Cloudflare Pages:** Crie um novo projeto Pages conectado ao GitHub com preset do Vite.

---

## Créditos e Agradecimentos

- **Idealização e Desenvolvimento:** Mestre Nacional Pedro Henrique (Brasil).
- **Motor:** Projeto Stockfish (licença GPL-3.0).
- **Dados de Aberturas e Mestres:** Lichess.org (licença CC0 / dados abertos da FIDE).
- **Tabelas de Finais:** Base Syzygy mantida pela comunidade de xadrez computacional.

---

## Licença

Distribuído sob licença livre e aberta. O Saragix é de código aberto para que qualquer enxadrista, estudante ou mestre possa estudar, aprimorar e desfrutar do jogo.
