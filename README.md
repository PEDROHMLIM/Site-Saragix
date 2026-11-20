# Saragix — De Enxadrista para Enxadristas

Plataforma gratuita de revisão, treinamento e análise de partidas de xadrez, desenvolvida com React, Vite e Tailwind CSS. Utiliza o motor Stockfish 19 NNUE, executado diretamente no navegador por meio de WebAssembly (WASM).

**Idealização e desenvolvimento:** Mestre Nacional Pedro Henrique (Brasil).

---

## Sobre o Projeto

O Saragix nasceu com o objetivo de oferecer à comunidade enxadrística uma ferramenta de análise de alto nível técnico, gratuita e acessível a todos.

Inspirado na precisão analítica do Chess.com e na filosofia de código aberto do Lichess, o projeto reúne ferramentas de revisão de partidas, análise com Stockfish, estudo de aberturas, treinamento e exploração de partidas históricas.

Toda a análise principal é executada localmente no navegador, sem necessidade de instalar programas ou criar uma conta.

## Funcionalidades

### Revisão de Partidas

Sistema de análise automática que avalia os lances e apresenta estatísticas detalhadas da partida.

- Classificação de lances: Brilhante, Grande Lance, Melhor Lance, Excelente, Bom, Livro Teórico, Novidade Teórica, Imprecisão, Erro, Vitória Perdida e Capivara.
- Critérios rigorosos de classificação para reduzir falsos positivos.
- Detecção de sacrifícios reais de material para classificação de lances brilhantes.
- Cálculo de precisão geral (CAPS) para Brancas e Pretas.
- Precisão individual por fase: abertura, meio-jogo e final.
- Gráfico interativo de avaliação lance a lance.
- Análise de consumo de tempo utilizando as tags `[%clk]` dos arquivos PGN.

### Árvore de Variantes

Sistema hierárquico para exploração e edição de linhas alternativas.

- Variantes com profundidade ilimitada.
- Navegação por cliques, toques ou atalhos de teclado.
- Promoção de variantes à linha principal.
- Exclusão de lances e subárvores.
- Edição de anotações (`!`, `?`, `!?`, `?!`, `!!`, `??`) e comentários textuais.
- Importação e exportação de partidas nos formatos PGN e FEN.

### Biblioteca de Mestres

Coleção de 371 partidas históricas e obras-primas do xadrez.

**Campeões mundiais**
- Partidas dos 18 campeões mundiais oficiais, de Wilhelm Steinitz a D. Gukesh.

**Recursos**
- Pesquisa por jogador, abertura, código ECO, ano e evento.
- Filtros por campeão mundial, período histórico e resultado.
- Carregamento direto das partidas no tabuleiro para análise.

### Livro de Aberturas

Base teórica integrada ao sistema de análise, com funcionamento offline.

- Mais de 3.950 aberturas catalogadas.
- Mais de 9.030 posições teóricas únicas.
- Linhas principais de até 20 lances.
- Consulta local sem necessidade de conexão com a internet.
- Cobertura de Siciliana, Caro-Kann, Ruy Lopez, Italiana, Francesa, Gambito da Dama, Grünfeld, Índia do Rei, Catalã, Nimzoíndia, London, Benoni, Réti, Inglesa e outras.

**Base de mestres**
- Integração com mais de 2,5 milhões de partidas de mestres FIDE com rating 2200 ou superior, abrangendo o período de 1952 a 2026.
- Identificação de novidades teóricas em posições com histórico de partidas de mestres.

### Jogar contra o Computador

- Níveis de dificuldade ajustáveis de 100 a 3200 Elo.
- Ritmos Bullet, Blitz, Rápida e Clássica.
- Partidas a partir da posição inicial ou de posições de abertura.
- Envio automático da partida finalizada para revisão e análise.

### Editor de Tabuleiro e Recursos Adicionais

- Montagem livre de posições.
- Validação automática de posições FEN.
- Envio de posições para análise ou partidas contra o computador.
- Integração com tabelas de finais Syzygy para posições com até 7 peças.
- Detecção de empate por repetição tripla e regra dos 50 lances.
- Transmissões ao vivo de torneios, com visualização de partidas em tempo real.

---

## Atalhos de Teclado

| Tecla | Ação |
|---|---|
| Seta Direita / Esquerda | Avançar / voltar lance |
| Seta Cima / Baixo | Alternar entre variantes |
| Espaço | Ligar / desligar o Stockfish |
| F | Girar o tabuleiro |
| P | Promover variante à linha principal |
| Delete / Backspace | Excluir lance e subárvore |
| Home / End | Ir ao início / último lance |

---

## Tecnologias

| Componente | Tecnologia |
|---|---|
| Frontend | React 18 |
| Build | Vite 5 |
| Estilização | Tailwind CSS |
| Motor de xadrez | Stockfish 19 NNUE |
| Execução da engine | WebAssembly (WASM) |
| Processamento paralelo | Web Workers |
| Regras de xadrez | chess.js |
| Tabuleiro | react-chessboard |
| Peças | SVG |
| Armazenamento | LocalStorage e IndexedDB |
| Internacionalização | Português, Inglês e Espanhol |

### Arquitetura

O Saragix é uma aplicação estática executada no frontend, sem necessidade de um servidor próprio para suas funcionalidades principais.

O Stockfish é executado diretamente no navegador por meio de WebAssembly e Web Workers. Partidas e configurações são armazenadas localmente no dispositivo do usuário.

---

## Hospedagem

O Saragix pode ser publicado gratuitamente em plataformas de hospedagem estática.

**Vercel**
- Conecte sua conta do GitHub.
- Selecione o repositório `Site-Saragix`.
- Configure o projeto e execute o Deploy.

**Netlify**
- Comando de build: `npm run build`.
- Diretório de publicação: `dist`.

**Cloudflare Pages**
- Conecte o repositório do GitHub.
- Selecione o preset Vite.
- Configure e publique o projeto.

---

## Idiomas

A plataforma possui suporte a três idiomas:

- Português (pt-BR).
- Inglês (en).
- Espanhol (es).

---

## Código Aberto

O código-fonte do Saragix está disponível publicamente para consulta, estudo e utilização por outros desenvolvedores.

Seu código pode servir como referência, aprendizado ou base para o desenvolvimento de outros projetos, respeitando os termos da licença adotada e as licenças dos componentes de terceiros.

O Saragix é um projeto independente, idealizado e desenvolvido por Mestre Nacional Pedro Henrique Lima.

---

## Créditos e Agradecimentos

**Desenvolvimento:** Mestre Nacional Pedro Henrique M. Lima (Brasil).

**Stockfish:** motor de xadrez distribuído sob licença GPL-3.0.

**Lichess:** referência em código aberto e disponibilização de dados para a comunidade.

**FIDE:** registros e informações históricas do xadrez mundial.

**Syzygy:** tabelas de finais mantidas pela comunidade de xadrez computacional.

Agradecimentos a todos os desenvolvedores e colaboradores da comunidade open source, cujos projetos tornam possível a construção de ferramentas gratuitas e acessíveis.

---

**Saragix — De Enxadrista para Enxadristas.**
