import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';
import { MOVE_ANNOTATIONS, resolveNodeAnnotation } from './utils/moveAnnotations';
import {
  Play,
  SkipBack,
  ChevronLeft,
  ChevronRight,
  SkipForward,
  RotateCcw,
  Upload,
  Cpu,
  Award,
  AlertTriangle,
  FileText,
  Bookmark,
  Database,
  Trash2,
  X,
  Check,
  Search,
  Calendar,
  Trophy,
  BarChart3,
  BookOpen,
  ShieldAlert,
  Clock,
  Filter,
  TrendingUp,
  Target,
  Brain,
  MapPin,
  Flag,
  Plus,
  CheckCircle2,
  XCircle,
  Home,
  Zap,
  Bell,
  Settings,
  ArrowRight,
  Layers,
  ChevronDown,
  Menu,
  GitBranch,
  Undo2,
  Redo2,
  Star,
  Edit3,
  Copy,
  FolderOpen,
  Swords,
  Download,
  Palette,
  Globe,
  Loader2,
  ExternalLink,
  SlidersHorizontal,
  ThumbsUp,
  HelpCircle,
  Share2,
  Sparkles,
  PenSquare,
  Film,
  Radio,
  Info,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react';
import BoardEditor from './components/BoardEditor';
import Broadcasts from './components/Broadcasts';
import PlayerBroadcastBar from './components/PlayerBroadcastBar';
import About from './components/About';
import HomeView from './components/Home';
import LanguageSelector from './components/LanguageSelector';
import { useTranslation } from './i18n';
import { ClassificationIcon, ClassificationBadge } from './components/ClassificationIcon';
import { KnightIcon, PawnIcon } from './components/ChessPieceIcon';
import LichessExplorerPanel from './components/LichessExplorerPanel';
import TablebaseCard from './components/TablebaseCard';
import { detectRepetitionAnd50Move } from './utils/repetitionDetector';
import GameReviewDashboard from './components/GameReviewDashboard';
import MasterGamesModal from './components/MasterGamesModal';
import { formatMultiPvScore, formatPvLineWithGlyphs } from './utils/pvFormatter';
import { fetchLichessUserGames, fetchChessComUserGames } from './utils/onlineGamesService';
import PlayVsComputer from './components/PlayVsComputer';
import {
  BOARD_THEMES,
  loadSavedBoardTheme,
  saveBoardThemeConfig,
  resolveBoardSquareStyles,
} from './utils/boardThemes';
import {
  PIECE_SETS,
  buildCustomPieces,
  loadSavedPieceSet,
  savePieceSetConfig,
  renderInlineSvg,
} from './utils/pieceSets';
import { INLINE_PIECE_SETS } from './utils/pieceSetsData';
import { parseRoute, updateRoute } from './utils/urlRouter';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { StockfishEngine } from './utils/stockfishEngine';
import { LiveEngine } from './utils/liveEngine';
import {
  classifyMove,
  calculateAccuracy,
  cpToWinPercent,
  MOVE_CLASSIFICATIONS,
} from './utils/chessAnalysis';
import {
  getSavedGames,
  saveGameToDb,
  deleteGameFromDb,
  clearAllSavedGamesFromDb,
  getTrainingStats,
  recordTrainingAttempt,
  getCareerMilestones,
  addCareerMilestone,
  deleteCareerMilestone,
} from './utils/gameDatabase';
import {
  TITLE_CATEGORIES,
  TIME_CONTROLS,
  GAME_MODES,
  detectOpening,
  isMoveInOpeningBook,
  isBookMoveByFen,
  normalizeTitle,
} from './utils/openings';
import {
  checkMasterTheoryStatus,
  getMasterTheoryStatusFromCache,
} from './utils/lichessExplorer';
import {
  buildCareerAnalytics,
  extractCriticalPositions,
  buildEventsAnalytics,
} from './utils/patternDetector';
import {
  createEmptyTree,
  cloneTree,
  addMoveToTree,
  deleteNodeAndSubtree,
  promoteVariationToMainline,
  getMainlineNodes,
  getPathToNode,
  serializeTreeToPgn,
  parsePgnToTree,
  buildTreeFromSavedMoves,
  INITIAL_FEN,
} from './utils/moveTree';

// ============================================================================
// LOGO GEOMÉTRICO S — SARAGIX (Sóbrio, Flat, sem degradê)
// ============================================================================
function SaragixLogo({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="60,12 96,32 60,52 24,32" fill="#e4e4e7" />
      <polygon points="24,32 60,52 60,74 24,54" fill="#52525b" />
      <polygon points="24,54 60,34 96,54 60,74" fill="#a1a1aa" />
      <polygon points="96,54 96,78 60,98 60,74" fill="#3f3f46" />
      <polygon points="60,68 96,88 60,108 24,88" fill="#71717a" />
      <rect
        x="55"
        y="27"
        width="10"
        height="10"
        transform="rotate(45 60 32)"
        fill="#18181b"
      />
      <rect
        x="55"
        y="83"
        width="10"
        height="10"
        transform="rotate(45 60 88)"
        fill="#e4e4e7"
      />
    </svg>
  );
}

// ============================================================================
// BADGE SÓBRIO DE TÍTULOS OFICIAIS (Estilo Lichess / Endgame.ai)
// ============================================================================
function TitleBadge({ title }) {
  if (!title) return null;
  const norm = normalizeTitle(title);
  const isWomen = norm.startsWith('W');
  const isNational = norm === 'NM' || norm === 'WNM';

  return (
    <span
      className={`text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider border inline-flex items-center font-mono ${
        isNational
          ? 'bg-[#1b2922] text-[#7dd3a8] border-[#294235]'
          : isWomen
          ? 'bg-[#2a1f2d] text-[#d8b4e2] border-[#423047]'
          : 'bg-[#27241d] text-[#e5c07b] border-[#3e382b]'
      }`}
      title={
        isNational
          ? 'Título Nacional'
          : isWomen
          ? 'Título Internacional Feminino (FIDE)'
          : 'Título Internacional Absoluto (FIDE)'
      }
    >
      {title}
    </span>
  );
}

function TitleSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full bg-[#0e0e11] border border-[#26262e] rounded-lg px-2.5 py-2 text-zinc-200 font-medium focus:outline-none focus:border-zinc-500"
    >
      {TITLE_CATEGORIES.map((group) => (
        <optgroup
          key={group.group}
          label={group.group}
          className="bg-[#121215] text-zinc-400"
        >
          {group.options.map((opt) => (
            <option key={opt.value} value={opt.value} className="text-zinc-200">
              {opt.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

// ============================================================================
// RENDERIZADOR RECURSIVO DA ÁRVORE DE VARIANTES
// ============================================================================
function VariationBranchView({
  tree,
  startNodeId,
  activeNodeId,
  onSelectNode,
  onPromoteNode,
  onDeleteNode,
  depthLevel = 0,
}) {
  // Coleta a linha contínua principal desta sub-ramificação e pontos onde surgem sub-variantes
  const steps = [];
  let currId = startNodeId;
  while (currId) {
    const node = tree.nodes[currId];
    if (!node) break;
    const parent = tree.nodes[node.parentId];
    const siblingVariations =
      parent && parent.childrenIds.length > 1 && parent.childrenIds[0] === currId
        ? parent.childrenIds.slice(1)
        : [];
    steps.push({ node, siblingVariations });
    currId = node.childrenIds?.[0] || null;
  }

  return (
    <div
      className={`space-y-1 ${
        depthLevel > 0
          ? 'ml-3 pl-3 border-l-2 border-[#2a2a32] my-1.5 bg-[#0e0e11] rounded-r-lg py-1.5 pr-2'
          : ''
      }`}
    >
      {depthLevel > 0 && steps[0] && (
        <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
          <span className="flex items-center gap-1 font-semibold">
            <GitBranch className="w-3 h-3 text-zinc-500" />
            Variante ({steps[0].node.moveNumber}
            {steps[0].node.color === 'w' ? '.' : '...'} {steps[0].node.san})
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => onPromoteNode(steps[0].node.id)}
              className="hover:text-amber-300 px-1.5 py-0.5 rounded bg-[#18181d] border border-[#272730] hover:border-zinc-600 flex items-center gap-0.5 transition"
              title="Promover esta variante para Linha Principal"
            >
              <Star className="w-2.5 h-2.5" /> Principal
            </button>
            <button
              onClick={() => onDeleteNode(steps[0].node.id)}
              className="hover:text-red-400 p-0.5 rounded bg-[#1f1618] border border-red-900/40 transition"
              title="Apagar esta variante"
            >
              <Trash2 className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-1">
        {steps.map(({ node, siblingVariations }, idx) => {
          const isSelected = activeNodeId === node.id;
          const showMoveNum =
            node.color === 'w' || idx === 0 || steps[idx - 1]?.siblingVariations?.length > 0;
          const prefix =
            node.color === 'w'
              ? `${node.moveNumber}.`
              : showMoveNum
              ? `${node.moveNumber}...`
              : '';

          return (
            <React.Fragment key={node.id}>
              <button
                onClick={() => onSelectNode(node.id)}
                className={`px-2 py-0.5 rounded-md text-xs font-mono transition inline-flex items-center gap-1 ${
                  isSelected
                    ? 'bg-[#e4e4e7] text-[#0a0a0c] font-bold'
                    : 'text-zinc-300 hover:bg-[#1e1e24]'
                }`}
              >
                {prefix && (
                  <span className={isSelected ? 'text-zinc-600 mr-0.5' : 'text-zinc-500 mr-0.5'}>
                    {prefix}
                  </span>
                )}
                <span>{node.san}</span>
                {node.nag ? (
                  <span
                    className="text-[10px] font-bold"
                    style={{ color: isSelected ? '#18181b' : resolveNodeAnnotation(node)?.color }}
                  >
                    {node.nag}
                  </span>
                ) : node.classification && (
                  <ClassificationBadge
                    id={node.classification.id}
                    symbol={node.classification.symbol}
                    size="xs"
                    className="ml-0.5"
                  />
                )}
              </button>

              {node.comment && node.comment.trim() && (
                <span
                  onClick={() => onSelectNode(node.id)}
                  className="text-[11px] italic text-sky-300/90 bg-sky-950/35 border border-sky-800/40 px-1.5 py-0.5 rounded cursor-pointer hover:bg-sky-900/40 transition max-w-full break-words"
                  title="Comentário do lance"
                >
                  {node.comment}
                </span>
              )}

              {/* Se este lance teve alternativas (variantes irmãs), renderiza a árvore aninhada logo abaixo */}
              {siblingVariations.length > 0 && (
                <div className="w-full">
                  {siblingVariations.map((varStartId) => (
                    <VariationBranchView
                      key={varStartId}
                      tree={tree}
                      startNodeId={varStartId}
                      activeNodeId={activeNodeId}
                      onSelectNode={onSelectNode}
                      onPromoteNode={onPromoteNode}
                      onDeleteNode={onDeleteNode}
                      depthLevel={depthLevel + 1}
                    />
                  ))}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  // Modo de Operação: 100% Saragix Público Oficial
  const isPublicMode = true;
  const isLockedPublicBuild = true;

  // Navegação Principal e Sistema de Rotas / Links Compartilháveis
  const [currentRoute, setCurrentRoute] = useState(() => parseRoute());
  const [activePage, setActivePage] = useState(() => {
    const r = parseRoute();
    if (r.page) return r.page;
    return isPublicMode ? 'home' : 'overview';
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sincroniza a URL do navegador com a aba atual e lida com o histórico do navegador
  useEffect(() => {
    const handleHashChange = () => {
      const r = parseRoute();
      setCurrentRoute(r);
      if (r.page && r.page !== activePage) {
        setActivePage(r.page);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [activePage]);

  useEffect(() => {
    const r = parseRoute();
    if (activePage === 'broadcasts') {
      if (r.page !== 'broadcasts') {
        updateRoute({ page: 'broadcasts' });
      }
    } else {
      updateRoute({ page: activePage });
    }
  }, [activePage]);

  // Sistema Internacional de Idiomas (Português / English)
  const { t, language } = useTranslation();

  // Nome do Usuário (Padrão: "Usuário", 100% editável pelo visitante/jogador)
  const [playerName, setPlayerName] = useState(
    () => localStorage.getItem('saragix_user_display_name') || ''
  );
  const displayName = playerName.trim() || t('common.user');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Personalização de Cores do Tabuleiro (25 Temas + Cor Personalizada)
  const [boardThemeConfig, setBoardThemeConfig] = useState(() => loadSavedBoardTheme());
  const resolvedBoardTheme = useMemo(
    () => resolveBoardSquareStyles(boardThemeConfig),
    [boardThemeConfig]
  );

  const [pieceSetId, setPieceSetId] = useState(() => loadSavedPieceSet());
  const customPieces = useMemo(() => buildCustomPieces(pieceSetId), [pieceSetId]);

  const handleUpdatePieceSet = (newSetId) => {
    setPieceSetId(newSetId);
    savePieceSetConfig(newSetId);
  };

  const handleUpdateBoardTheme = (partial) => {
    setBoardThemeConfig((prev) => {
      const next = { ...prev, ...partial };
      saveBoardThemeConfig(next);
      return next;
    });
  };

  // =========================================================================
  // ESTADOS DA NOVA ABA PRINCIPAL: 🔍 ANÁLISE (Árvore de Lances + Editor PGN)
  // =========================================================================
  const [moveTree, setMoveTree] = useState(() => createEmptyTree());
  const [activeNodeId, setActiveNodeId] = useState('root');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [replaceMode, setReplaceMode] = useState(false); // false = Criar Variante ao jogar lance diferente | true = Substituir continuação

  // Sub-painel ativo na coluna direita de Análise: 'tree' | 'metadata' | 'pgn' | 'online' | 'open_db'
  const [analysisRightTab, setAnalysisRightTab] = useState('tree');
  const rightPanelRef = useRef(null);

  const switchAnalysisTab = (tabName) => {
    setAnalysisRightTab(tabName);
    // No celular, rola suavemente para o painel de conteúdo
    if (window.innerWidth < 1024 && rightPanelRef.current) {
      setTimeout(() => {
        rightPanelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  };

  // Executar lance selecionado na Base de Mestres do Lichess
  const handleSelectMasterMove = (san, uci) => {
    if (!uci || uci.length < 4 || isAnalyzing) return;
    const from = uci.slice(0, 2);
    const to = uci.slice(2, 4);
    const promotion = uci.slice(4, 5) || undefined;
    const res = addMoveToTree(
      moveTree,
      activeNodeId,
      { from, to, promotion },
      { replaceContinuation: replaceMode }
    );
    if (res.moveObj) {
      commitTreeChange(res.tree, res.nodeId);
    }
  };

  // Estados de Busca de Partidas Online (Lichess e Chess.com)
  const [onlinePlatform, setOnlinePlatform] = useState('lichess'); // 'lichess' | 'chesscom'
  const [onlineUsername, setOnlineUsername] = useState('');
  const [onlineGamesCount, setOnlineGamesCount] = useState(10);
  const [onlineLoading, setOnlineLoading] = useState(false);
  const [onlineError, setOnlineError] = useState('');
  const [fetchedOnlineGames, setFetchedOnlineGames] = useState([]);

  // Metadados Editáveis em Tempo Real na Aba Análise
  const [metaTitle, setMetaTitle] = useState('');
  const [metaWhite, setMetaWhite] = useState('Brancas');
  const [metaWhiteRating, setMetaWhiteRating] = useState('');
  const [metaWhiteTitle, setMetaWhiteTitle] = useState('');
  const [metaBlack, setMetaBlack] = useState('Pretas');
  const [metaBlackRating, setMetaBlackRating] = useState('');
  const [metaBlackTitle, setMetaBlackTitle] = useState('');
  const [isQuickEditWhite, setIsQuickEditWhite] = useState(false);
  const [isQuickEditBlack, setIsQuickEditBlack] = useState(false);
  const [metaUserColor, setMetaUserColor] = useState('w');
  const [metaResult, setMetaResult] = useState('*');
  const [metaDate, setMetaDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [metaEvent, setMetaEvent] = useState('');
  const [metaLocation, setMetaLocation] = useState('');
  const [metaRound, setMetaRound] = useState('');
  const [metaGameMode, setMetaGameMode] = useState('Online');
  const [metaTimeControl, setMetaTimeControl] = useState('Rápida');
  const [metaPlatform, setMetaPlatform] = useState('Lichess / Chess.com');
  const [metaOpening, setMetaOpening] = useState('');
  const [metaEco, setMetaEco] = useState('');
  const [metaTimeTrouble, setMetaTimeTrouble] = useState(false);
  const [metaIsImportant, setMetaIsImportant] = useState(false);
  const [metaNotes, setMetaNotes] = useState('');
  const [isBroadcastAnalysis, setIsBroadcastAnalysis] = useState(false);
  const [broadcastGameMeta, setBroadcastGameMeta] = useState(null);
  const [isMasterGamesModalOpen, setIsMasterGamesModalOpen] = useState(false);

  const [pgnInput, setPgnInput] = useState('');
  const [boardOrientation, setBoardOrientation] = useState('white');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [depth, setDepth] = useState(() => {
    try {
      const saved =
        localStorage.getItem('saragix_engine_depth') ||
        localStorage.getItem('saragix_live_max_depth');
      return saved ? Number(saved) : 16;
    } catch {
      return 16;
    }
  });
  const [errorMsg, setErrorMsg] = useState('');

  // Base de Dados de Partidas Reais
  const [savedGames, setSavedGames] = useState([]);
  const [currentGameId, setCurrentGameId] = useState(null);
  const [saveToast, setSaveToast] = useState('');
  const [analysisSelectedSquare, setAnalysisSelectedSquare] = useState(null);
  const [autoStartReviewPending, setAutoStartReviewPending] = useState(false);
  const [openDbSearch, setOpenDbSearch] = useState('');
  const [openDbFilterColor, setOpenDbFilterColor] = useState('ALL');
  const [openDbFilterResult, setOpenDbFilterResult] = useState('ALL');

  // Busca global no topo
  const [globalSearch, setGlobalSearch] = useState('');

  // Filtros Avançados da Biblioteca de Partidas
  const [filterPlayer, setFilterPlayer] = useState('');
  const [filterResult, setFilterResult] = useState('ALL');
  const [filterColor, setFilterColor] = useState('ALL');
  const [filterOpening, setFilterOpening] = useState('');
  const [filterEvent, setFilterEvent] = useState('');
  const [filterMode, setFilterMode] = useState('ALL');
  const [filterTimeControl, setFilterTimeControl] = useState('ALL');
  const [filterMinAccuracy, setFilterMinAccuracy] = useState('');
  const [filterDateFrom, setFilterDateFrom] = useState('');

  // Estados de Treinamento (Minhas Posições Críticas)
  const [trainingStats, setTrainingStats] = useState(() => getTrainingStats());
  const [selectedPuzzleIndex, setSelectedPuzzleIndex] = useState(0);
  const [trainingPhaseFilter, setTrainingPhaseFilter] = useState('ALL');
  const [puzzleBoardFen, setPuzzleBoardFen] = useState('');
  const [puzzleAttemptResult, setPuzzleAttemptResult] = useState(null);
  const [showPuzzleSolution, setShowPuzzleSolution] = useState(false);

  // Estados de Eventos & Minha Jornada
  const [selectedEventName, setSelectedEventName] = useState(null);
  const [eventsSubTab, setEventsSubTab] = useState('tournaments');
  const [milestones, setMilestones] = useState(() => getCareerMilestones());
  const [newMilestoneTitle, setNewMilestoneTitle] = useState('');
  const [newMilestoneDate, setNewMilestoneDate] = useState(() =>
    new Date().toISOString().slice(0, 10)
  );
  const [newMilestoneCategory, setNewMilestoneCategory] = useState('MARCO');
  const [newMilestoneDesc, setNewMilestoneDesc] = useState('');

  const engineRef = useRef(null);
  const cancelAnalysisRef = useRef(false);

  useEffect(() => {
    setSavedGames(getSavedGames());
    return () => {
      if (engineRef.current) {
        engineRef.current.terminate();
      }
    };
  }, []);

  // Lista linear da Linha Principal e caminho até o nó ativo
  const mainlineNodes = useMemo(() => getMainlineNodes(moveTree), [moveTree]);
  const activeNode = moveTree.nodes[activeNodeId] || moveTree.nodes[moveTree.rootId];

  // Atualiza abertura detectada automaticamente conforme os lances da linha principal mudam
  useEffect(() => {
    if (mainlineNodes.length > 0) {
      const detected = detectOpening(mainlineNodes);
      setMetaOpening(detected.name);
      setMetaEco(detected.eco);
    } else {
      setMetaOpening('');
      setMetaEco('');
    }
  }, [mainlineNodes]);

  // PGN construído em tempo real a partir da Árvore + Metadados
  const liveGeneratedPgn = useMemo(() => {
    return serializeTreeToPgn(
      moveTree,
      {
        Event: metaEvent || undefined,
        Site: metaLocation || metaPlatform || undefined,
        Date: metaDate ? metaDate.replace(/-/g, '.') : undefined,
        Round: metaRound || undefined,
        White: metaWhite || 'Brancas',
        Black: metaBlack || 'Pretas',
        Result: metaResult || '*',
        WhiteElo: metaWhiteRating || undefined,
        BlackElo: metaBlackRating || undefined,
        WhiteTitle: metaWhiteTitle || undefined,
        BlackTitle: metaBlackTitle || undefined,
        ECO: metaEco || undefined,
        Opening: metaOpening || undefined,
        TimeControl: metaTimeControl || undefined,
      },
      metaResult
    );
  }, [
    moveTree,
    metaEvent,
    metaLocation,
    metaPlatform,
    metaDate,
    metaRound,
    metaWhite,
    metaBlack,
    metaResult,
    metaWhiteRating,
    metaBlackRating,
    metaWhiteTitle,
    metaBlackTitle,
    metaEco,
    metaOpening,
    metaTimeControl,
  ]);

  // Refs para fechar menus e painéis abertos ao clicar em qualquer área fora deles
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);
  const topPlayerEditRef = useRef(null);
  const bottomPlayerEditRef = useRef(null);

  useEffect(() => {
    const handleOutsideMouseDown = (e) => {
      if (
        mobileMenuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        (!menuButtonRef.current || !menuButtonRef.current.contains(e.target))
      ) {
        setMobileMenuOpen(false);
      }

      const isTopBlack = boardOrientation === 'white';
      const isEditingTop = isTopBlack ? isQuickEditBlack : isQuickEditWhite;
      const setIsEditingTop = isTopBlack ? setIsQuickEditBlack : setIsQuickEditWhite;
      if (
        isEditingTop &&
        topPlayerEditRef.current &&
        !topPlayerEditRef.current.contains(e.target)
      ) {
        setIsEditingTop(false);
      }

      const isBottomWhite = boardOrientation === 'white';
      const isEditingBottom = isBottomWhite ? isQuickEditWhite : isQuickEditBlack;
      const setIsEditingBottom = isBottomWhite ? setIsQuickEditWhite : setIsQuickEditBlack;
      if (
        isEditingBottom &&
        bottomPlayerEditRef.current &&
        !bottomPlayerEditRef.current.contains(e.target)
      ) {
        setIsEditingBottom(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideMouseDown);
    return () => document.removeEventListener('mousedown', handleOutsideMouseDown);
  }, [mobileMenuOpen, isQuickEditWhite, isQuickEditBlack, boardOrientation]);

  // Exporta o PGN da partida como um arquivo .pgn para download
  const handleDownloadPgn = (pgnText = liveGeneratedPgn, customTitle = '') => {
    if (!pgnText || !pgnText.trim()) return;
    const baseName = (
      customTitle ||
      metaTitle ||
      `${metaWhite || 'brancas'}-vs-${metaBlack || 'pretas'}-${metaDate || 'partida'}`
    )
      .toLowerCase()
      .replace(/[^a-z0-9-_]+/gi, '-')
      .replace(/^-+|-+$/g, '');
    const fileName = `${baseName || 'saragix-partida'}.pgn`;
    const blob = new Blob([pgnText], { type: 'application/x-chess-pgn;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setSaveToast(`Arquivo ${fileName} exportado!`);
    setTimeout(() => setSaveToast(''), 2800);
  };

  // Helper para registrar mudança na árvore suportando Desfazer / Refazer (Undo / Redo)
  const commitTreeChange = (nextTree, nextNodeId) => {
    setUndoStack((prev) => [
      ...prev.slice(-30),
      { tree: cloneTree(moveTree), activeNodeId },
    ]);
    setRedoStack([]);
    setMoveTree(nextTree);
    if (nextNodeId) setActiveNodeId(nextNodeId);
  };

  const handleUndoTree = () => {
    if (undoStack.length === 0) return;
    const last = undoStack[undoStack.length - 1];
    setRedoStack((prev) => [
      ...prev,
      { tree: cloneTree(moveTree), activeNodeId },
    ]);
    setUndoStack((prev) => prev.slice(0, -1));
    setMoveTree(last.tree);
    setActiveNodeId(last.activeNodeId);
  };

  const handleRedoTree = () => {
    if (redoStack.length === 0) return;
    const next = redoStack[redoStack.length - 1];
    setUndoStack((prev) => [
      ...prev,
      { tree: cloneTree(moveTree), activeNodeId },
    ]);
    setRedoStack((prev) => prev.slice(0, -1));
    setMoveTree(next.tree);
    setActiveNodeId(next.activeNodeId);
  };

  // =========================================================================
  // AS 3 OPÇÕES DE ENTRADA DA ABA ANÁLISE:
  // 1) ➕ Novo PGN (Criar do Zero)
  // 2) 📥 Importar PGN
  // 3) 🗃️ Abrir da Base
  // =========================================================================
  const handleStartNewPgnFromScratch = () => {
    setErrorMsg('');
    setCurrentGameId(null);
    setIsBroadcastAnalysis(false);
    setBroadcastGameMeta(null);
    setUndoStack([]);
    setRedoStack([]);
    setMoveTree(createEmptyTree());
    setActiveNodeId('root');
    setMetaTitle('');
    setMetaWhite('Brancas');
    setMetaWhiteRating('');
    setMetaWhiteTitle('');
    setMetaBlack('Pretas');
    setMetaBlackRating('');
    setMetaBlackTitle('');
    setIsQuickEditWhite(false);
    setIsQuickEditBlack(false);
    setMetaUserColor('w');
    setBoardOrientation('white');
    setMetaResult('*');
    setMetaDate(new Date().toISOString().slice(0, 10));
    setMetaEvent('');
    setMetaLocation('');
    setMetaRound('');
    setMetaGameMode('Online');
    setMetaTimeControl('Rápida');
    setMetaPlatform('');
    setMetaTimeTrouble(false);
    setMetaIsImportant(false);
    setMetaNotes('');
    setPgnInput('');
    setAnalysisRightTab('tree');
    setActivePage('analysis');
  };

  // Carrega posição customizada montada no Editor de Tabuleiro diretamente para Análise
  const handleLoadCustomPositionIntoAnalysis = (customFen, orientation = 'white') => {
    setErrorMsg('');
    setCurrentGameId(null);
    setIsBroadcastAnalysis(false);
    setBroadcastGameMeta(null);
    setUndoStack([]);
    setRedoStack([]);
    setMoveTree(createEmptyTree(customFen));
    setActiveNodeId('root');
    setMetaTitle('Análise de Posição');
    setMetaWhite('Brancas');
    setMetaWhiteRating('');
    setMetaWhiteTitle('');
    setMetaBlack('Pretas');
    setMetaBlackRating('');
    setMetaBlackTitle('');
    setIsQuickEditWhite(false);
    setIsQuickEditBlack(false);
    const sideToMove = customFen.split(' ')[1] || 'w';
    setMetaUserColor(sideToMove);
    setBoardOrientation(orientation || (sideToMove === 'b' ? 'black' : 'white'));
    setMetaResult('*');
    setMetaDate(new Date().toISOString().slice(0, 10));
    setMetaEvent('Editor de Tabuleiro');
    setMetaLocation('');
    setMetaRound('');
    setMetaGameMode('Análise');
    setMetaTimeControl('');
    setMetaPlatform('');
    setMetaTimeTrouble(false);
    setMetaIsImportant(false);
    setMetaNotes('');
    setPgnInput('');
    setAnalysisRightTab('tree');
    setActivePage('analysis');
  };

  const handleImportPgnText = (rawPgn, existingId = null, options = {}) => {
    setErrorMsg('');
    if (!rawPgn || !rawPgn.trim()) {
      setErrorMsg('Cole um PGN válido para importar.');
      return;
    }
    try {
      const { tree, headers: h, lastMainlineNodeId } = parsePgnToTree(rawPgn);
      const mainNodes = getMainlineNodes(tree);
      if (mainNodes.length === 0) {
        setErrorMsg('Nenhum lance válido encontrado neste PGN.');
        return;
      }

      const fromBroadcast = Boolean(options?.isFromBroadcast);
      const bGame = options?.broadcastGame || null;
      setIsBroadcastAnalysis(fromBroadcast);
      setBroadcastGameMeta(bGame);

      const detected = detectOpening(mainNodes);
      setUndoStack([]);
      setRedoStack([]);
      setMoveTree(tree);
      setActiveNodeId(lastMainlineNodeId || 'root');
      setCurrentGameId(existingId);

      setMetaWhite(h.White || bGame?.white || 'Brancas');
      setMetaWhiteRating(h.WhiteElo || bGame?.whiteElo || '');
      setMetaWhiteTitle(h.WhiteTitle || bGame?.whiteTitle || '');
      setMetaBlack(h.Black || bGame?.black || 'Pretas');
      setMetaBlackRating(h.BlackElo || bGame?.blackElo || '');
      setMetaBlackTitle(h.BlackTitle || bGame?.blackTitle || '');
      setMetaResult(h.Result || bGame?.result || '*');
      setMetaEvent(h.Event || '');
      setMetaLocation(h.Site || '');
      setMetaRound(h.Round || '');
      setMetaDate(
        h.Date && !h.Date.includes('?')
          ? h.Date.replace(/\./g, '-')
          : new Date().toISOString().slice(0, 10)
      );
      setMetaOpening(h.Opening || detected.name);
      setMetaEco(h.ECO || detected.eco);
      setAnalysisRightTab('tree');
      setActivePage('analysis');
    } catch {
      setErrorMsg('PGN inválido! Verifique se a notação está correta.');
    }
  };

  // Buscar partidas online por Nick do Lichess ou Chess.com
  const handleFetchOnlineGames = async (e) => {
    if (e) e.preventDefault();
    const user = onlineUsername.trim();
    if (!user) {
      setOnlineError('Digite o nick de um jogador para buscar.');
      return;
    }
    setOnlineLoading(true);
    setOnlineError('');
    try {
      let games = [];
      if (onlinePlatform === 'lichess') {
        games = await fetchLichessUserGames(user, onlineGamesCount);
      } else {
        games = await fetchChessComUserGames(user, onlineGamesCount);
      }
      if (games.length === 0) {
        setOnlineError(`Nenhuma partida encontrada recentemente para "${user}".`);
      }
      setFetchedOnlineGames(games);
    } catch (err) {
      setOnlineError(err.message || 'Erro ao buscar partidas.');
    } finally {
      setOnlineLoading(false);
    }
  };

  const handleSelectOnlineGame = (game) => {
    if (!game.pgn) {
      setOnlineError('Esta partida não possui PGN disponível.');
      return;
    }
    handleImportPgnText(game.pgn);
    setMetaPlatform(game.platform);
    setMetaEvent(`${game.platform} • ${game.speed}`);
    setMetaTimeControl(game.timeControl || game.speed);
    setMetaUserColor(game.userColor || 'w');
    setBoardOrientation(game.userColor === 'b' ? 'black' : 'white');
    setSaveToast(`Partida de ${game.white} vs ${game.black} importada!`);
    setTimeout(() => setSaveToast(''), 3000);
  };

  const handleLoadSavedGame = (savedGame) => {
    setErrorMsg('');
    setIsBroadcastAnalysis(false);
    setBroadcastGameMeta(null);
    setUndoStack([]);
    setRedoStack([]);
    setPgnInput(savedGame.pgn || '');

    let loadedTree = savedGame.moveTree;
    if (!loadedTree || !loadedTree.nodes) {
      if (savedGame.moves && savedGame.moves.length > 0) {
        loadedTree = buildTreeFromSavedMoves(savedGame.moves);
      } else if (savedGame.pgn) {
        loadedTree = parsePgnToTree(savedGame.pgn).tree;
      } else {
        loadedTree = createEmptyTree();
      }
    }

    setMoveTree(loadedTree);
    setActiveNodeId('root');
    setCurrentGameId(savedGame.id);

    setMetaTitle(savedGame.title || '');
    setMetaWhite(savedGame.white || 'Brancas');
    setMetaWhiteTitle(savedGame.whiteTitle || '');
    setMetaWhiteRating(savedGame.whiteRating || '');
    setMetaBlack(savedGame.black || 'Pretas');
    setMetaBlackTitle(savedGame.blackTitle || '');
    setMetaBlackRating(savedGame.blackRating || '');
    setMetaUserColor(savedGame.userColor || 'w');
    setBoardOrientation(savedGame.userColor === 'b' ? 'black' : 'white');
    setMetaResult(savedGame.result || '*');
    setMetaDate(savedGame.date || new Date().toISOString().slice(0, 10));
    setMetaEvent(savedGame.event || '');
    setMetaLocation(savedGame.eventLocation || '');
    setMetaRound(savedGame.round || '');
    setMetaPlatform(savedGame.platform || '');
    setMetaGameMode(savedGame.gameMode || 'Online');
    setMetaTimeControl(savedGame.timeControl || 'Rápida');
    setMetaTimeTrouble(Boolean(savedGame.timeTrouble));
    setMetaIsImportant(Boolean(savedGame.isImportant));
    setMetaOpening(savedGame.opening || '');
    setMetaEco(savedGame.eco || '');
    setMetaNotes(savedGame.notes || '');

    setAnalysisRightTab('tree');
    setActivePage('analysis');
  };

  // Jogar um lance diretamente no tabuleiro da aba Análise (cria PGN, cria Variante ou Substitui)
  const handleAnalysisBoardDrop = (sourceSquare, targetSquare, piece) => {
    if (isAnalyzing) return false;
    setAnalysisSelectedSquare(null);
    // Detecta qual peça foi escolhida na promoção (ex: 'wQ' -> 'q', 'wN' -> 'n', 'wR' -> 'r', 'wB' -> 'b')
    const promoChar = piece ? piece[1]?.toLowerCase() : 'q';
    let isPromo =
      ((piece?.startsWith('w') && targetSquare[1] === '8') ||
        (piece?.startsWith('b') && targetSquare[1] === '1')) &&
      ['q', 'r', 'b', 'n', 'p'].includes(promoChar);

    if (!piece) {
      try {
        const g = new Chess(currentFen);
        const p = g.get(sourceSquare);
        if (
          p?.type === 'p' &&
          ((p.color === 'w' && targetSquare[1] === '8') ||
            (p.color === 'b' && targetSquare[1] === '1'))
        ) {
          isPromo = true;
        }
      } catch {
        // ignore
      }
    }

    const res = addMoveToTree(
      moveTree,
      activeNodeId,
      {
        from: sourceSquare,
        to: targetSquare,
        promotion: isPromo ? (promoChar === 'p' ? 'q' : promoChar) : undefined,
      },
      { replaceContinuation: replaceMode }
    );

    if (!res.moveObj) return false;
    commitTreeChange(res.tree, res.nodeId);
    return true;
  };

  // Mover peça por toque ou clique (mostrando os pontinhos dos lances possíveis)
  const handleAnalysisSquareClick = (square) => {
    if (isAnalyzing) return;

    if (analysisSelectedSquare && analysisSelectedSquare !== square) {
      const isLegalDest = analysisLegalMoves.some((m) => m.to === square);
      if (isLegalDest) {
        let pieceCode = undefined;
        try {
          const g = new Chess(currentFen);
          const p = g.get(analysisSelectedSquare);
          if (p) {
            pieceCode = `${p.color}${p.type.toUpperCase()}`;
          }
        } catch {
          // ignore
        }
        const moved = handleAnalysisBoardDrop(analysisSelectedSquare, square, pieceCode);
        if (moved) {
          setAnalysisSelectedSquare(null);
          return;
        }
      }
    }

    try {
      const g = new Chess(currentFen);
      const pieceOnSq = g.get(square);
      if (pieceOnSq && pieceOnSq.color === g.turn()) {
        setAnalysisSelectedSquare((prev) => (prev === square ? null : square));
      } else {
        setAnalysisSelectedSquare(null);
      }
    } catch {
      setAnalysisSelectedSquare(null);
    }
  };

  // Atualiza comentário textual de um lance específico na Árvore
  const handleUpdateNodeComment = (nodeId, newComment) => {
    if (!nodeId || nodeId === 'root') return;
    setMoveTree((prev) => {
      const node = prev.nodes[nodeId];
      if (!node) return prev;
      const next = cloneTree(prev);
      next.nodes[nodeId] = {
        ...next.nodes[nodeId],
        comment: newComment,
      };
      return next;
    });
  };

  // Exporta todas as partidas salvas (ou lista filtrada) em um único arquivo .pgn em lote
  const handleExportAllSavedGamesPgn = (gamesList = savedGames) => {
    if (!gamesList || gamesList.length === 0) return;
    const blocks = gamesList
      .map((g) => {
        if (g.pgn && g.pgn.trim()) return g.pgn.trim();
        if (g.moveTree) {
          return serializeTreeToPgn(
            g.moveTree,
            {
              Event: g.event || 'Partida Salva',
              Site: g.platform || 'Saragix',
              Date: (g.date || '').replace(/-/g, '.'),
              White: g.white || 'Brancas',
              Black: g.black || 'Pretas',
              Result: g.result || '*',
              ECO: g.eco || undefined,
              Opening: g.opening || undefined,
            },
            g.result || '*'
          );
        }
        return '';
      })
      .filter(Boolean);

    if (blocks.length === 0) return;
    const combinedPgn = blocks.join('\n\n\n');
    const dateStamp = new Date().toISOString().slice(0, 10);
    handleDownloadPgn(combinedPgn, `saragix-base-completa-${dateStamp}`);
    setSaveToast(`${blocks.length} partida(s) exportada(s) em arquivo .PGN único!`);
    setTimeout(() => setSaveToast(''), 3500);
  };

  // Navegação e Atalhos Avançados pelo Teclado na Árvore de Lances
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activePage !== 'analysis') return;
      if (
        e.target.tagName === 'TEXTAREA' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'SELECT' ||
        e.target.isContentEditable
      )
        return;

      if (e.ctrlKey || e.metaKey || e.altKey) return;

      const curr = moveTree.nodes[activeNodeId];
      if (!curr) return;

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (curr.parentId) setActiveNodeId(curr.parentId);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (curr.childrenIds && curr.childrenIds.length > 0) {
          setActiveNodeId(curr.childrenIds[0]);
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const parent = curr.parentId ? moveTree.nodes[curr.parentId] : null;
        if (parent && parent.childrenIds && parent.childrenIds.length > 1) {
          const idx = parent.childrenIds.indexOf(curr.id);
          const prevSiblingId =
            idx > 0
              ? parent.childrenIds[idx - 1]
              : parent.childrenIds[parent.childrenIds.length - 1];
          setActiveNodeId(prevSiblingId);
        } else {
          setActiveNodeId(moveTree.rootId);
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        const parent = curr.parentId ? moveTree.nodes[curr.parentId] : null;
        if (parent && parent.childrenIds && parent.childrenIds.length > 1) {
          const idx = parent.childrenIds.indexOf(curr.id);
          const nextSiblingId =
            idx < parent.childrenIds.length - 1
              ? parent.childrenIds[idx + 1]
              : parent.childrenIds[0];
          setActiveNodeId(nextSiblingId);
        } else {
          const main = getMainlineNodes(moveTree);
          if (main.length > 0) setActiveNodeId(main[main.length - 1].id);
        }
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActiveNodeId(moveTree.rootId);
      } else if (e.key === 'End') {
        e.preventDefault();
        let cursor = curr;
        while (cursor.childrenIds && cursor.childrenIds.length > 0) {
          const nextNode = moveTree.nodes[cursor.childrenIds[0]];
          if (!nextNode) break;
          cursor = nextNode;
        }
        setActiveNodeId(cursor.id);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        setBoardOrientation((o) => (o === 'white' ? 'black' : 'white'));
      } else if (e.key === ' ') {
        e.preventDefault();
        setLiveEngineOn((v) => !v);
      } else if ((e.key === 'p' || e.key === 'P') && activeNodeId !== moveTree.rootId && !isAnalyzing) {
        e.preventDefault();
        const next = promoteVariationToMainline(moveTree, activeNodeId);
        commitTreeChange(next, activeNodeId);
      } else if ((e.key === 'Delete' || e.key === 'Backspace') && activeNodeId !== moveTree.rootId && !isAnalyzing) {
        e.preventDefault();
        const res = deleteNodeAndSubtree(moveTree, activeNodeId);
        commitTreeChange(res.tree, res.nextActiveId);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activePage, moveTree, activeNodeId, isAnalyzing]);

  // Salvar Partida (com Árvore de Variantes + Metadados Completos) na Base de Dados
  const handleSaveCurrentAnalysisToDb = () => {
    if (mainlineNodes.length === 0) {
      setErrorMsg('Faça pelo menos um lance no tabuleiro antes de salvar a partida.');
      return;
    }
    setErrorMsg('');

    const isAnalyzed = mainlineNodes.some((m) => m.classification !== null);
    const detectedOp = detectOpening(mainlineNodes);
    const wAcc = calculateAccuracy(mainlineNodes, 'w');
    const bAcc = calculateAccuracy(mainlineNodes, 'b');

    const { games, savedRecord } = saveGameToDb({
      id: currentGameId,
      title: metaTitle.trim() || `${metaWhite || 'Brancas'} vs ${metaBlack || 'Pretas'}`,
      white: metaWhite.trim() || 'Brancas',
      whiteTitle: metaWhiteTitle,
      whiteRating: metaWhiteRating.trim(),
      black: metaBlack.trim() || 'Pretas',
      blackTitle: metaBlackTitle,
      blackRating: metaBlackRating.trim(),
      userColor: metaUserColor,
      result: metaResult,
      event: metaEvent.trim() || 'Partida Casual',
      eventLocation: metaLocation.trim(),
      round: metaRound.trim(),
      platform: metaPlatform.trim(),
      date: metaDate.trim() || new Date().toISOString().slice(0, 10),
      gameMode: metaGameMode,
      timeControl: metaTimeControl,
      timeTrouble: metaTimeTrouble,
      isImportant: metaIsImportant,
      opening: metaOpening.trim() || detectedOp.name,
      eco: metaEco || detectedOp.eco,
      notes: metaNotes.trim(),
      pgn: liveGeneratedPgn,
      moves: mainlineNodes,
      moveTree,
      whiteAccuracy: wAcc,
      blackAccuracy: bAcc,
      isAnalyzed,
    });

    setSavedGames(games);
    setCurrentGameId(savedRecord.id);
    setSaveToast('Partida e variantes salvas na Base de Dados!');
    setTimeout(() => setSaveToast(''), 3500);
  };

  const handleDeleteSavedGame = (id, e) => {
    e.stopPropagation();
    const updated = deleteGameFromDb(id);
    setSavedGames(updated);
    if (currentGameId === id) {
      setCurrentGameId(null);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMsg('');
    const fileName = file.name || '';
    const ext = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();
    if (ext && !['.pgn', '.txt'].includes(ext)) {
      setErrorMsg(`Formato de arquivo "${ext}" não suportado. Por favor, envie um arquivo .pgn ou .txt de xadrez.`);
      e.target.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        setPgnInput(content);
        handleImportPgnText(content);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Analisar a Linha Principal (ou caminho atual) com Stockfish
  const runFullAnalysis = async () => {
    const targetPath = getMainlineNodes(moveTree);
    if (targetPath.length === 0 || isAnalyzing) return;
    setIsAnalyzing(true);
    setAnalysisProgress(0);
    cancelAnalysisRef.current = false;

    try {
      if (!engineRef.current) {
        engineRef.current = new StockfishEngine();
      }
      await engineRef.current.init();
      engineRef.current.resetGame();

      const nextTree = cloneTree(moveTree);

      let prevResult = await engineRef.current.evaluateFen(
        targetPath[0].fenBefore || INITIAL_FEN,
        depth,
        0 // Tempo irrestrito para atingir a profundidade com máxima precisão
      );

      let inBookStreak = true;

      for (let i = 0; i < targetPath.length; i++) {
        if (cancelAnalysisRef.current) break;

        const node = targetPath[i];
        const currResult = await engineRef.current.evaluateFen(
          node.fenAfter,
          depth,
          0 // Tempo irrestrito para atingir a profundidade com máxima precisão
        );

        let bestMoveSan = null;
        if (prevResult.bestMoveUci) {
          try {
            const helperGame = new Chess(node.fenBefore);
            const from = prevResult.bestMoveUci.slice(0, 2);
            const to = prevResult.bestMoveUci.slice(2, 4);
            const promotion = prevResult.bestMoveUci.slice(4, 5) || undefined;
            const moveObj = helperGame.move({ from, to, promotion });
            if (moveObj) bestMoveSan = moveObj.san;
          } catch {
            bestMoveSan = prevResult.bestMoveUci;
          }
        }

        let isExactBook = isBookMoveByFen(node.fenBefore, node.fenAfter);
        let isNovelty = false;

        // Se o livro local terminou, mas a partida estava em teoria nos primeiros lances:
        // Consulta em segundo plano EXCLUSIVAMENTE a Base de Mestres da FIDE (Lichess Masters) para teoria profunda ou novidade
        if (!isExactBook && inBookStreak && i < 50) {
          try {
            const masterStatus = await checkMasterTheoryStatus(
              node.fenBefore,
              node.uci,
              node.san,
              node.fenAfter
            );
            if (masterStatus.isMasterBook) {
              isExactBook = true;
            } else if (masterStatus.isNovelty) {
              isNovelty = true;
            }
          } catch {
            // fallback gracioso
          }
        }

        // Verifica se este lance aplicou xeque-mate diretamente
        let isDeliveringCheckmate = false;
        try {
          if (node.san && node.san.includes('#')) {
            isDeliveringCheckmate = true;
          } else {
            const checkGame = new Chess(node.fenAfter);
            isDeliveringCheckmate = checkGame.isCheckmate();
          }
        } catch {
          // fallback
        }

        const classification = classifyMove({
          prevEvalWhiteCp: prevResult.evalWhiteCp,
          currEvalWhiteCp: currResult.evalWhiteCp,
          bestMoveUci: prevResult.bestMoveUci,
          playedMoveUci: node.uci,
          turnColor: node.color,
          moveNumber: node.moveNumber,
          fenBefore: node.fenBefore,
          isBookMove: isExactBook,
          isNovelty,
          inBookStreak,
          isDeliveringCheckmate,
        });

        // Assim que a partida sai do Livro (mesmo que através de uma Novidade Teórica), encerra o streak de livro
        if (classification.id !== 'BOOK') {
          inBookStreak = false;
        }

        nextTree.nodes[node.id] = {
          ...nextTree.nodes[node.id],
          evalWhiteCp: currResult.evalWhiteCp,
          mateWhite: currResult.mateWhite,
          bestMoveUci: prevResult.bestMoveUci,
          bestMoveSan,
          classification,
        };

        setMoveTree(cloneTree(nextTree));
        setAnalysisProgress(Math.round(((i + 1) / targetPath.length) * 100));

        prevResult = currResult;
      }

      if (!cancelAnalysisRef.current && currentGameId) {
        const existing = savedGames.find((g) => g.id === currentGameId);
        if (existing) {
          const updatedMain = getMainlineNodes(nextTree);
          const wAcc = calculateAccuracy(updatedMain, 'w');
          const bAcc = calculateAccuracy(updatedMain, 'b');
          const { games } = saveGameToDb({
            ...existing,
            moves: updatedMain,
            moveTree: nextTree,
            whiteAccuracy: wAcc,
            blackAccuracy: bAcc,
            isAnalyzed: true,
          });
          setSavedGames(games);
        }
      }
    } catch (err) {
      setErrorMsg('Erro ao inicializar o motor Stockfish: ' + err.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const stopAnalysis = () => {
    cancelAnalysisRef.current = true;
    if (engineRef.current) {
      engineRef.current.stop();
    }
    setIsAnalyzing(false);
  };

  // Posição atual no Tabuleiro de Análise
  const currentMove = activeNode && activeNode.id !== 'root' ? activeNode : null;
  const currentFen = activeNode?.fenAfter || INITIAL_FEN;

  // Limpa casa selecionada por toque/clique quando a posição ou nó ativo muda
  useEffect(() => {
    setAnalysisSelectedSquare(null);
  }, [currentFen, activeNodeId]);

  const analysisLegalMoves = useMemo(() => {
    if (!analysisSelectedSquare || isAnalyzing) return [];
    try {
      const g = new Chess(currentFen);
      return g.moves({ square: analysisSelectedSquare, verbose: true }) || [];
    } catch {
      return [];
    }
  }, [analysisSelectedSquare, currentFen, isAnalyzing]);

  // Deteccao de Repeticao (2-fold e 3-fold) e Regra dos 50 lances FIDE
  const repetitionStatus = useMemo(() => {
    const pathToNode = getPathToNode(moveTree, activeNodeId);
    return detectRepetitionAnd50Move(pathToNode, currentFen);
  }, [moveTree, activeNodeId, currentFen]);

  // ===== Configurações da Engine em Tempo Real (Compartilhadas com a Revisão) =====
  const [liveEngineOn, setLiveEngineOn] = useState(() => {
    try { return localStorage.getItem('saragix_live_engine') !== 'off'; } catch { return true; }
  });
  const [liveMoveTimeMs, setLiveMoveTimeMs] = useState(() => {
    try {
      const saved = localStorage.getItem('saragix_live_move_time');
      return saved !== null && saved !== '' ? Number(saved) : 500;
    } catch {
      return 500;
    }
  });
  const [liveMultiPv, setLiveMultiPv] = useState(() => {
    try {
      const saved = localStorage.getItem('saragix_multi_pv');
      return saved !== null && saved !== '' ? Number(saved) : 3;
    } catch {
      return 3;
    }
  });
  const [showLiveSettings, setShowLiveSettings] = useState(false);
  const [liveEval, setLiveEval] = useState(null);
  const liveEngineRef = useRef(null);
  const liveCacheRef = useRef(new Map());

  useEffect(() => {
    try {
      localStorage.setItem('saragix_live_engine', liveEngineOn ? 'on' : 'off');
      localStorage.setItem('saragix_engine_depth', String(depth));
      localStorage.setItem('saragix_live_move_time', String(liveMoveTimeMs));
      localStorage.setItem('saragix_multi_pv', String(liveMultiPv));
    } catch { /* ignore */ }
  }, [liveEngineOn, depth, liveMoveTimeMs, liveMultiPv]);

  useEffect(() => {
    if (!liveEngineOn || activePage !== 'analysis' || isAnalyzing) {
      liveEngineRef.current?.stop();
      return;
    }
    if (!liveEngineRef.current) liveEngineRef.current = new LiveEngine();
    const fen = currentFen;
    const parentFen = currentMove?.fenBefore;
    const cache = liveCacheRef.current;
    
    // Se o lance atual já tiver atingido a profundidade escolhida no cache, usa diretamente sem recalcular
    const cachedCurrent = cache.get(fen);
    if (cachedCurrent && cachedCurrent.depth >= depth) {
      setLiveEval({ ...cachedCurrent, fen, done: true });
      return;
    }

    setLiveEval((prev) => (prev?.fen === fen ? prev : null));
    const runCurrent = () => {
      liveEngineRef.current.analyze(
        fen,
        depth,
        (info) => {
          cache.set(fen, info);
          setLiveEval((old) => ({ ...old, ...info, fen }));
        },
        null,
        liveMoveTimeMs,
        liveMultiPv
      );
    };
    const t = setTimeout(() => {
      // Posição anterior é avaliada com a MESMA profundidade da revisão
      if (parentFen && !((cache.get(parentFen)?.depth || 0) >= depth)) {
        liveEngineRef.current.analyze(
          parentFen,
          depth,
          (info) => cache.set(parentFen, info),
          runCurrent,
          liveMoveTimeMs,
          1
        );
      } else {
        runCurrent();
      }
    }, 120);
    return () => clearTimeout(t);
  }, [currentFen, liveEngineOn, activePage, isAnalyzing, depth, liveMoveTimeMs, liveMultiPv]);

  useEffect(() => () => liveEngineRef.current?.terminate(), []);

  const liveActive = liveEngineOn && liveEval && liveEval.fen === currentFen && liveEval.evalWhiteCp !== null;

  // Classificação em tempo real do lance atual (compara com a avaliação da posição anterior)
  // Utiliza os exatos mesmos parâmetros da revisão da partida (ECO / Lichess Masters / EP Model / Sacrifício Brilhante)
  const liveClassification = useMemo(() => {
    // 1) Se a partida já passou pela revisão oficial ou o lance já tem seu veredito fixo, NÃO altera
    if (currentMove?.classification) return currentMove.classification;

    // 2) Aguarda a análise alcançar a profundidade configurada ou finalizar o lance para não oscilar
    if (!liveActive || !currentMove || (liveEval.depth < depth && !liveEval.done)) return null;

    const prev = liveCacheRef.current.get(currentMove.fenBefore);
    if (!prev || prev.evalWhiteCp === null || prev.evalWhiteCp === undefined) return null;

    try {
      // 3) Detecta teoria de aberturas exatamente com os mesmos parâmetros da revisão (exclusivo Base de Mestres)
      const pathToNode = getPathToNode(moveTree, currentMove.id);
      let isExactBook = isBookMoveByFen(currentMove.fenBefore, currentMove.fenAfter);
      let isNovelty = false;
      const movesBefore = pathToNode.filter((n) => n.id !== currentMove.id);
      const inBookStreak =
        movesBefore.length === 0 ||
        movesBefore.every(
          (n) =>
            isBookMoveByFen(n.fenBefore, n.fenAfter) ||
            n.classification?.id === 'BOOK'
        );

      // Se o livro local terminou, consulta o cache síncrono da Base de Mestres (0ms)
      if (!isExactBook && inBookStreak) {
        const cachedMaster = getMasterTheoryStatusFromCache(
          currentMove.fenBefore,
          currentMove.uci,
          currentMove.san,
          currentMove.fenAfter
        );
        if (cachedMaster) {
          if (cachedMaster.isMasterBook) {
            isExactBook = true;
          } else if (cachedMaster.isNovelty) {
            isNovelty = true;
          }
        }
      }

      // 4) Detecta xeque-mate diretamente
      let isDeliveringCheckmate = false;
      try {
        if (currentMove.san && currentMove.san.includes('#')) {
          isDeliveringCheckmate = true;
        } else {
          const checkGame = new Chess(currentMove.fenAfter);
          isDeliveringCheckmate = checkGame.isCheckmate();
        }
      } catch {
        // fallback
      }

      // 5) Classifica com a exata mesma função e parâmetros do Chess.com da revisão
      return classifyMove({
        prevEvalWhiteCp: prev.evalWhiteCp,
        currEvalWhiteCp: liveEval.evalWhiteCp,
        bestMoveUci: prev.bestMoveUci,
        playedMoveUci: currentMove.uci,
        turnColor: currentMove.color,
        moveNumber: currentMove.moveNumber,
        fenBefore: currentMove.fenBefore,
        isBookMove: isExactBook,
        isNovelty,
        inBookStreak,
        isDeliveringCheckmate,
      });
    } catch {
      return null;
    }
  }, [liveActive, liveEval, currentMove, moveTree, depth]);

  // Fixa o veredito no nó da árvore assim que atinge a profundidade alvo da análise, impedindo oscilações
  useEffect(() => {
    if (!liveClassification || !currentMove || currentMove.classification) return;
    if (!liveEval || (liveEval.depth < depth && !liveEval.done)) return;

    setMoveTree((prevTree) => {
      const node = prevTree.nodes[currentMove.id];
      if (!node || node.classification) return prevTree;
      const nextTree = cloneTree(prevTree);
      const target = nextTree.nodes[currentMove.id];
      if (target) {
        target.classification = liveClassification;
        target.evalWhiteCp = liveEval.evalWhiteCp;
        target.mateWhite = liveEval.mateWhite;
        const prev = liveCacheRef.current.get(currentMove.fenBefore);
        if (prev?.bestMoveUci) {
          target.bestMoveUci = prev.bestMoveUci;
        }
      }
      return nextTree;
    });
  }, [liveClassification, currentMove, liveEval, depth]);

  // Verifica assincronamente na Base de Mestres FIDE o lance atual para garantir que lances jogados por Mestres
  // nunca fiquem marcados como Novidade Teórica por falta de cache prévio
  useEffect(() => {
    if (!currentMove || currentMove.ply > 50) return;
    let active = true;

    const pathToNode = getPathToNode(moveTree, currentMove.id);
    const movesBefore = pathToNode.filter((n) => n.id !== currentMove.id);
    const inBookStreak =
      movesBefore.length === 0 ||
      movesBefore.every(
        (n) =>
          isBookMoveByFen(n.fenBefore, n.fenAfter) ||
          n.classification?.id === 'BOOK'
      );

    if (!inBookStreak && currentMove.classification?.id !== 'NOVELTY') return;

    checkMasterTheoryStatus(
      currentMove.fenBefore,
      currentMove.uci,
      currentMove.san,
      currentMove.fenAfter
    ).then((status) => {
      if (!active || !status) return;
      if (status.isMasterBook && currentMove.classification?.id !== 'BOOK') {
        setMoveTree((prevTree) => {
          const target = prevTree.nodes[currentMove.id];
          if (!target || target.classification?.id === 'BOOK') return prevTree;
          const nextTree = cloneTree(prevTree);
          nextTree.nodes[currentMove.id] = {
            ...target,
            classification: { ...MOVE_CLASSIFICATIONS.BOOK, cpLoss: 0, winLoss: 0 },
          };
          return nextTree;
        });
      }
    });

    return () => {
      active = false;
    };
  }, [currentMove?.id]);

  const livePvSan = useMemo(() => {
    if (!liveActive || !liveEval.pv?.length) return '';
    try {
      const g = new Chess(currentFen);
      const out = [];
      for (const uci of liveEval.pv.slice(0, 8)) {
        const mv = g.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci.slice(4, 5) || undefined });
        if (!mv) break;
        const num = g.moveNumber();
        out.push(mv.color === 'w' ? `${num}. ${mv.san}` : (out.length === 0 ? `${num - 1}... ${mv.san}` : mv.san));
      }
      return out.join(' ');
    } catch { return ''; }
  }, [liveActive, liveEval, currentFen]);

  // Detecção de xeque e xeque-mate para o tabuleiro da análise
  const checkStatus = useMemo(() => {
    try {
      const g = new Chess(currentFen);
      const inCheck = g.inCheck();
      const isCheckmate = g.isCheckmate();
      if (!inCheck && !isCheckmate) {
        return { inCheck: false, isCheckmate: false, checkSquare: null, matedColor: null };
      }
      const turn = g.turn(); // 'w' | 'b' - jogador sob xeque/mate
      let square = null;
      const b = g.board();
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const piece = b[r][c];
          if (piece && piece.type === 'k' && piece.color === turn) {
            square = piece.square;
            break;
          }
        }
        if (square) break;
      }
      return { inCheck, isCheckmate, checkSquare: square, matedColor: turn };
    } catch {
      return { inCheck: false, isCheckmate: false, checkSquare: null, matedColor: null };
    }
  }, [currentFen]);

  const checkSquareBadgePos = useMemo(() => {
    if (!checkStatus.checkSquare) return null;
    const sq = checkStatus.checkSquare;
    const file = sq.charCodeAt(0) - 97;
    const rank = parseInt(sq[1], 10) - 1;
    const col = boardOrientation === 'white' ? file : 7 - file;
    const row = boardOrientation === 'white' ? 7 - rank : rank;
    return { col, row };
  }, [checkStatus.checkSquare, boardOrientation]);

  // Se o lance já foi revisado pela revisão oficial, mantém a avaliação congelada e definitiva gravada na partida.
  // Apenas lances ainda não revisados mostram a avaliação ao vivo flutuante da engine.
  const evalWhiteCp = currentMove?.evalWhiteCp !== null && currentMove?.evalWhiteCp !== undefined
    ? currentMove.evalWhiteCp
    : (liveActive ? liveEval.evalWhiteCp : 20);

  const whiteBarPercent = useMemo(() => {
    if (checkStatus.isCheckmate) {
      return checkStatus.matedColor === 'w' ? 0 : 100;
    }
    if (currentMove?.mateWhite !== null && currentMove?.mateWhite !== undefined) {
      if (currentMove.mateWhite === 0) {
        return currentMove.color === 'w' ? 100 : 0;
      }
      return currentMove.mateWhite > 0 ? 100 : 0;
    }
    if (liveActive && liveEval?.mateWhite !== null && liveEval?.mateWhite !== undefined) {
      if (liveEval.mateWhite === 0) {
        return checkStatus.matedColor === 'w' ? 0 : 100;
      }
      return liveEval.mateWhite > 0 ? 100 : 0;
    }
    return cpToWinPercent(evalWhiteCp);
  }, [checkStatus, currentMove, liveActive, liveEval, evalWhiteCp]);

  const isWhiteAhead = checkStatus.isCheckmate ? checkStatus.matedColor === 'b' : evalWhiteCp >= 0;

  const formatEvalText = (move) => {
    if (checkStatus.isCheckmate) {
      return checkStatus.matedColor === 'w' ? '0-1' : '1-0';
    }
    if (move && move.evalWhiteCp !== null && move.evalWhiteCp !== undefined) {
      if (move.mateWhite !== null && move.mateWhite !== undefined) {
        if (move.mateWhite === 0) {
          return move.color === 'w' ? '1-0' : '0-1';
        }
        return `M${Math.abs(move.mateWhite)}`;
      }
      const val = (move.evalWhiteCp / 100).toFixed(1);
      return move.evalWhiteCp > 0 ? `+${val}` : val;
    }
    const src = liveActive ? liveEval : null;
    if (!src || src.evalWhiteCp === null || src.evalWhiteCp === undefined) return '0.0';
    if (src.mateWhite !== null && src.mateWhite !== undefined) {
      if (src.mateWhite === 0) {
        return (src.evalWhiteCp ?? 0) >= 0 ? '1-0' : '0-1';
      }
      return `M${Math.abs(src.mateWhite)}`;
    }
    const val = (src.evalWhiteCp / 100).toFixed(1);
    return src.evalWhiteCp > 0 ? `+${val}` : val;
  };

  const customArrows = useMemo(() => {
    // No tabuleiro da análise, mostra APENAS a setinha da linha principal (linha número 1)
    if (liveActive) {
      const line1Uci = liveEval.lines?.[0]?.bestMoveUci || liveEval.bestMoveUci;
      if (line1Uci && line1Uci.length >= 4) {
        return [[line1Uci.slice(0, 2), line1Uci.slice(2, 4), 'rgba(56, 189, 248, 0.85)']];
      }
    }
    return [];
  }, [liveActive, liveEval]);

  const setNodeAnnotation = (nodeId, symbol) => {
    if (!nodeId || nodeId === 'root') return;
    setMoveTree((prev) => {
      const next = cloneTree(prev);
      const node = next.nodes[nodeId];
      if (!node) return prev;
      next.nodes[nodeId] = { ...node, nag: node.nag === symbol ? null : symbol };
      return next;
    });
  };

  // Se o lance já foi revisado (possui classification gravada), essa classificação é SAGRADA e definitiva.
  // A engine ao vivo apenas complementa com setas e avaliação se o lance ainda não tiver sido revisado.
  const currentAnnotation = resolveNodeAnnotation(
    currentMove,
    currentMove?.classification ? null : (liveEngineOn ? liveClassification : null)
  );

  // Se veio da aba Jogar vs PC clicando em "Revisar no Stockfish 19", inicia a revisão completa automaticamente
  useEffect(() => {
    if (autoStartReviewPending && activePage === 'analysis' && mainlineNodes.length > 0 && !isAnalyzing) {
      setAutoStartReviewPending(false);
      runFullAnalysis();
    }
  }, [autoStartReviewPending, activePage, mainlineNodes.length, isAnalyzing]);

  const annotationBadgePos = useMemo(() => {
    if (!currentMove?.to) return null;
    const file = currentMove.to.charCodeAt(0) - 97;
    const rank = parseInt(currentMove.to[1], 10) - 1;
    const col = boardOrientation === 'white' ? file : 7 - file;
    const row = boardOrientation === 'white' ? 7 - rank : rank;
    return { col, row };
  }, [currentMove, boardOrientation]);

  const customSquareStyles = useMemo(() => {
    const styles = {};
    if (currentMove) {
      const bg = currentMove.classification?.bgColor || 'rgba(56, 189, 248, 0.25)';
      styles[currentMove.from] = { backgroundColor: bg };
      styles[currentMove.to] = {
        backgroundColor: bg,
        boxShadow: `inset 0 0 0 3px ${currentMove.classification?.color || '#64748b'}`,
      };
    }
    if (analysisSelectedSquare) {
      styles[analysisSelectedSquare] = {
        ...(styles[analysisSelectedSquare] || {}),
        backgroundColor: 'rgba(56, 189, 248, 0.35)',
        boxShadow: 'inset 0 0 0 2px #38bdf8',
      };
    }
    if ((checkStatus.inCheck || checkStatus.isCheckmate) && checkStatus.checkSquare) {
      styles[checkStatus.checkSquare] = {
        background:
          'radial-gradient(circle at center, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.75) 35%, rgba(185, 28, 28, 0.35) 65%, rgba(185, 28, 28, 0.05) 80%, transparent 88%)',
        borderRadius: '3px',
      };
    }
    for (const m of analysisLegalMoves) {
      const prevStyle = styles[m.to] || {};
      const isCapture = Boolean(m.captured || (m.flags && m.flags.includes('e')));
      styles[m.to] = {
        ...prevStyle,
        backgroundImage: isCapture
          ? 'radial-gradient(circle, transparent 56%, rgba(255, 255, 255, 0.48) 57%, rgba(15, 23, 42, 0.62) 60%, rgba(15, 23, 42, 0.62) 68%, transparent 70%)'
          : 'radial-gradient(circle, rgba(15, 23, 42, 0.58) 0%, rgba(15, 23, 42, 0.58) 18%, rgba(255, 255, 255, 0.48) 19%, rgba(255, 255, 255, 0.48) 22%, transparent 24%)',
      };
    }
    return styles;
  }, [currentMove, analysisSelectedSquare, analysisLegalMoves, checkStatus]);

  const hasReview = mainlineNodes.some((m) => m.evalWhiteCp !== null && m.evalWhiteCp !== undefined);

  const whiteAccuracy = useMemo(
    () => calculateAccuracy(mainlineNodes, 'w'),
    [mainlineNodes]
  );
  const blackAccuracy = useMemo(
    () => calculateAccuracy(mainlineNodes, 'b'),
    [mainlineNodes]
  );

  const countClassifications = (color, classId) =>
    mainlineNodes.filter(
      (m) => m.color === color && m.classification?.id === classId
    ).length;

  const chartData = useMemo(() => {
    return mainlineNodes.map((m) => ({
      nodeId: m.id,
      ply: m.ply,
      label: `${m.moveNumber}${m.color === 'w' ? '.' : '...'} ${m.san}`,
      evalPawns:
        m.evalWhiteCp !== null
          ? Math.max(-10, Math.min(10, Number((m.evalWhiteCp / 100).toFixed(2))))
          : 0,
    }));
  }, [mainlineNodes]);

  // Analytics da Carreira, Posições Críticas e Eventos
  const career = useMemo(() => buildCareerAnalytics(savedGames), [savedGames]);
  const allCriticalPuzzles = useMemo(
    () => extractCriticalPositions(savedGames),
    [savedGames]
  );
  const eventsList = useMemo(() => buildEventsAnalytics(savedGames), [savedGames]);

  const lastSavedGame = savedGames[0] || null;
  const winRateOverall =
    career.totalGames > 0 ? Math.round((career.wins / career.totalGames) * 100) : 0;

  // Treinamento
  const filteredPuzzles = useMemo(() => {
    if (trainingPhaseFilter === 'ALL') return allCriticalPuzzles;
    if (trainingPhaseFilter === 'TACTICS') {
      return allCriticalPuzzles.filter((p) => p.isTactical);
    }
    return allCriticalPuzzles.filter((p) => p.phaseCategory === trainingPhaseFilter);
  }, [allCriticalPuzzles, trainingPhaseFilter]);

  const activePuzzle = filteredPuzzles[selectedPuzzleIndex] || null;

  useEffect(() => {
    if (activePuzzle) {
      setPuzzleBoardFen(activePuzzle.fen);
      setPuzzleAttemptResult(null);
      setShowPuzzleSolution(false);
    }
  }, [activePuzzle]);

  const handlePuzzlePieceDrop = (sourceSquare, targetSquare, piece) => {
    if (!activePuzzle || puzzleAttemptResult) return false;

    try {
      const game = new Chess(activePuzzle.fen);
      const sourcePiece = game.get(sourceSquare);
      const promoChar = piece ? piece[1]?.toLowerCase() : 'q';
      const isPromo =
        sourcePiece?.type === 'p' &&
        ((sourcePiece.color === 'w' && targetSquare[1] === '8') ||
          (sourcePiece.color === 'b' && targetSquare[1] === '1'));
      const chosenPromo = isPromo
        ? ['q', 'r', 'b', 'n'].includes(promoChar)
          ? promoChar
          : 'q'
        : undefined;
      const moveObj = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: chosenPromo,
      });

      if (!moveObj) return false;

      const userUci = `${sourceSquare}${targetSquare}${chosenPromo || ''}`;
      let outcome = 'ERROR';

      if (
        userUci === activePuzzle.bestMoveUci ||
        moveObj.san === activePuzzle.bestMoveSan
      ) {
        outcome = 'BEST';
      } else if (userUci !== activePuzzle.playedUci) {
        outcome = 'ACCEPTABLE';
      }

      setPuzzleBoardFen(game.fen());
      setPuzzleAttemptResult({
        outcome,
        userMoveSan: moveObj.san,
        userFrom: sourceSquare,
        userTo: targetSquare,
      });
      setShowPuzzleSolution(true);

      const updatedStats = recordTrainingAttempt({
        puzzleId: activePuzzle.id,
        outcome,
        phaseCategory: activePuzzle.phaseCategory,
        isTactical: activePuzzle.isTactical,
      });
      setTrainingStats(updatedStats);
      return true;
    } catch {
      return false;
    }
  };

  const puzzleArrows = useMemo(() => {
    if (!activePuzzle || !showPuzzleSolution) return [];
    const arrows = [];
    if (activePuzzle.bestMoveUci) {
      arrows.push([
        activePuzzle.bestMoveUci.slice(0, 2),
        activePuzzle.bestMoveUci.slice(2, 4),
        '#22c55e',
      ]);
    }
    if (
      puzzleAttemptResult &&
      puzzleAttemptResult.outcome !== 'BEST' &&
      puzzleAttemptResult.userFrom
    ) {
      arrows.push([
        puzzleAttemptResult.userFrom,
        puzzleAttemptResult.userTo,
        '#3b82f6',
      ]);
    }
    return arrows;
  }, [activePuzzle, showPuzzleSolution, puzzleAttemptResult]);

  // Filtros da Base de Partidas
  const filteredDatabaseGames = useMemo(() => {
    return savedGames.filter((g) => {
      const userColor = g.userColor || 'w';
      const userAcc = userColor === 'w' ? g.whiteAccuracy : g.blackAccuracy;
      const isWin =
        (userColor === 'w' && g.result === '1-0') ||
        (userColor === 'b' && g.result === '0-1');
      const isLoss =
        (userColor === 'w' && g.result === '0-1') ||
        (userColor === 'b' && g.result === '1-0');
      const isDraw = g.result === '1/2-1/2';

      if (filterPlayer.trim()) {
        const q = filterPlayer.toLowerCase();
        const matchPlayer =
          g.white?.toLowerCase().includes(q) ||
          g.black?.toLowerCase().includes(q) ||
          g.whiteTitle?.toLowerCase().includes(q) ||
          g.blackTitle?.toLowerCase().includes(q) ||
          g.title?.toLowerCase().includes(q);
        if (!matchPlayer) return false;
      }

      if (filterResult === 'WIN' && !isWin) return false;
      if (filterResult === 'LOSS' && !isLoss) return false;
      if (filterResult === 'DRAW' && !isDraw) return false;

      if (filterColor !== 'ALL' && userColor !== filterColor) return false;

      if (filterOpening.trim()) {
        const opQ = filterOpening.toLowerCase();
        if (
          !g.opening?.toLowerCase().includes(opQ) &&
          !g.eco?.toLowerCase().includes(opQ)
        ) {
          return false;
        }
      }

      if (filterEvent.trim()) {
        if (!g.event?.toLowerCase().includes(filterEvent.toLowerCase())) return false;
      }

      if (filterMode !== 'ALL' && g.gameMode !== filterMode) return false;
      if (filterTimeControl !== 'ALL' && g.timeControl !== filterTimeControl)
        return false;

      if (filterMinAccuracy !== '' && Number(filterMinAccuracy) > 0) {
        if ((userAcc || 0) < Number(filterMinAccuracy)) return false;
      }

      if (filterDateFrom.trim()) {
        if ((g.date || '') < filterDateFrom.trim()) return false;
      }

      return true;
    });
  }, [
    savedGames,
    filterPlayer,
    filterResult,
    filterColor,
    filterOpening,
    filterEvent,
    filterMode,
    filterTimeControl,
    filterMinAccuracy,
    filterDateFrom,
  ]);

  const clearAllFilters = () => {
    setFilterPlayer('');
    setFilterResult('ALL');
    setFilterColor('ALL');
    setFilterOpening('');
    setFilterEvent('');
    setFilterMode('ALL');
    setFilterTimeControl('ALL');
    setFilterMinAccuracy('');
    setFilterDateFrom('');
  };

  const applyPresetFilter = ({ result, color, opening, event, player }) => {
    clearAllFilters();
    if (result) setFilterResult(result);
    if (color) setFilterColor(color);
    if (opening) setFilterOpening(opening);
    if (event) setFilterEvent(event);
    if (player) setFilterPlayer(player);
    setActivePage('games');
  };

  // Linha do Tempo Agrupada por Ano
  const journeyByYear = useMemo(() => {
    const items = [];

    eventsList.forEach((ev) => {
      items.push({
        id: `ev-${ev.name}`,
        date: ev.date || new Date().toISOString().slice(0, 10),
        year: (ev.date || '2026').slice(0, 4),
        type: 'TORNEIO',
        icon: 'TROPHY',
        title: ev.name,
        subtitle: `${ev.location} • ${ev.gameMode} (${ev.timeControl})`,
        badge: `${ev.points}/${ev.totalGames} pts (${ev.wins}V ${ev.draws}E ${ev.losses}D)`,
      });
    });

    savedGames
      .filter((g) => g.isImportant)
      .forEach((g) => {
        items.push({
          id: `imp-${g.id}`,
          date: g.date || new Date().toISOString().slice(0, 10),
          year: (g.date || '2026').slice(0, 4),
          type: 'PARTIDA_IMPORTANTE',
          icon: 'PAWN',
          title: g.title,
          subtitle: `${g.white} vs ${g.black} (${g.result}) • ${g.opening || ''}`,
          badge: g.isAnalyzed
            ? `Precisão: ${g.userColor === 'w' ? g.whiteAccuracy : g.blackAccuracy}%`
            : g.result,
          gameObj: g,
        });
      });

    milestones.forEach((m) => {
      items.push({
        id: m.id,
        date: m.date || new Date().toISOString().slice(0, 10),
        year: (m.date || '2026').slice(0, 4),
        type: 'MARCO',
        icon: m.category === 'TORNEIO' ? 'TROPHY' : m.category === 'TITULO' ? 'TREND' : 'FLAG',
        title: m.title,
        subtitle: m.description,
        badge: m.category,
        milestoneId: m.id,
      });
    });

    items.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

    const grouped = {};
    items.forEach((it) => {
      const y = it.year || '2026';
      if (!grouped[y]) grouped[y] = [];
      grouped[y].push(it);
    });

    return Object.entries(grouped).sort((a, b) => b[0].localeCompare(a[0]));
  }, [eventsList, savedGames, milestones]);

  const handleAddMilestone = (e) => {
    e.preventDefault();
    if (!newMilestoneTitle.trim()) return;
    const updated = addCareerMilestone({
      title: newMilestoneTitle,
      date: newMilestoneDate,
      category: newMilestoneCategory,
      description: newMilestoneDesc,
    });
    setMilestones(updated);
    setNewMilestoneTitle('');
    setNewMilestoneDesc('');
  };

  const handleGlobalSearchSubmit = (e) => {
    e.preventDefault();
    if (!globalSearch.trim()) return;
    applyPresetFilter({ player: globalSearch.trim() });
  };

  const DONUT_COLORS = ['#e4e4e7', '#9ca3af', '#52525b', '#718096'];
  const repertoireDonutData = useMemo(() => {
    if (career.openingsStats.length === 0) {
      return [{ name: 'Sem dados', value: 1 }];
    }
    return career.openingsStats.slice(0, 4).map((op) => ({
      name: op.name,
      value: op.games,
    }));
  }, [career.openingsStats]);

  // Menu de Navegação Principal (Adapta automaticamente entre Versão Pública e Database Pessoal com i18n)
  const NAV_ITEMS = isPublicMode
    ? [
        { id: 'home', label: t('nav.home'), icon: Home },
        { id: 'analysis', label: t('nav.analysis'), icon: Cpu },
        { id: 'masters_library', label: 'Biblioteca de Mestres', icon: Trophy },
        { id: 'board_editor', label: t('nav.board_editor'), icon: PenSquare },
        { id: 'broadcasts', label: t('nav.broadcasts'), icon: Radio },
        { id: 'play_bot', label: t('nav.play_bot'), icon: Swords },
        { id: 'about', label: t('nav.about'), icon: Info, separatorAbove: true },
      ]
    : [
        { id: 'home', label: t('nav.home'), icon: Home },
        { id: 'overview', label: t('nav.overview'), icon: Layers },
        { id: 'board_editor', label: t('nav.board_editor'), icon: PenSquare },
        { id: 'broadcasts', label: t('nav.broadcasts'), icon: Radio },
        { id: 'play_bot', label: t('nav.play_bot'), icon: Swords },
        { id: 'about', label: t('nav.about'), icon: Info, separatorAbove: true },
        { id: 'analysis', label: t('nav.analysis'), icon: Cpu },
        { id: 'masters_library', label: 'Biblioteca de Mestres', icon: Trophy },
        { id: 'career', label: t('nav.career'), icon: BarChart3 },
        {
          id: 'games',
          label: t('nav.games'),
          icon: Layers,
          badge: savedGames.length > 0 ? savedGames.length : null,
        },
        { id: 'repertoire', label: t('nav.repertoire'), icon: BookOpen },
        {
          id: 'training',
          label: t('nav.training'),
          icon: Target,
          badge: allCriticalPuzzles.length > 0 ? allCriticalPuzzles.length : null,
        },
        { id: 'events', label: t('nav.events'), icon: Trophy },
      ];

  // Verifica se o nó atual no tabuleiro possui variantes irmãs para alternar rapidamente
  const activeParent = activeNode?.parentId ? moveTree.nodes[activeNode.parentId] : null;
  const activeSiblingVariations =
    activeParent && activeParent.childrenIds.length > 1
      ? activeParent.childrenIds
      : [];

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#ececef] flex flex-col lg:flex-row">
      {/* Overlay para fechar o menu lateral ao clicar fora dele */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-[1px] lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* =====================================================================
          BARRA LATERAL FIXA — SARAGIX (Sóbria, Matte Graphite)
         ===================================================================== */}
      <aside
        ref={sidebarRef}
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0d0d10] border-r border-[#1f1f26] flex flex-col justify-between transition-transform duration-300 lg:static lg:translate-x-0 ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          <div className="p-6 flex items-center gap-3.5 border-b border-[#1c1c22]">
            <div
              onClick={() => {
                setActivePage(isPublicMode ? 'home' : 'overview');
                updateRoute({ page: isPublicMode ? 'home' : 'overview' }, false);
              }}
              className="cursor-pointer group flex items-center gap-3.5 w-full"
            >
              <div className="p-2 rounded-xl bg-[#141418] border border-[#26262f] group-hover:border-zinc-500 transition shrink-0">
                <SaragixLogo className="w-8 h-8" />
              </div>
              <div className="text-left">
                <h1 className="text-xl font-serif-editorial tracking-wide text-white leading-none">
                  Saragix
                </h1>
                <p className="text-[11px] text-zinc-500 mt-1">
                  {t('common.slogan')}
                </p>
              </div>
            </div>
          </div>

          <nav className="p-3 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <React.Fragment key={item.id}>
                  {item.separatorAbove && (
                    <div className="my-2 border-t border-[#1c1c22]" />
                  )}
                  <button
                    onClick={() => {
                      if (item.id === 'masters_library') {
                        setIsMasterGamesModalOpen(true);
                        setMobileMenuOpen(false);
                        return;
                      }
                      setActivePage(item.id);
                      updateRoute({ page: item.id }, false);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                      isActive
                        ? 'bg-[#1b1b21] text-white border border-[#2c2c36]'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#141418] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon
                        className={`w-4 h-4 ${
                          isActive ? 'text-white' : 'text-zinc-500'
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                    {item.badge !== null && item.badge !== undefined && (
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-[#2a2a34] text-white'
                            : 'bg-[#16161b] text-zinc-400 border border-[#24242c]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </button>
                </React.Fragment>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-[#1c1c22] space-y-2.5">

          <button
            onClick={() => {
              handleStartNewPgnFromScratch();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 px-3 rounded-lg bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold flex items-center justify-center gap-2 transition"
          >
            <Plus className="w-4 h-4" />
            {t('common.newPgn')}
          </button>

          <div className="flex items-center justify-between px-1 pt-1.5 text-[11px] text-zinc-500">
            <button
              onClick={() => setIsEditingProfile(true)}
              className="hover:text-zinc-300 flex items-center gap-1.5 transition"
            >
              <Settings className="w-3.5 h-3.5" />
              {t('common.hello', { name: displayName })}
            </button>
            <span className="font-mono text-[10px] text-zinc-500">
              {t('common.version')}
            </span>
          </div>
        </div>
      </aside>

      {/* =====================================================================
          ÁREA DE CONTEÚDO PRINCIPAL
         ===================================================================== */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar Sóbria */}
        <header className="sticky top-0 z-30 bg-[#0a0a0c]/95 backdrop-blur-sm border-b border-[#1c1c22] px-4 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-xl">
            <button
              ref={menuButtonRef}
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="lg:hidden p-2 rounded-lg bg-[#141418] border border-[#24242c] text-zinc-300"
            >
              <Menu className="w-5 h-5" />
            </button>

            {isPublicMode ? (
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-sm font-serif-editorial text-white tracking-wide">
                  {t('common.hello', { name: displayName })}
                </span>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(true)}
                  className="px-2 py-0.5 rounded-md bg-[#16161b] hover:bg-[#202028] border border-[#282832] text-[11px] text-zinc-300 flex items-center gap-1 transition"
                  title="Editar seu nome e personalizar o tabuleiro"
                >
                  <Edit3 className="w-3 h-3" /> {t('common.editName')}
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(true)}
                  className="px-2 py-0.5 rounded-md bg-[#16161b] hover:bg-[#202028] border border-[#282832] text-[11px] text-zinc-300 flex items-center gap-1.5 transition"
                  title="Escolher modelo de cores do tabuleiro"
                >
                  <span className="w-3.5 h-3.5 rounded-[3px] overflow-hidden grid grid-cols-2 grid-rows-2 border border-white/20 shrink-0">
                    <span style={resolvedBoardTheme.lightSquareStyle} />
                    <span style={resolvedBoardTheme.darkSquareStyle} />
                    <span style={resolvedBoardTheme.darkSquareStyle} />
                    <span style={resolvedBoardTheme.lightSquareStyle} />
                  </span>
                  {t('common.board')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleGlobalSearchSubmit} className="relative flex-1">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  placeholder="Buscar partidas, aberturas ou jogadores..."
                  className="w-full bg-[#121215] border border-[#23232b] rounded-lg pl-10 pr-4 py-2 text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 transition"
                />
              </form>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            {saveToast && (
              <span className="text-xs bg-[#16261e] border border-[#274435] text-[#86efac] px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" />
                {saveToast}
              </span>
            )}

            {/* Seletor de Idioma em Destaque na Barra Superior */}
            <LanguageSelector />

            {!isPublicMode && (
              <button
                onClick={() => setActivePage('training')}
                className="p-2 rounded-lg bg-[#121215] border border-[#23232b] text-zinc-400 hover:text-white relative transition"
                title="Posições críticas para treinar"
              >
                <Bell className="w-4 h-4" />
                {allCriticalPuzzles.length > 0 && (
                  <span className="w-2 h-2 rounded-full bg-amber-400 absolute top-1.5 right-1.5" />
                )}
              </button>
            )}

            {!isPublicMode && (
              <>
                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="flex items-center gap-2 bg-[#121215] hover:bg-[#19191e] border border-[#23232b] px-2.5 py-1.5 rounded-lg transition text-xs text-zinc-200"
                  title="Personalizar cores do tabuleiro e perfil"
                >
                  <span className="w-4 h-4 rounded-[3px] overflow-hidden grid grid-cols-2 grid-rows-2 border border-white/20 shrink-0">
                    <span style={resolvedBoardTheme.lightSquareStyle} />
                    <span style={resolvedBoardTheme.darkSquareStyle} />
                    <span style={resolvedBoardTheme.darkSquareStyle} />
                    <span style={resolvedBoardTheme.lightSquareStyle} />
                  </span>
                  <span className="hidden sm:inline font-medium">{t('common.board')}</span>
                </button>

                <button
                  onClick={() => setIsEditingProfile(true)}
                  className="flex items-center gap-2.5 bg-[#121215] hover:bg-[#19191e] border border-[#23232b] pl-2 pr-3 py-1.5 rounded-lg transition"
                  title="Clique para editar seu nome e tabuleiro"
                >
                  <div className="w-6 h-6 rounded-md bg-[#26262f] flex items-center justify-center text-xs font-bold text-white">
                    {(displayName).slice(0, 1).toUpperCase()}
                  </div>
                  <span className="text-xs font-medium text-zinc-200">
                    {displayName}
                  </span>
                  <Edit3 className="w-3 h-3 text-zinc-500" />
                </button>
              </>
            )}
          </div>
        </header>

        {/* ===================================================================
            TELA INICIAL / HOME (Partida do Dia, Ações Rápidas, Apresentação)
           =================================================================== */}
        {activePage === 'home' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6">
            <HomeView
              darkSquareStyle={resolvedBoardTheme.darkSquareStyle}
              lightSquareStyle={resolvedBoardTheme.lightSquareStyle}
              customPieces={customPieces}
              onNavigate={(pageId) => {
                setActivePage(pageId);
                updateRoute({ page: pageId }, false);
              }}
              onLoadGameIntoAnalysis={(gamePgn) => {
                handleImportPgnText(gamePgn);
                setActivePage('analysis');
                updateRoute({ page: 'analysis' }, false);
              }}
            />
          </main>
        )}

        {/* ===================================================================
            🧩 EDITOR DE TABULEIRO (Estilo Lichess, Paletas e Análise Direta)
           =================================================================== */}
        {activePage === 'board_editor' && (
          <BoardEditor
            customPieces={customPieces}
            darkSquareStyle={resolvedBoardTheme.darkSquareStyle}
            lightSquareStyle={resolvedBoardTheme.lightSquareStyle}
            onLoadIntoAnalysis={handleLoadCustomPositionIntoAnalysis}
            onPlayVsBotFromPosition={(customFen, orientation) => {
              handleLoadCustomPositionIntoAnalysis(customFen, orientation);
            }}
          />
        )}

        {/* ===================================================================
            TRANSMISSÕES AO VIVO (Torneios Oficiais e Tabuleiros Lichess)
           =================================================================== */}
        {activePage === 'broadcasts' && (
          <Broadcasts
            initialRoute={currentRoute}
            customPieces={customPieces}
            darkSquareStyle={resolvedBoardTheme.darkSquareStyle}
            lightSquareStyle={resolvedBoardTheme.lightSquareStyle}
            onLoadGameIntoAnalysis={(rawPgn, broadcastGame) =>
              handleImportPgnText(rawPgn, null, {
                isFromBroadcast: true,
                broadcastGame,
              })
            }
          />
        )}

        {/* ===================================================================
            ⚔️ JOGAR CONTRA O COMPUTADOR (100 a 3200 Elo, Ritmos e Modos)
           =================================================================== */}
        {activePage === 'play_bot' && (
          <PlayVsComputer
            playerName={playerName || 'Usuário'}
            isPublicMode={isPublicMode}
            darkSquareStyle={resolvedBoardTheme.darkSquareStyle}
            lightSquareStyle={resolvedBoardTheme.lightSquareStyle}
            customPieces={customPieces}
            onEditPlayerName={() => setIsEditingProfile(true)}
            onAnalyzeFinishedGame={(gameData) => {
              const tree = buildTreeFromSavedMoves(gameData.moves);
              setIsBroadcastAnalysis(false);
              setBroadcastGameMeta(null);
              setUndoStack([]);
              setRedoStack([]);
              setMoveTree(tree);
              setActiveNodeId('root');
              setCurrentGameId(null);
              setMetaTitle(gameData.title);
              setMetaWhite(gameData.white);
              setMetaWhiteTitle(gameData.whiteTitle || '');
              setMetaWhiteRating(gameData.whiteRating || '');
              setMetaBlack(gameData.black);
              setMetaBlackTitle(gameData.blackTitle || '');
              setMetaBlackRating(gameData.blackRating || '');
              setMetaUserColor(gameData.userColor || 'w');
              setBoardOrientation(gameData.userColor === 'b' ? 'black' : 'white');
              setMetaResult(gameData.result || '*');
              setMetaDate(gameData.date);
              setMetaEvent(gameData.event);
              setMetaPlatform(gameData.platform);
              setMetaGameMode(gameData.gameMode);
              setMetaTimeControl(gameData.timeControl);
              setMetaOpening(gameData.opening || '');
              setMetaEco(gameData.eco || '');
              setAnalysisRightTab('tree');
              setActivePage('analysis');
              setAutoStartReviewPending(true);
            }}
            onSaveFinishedGameToDb={(gameData) => {
              const tree = buildTreeFromSavedMoves(gameData.moves);
              const { games, savedRecord } = saveGameToDb({
                ...gameData,
                moveTree: tree,
                whiteAccuracy: 0,
                blackAccuracy: 0,
                isAnalyzed: false,
              });
              setSavedGames(games);
              setCurrentGameId(savedRecord.id);
              setSaveToast('Partida contra o computador salva na Base de Dados!');
              setTimeout(() => setSaveToast(''), 3500);
            }}
          />
        )}

        {/* ===================================================================
            SOBRE O SARAGIX (História, Desenvolvedor, Parâmetros e Créditos)
           =================================================================== */}
        {activePage === 'about' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-6">
            <About initialSubTab={currentRoute?.subTab} />
          </main>
        )}

        {/* ===================================================================
            🔍 NOVA ABA PRINCIPAL: ANÁLISE (Novo PGN, Importar PGN, Abrir da Base,
               Editor de Metadados + Árvore Real de Variantes + Stockfish)
           =================================================================== */}
        {activePage === 'analysis' && (
          <main className="flex-1 max-w-[1440px] w-full mx-auto p-3 sm:p-4 lg:px-6 lg:py-4 space-y-4">
            {/* Barra Superior de Modo de Entrada: Visível no topo SOMENTE antes do primeiro lance ser feito */}
            {mainlineNodes.length === 0 && (
              <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                  isPublicMode ? 'lg:grid-cols-4' : 'lg:grid-cols-5'
                } gap-3`}
              >
                <button
                  onClick={handleStartNewPgnFromScratch}
                  className="saragix-card hover:border-zinc-500 p-4 rounded-xl flex items-center gap-3.5 text-left transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#19191f] border border-[#292933] flex items-center justify-center text-zinc-200 group-hover:bg-[#22222a] transition">
                    <Plus className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Novo PGN
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Criar partida do zero jogando no tabuleiro
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => switchAnalysisTab('online')}
                  className={`saragix-card p-4 rounded-xl flex items-center gap-3.5 text-left transition group ${
                    analysisRightTab === 'online' ? 'border-sky-400 bg-[#141b24]' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#142332] border border-[#23425f] flex items-center justify-center text-sky-400 group-hover:bg-[#1a3147] transition">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      Buscar por Nick
                      <span className="text-[10px] px-1.5 py-0.2 bg-sky-500/20 text-sky-300 rounded font-normal">
                        Lichess & Chess.com
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Puxar partidas de qualquer jogador
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => switchAnalysisTab('pgn')}
                  className={`saragix-card p-4 rounded-xl flex items-center gap-3.5 text-left transition group ${
                    analysisRightTab === 'pgn' ? 'border-zinc-400 bg-[#18181e]' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#19191f] border border-[#292933] flex items-center justify-center text-zinc-200 group-hover:bg-[#22222a] transition">
                    <Upload className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Importar PGN
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Colar texto PGN ou carregar arquivo .pgn
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setIsMasterGamesModalOpen(true)}
                  className="saragix-card hover:border-amber-500/60 p-4 rounded-xl flex items-center gap-3.5 text-left transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#241f14] border border-[#44381c] flex items-center justify-center text-amber-400 group-hover:bg-[#332b1b] transition">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                      Biblioteca de Mestres
                      <span className="text-[10px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded font-normal">
                        370+ Partidas
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Campeões mundiais e partidas históricas da FIDE
                    </span>
                  </div>
                </button>

                {!isPublicMode && (
                  <button
                    onClick={() => switchAnalysisTab('open_db')}
                    className={`saragix-card p-4 rounded-xl flex items-center gap-3.5 text-left transition group ${
                      analysisRightTab === 'open_db' ? 'border-zinc-400 bg-[#18181e]' : ''
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#19191f] border border-[#292933] flex items-center justify-center text-zinc-200 group-hover:bg-[#22222a] transition">
                      <FolderOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        Abrir da Base ({savedGames.length})
                      </div>
                      <span className="text-[11px] text-zinc-400 block">
                        Continuar editando ou revisando partida salva
                      </span>
                    </div>
                  </button>
                )}
              </div>
            )}

            {/* Ambiente Principal de Análise (Layout PC Estilo Chess.com: Tabuleiro Grande à Esquerda + Diretórios à Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
              {/* COLUNA ESQUERDA: Barras de Jogadores + Tabuleiro Grande (7 cols) */}
              <div className="lg:col-span-7 flex flex-col items-center gap-2 w-full">
                {/* Jogador do Topo (Estilo PlayerBroadcastBar: Foto e Relógio para Transmissão; Sem Foto para Criação de PGN) */}
                {(() => {
                  const isTopBlack = boardOrientation === 'white';
                  const topColor = isTopBlack ? 'b' : 'w';
                  const topName = isTopBlack ? metaBlack : metaWhite;
                  const setTopName = isTopBlack ? setMetaBlack : setMetaWhite;
                  const topRating = isTopBlack ? metaBlackRating : metaWhiteRating;
                  const setTopRating = isTopBlack ? setMetaBlackRating : setMetaWhiteRating;
                  const topTitle = isTopBlack ? metaBlackTitle : metaWhiteTitle;
                  const setTopTitle = isTopBlack ? setMetaBlackTitle : setMetaWhiteTitle;
                  const isEditingTop = isTopBlack ? isQuickEditBlack : isQuickEditWhite;
                  const setIsEditingTop = isTopBlack ? setIsQuickEditBlack : setIsQuickEditWhite;
                  const defaultLabel = isTopBlack ? t('common.black') : t('common.white');

                  // Calcula o relógio do jogador no lance atual quando a partida vem de uma Transmissão
                  const getBroadcastClockAtCurrentNode = (color) => {
                    const pathNodes = getPathToNode(moveTree, activeNodeId);
                    for (let i = pathNodes.length - 1; i >= 0; i--) {
                      if (pathNodes[i].color === color && pathNodes[i].clk) {
                        return pathNodes[i].clk;
                      }
                    }
                    const firstWithClk = mainlineNodes.find((n) => n.color === color && n.clk);
                    if (firstWithClk?.clk) return firstWithClk.clk;
                    if (color === 'w') {
                      return (
                        broadcastGameMeta?.movePairs?.[0]?.whiteClk ||
                        broadcastGameMeta?.lastWhiteClk ||
                        '00:00'
                      );
                    }
                    return (
                      broadcastGameMeta?.movePairs?.[0]?.blackClk ||
                      broadcastGameMeta?.lastBlackClk ||
                      '00:00'
                    );
                  };

                  return (
                    <div ref={topPlayerEditRef} className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px]">
                      {!isEditingTop ? (
                        <PlayerBroadcastBar
                          name={topName || defaultLabel}
                          title={topTitle}
                          rating={topRating}
                          color={topColor}
                          result={metaResult}
                          hidePhoto={!isBroadcastAnalysis}
                          fideId={
                            isBroadcastAnalysis
                              ? isTopBlack
                                ? broadcastGameMeta?.blackFideId
                                : broadcastGameMeta?.whiteFideId
                              : null
                          }
                          fed={
                            isBroadcastAnalysis
                              ? isTopBlack
                                ? broadcastGameMeta?.blackFed
                                : broadcastGameMeta?.whiteFed
                              : null
                          }
                          isTurn={isBroadcastAnalysis && currentFen.split(' ')[1] === topColor}
                          clockDisplay={
                            isBroadcastAnalysis ? getBroadcastClockAtCurrentNode(topColor) : '00:00'
                          }
                          hideClock={!isBroadcastAnalysis && !hasReview}
                          actionButton={
                            <button
                              type="button"
                              onClick={() => setIsEditingTop(true)}
                              className="ml-1 px-2 py-0.5 rounded-md bg-[#16161c] hover:bg-[#24242e] border border-[#2c2c38] text-[10px] text-zinc-300 flex items-center gap-1 transition shrink-0"
                              title="Editar nome, rating e título"
                            >
                              <Edit3 className="w-2.5 h-2.5" /> {t('common.edit')}
                            </button>
                          }
                          rightContent={
                            !isBroadcastAnalysis && hasReview ? (
                              <div className="flex flex-col items-center justify-center leading-tight px-1">
                                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">
                                  {t('dashboard.accuracy')}
                                </span>
                                <span className="font-mono font-bold text-sm text-white">
                                  {isTopBlack ? blackAccuracy : whiteAccuracy}%
                                </span>
                              </div>
                            ) : null
                          }
                        />
                      ) : (
                        <div className="w-full bg-[#1f2026] border border-sky-500/60 px-3.5 py-2.5 rounded-xl flex flex-wrap items-center gap-2 text-xs shadow-md">
                          <div
                            className={`w-3.5 h-3.5 rounded-sm border shrink-0 ${
                              isTopBlack
                                ? 'bg-[#18181b] border-zinc-600'
                                : 'bg-[#e4e4e7] border-zinc-400'
                            }`}
                          />
                          <div className="w-36">
                            <TitleSelect
                              value={topTitle}
                              onChange={(e) => setTopTitle(e.target.value)}
                            />
                          </div>
                          <input
                            type="text"
                            value={topName}
                            onChange={(e) => setTopName(e.target.value)}
                            placeholder={`Nome (${defaultLabel})`}
                            className="flex-1 min-w-[130px] bg-[#0e0e11] border border-[#282830] rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-zinc-500"
                          />
                          <input
                            type="text"
                            value={topRating}
                            onChange={(e) => setTopRating(e.target.value)}
                            placeholder="Rating (ex: 1900)"
                            className="w-28 bg-[#0e0e11] border border-[#282830] rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-zinc-500"
                          />
                          <button
                            type="button"
                            onClick={() => setIsEditingTop(false)}
                            className="px-3 py-1.5 rounded-lg bg-[#ececef] hover:bg-white text-[#0a0a0c] font-semibold flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" /> OK
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Barra de Avaliação + Tabuleiro Interativo Grande (Estilo Chess.com no PC) */}
                <div className="flex gap-2 sm:gap-2.5 items-stretch justify-center w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px]">
                  <div className="w-6 sm:w-7 rounded-lg overflow-hidden flex flex-col relative shrink-0 border border-[#262633] shadow-lg bg-[#141418] select-none">
                    {boardOrientation === 'white' ? (
                      <>
                        <div
                          className="bg-[#18181c] transition-all duration-300"
                          style={{ height: `${100 - whiteBarPercent}%` }}
                        />
                        <div
                          className="bg-[#e4e4e7] transition-all duration-300"
                          style={{ height: `${whiteBarPercent}%` }}
                        />
                        <span
                          className={`absolute inset-x-0 text-[8px] sm:text-[9px] font-mono font-bold tracking-tighter leading-none text-center whitespace-nowrap ${
                            isWhiteAhead
                              ? 'bottom-1.5 text-zinc-900'
                              : 'top-1.5 text-zinc-200'
                          }`}
                        >
                          {formatEvalText(currentMove)}
                        </span>
                      </>
                    ) : (
                      <>
                        <div
                          className="bg-[#e4e4e7] transition-all duration-300"
                          style={{ height: `${whiteBarPercent}%` }}
                        />
                        <div
                          className="bg-[#18181c] transition-all duration-300"
                          style={{ height: `${100 - whiteBarPercent}%` }}
                        />
                        <span
                          className={`absolute inset-x-0 text-[8px] sm:text-[9px] font-mono font-bold tracking-tighter leading-none text-center whitespace-nowrap ${
                            !isWhiteAhead
                              ? 'bottom-1.5 text-zinc-200'
                              : 'top-1.5 text-zinc-900'
                          }`}
                        >
                          {formatEvalText(currentMove)}
                        </span>
                      </>
                    )}
                  </div>

                  <div className="chessboard-container relative flex-1 aspect-square rounded-2xl overflow-hidden border-2 border-[#262633] shadow-2xl bg-[#0a0a0d] p-1">
                    {currentAnnotation && annotationBadgePos && (
                      <div
                        className="absolute pointer-events-none z-20 flex items-center justify-center"
                        style={{
                          width: '12.5%',
                          height: '12.5%',
                          left: `${annotationBadgePos.col * 12.5}%`,
                          top: `${annotationBadgePos.row * 12.5}%`,
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            top: '-6%',
                            right: '-6%',
                            width: '44%',
                            height: '44%',
                          }}
                          title={currentAnnotation.label}
                        >
                          <ClassificationBadge
                            id={currentAnnotation.id}
                            symbol={currentAnnotation.symbol}
                            className="w-full h-full text-[clamp(8px,1.6vw,12px)] rounded-full shadow-lg shadow-black/80"
                          />
                        </div>
                      </div>
                    )}
                    {checkStatus.isCheckmate && checkSquareBadgePos && (
                      <div
                        className="absolute pointer-events-none z-20 flex items-center justify-center"
                        style={{
                          width: '12.5%',
                          height: '12.5%',
                          left: `${checkSquareBadgePos.col * 12.5}%`,
                          top: `${checkSquareBadgePos.row * 12.5}%`,
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            top: '-6%',
                            right: '-6%',
                            width: '44%',
                            height: '44%',
                          }}
                          title="Xeque-mate (#)"
                        >
                          <ClassificationBadge
                            id="CHECKMATE"
                            symbol="#"
                            className="w-full h-full text-[clamp(8px,1.6vw,12px)] rounded-full shadow-lg shadow-black/80"
                          />
                        </div>
                      </div>
                    )}
                    <Chessboard
                      position={currentFen}
                      boardOrientation={boardOrientation}
                      arePiecesDraggable={!isAnalyzing}
                      onPieceDrop={handleAnalysisBoardDrop}
                      onSquareClick={handleAnalysisSquareClick}
                      onSquareRightClick={() => setAnalysisSelectedSquare(null)}
                      customArrows={customArrows}
                      customSquareStyles={customSquareStyles}
                      customDarkSquareStyle={resolvedBoardTheme.darkSquareStyle}
                      customLightSquareStyle={resolvedBoardTheme.lightSquareStyle}
                      customPieces={customPieces}
                    />
                  </div>
                </div>

                {/* Jogador de Baixo (Estilo PlayerBroadcastBar: Foto e Relógio para Transmissão; Sem Foto para Criação de PGN) */}
                {(() => {
                  const isBottomWhite = boardOrientation === 'white';
                  const bottomColor = isBottomWhite ? 'w' : 'b';
                  const bottomName = isBottomWhite ? metaWhite : metaBlack;
                  const setBottomName = isBottomWhite ? setMetaWhite : setMetaBlack;
                  const bottomRating = isBottomWhite ? metaWhiteRating : metaBlackRating;
                  const setBottomRating = isBottomWhite ? setMetaWhiteRating : setMetaBlackRating;
                  const bottomTitle = isBottomWhite ? metaWhiteTitle : metaBlackTitle;
                  const setBottomTitle = isBottomWhite ? setMetaWhiteTitle : setMetaBlackTitle;
                  const isEditingBottom = isBottomWhite ? isQuickEditWhite : isQuickEditBlack;
                  const setIsEditingBottom = isBottomWhite ? setIsQuickEditWhite : setIsQuickEditBlack;
                  const defaultLabel = isBottomWhite ? t('common.white') : t('common.black');

                  const getBroadcastClockAtCurrentNode = (color) => {
                    const pathNodes = getPathToNode(moveTree, activeNodeId);
                    for (let i = pathNodes.length - 1; i >= 0; i--) {
                      if (pathNodes[i].color === color && pathNodes[i].clk) {
                        return pathNodes[i].clk;
                      }
                    }
                    const firstWithClk = mainlineNodes.find((n) => n.color === color && n.clk);
                    if (firstWithClk?.clk) return firstWithClk.clk;
                    if (color === 'w') {
                      return (
                        broadcastGameMeta?.movePairs?.[0]?.whiteClk ||
                        broadcastGameMeta?.lastWhiteClk ||
                        '00:00'
                      );
                    }
                    return (
                      broadcastGameMeta?.movePairs?.[0]?.blackClk ||
                      broadcastGameMeta?.lastBlackClk ||
                      '00:00'
                    );
                  };

                  return (
                    <div ref={bottomPlayerEditRef} className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px]">
                      {!isEditingBottom ? (
                        <PlayerBroadcastBar
                          name={bottomName || defaultLabel}
                          title={bottomTitle}
                          rating={bottomRating}
                          color={bottomColor}
                          result={metaResult}
                          hidePhoto={!isBroadcastAnalysis}
                          fideId={
                            isBroadcastAnalysis
                              ? isBottomWhite
                                ? broadcastGameMeta?.whiteFideId
                                : broadcastGameMeta?.blackFideId
                              : null
                          }
                          fed={
                            isBroadcastAnalysis
                              ? isBottomWhite
                                ? broadcastGameMeta?.whiteFed
                                : broadcastGameMeta?.blackFed
                              : null
                          }
                          isTurn={isBroadcastAnalysis && currentFen.split(' ')[1] === bottomColor}
                          clockDisplay={
                            isBroadcastAnalysis
                              ? getBroadcastClockAtCurrentNode(bottomColor)
                              : '00:00'
                          }
                          hideClock={!isBroadcastAnalysis && !hasReview}
                          actionButton={
                            <button
                              type="button"
                              onClick={() => setIsEditingBottom(true)}
                              className="ml-1 px-2 py-0.5 rounded-md bg-[#16161c] hover:bg-[#24242e] border border-[#2c2c38] text-[10px] text-zinc-300 flex items-center gap-1 transition shrink-0"
                              title="Editar nome, rating e título"
                            >
                              <Edit3 className="w-2.5 h-2.5" /> {t('common.edit')}
                            </button>
                          }
                          rightContent={
                            !isBroadcastAnalysis && hasReview ? (
                              <div className="flex flex-col items-center justify-center leading-tight px-1">
                                <span className="text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">
                                  {t('dashboard.accuracy')}
                                </span>
                                <span className="font-mono font-bold text-sm text-white">
                                  {isBottomWhite ? whiteAccuracy : blackAccuracy}%
                                </span>
                              </div>
                            ) : null
                          }
                        />
                      ) : (
                        <div className="w-full bg-[#1f2026] border border-sky-500/60 px-3.5 py-2.5 rounded-xl flex flex-wrap items-center gap-2 text-xs shadow-md">
                          <div
                            className={`w-3.5 h-3.5 rounded-sm border shrink-0 ${
                              isBottomWhite
                                ? 'bg-[#e4e4e7] border-zinc-400'
                                : 'bg-[#18181b] border-zinc-600'
                            }`}
                          />
                          <div className="w-36">
                            <TitleSelect
                              value={bottomTitle}
                              onChange={(e) => setBottomTitle(e.target.value)}
                            />
                          </div>
                          <input
                            type="text"
                            value={bottomName}
                            onChange={(e) => setBottomName(e.target.value)}
                            placeholder={`Nome (${defaultLabel})`}
                            className="flex-1 min-w-[130px] bg-[#0e0e11] border border-[#282830] rounded-lg px-2.5 py-1.5 text-white focus:outline-none focus:border-zinc-500"
                          />
                          <input
                            type="text"
                            value={bottomRating}
                            onChange={(e) => setBottomRating(e.target.value)}
                            placeholder="Rating (ex: 1900)"
                            className="w-28 bg-[#0e0e11] border border-[#282830] rounded-lg px-2.5 py-1.5 text-white font-mono focus:outline-none focus:border-zinc-500"
                          />
                          <button
                            type="button"
                            onClick={() => setIsEditingBottom(false)}
                            className="px-3 py-1.5 rounded-lg bg-[#ececef] hover:bg-white text-[#0a0a0c] font-semibold flex items-center gap-1"
                          >
                            <Check className="w-3.5 h-3.5" /> OK
                          </button>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Barra de Girar Tabuleiro e Indicador de Lance Atual */}
                <div className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px] bg-[#121217] rounded-xl border border-[#22222e] px-3 py-2 flex flex-wrap items-center justify-between gap-2 shadow-sm">
                  {/* Botão Girar Tabuleiro */}
                  <button
                    type="button"
                    onClick={() =>
                      setBoardOrientation((o) =>
                        o === 'white' ? 'black' : 'white'
                      )
                    }
                    className="px-2.5 py-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] border border-[#282836] text-zinc-300 hover:text-white text-xs flex items-center gap-1.5 transition select-none"
                    title={t('broadcasts.flipBoardTitle')}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{t('broadcasts.flipBoard')}</span>
                  </button>

                  {/* Indicador de Lance Atual e Classificação */}
                  <div className="text-xs font-mono text-zinc-300 flex items-center gap-1.5 select-none">
                    {currentMove ? (
                      <>
                        <span className="text-sky-300 font-semibold">
                          {currentMove.moveNumber}
                          {currentMove.color === 'w' ? '.' : '...'} {currentMove.san}
                        </span>
                        {(currentMove.classification || currentAnnotation) && (
                          <span
                            className={`text-[10px] px-1.5 py-0.5 rounded bg-[#18181e] border border-[#292933] inline-flex items-center gap-1 shrink-0 ${
                              (currentMove.classification || currentAnnotation).textColor || 'text-purple-300'
                            }`}
                          >
                            <ClassificationBadge
                              id={(currentMove.classification || currentAnnotation).id}
                              symbol={(currentMove.classification || currentAnnotation).symbol}
                              size="xs"
                            />
                            <span className="hidden sm:inline">
                              {(currentMove.classification || currentAnnotation).label}
                            </span>
                          </span>
                        )}

                        {/* Alertas de Repeticao e Regra dos 50 lances FIDE */}
                        {repetitionStatus.isThreeFold ? (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded bg-red-950/70 border border-red-700 text-red-300 font-bold shrink-0 animate-pulse"
                            title={t('repetition.threeFoldDesc')}
                          >
                            {t('repetition.threeFoldBadge')}
                          </span>
                        ) : repetitionStatus.isTwoFold ? (
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded bg-amber-950/60 border border-amber-700/80 text-amber-300 font-semibold shrink-0"
                            title={t('repetition.twoFoldDesc')}
                          >
                            {t('repetition.twoFoldBadge')}
                          </span>
                        ) : null}

                        {repetitionStatus.isFiftyMoveDraw ? (
                          <span
                            className="text-[10px] px-2 py-0.5 rounded bg-red-950/70 border border-red-700 text-red-300 font-bold shrink-0"
                            title={t('repetition.fiftyMoveDesc')}
                          >
                            {t('repetition.fiftyMoveBadge')}
                          </span>
                        ) : repetitionStatus.fiftyMoveWarning ? (
                          <span
                            className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c1c27] border border-[#2d2d3f] text-zinc-400 font-mono shrink-0"
                            title={t('repetition.fiftyMoveWarning')}
                          >
                            {repetitionStatus.movesWithoutPawnOrCapture}/50
                          </span>
                        ) : null}
                      </>
                    ) : (
                      <span className="text-zinc-400 font-semibold">
                        {t('broadcasts.startPosition')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Área Exclusiva de Botões Grandes de Navegação do Tabuleiro (PC e Celular, Acima de Anotar Lance) */}
                <div className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px] bg-[#121217] rounded-xl border border-[#22222e] p-2 grid grid-cols-4 gap-2.5 shadow-sm">
                  <button
                    type="button"
                    onClick={() => setActiveNodeId(moveTree.rootId)}
                    disabled={activeNodeId === moveTree.rootId}
                    className="h-11 sm:h-12 rounded-xl bg-[#181822] hover:bg-[#252534] disabled:opacity-30 disabled:hover:bg-[#181822] border border-[#2a2a3a] flex items-center justify-center text-zinc-200 hover:text-white transition shadow-sm"
                    title={t('broadcasts.firstMoveTitle')}
                  >
                    <ChevronsLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => activeNode?.parentId && setActiveNodeId(activeNode.parentId)}
                    disabled={!activeNode?.parentId}
                    className="h-11 sm:h-12 rounded-xl bg-[#181822] hover:bg-[#252534] disabled:opacity-30 disabled:hover:bg-[#181822] border border-[#2a2a3a] flex items-center justify-center text-zinc-200 hover:text-white transition shadow-sm"
                    title={t('broadcasts.prevMoveTitle')}
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => activeNode?.childrenIds?.length && setActiveNodeId(activeNode.childrenIds[0])}
                    disabled={!activeNode?.childrenIds?.length}
                    className="h-11 sm:h-12 rounded-xl bg-[#181822] hover:bg-[#252534] disabled:opacity-30 disabled:hover:bg-[#181822] border border-[#2a2a3a] flex items-center justify-center text-zinc-200 hover:text-white transition shadow-sm"
                    title={t('broadcasts.nextMoveTitle')}
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      let id = activeNodeId;
                      while (moveTree.nodes[id]?.childrenIds?.length) {
                        id = moveTree.nodes[id].childrenIds[0];
                      }
                      setActiveNodeId(id);
                    }}
                    disabled={!activeNode?.childrenIds?.length}
                    className="h-11 sm:h-12 rounded-xl bg-[#181822] hover:bg-[#252534] disabled:opacity-30 disabled:hover:bg-[#181822] border border-[#2a2a3a] flex items-center justify-center text-zinc-200 hover:text-white transition shadow-sm"
                    title={t('broadcasts.liveMoveTitle')}
                  >
                    <ChevronsRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>

                {/* Final Teorico Syzygy (7 Pecas ou menos) */}
                <div className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px]">
                  <TablebaseCard
                    currentFen={currentFen}
                    onSelectMove={handleSelectMasterMove}
                  />
                </div>

                {/* Barra de Ferramentas da Árvore e Anotações Manuais */}
                <div className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px] bg-[#121217] rounded-xl border border-[#22222e] px-3 py-2.5 flex flex-col gap-2.5 shadow-sm">
                  {/* Linha 1: Símbolos de Anotação Manual */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-zinc-400 font-medium">Anotar lance:</span>
                      {currentMove?.nag && (
                        <button
                          type="button"
                          onClick={() => setNodeAnnotation(currentMove.id, currentMove.nag)}
                          className="text-[11px] text-zinc-500 hover:text-zinc-300 underline"
                        >
                          Remover
                        </button>
                      )}
                    </div>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {MOVE_ANNOTATIONS.map((a) => {
                        const active = currentMove?.nag === a.symbol;
                        return (
                          <button
                            key={a.symbol}
                            type="button"
                            disabled={!currentMove}
                            onClick={() => setNodeAnnotation(currentMove?.id, a.symbol)}
                            title={`${a.symbol} ${a.label}: ${a.desc}`}
                            className={`transition disabled:opacity-30 rounded-full ${
                              active ? 'ring-2 ring-white scale-105' : 'opacity-85 hover:opacity-100'
                            }`}
                          >
                            <ClassificationBadge
                              id={a.id}
                              symbol={a.symbol}
                              className="w-6 h-6 sm:w-7 sm:h-7 text-[11px] sm:text-xs rounded-full"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Linha 2: Ferramentas de Edição da Árvore (Undo, Redo, Apagar, Principal, Modo Variante) */}
                  <div className="pt-2 border-t border-[#1e1e28] flex flex-wrap items-center justify-between gap-1.5">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handleUndoTree}
                        disabled={undoStack.length === 0}
                        className="p-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-35 text-zinc-300 border border-[#282836]"
                        title="Desfazer (Undo)"
                      >
                        <Undo2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={handleRedoTree}
                        disabled={redoStack.length === 0}
                        className="p-1.5 rounded-lg bg-[#181820] hover:bg-[#252532] disabled:opacity-35 text-zinc-300 border border-[#282836]"
                        title="Refazer (Redo)"
                      >
                        <Redo2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        type="button"
                        onClick={() => {
                          if (activeNodeId === moveTree.rootId) return;
                          const res = deleteNodeAndSubtree(moveTree, activeNodeId);
                          commitTreeChange(res.tree, res.nextActiveId);
                        }}
                        disabled={activeNodeId === moveTree.rootId}
                        className="px-2.5 py-1 rounded-lg bg-[#1c1315] hover:bg-[#291a1d] disabled:opacity-35 text-red-300 border border-red-900/40 text-[11px] font-medium flex items-center gap-1"
                        title="Apagar este lance e sua continuação"
                      >
                        <Trash2 className="w-3 h-3" /> Apagar
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (activeNodeId === moveTree.rootId) return;
                          const next = promoteVariationToMainline(
                            moveTree,
                            activeNodeId
                          );
                          commitTreeChange(next, activeNodeId);
                        }}
                        disabled={activeNodeId === moveTree.rootId}
                        className="px-2.5 py-1 rounded-lg bg-[#1f1c14] hover:bg-[#2b261b] disabled:opacity-35 text-amber-300 border border-amber-900/40 text-[11px] font-medium flex items-center gap-1"
                        title="Definir como Linha Principal"
                      >
                        <Star className="w-3 h-3" /> Principal
                      </button>

                      <button
                        type="button"
                        onClick={() => setReplaceMode((r) => !r)}
                        className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1 transition ${
                          replaceMode
                            ? 'bg-[#262630] border-zinc-400 text-white'
                            : 'bg-[#181820] border-[#282836] text-zinc-300 hover:bg-[#252532]'
                        }`}
                        title="Alternar entre Criar Variante ou Substituir Lance ao jogar em posição anterior"
                      >
                        <GitBranch className="w-3 h-3" />
                        {replaceMode ? 'Modo: Substituir' : 'Modo: Criar Variante'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Seletor Rápido para Alternar entre Variantes na Posição Atual */}
                {activeSiblingVariations.length > 1 && (
                  <div className="w-full max-w-[560px] lg:max-w-[650px] xl:max-w-[680px] bg-[#121217] border border-[#22222e] px-4 py-2.5 rounded-xl flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-zinc-300 font-medium flex items-center gap-1.5">
                      <GitBranch className="w-4 h-4 text-zinc-400" />
                      Alternar entre linhas neste lance:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeSiblingVariations.map((sibId, idx) => {
                        const sib = moveTree.nodes[sibId];
                        if (!sib) return null;
                        return (
                          <button
                            key={sibId}
                            onClick={() => setActiveNodeId(sibId)}
                            className={`px-2.5 py-1 rounded-md font-mono font-bold transition inline-flex items-center gap-1 ${
                              sibId === activeNodeId
                                ? 'bg-[#ececef] text-[#0a0a0c]'
                                : 'bg-[#0e0e11] text-zinc-300 border border-[#24242c] hover:bg-[#1c1c22]'
                            }`}
                          >
                            {idx === 0 && <Star className="w-3 h-3 fill-current inline shrink-0" />}
                            <span>
                              {sib.moveNumber}
                              {sib.color === 'w' ? '.' : '...'} {sib.san}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* COLUNA DIREITA: Revisão + Motor Stockfish Acima dos Lances + Abas (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                {/* Área de Destaque: Painel de Revisão Estilo Chess.com ou Botão de Análise */}
                {hasReview ? (
                  <GameReviewDashboard
                    mainlineNodes={mainlineNodes}
                    whiteAccuracy={whiteAccuracy}
                    blackAccuracy={blackAccuracy}
                    whitePlayer={metaWhite.trim() || t('common.white')}
                    whiteRating={metaWhiteRating.trim()}
                    blackPlayer={metaBlack.trim() || t('common.black')}
                    blackRating={metaBlackRating.trim()}
                    currentMove={currentMove}
                    onSelectMove={(nodeId) => setActiveNodeId(nodeId)}
                    depth={depth}
                    setDepth={setDepth}
                    onReAnalyze={runFullAnalysis}
                    onStopAnalysis={stopAnalysis}
                    isAnalyzing={isAnalyzing}
                    analysisProgress={analysisProgress}
                    gameResult={metaResult}
                  />
                ) : (
                  <div className="rounded-2xl p-4 border border-sky-500/30 bg-[#121218] flex flex-col gap-3">
                    {!isAnalyzing ? (
                      <button
                        onClick={runFullAnalysis}
                        disabled={mainlineNodes.length === 0}
                        className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm sm:text-base font-bold tracking-wide shadow-md shadow-sky-950/40 transition flex items-center justify-center gap-2.5"
                      >
                        <Play className="w-5 h-5 fill-current" />
                        <span>Revisar Partida</span>
                      </button>
                    ) : (
                      <div className="flex flex-col gap-2">
                        <div className="h-3 rounded-full bg-[#1c1c24] overflow-hidden">
                          <div
                            className="h-full bg-sky-500 transition-all duration-300"
                            style={{ width: `${analysisProgress}%` }}
                          />
                        </div>
                        <button
                          onClick={stopAnalysis}
                          className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-sm font-bold transition"
                        >
                          Parar revisão ({analysisProgress}%)
                        </button>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 text-xs">
                      <span className="text-zinc-400 text-[11px] sm:text-xs">
                        Classifica todos os lances, detecta capivaras e calcula a precisão por fase.
                      </span>
                      <div className="flex items-center gap-1.5 self-start sm:self-auto shrink-0 text-zinc-300 font-mono text-[11px] bg-[#0e0e11] px-2.5 py-1 rounded-lg border border-[#26262f] hover:border-sky-500/50 transition">
                        <Cpu className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <select
                          value={depth}
                          disabled={isAnalyzing}
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            setDepth(val);
                            try {
                              localStorage.setItem('saragix_engine_depth', String(val));
                              localStorage.setItem('saragix_live_max_depth', String(val));
                            } catch {
                              // ignore
                            }
                          }}
                          className="bg-transparent text-zinc-200 outline-none cursor-pointer pr-1 text-[11px]"
                          title="Alterar profundidade de cálculo do Stockfish 19 para a revisão"
                        >
                          <option value={10} className="bg-[#121218] text-zinc-200">Profundidade 10 (Rápido)</option>
                          <option value={12} className="bg-[#121218] text-zinc-200">Profundidade 12 (Padrão)</option>
                          <option value={14} className="bg-[#121218] text-zinc-200">Profundidade 14 (Equilibrado)</option>
                          <option value={16} className="bg-[#121218] text-zinc-200">Profundidade 16 (Recomendado)</option>
                          <option value={18} className="bg-[#121218] text-zinc-200">Profundidade 18 (Profundo / Mestre)</option>
                          <option value={20} className="bg-[#121218] text-zinc-200">Profundidade 20 (Máxima Precisão)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {errorMsg && (
                  <div className="bg-[#221416] border border-red-900/50 text-red-300 text-xs px-4 py-2.5 rounded-lg flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Painel Lateral Padrão Broadcast: Abas + Motor ao Vivo Acima dos Lances */}
                <div ref={rightPanelRef} className="bg-[#141418] border border-[#24242c] rounded-xl overflow-hidden flex-1 flex flex-col">
                  <div className="relative border-b border-[#1c1c22] bg-[#111114]">
                    <div
                      className="flex overflow-x-auto no-scrollbar scrollbar-none md:grid md:grid-cols-6 text-[11px] font-medium scroll-smooth px-1 md:px-0"
                    >
                      <button
                        onClick={() => switchAnalysisTab('tree')}
                        className={`shrink-0 md:shrink py-2.5 sm:py-3 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 whitespace-nowrap border-b-2 transition ${
                          analysisRightTab === 'tree'
                            ? 'border-white text-white bg-[#15151a]'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <GitBranch className="w-3.5 h-3.5 shrink-0" />
                        <span>Árvore</span>
                        <span className="text-[10px] opacity-75 font-mono">({mainlineNodes.length})</span>
                      </button>
                      <button
                        onClick={() => switchAnalysisTab('masters')}
                        className={`shrink-0 md:shrink py-2.5 sm:py-3 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 whitespace-nowrap border-b-2 transition ${
                          analysisRightTab === 'masters'
                            ? 'border-sky-400 text-sky-300 bg-[#141b24]'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                        }`}
                        title="Base de Dados Oficial do Lichess, Mestres FIDE e Busca por Jogador/GM"
                      >
                        <Database className="w-3.5 h-3.5 shrink-0" />
                        <span className="hidden sm:inline">Base de Dados</span>
                        <span className="sm:hidden">Mestres</span>
                      </button>
                      <button
                        onClick={() => switchAnalysisTab('online')}
                        className={`shrink-0 md:shrink py-2.5 sm:py-3 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 whitespace-nowrap border-b-2 transition ${
                          analysisRightTab === 'online'
                            ? 'border-sky-400 text-sky-300 bg-[#141b24]'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <Globe className="w-3.5 h-3.5 shrink-0" />
                        <span>Online</span>
                      </button>
                      <button
                        onClick={() => switchAnalysisTab('metadata')}
                        className={`shrink-0 md:shrink py-2.5 sm:py-3 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 whitespace-nowrap border-b-2 transition ${
                          analysisRightTab === 'metadata'
                            ? 'border-white text-white bg-[#15151a]'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <Edit3 className="w-3.5 h-3.5 shrink-0" />
                        <span className="hidden sm:inline">Metadados</span>
                        <span className="sm:hidden">Info</span>
                      </button>
                      <button
                        onClick={() => switchAnalysisTab('pgn')}
                        className={`shrink-0 md:shrink py-2.5 sm:py-3 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 whitespace-nowrap border-b-2 transition ${
                          analysisRightTab === 'pgn'
                            ? 'border-white text-white bg-[#15151a]'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        <FileText className="w-3.5 h-3.5 shrink-0" />
                        <span>PGN</span>
                      </button>
                      <button
                        onClick={() => switchAnalysisTab('open_db')}
                        className={`shrink-0 md:shrink py-2.5 sm:py-3 px-2.5 sm:px-3 flex items-center justify-center gap-1.5 whitespace-nowrap border-b-2 transition ${
                          analysisRightTab === 'open_db'
                            ? 'border-white text-white bg-[#15151a]'
                            : 'border-transparent text-zinc-400 hover:text-zinc-200'
                        }`}
                        title="Suas partidas salvas localmente com busca e exportação em lote"
                      >
                        <FolderOpen className="w-3.5 h-3.5 shrink-0" />
                        <span>Salvas</span>
                        {savedGames.length > 0 && (
                          <span className="text-[10px] opacity-75 font-mono">({savedGames.length})</span>
                        )}
                      </button>
                    </div>
                    {/* Indicador suave de rolagem lateral para dispositivos moveis */}
                    <div className="pointer-events-none md:hidden absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#111114] to-transparent" />
                  </div>

                  {/* Motor ao Vivo Acima dos Lances (Padronizado com Transmissões) */}
                  <div className="bg-[#111116] border-b border-[#242432] px-3.5 py-2.5 flex flex-col gap-2 text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2.5 min-w-0 flex-1">
                        <button
                          type="button"
                          onClick={() => setLiveEngineOn((v) => !v)}
                          className={`relative w-9 h-5 rounded-full transition shrink-0 ${liveEngineOn ? 'bg-sky-500' : 'bg-[#2a2a33]'}`}
                          title={t('broadcasts.liveEngineToggle')}
                        >
                          <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all shadow-sm ${liveEngineOn ? 'left-[18px]' : 'left-0.5'}`} />
                        </button>
                        <span className="text-zinc-200 font-medium text-xs shrink-0 select-none">
                          {t('broadcasts.liveEngine')}
                        </span>

                        {liveEngineOn && (
                          liveActive ? (
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className={`font-mono font-bold px-1.5 py-0.5 rounded text-[11px] ${isWhiteAhead ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-800 text-zinc-100'}`}>
                                {formatEvalText(currentMove)}
                              </span>
                              <span className="text-zinc-400 font-mono text-[11px] shrink-0">
                                {t('broadcasts.depth')} {liveEval.depth}/{depth}
                              </span>
                              {liveEval.done && (
                                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 font-mono">
                                  fixo
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-zinc-500 text-[11px] animate-pulse">
                              {isAnalyzing ? 'Pausado na revisão' : t('broadcasts.calculating')}
                            </span>
                          )
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setShowLiveSettings((s) => !s)}
                        className={`ml-auto px-2 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 transition shrink-0 ${
                          showLiveSettings
                            ? 'bg-sky-500/20 border-sky-400 text-sky-300'
                            : 'bg-[#181820] border-[#272733] text-zinc-400 hover:text-zinc-200'
                        }`}
                        title={t('broadcasts.parametersTooltip')}
                      >
                        <SlidersHorizontal className="w-3.5 h-3.5" />
                        <span>{t('broadcasts.parameters')}</span>
                      </button>
                    </div>

                    {/* Painel Expansível de Configurações do Motor */}
                    {showLiveSettings && (
                      <div className="bg-[#121218] border border-[#262635] rounded-lg p-2.5 mt-0.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs animate-in fade-in duration-150">
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1 font-medium">
                            {t('broadcasts.depthLabel')}
                          </label>
                          <select
                            value={depth}
                            onChange={(e) => setDepth(Number(e.target.value))}
                            className="w-full bg-[#0a0a0d] border border-[#2b2b3a] rounded-md px-2 py-1.5 text-xs text-white focus:outline-none"
                          >
                            <option value={10}>Prof. 10 (Rápido)</option>
                            <option value={12}>Prof. 12 (Padrão)</option>
                            <option value={14}>Prof. 14 (Recomendado)</option>
                            <option value={16}>Prof. 16 (Estável)</option>
                            <option value={18}>Prof. 18 (Mestre)</option>
                            <option value={20}>Prof. 20 (Máximo)</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1 font-medium">
                            Tempo por Lance:
                          </label>
                          <select
                            value={liveMoveTimeMs}
                            onChange={(e) => setLiveMoveTimeMs(Number(e.target.value))}
                            className="w-full bg-[#0a0a0d] border border-[#2b2b3a] rounded-md px-2 py-1.5 text-xs text-white focus:outline-none"
                          >
                            <option value={500}>0.5s (Padrão)</option>
                            <option value={1000}>1.0s</option>
                            <option value={2000}>2.0s</option>
                            <option value={3000}>3.0s</option>
                            <option value={0}>Sem limite</option>
                          </select>
                        </div>

                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1 font-medium">
                            {t('broadcasts.linesLabel')}
                          </label>
                          <select
                            value={liveMultiPv}
                            onChange={(e) => setLiveMultiPv(Number(e.target.value))}
                            className="w-full bg-[#0a0a0d] border border-[#2b2b3a] rounded-md px-2 py-1.5 text-xs text-white focus:outline-none"
                          >
                            <option value={1}>1 Linha</option>
                            <option value={2}>2 Linhas</option>
                            <option value={3}>3 Linhas (Padrão)</option>
                            <option value={4}>4 Linhas</option>
                            <option value={5}>5 Linhas</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Linhas MultiPV do Motor em Tempo Real */}
                    {liveEngineOn && liveActive && (
                      <div className="space-y-1.5 border-t border-[#1c1c24] pt-2">
                        {((liveEval.lines && liveEval.lines.length > 0)
                          ? liveEval.lines
                          : [{ multipv: 1, evalWhiteCp: liveEval.evalWhiteCp, mateWhite: liveEval.mateWhite, pv: liveEval.pv, bestMoveUci: liveEval.bestMoveUci }]
                        ).slice(0, liveMultiPv).map((line, idx) => {
                          const lineNum = line.multipv || idx + 1;
                          const scoreText = formatMultiPvScore(line.evalWhiteCp, line.mateWhite);
                          const formattedPv = formatPvLineWithGlyphs(currentFen, line.pv, 7);

                          return (
                            <div
                              key={lineNum}
                              onClick={() => line.bestMoveUci && handleSelectMasterMove('', line.bestMoveUci)}
                              className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg bg-[#0e0e13] hover:bg-[#161622] border border-[#1e1e28] hover:border-sky-500/40 transition group cursor-pointer select-none"
                              title={`${lineNum}º melhor lance: ${scoreText} (Clique para jogar no tabuleiro)`}
                            >
                              <span className="bg-zinc-100 text-zinc-950 font-mono font-bold text-[11px] px-2 py-0.5 rounded shadow-sm shrink-0 border border-zinc-300">
                                {scoreText}
                              </span>

                              <span className="font-mono text-zinc-200 text-xs truncate group-hover:text-sky-300 transition leading-normal min-w-0 flex-1">
                                {formattedPv || (line.bestMoveUci ? line.bestMoveUci : t('broadcasts.calculating'))}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* CONTEÚDO 1: 🌳 ÁRVORE REAL DE VARIANTES + RELATÓRIO */}
                  {analysisRightTab === 'tree' && (
                    <div className="p-4 flex-1 flex flex-col gap-4">
                      {/* Abertura Detectada em Tempo Real */}
                      <div className="flex items-center justify-between text-xs bg-[#0e0e11] px-3.5 py-2 rounded-lg border border-[#222229]">
                        <span className="text-zinc-400">Abertura:</span>
                        <span className="font-semibold text-zinc-200 truncate max-w-[240px]">
                          {metaEco ? `${metaEco} • ` : ''}
                          {metaOpening || 'Jogue no tabuleiro para iniciar'}
                        </span>
                      </div>

                      {/* Visualização da Árvore Real de Variantes */}
                      <div className="bg-[#0e0e11] border border-[#222229] rounded-xl p-3.5 h-[250px] overflow-y-auto">
                        {moveTree.nodes[moveTree.rootId].childrenIds.length ===
                        0 ? (
                          <div className="h-full flex flex-col items-center justify-center text-center text-xs text-zinc-400 space-y-2 px-4">
                            <GitBranch className="w-6 h-6 text-zinc-500" />
                            <div className="font-semibold text-zinc-200">
                              Tabuleiro pronto para registrar lances
                            </div>
                            <p>
                              Arraste as peças diretamente no tabuleiro para criar a partida do zero
                              (ex: <strong>1. e4 c5</strong>). Volte em qualquer lance e jogue outro movimento para criar variantes!
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {moveTree.nodes[moveTree.rootId].childrenIds.map(
                              (firstChildId, idx) => (
                                <VariationBranchView
                                  key={firstChildId}
                                  tree={moveTree}
                                  startNodeId={firstChildId}
                                  activeNodeId={activeNodeId}
                                  onSelectNode={(id) => setActiveNodeId(id)}
                                  onPromoteNode={(id) => {
                                    const next = promoteVariationToMainline(
                                      moveTree,
                                      id
                                    );
                                    commitTreeChange(next, id);
                                  }}
                                  onDeleteNode={(id) => {
                                    const res = deleteNodeAndSubtree(
                                      moveTree,
                                      id
                                    );
                                    commitTreeChange(
                                      res.tree,
                                      res.nextActiveId
                                    );
                                  }}
                                  depthLevel={idx === 0 ? 0 : 1}
                                />
                              )
                            )}
                          </div>
                        )}
                      </div>

                      {/* Editor Rápido de Comentário no Lance Selecionado */}
                      {currentMove && (
                        <div className="flex items-center gap-2 bg-[#0e0e11] border border-[#222229] rounded-lg px-2.5 py-1.5 text-xs">
                          <Edit3 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                          <input
                            type="text"
                            value={currentMove.comment || ''}
                            onChange={(e) => handleUpdateNodeComment(currentMove.id, e.target.value)}
                            placeholder={`Adicionar nota ao lance ${currentMove.moveNumber}${currentMove.color === 'w' ? '.' : '...'} ${currentMove.san} (salvo no PGN)...`}
                            className="flex-1 bg-transparent text-zinc-200 placeholder:text-zinc-500 focus:outline-none text-[11px]"
                          />
                        </div>
                      )}

                      {/* Atalhos Rápidos de Teclado */}
                      <div className="text-[10px] text-zinc-500 font-mono flex flex-wrap items-center justify-between gap-1 px-1">
                        <span>Teclado: ←/→ lances • ↑/↓ variantes • Espaço motor • F girar • P promover • Del apagar</span>
                        <span>Toque ou arraste peças</span>
                      </div>
                    </div>
                  )}

                  {/* CONTEÚDO 1.5: 📚 BASE DE DADOS DO LICHESS */}
                  {analysisRightTab === 'masters' && (
                    <LichessExplorerPanel
                      currentFen={currentFen}
                      onSelectMove={handleSelectMasterMove}
                      onImportPgn={handleImportPgnText}
                    />
                  )}

                  {/* CONTEÚDO 2: 📝 EDITOR DE INFORMAÇÕES DA PARTIDA (Metadados Completos) */}
                  {analysisRightTab === 'metadata' && (
                    <div className="p-4 space-y-3 text-xs max-h-[460px] overflow-y-auto">
                      {/* 🎯 Minha Cor */}
                      <div className="bg-[#0e0e11] border border-[#24242c] p-3 rounded-xl">
                        <label className="block text-zinc-300 font-semibold mb-2">
                          Minha Cor
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setMetaUserColor('w');
                              setBoardOrientation('white');
                            }}
                            className={`py-2 px-3 rounded-lg font-semibold border transition flex items-center justify-center gap-2 ${
                              metaUserColor === 'w'
                                ? 'bg-[#ececef] border-white text-[#0a0a0c]'
                                : 'bg-[#15151a] border-[#26262f] text-zinc-400'
                            }`}
                          >
                            ⬜ Joguei de Brancas
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setMetaUserColor('b');
                              setBoardOrientation('black');
                            }}
                            className={`py-2 px-3 rounded-lg font-semibold border transition flex items-center justify-center gap-2 ${
                              metaUserColor === 'b'
                                ? 'bg-[#ececef] border-white text-[#0a0a0c]'
                                : 'bg-[#15151a] border-[#26262f] text-zinc-400'
                            }`}
                          >
                            ⬛ Joguei de Pretas
                          </button>
                        </div>
                      </div>

                      {/* Jogador de Brancas (Nome, Rating, Título) */}
                      <div className="bg-[#0e0e11] border border-[#24242c] p-3 rounded-xl space-y-2">
                        <span className="font-semibold text-white block">
                          ⬜ Jogador de Brancas
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="col-span-2">
                            <label className="text-[10px] text-zinc-400 block">
                              Nome
                            </label>
                            <input
                              type="text"
                              value={metaWhite}
                              onChange={(e) => setMetaWhite(e.target.value)}
                              className="w-full bg-[#15151a] border border-[#282832] rounded-lg px-2.5 py-1.5 text-white"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-zinc-400 block">
                              Rating
                            </label>
                            <input
                              type="text"
                              value={metaWhiteRating}
                              onChange={(e) =>
                                setMetaWhiteRating(e.target.value)
                              }
                              placeholder="Ex: 1850"
                              className="w-full bg-[#15151a] border border-[#282832] rounded-lg px-2.5 py-1.5 text-white font-mono"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block">
                            Título Oficial
                          </label>
                          <TitleSelect
                            value={metaWhiteTitle}
                            onChange={(e) => setMetaWhiteTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Jogador de Pretas (Nome, Rating, Título) */}
                      <div className="bg-[#0e0e11] border border-[#24242c] p-3 rounded-xl space-y-2">
                        <span className="font-semibold text-white block">
                          ⬛ Jogador de Pretas
                        </span>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="col-span-2">
                            <label className="text-[10px] text-zinc-400 block">
                              Nome
                            </label>
                            <input
                              type="text"
                              value={metaBlack}
                              onChange={(e) => setMetaBlack(e.target.value)}
                              className="w-full bg-[#15151a] border border-[#282832] rounded-lg px-2.5 py-1.5 text-white"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-zinc-400 block">
                              Rating
                            </label>
                            <input
                              type="text"
                              value={metaBlackRating}
                              onChange={(e) =>
                                setMetaBlackRating(e.target.value)
                              }
                              placeholder="Ex: 1920"
                              className="w-full bg-[#15151a] border border-[#282832] rounded-lg px-2.5 py-1.5 text-white font-mono"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block">
                            Título Oficial
                          </label>
                          <TitleSelect
                            value={metaBlackTitle}
                            onChange={(e) => setMetaBlackTitle(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* Resultado, Data, Rodada */}
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Resultado
                          </label>
                          <select
                            value={metaResult}
                            onChange={(e) => setMetaResult(e.target.value)}
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2 py-2 text-white"
                          >
                            <option value="1-0">1-0 (Brancas)</option>
                            <option value="0-1">0-1 (Pretas)</option>
                            <option value="1/2-1/2">1/2-1/2 (Empate)</option>
                            <option value="*">* (Em aberto)</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Data
                          </label>
                          <input
                            type="date"
                            value={metaDate}
                            onChange={(e) => setMetaDate(e.target.value)}
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2 py-1.5 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Rodada
                          </label>
                          <input
                            type="text"
                            value={metaRound}
                            onChange={(e) => setMetaRound(e.target.value)}
                            placeholder="Ex: 3"
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-1.5 text-white"
                          />
                        </div>
                      </div>

                      {/* Evento/Torneio, Local, Plataforma */}
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <label className="text-[10px] text-zinc-300 font-semibold block mb-1">
                            Evento / Torneio
                          </label>
                          <input
                            type="text"
                            value={metaEvent}
                            onChange={(e) => setMetaEvent(e.target.value)}
                            placeholder="JIFS Estadual 2026"
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-1.5 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Local
                          </label>
                          <input
                            type="text"
                            value={metaLocation}
                            onChange={(e) => setMetaLocation(e.target.value)}
                            placeholder="Cidade / Clube"
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-1.5 text-white"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Plataforma
                          </label>
                          <input
                            type="text"
                            value={metaPlatform}
                            onChange={(e) => setMetaPlatform(e.target.value)}
                            placeholder="Lichess, Chess.com, OTB"
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-1.5 text-white"
                          />
                        </div>
                      </div>

                      {/* Modalidade e Controle de Tempo */}
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Modalidade
                          </label>
                          <select
                            value={metaGameMode}
                            onChange={(e) => setMetaGameMode(e.target.value)}
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-2 text-white"
                          >
                            {GAME_MODES.map((gm) => (
                              <option key={gm.value} value={gm.value}>
                                {gm.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] text-zinc-400 block mb-1">
                            Controle de Tempo
                          </label>
                          <select
                            value={metaTimeControl}
                            onChange={(e) => setMetaTimeControl(e.target.value)}
                            className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-2.5 py-2 text-white"
                          >
                            {TIME_CONTROLS.map((tc) => (
                              <option key={tc.value} value={tc.value}>
                                {tc.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CONTEÚDO 2.5: 🌐 BUSCAR PARTIDAS ONLINE (LICHESS & CHESS.COM) */}
                  {analysisRightTab === 'online' && (
                    <div className="p-4 space-y-4 text-xs flex-1 flex flex-col">
                      <div className="bg-[#121822] border border-[#20364d] rounded-xl p-3 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-sky-400" />
                            Buscar por Nick
                          </span>
                          <span className="text-[10px] text-sky-300 font-mono">
                            Base Pública Aberta
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-300 leading-relaxed">
                          Digite o nome de usuário de qualquer jogador (você, amigos ou Mestres) para carregar as partidas diretamente para análise.
                        </p>

                        <form onSubmit={handleFetchOnlineGames} className="space-y-2.5 pt-1">
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setOnlinePlatform('lichess')}
                              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition ${
                                onlinePlatform === 'lichess'
                                  ? 'bg-[#1e293b] border-sky-400 text-white shadow-sm'
                                  : 'bg-[#0e0e12] border-[#22222a] text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              <KnightIcon className="w-3.5 h-3.5 fill-current" />
                              <span>Lichess.org</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setOnlinePlatform('chesscom')}
                              className={`py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 border transition ${
                                onlinePlatform === 'chesscom'
                                  ? 'bg-[#1b2f1f] border-emerald-400 text-white shadow-sm'
                                  : 'bg-[#0e0e12] border-[#22222a] text-zinc-400 hover:text-zinc-200'
                              }`}
                            >
                              <PawnIcon className="w-3.5 h-3.5 fill-current" />
                              <span>Chess.com</span>
                            </button>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-2">
                            <input
                              type="text"
                              value={onlineUsername}
                              onChange={(e) => setOnlineUsername(e.target.value)}
                              placeholder={
                                onlinePlatform === 'lichess'
                                  ? 'Nick no Lichess (ex: MagnusCarlsen)'
                                  : 'Nick no Chess.com (ex: erik)'
                              }
                              className="w-full sm:flex-1 bg-[#0a0a0d] border border-[#252530] focus:border-sky-400 rounded-lg px-3 py-2 text-xs text-white placeholder:text-zinc-500 focus:outline-none transition font-medium"
                            />
                            <div className="flex items-center gap-2">
                              <select
                                value={onlineGamesCount}
                                onChange={(e) => setOnlineGamesCount(Number(e.target.value))}
                                className="flex-1 sm:flex-none bg-[#0a0a0d] border border-[#252530] text-zinc-300 rounded-lg px-2.5 py-2 text-xs focus:outline-none"
                              >
                                <option value={10}>10 partidas</option>
                                <option value={20}>20 partidas</option>
                                <option value={50}>50 partidas</option>
                                <option value={100}>100 partidas</option>
                              </select>
                              <button
                                type="submit"
                                disabled={onlineLoading || !onlineUsername.trim()}
                                className="flex-1 sm:flex-none bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-white font-semibold px-4 py-2 rounded-lg transition flex items-center justify-center gap-1.5 shadow-md shadow-sky-950/50"
                              >
                                {onlineLoading ? (
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Search className="w-3.5 h-3.5" />
                                )}
                                <span>Buscar</span>
                              </button>
                            </div>
                          </div>
                        </form>

                        {onlineError && (
                          <div className="bg-[#241517] border border-red-900/60 text-red-300 text-[11px] p-2 rounded-lg flex items-center gap-1.5">
                            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                            <span>{onlineError}</span>
                          </div>
                        )}
                      </div>

                      {/* Lista de Partidas Encontradas */}
                      <div className="flex-1 flex flex-col min-h-0 space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-zinc-400 px-0.5">
                          <span>
                            {fetchedOnlineGames.length > 0
                              ? `Partidas recentes (${fetchedOnlineGames.length}):`
                              : 'Nenhuma busca realizada'}
                          </span>
                          {fetchedOnlineGames.length > 0 && (
                            <span className="text-[10px] text-zinc-500">
                              Clique para carregar na análise
                            </span>
                          )}
                        </div>

                        {fetchedOnlineGames.length === 0 && !onlineLoading && (
                          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center border border-dashed border-[#23232c] rounded-xl text-zinc-500">
                            <Globe className="w-8 h-8 mb-2 opacity-30 text-sky-400" />
                            <p className="text-xs text-zinc-400 font-medium">
                              Pesquise seu nick ou de qualquer Mestre
                            </p>
                            <p className="text-[11px] text-zinc-500 mt-0.5">
                              As partidas são importadas na hora via API oficial aberta.
                            </p>
                          </div>
                        )}

                        {fetchedOnlineGames.length > 0 && (
                          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                            {fetchedOnlineGames.map((g) => {
                              const outcomeBg =
                                g.userOutcome === 'win'
                                  ? 'bg-emerald-950/40 border-emerald-800/40 text-emerald-300'
                                  : g.userOutcome === 'loss'
                                  ? 'bg-rose-950/40 border-rose-800/40 text-rose-300'
                                  : 'bg-zinc-900/60 border-zinc-700/40 text-zinc-300';
                              const outcomeText =
                                g.userOutcome === 'win'
                                  ? 'Vitória'
                                  : g.userOutcome === 'loss'
                                  ? 'Derrota'
                                  : 'Empate';

                              return (
                                <div
                                  key={g.id}
                                  onClick={() => handleSelectOnlineGame(g)}
                                  className="group bg-[#0e0e13] hover:bg-[#151720] border border-[#22222b] hover:border-sky-500/50 rounded-xl p-3 cursor-pointer transition flex flex-col gap-2"
                                >
                                  <div className="flex items-center justify-between text-[11px]">
                                    <div className="flex items-center gap-1.5">
                                      <span
                                        className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${outcomeBg}`}
                                      >
                                        {outcomeText}
                                      </span>
                                      <span className="font-mono text-zinc-400">
                                        {g.result}
                                      </span>
                                      <span className="text-zinc-500">•</span>
                                      <span className="text-zinc-400 capitalize">
                                        {g.speed}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[10px] text-zinc-500 font-mono">
                                        {g.date}
                                      </span>
                                      <a
                                        href={g.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-zinc-500 hover:text-sky-400"
                                        title="Ver no site de origem"
                                      >
                                        <ExternalLink className="w-3 h-3" />
                                      </a>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 gap-2 text-xs">
                                    <div className="flex items-center gap-1.5 truncate">
                                      <span className="w-2.5 h-2.5 rounded-full bg-white border border-zinc-400 shrink-0" />
                                      <span
                                        className={`truncate ${
                                          g.userColor === 'w'
                                            ? 'font-bold text-white'
                                            : 'text-zinc-300'
                                        }`}
                                      >
                                        {g.white}
                                      </span>
                                      {g.whiteRating && (
                                        <span className="text-[10px] text-zinc-500 font-mono">
                                          ({g.whiteRating})
                                        </span>
                                      )}
                                    </div>
                                    <div className="flex items-center gap-1.5 truncate">
                                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-600 shrink-0" />
                                      <span
                                        className={`truncate ${
                                          g.userColor === 'b'
                                            ? 'font-bold text-white'
                                            : 'text-zinc-300'
                                        }`}
                                      >
                                        {g.black}
                                      </span>
                                      {g.blackRating && (
                                        <span className="text-[10px] text-zinc-500 font-mono">
                                          ({g.blackRating})
                                        </span>
                                      )}
                                    </div>
                                  </div>

                                  {g.opening && (
                                    <div className="text-[10px] text-zinc-500 truncate pt-0.5 border-t border-[#1a1a22] flex items-center justify-between">
                                      <span className="truncate">
                                        {g.eco ? `${g.eco} • ` : ''}
                                        {g.opening}
                                      </span>
                                      <span className="text-sky-400 group-hover:translate-x-0.5 transition font-semibold shrink-0 inline-flex items-center gap-1">
                                        Carregar <ArrowRight className="w-3 h-3" />
                                      </span>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* CONTEÚDO 3: 📥 IMPORTAR / EXPORTAR PGN EM TEMPO REAL */}
                  {analysisRightTab === 'pgn' && (
                    <div className="p-4 space-y-4 text-xs">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-zinc-200">
                            Notação PGN Construída em Tempo Real
                          </span>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleDownloadPgn()}
                              disabled={mainlineNodes.length === 0}
                              className="text-[11px] text-zinc-300 hover:text-white disabled:opacity-40 flex items-center gap-1"
                            >
                              <Download className="w-3.5 h-3.5" /> Exportar .PGN
                            </button>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(liveGeneratedPgn);
                                setSaveToast('PGN copiado!');
                                setTimeout(() => setSaveToast(''), 2500);
                              }}
                              className="text-[11px] text-zinc-300 hover:text-white flex items-center gap-1"
                            >
                              <Copy className="w-3.5 h-3.5" /> Copiar PGN
                            </button>
                          </div>
                        </div>
                        <textarea
                          readOnly
                          rows={5}
                          value={liveGeneratedPgn}
                          className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg p-2.5 font-mono text-[11px] text-zinc-300"
                        />
                      </div>

                      <div className="border-t border-[#222229] pt-3">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="font-semibold text-white">
                            Importar PGN Existente
                          </span>
                          <label className="cursor-pointer text-zinc-300 hover:text-white flex items-center gap-1">
                            <Upload className="w-3.5 h-3.5" /> Abrir arquivo .pgn
                            <input
                              type="file"
                              accept=".pgn,.txt"
                              onChange={handleFileUpload}
                              className="hidden"
                            />
                          </label>
                        </div>
                        <textarea
                          rows={4}
                          value={pgnInput}
                          onChange={(e) => setPgnInput(e.target.value)}
                          placeholder="Cole o PGN (com ou sem variantes) aqui..."
                          className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg p-2.5 font-mono text-white focus:outline-none focus:border-zinc-500"
                        />
                        <button
                          onClick={() => handleImportPgnText(pgnInput)}
                          className="mt-2 w-full bg-[#ececef] hover:bg-white text-[#0a0a0c] font-semibold py-2.5 rounded-lg transition"
                        >
                          Carregar PGN na Árvore de Análise
                        </button>
                      </div>
                    </div>
                  )}

                  {/* CONTEÚDO 4: 🗃️ ABRIR PARTIDA SALVA DA BASE (COM BUSCA, FILTROS E EXPORTAÇÃO EM LOTE) */}
                  {analysisRightTab === 'open_db' && (() => {
                    const filteredOpenDbGames = savedGames.filter((g) => {
                      const uCol = g.userColor || 'w';
                      const isWin =
                        (uCol === 'w' && g.result === '1-0') ||
                        (uCol === 'b' && g.result === '0-1');
                      const isLoss =
                        (uCol === 'w' && g.result === '0-1') ||
                        (uCol === 'b' && g.result === '1-0');
                      const isDraw = g.result === '1/2-1/2';

                      if (openDbFilterColor !== 'ALL' && uCol !== openDbFilterColor) return false;
                      if (openDbFilterResult === 'WIN' && !isWin) return false;
                      if (openDbFilterResult === 'DRAW' && !isDraw) return false;
                      if (openDbFilterResult === 'LOSS' && !isLoss) return false;

                      if (openDbSearch.trim()) {
                        const q = openDbSearch.toLowerCase();
                        const match =
                          g.title?.toLowerCase().includes(q) ||
                          g.white?.toLowerCase().includes(q) ||
                          g.black?.toLowerCase().includes(q) ||
                          g.opening?.toLowerCase().includes(q) ||
                          g.eco?.toLowerCase().includes(q) ||
                          g.event?.toLowerCase().includes(q);
                        if (!match) return false;
                      }
                      return true;
                    });

                    return (
                      <div className="p-4 space-y-3 text-xs flex-1 flex flex-col">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-semibold text-white">
                            Partidas Salvas no Navegador ({filteredOpenDbGames.length}/{savedGames.length})
                          </span>
                          {savedGames.length > 0 && (
                            <div className="flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={() => handleExportAllSavedGamesPgn(filteredOpenDbGames)}
                                disabled={filteredOpenDbGames.length === 0}
                                className="px-2.5 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 disabled:opacity-40 text-white text-[11px] font-semibold flex items-center gap-1.5 transition shadow-sm"
                                title="Baixar todas as partidas listadas em um único arquivo .pgn"
                              >
                                <Download className="w-3.5 h-3.5" />
                                <span>Exportar Todas (.pgn)</span>
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const empty = clearAllSavedGamesFromDb();
                                  setSavedGames(empty);
                                  setCurrentGameId(null);
                                  setSaveToast('Todas as partidas salvas foram removidas da base!');
                                  setTimeout(() => setSaveToast(''), 3000);
                                }}
                                className="px-2 py-1 rounded-lg bg-[#1a1416] hover:bg-red-950/70 border border-red-900/40 text-zinc-300 hover:text-red-300 text-[11px] font-medium flex items-center gap-1 transition"
                                title="Apagar todas as partidas salvas nesta base local"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                                <span>Limpar Tudo</span>
                              </button>
                            </div>
                          )}
                        </div>

                        {savedGames.length > 0 && (
                          <div className="space-y-2 bg-[#0e0e12] border border-[#22222c] p-2.5 rounded-xl">
                            <div className="relative">
                              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={openDbSearch}
                                onChange={(e) => setOpenDbSearch(e.target.value)}
                                placeholder="Buscar por jogador, abertura (ECO) ou evento..."
                                className="w-full bg-[#15151c] border border-[#282834] rounded-lg pl-8 pr-2.5 py-1.5 text-white placeholder:text-zinc-500 focus:outline-none focus:border-sky-500 text-[11px]"
                              />
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-2 text-[11px]">
                              <div className="flex items-center gap-1">
                                {[
                                  { id: 'ALL', label: 'Todas Cores' },
                                  { id: 'w', label: 'Brancas' },
                                  { id: 'b', label: 'Pretas' },
                                ].map((c) => (
                                  <button
                                    key={c.id}
                                    type="button"
                                    onClick={() => setOpenDbFilterColor(c.id)}
                                    className={`px-2 py-0.5 rounded border transition ${
                                      openDbFilterColor === c.id
                                        ? 'bg-zinc-200 text-zinc-900 border-zinc-200 font-bold'
                                        : 'bg-[#15151c] text-zinc-400 border-[#282834] hover:text-white'
                                    }`}
                                  >
                                    {c.label}
                                  </button>
                                ))}
                              </div>
                              <div className="flex items-center gap-1">
                                {[
                                  { id: 'ALL', label: 'Todos' },
                                  { id: 'WIN', label: 'Vitórias' },
                                  { id: 'DRAW', label: 'Empates' },
                                  { id: 'LOSS', label: 'Derrotas' },
                                ].map((r) => (
                                  <button
                                    key={r.id}
                                    type="button"
                                    onClick={() => setOpenDbFilterResult(r.id)}
                                    className={`px-2 py-0.5 rounded border transition ${
                                      openDbFilterResult === r.id
                                        ? 'bg-sky-600 text-white border-sky-500 font-bold'
                                        : 'bg-[#15151c] text-zinc-400 border-[#282834] hover:text-white'
                                    }`}
                                  >
                                    {r.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="space-y-2 max-h-[340px] overflow-y-auto pr-0.5">
                          {savedGames.length === 0 ? (
                            <div className="py-10 text-center text-zinc-400 space-y-2">
                              <p>Nenhuma partida salva na Base de Dados ainda.</p>
                              <p className="text-[11px] text-zinc-500">
                                Use o botão <strong>Salvar</strong> no rodapé abaixo para guardar suas análises e variantes no navegador.
                              </p>
                            </div>
                          ) : filteredOpenDbGames.length === 0 ? (
                            <div className="py-8 text-center text-zinc-400">
                              Nenhuma partida corresponde aos filtros selecionados.
                            </div>
                          ) : (
                            filteredOpenDbGames.map((g) => (
                              <div
                                key={g.id}
                                onClick={() => handleLoadSavedGame(g)}
                                className={`p-3 rounded-xl border cursor-pointer transition flex items-center justify-between gap-2 ${
                                  currentGameId === g.id
                                    ? 'bg-[#1c1c24] border-zinc-500'
                                    : 'bg-[#0e0e11] border-[#222229] hover:border-zinc-600'
                                }`}
                              >
                                <div className="truncate pr-2 min-w-0 flex-1">
                                  <div className="font-semibold text-white truncate flex items-center gap-1.5">
                                    {g.eco && (
                                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#1b1b24] border border-[#2c2c3a] text-sky-300 shrink-0">
                                        {g.eco}
                                      </span>
                                    )}
                                    <span className="truncate">{g.title}</span>
                                  </div>
                                  <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                                    {g.white} vs {g.black} • {g.opening} ({g.date})
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className="font-mono font-bold text-zinc-200 inline-flex items-center gap-1">
                                    <span>{g.result}</span>
                                  </span>
                                  <button
                                    type="button"
                                    onClick={(e) => handleDeleteSavedGame(g.id, e)}
                                    className="p-1.5 rounded-lg bg-[#1a1416] hover:bg-red-950/70 border border-red-900/40 text-zinc-400 hover:text-red-300 transition"
                                    title="Excluir partida salva"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Rodapé Estilo Chess.com no Painel da Direita: Ações + Recomeçar / Importar */}
                  <div className="p-3 bg-[#101015] border-t border-[#1e1e28] space-y-2.5 text-xs">
                    {/* Linha de Ações Rápidas: Lance Visto, Salvar, .PGN e Copiar PGN */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">{t('broadcasts.viewedMove')}</span>
                        <span className="font-mono font-bold text-white">
                          {currentMove
                            ? `${currentMove.moveNumber}${currentMove.color === 'w' ? '.' : '...'} ${currentMove.san}`
                            : t('broadcasts.startPosition')}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-wrap">
                        <button
                          type="button"
                          onClick={handleSaveCurrentAnalysisToDb}
                          disabled={mainlineNodes.length === 0}
                          className="bg-[#181820] hover:bg-[#252532] disabled:opacity-40 border border-[#2b2b36] text-zinc-200 text-xs font-medium px-2.5 py-1.5 rounded-lg transition flex items-center gap-1.5"
                          title="Salvar partida e árvore de variantes na base local do navegador"
                        >
                          <Bookmark className="w-3.5 h-3.5 text-sky-400" />
                          <span>{currentGameId ? 'Atualizar' : 'Salvar'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDownloadPgn()}
                          disabled={mainlineNodes.length === 0}
                          className="bg-[#181820] hover:bg-[#252532] disabled:opacity-40 border border-[#2b2b36] text-zinc-200 text-xs font-medium px-2.5 py-1.5 rounded-lg transition flex items-center gap-1.5"
                          title="Exportar partida em arquivo .pgn"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>.PGN</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(liveGeneratedPgn);
                            setSaveToast('PGN copiado para a área de transferência!');
                            setTimeout(() => setSaveToast(''), 2500);
                          }}
                          disabled={mainlineNodes.length === 0}
                          className="bg-[#ececef] hover:bg-white disabled:opacity-40 text-black text-xs font-semibold px-3 py-1.5 rounded-lg transition flex items-center gap-1.5 shadow-sm"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar PGN</span>
                        </button>
                      </div>
                    </div>

                    {/* NO PC (Desktop): Quando já existe lance no tabuleiro, os 4 botões (Novo PGN, Buscar por Nick, Importar PGN, Mestres) aparecem aqui no rodapé da direita */}
                    {mainlineNodes.length > 0 && (
                      <div className="hidden lg:grid lg:grid-cols-4 gap-2 pt-2 border-t border-[#1e1e28]">
                        <button
                          type="button"
                          onClick={handleStartNewPgnFromScratch}
                          className="px-2 py-2 rounded-lg bg-[#16161d] hover:bg-[#20202b] border border-[#292936] text-zinc-200 hover:text-white text-[11px] font-semibold flex items-center justify-center gap-1 transition"
                          title="Recomeçar e criar novo PGN do zero"
                        >
                          <Plus className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                          <span className="truncate">Novo PGN</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => switchAnalysisTab('online')}
                          className={`px-2 py-2 rounded-lg border text-[11px] font-semibold flex items-center justify-center gap-1 transition ${
                            analysisRightTab === 'online'
                              ? 'bg-[#142332] border-sky-400 text-sky-300'
                              : 'bg-[#16161d] hover:bg-[#20202b] border-[#292936] text-zinc-200 hover:text-white'
                          }`}
                          title="Buscar partidas por Nick (Lichess & Chess.com)"
                        >
                          <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span className="truncate">Buscar Nick</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => switchAnalysisTab('pgn')}
                          className={`px-2 py-2 rounded-lg border text-[11px] font-semibold flex items-center justify-center gap-1 transition ${
                            analysisRightTab === 'pgn'
                              ? 'bg-[#1e1e26] border-zinc-400 text-white'
                              : 'bg-[#16161d] hover:bg-[#20202b] border-[#292936] text-zinc-200 hover:text-white'
                          }`}
                          title="Colar ou carregar arquivo .pgn"
                        >
                          <Upload className="w-3.5 h-3.5 text-zinc-300 shrink-0" />
                          <span className="truncate">Importar PGN</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setIsMasterGamesModalOpen(true)}
                          className="px-2 py-2 rounded-lg bg-[#241f14] hover:bg-[#332b1b] border border-[#44381c] text-amber-300 hover:text-amber-200 text-[11px] font-semibold flex items-center justify-center gap-1 transition"
                          title="Explorar Biblioteca de Partidas de Mestres"
                        >
                          <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span className="truncate">Mestres</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* NO MOBILE: Quando já existe lance no tabuleiro, os botões vão para o final da página empilhados um a um */}
            {mainlineNodes.length > 0 && (
              <div className="lg:hidden flex flex-col gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={handleStartNewPgnFromScratch}
                  className="saragix-card hover:border-zinc-500 p-3.5 rounded-xl flex items-center gap-3.5 text-left transition group w-full"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#19191f] border border-[#292933] flex items-center justify-center text-zinc-200 shrink-0">
                    <Plus className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Novo PGN
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Recomeçar e criar partida do zero jogando no tabuleiro
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => switchAnalysisTab('online')}
                  className={`saragix-card p-3.5 rounded-xl flex items-center gap-3.5 text-left transition group w-full ${
                    analysisRightTab === 'online' ? 'border-sky-400 bg-[#141b24]' : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#142332] border border-[#23425f] flex items-center justify-center text-sky-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      Buscar por Nick
                      <span className="text-[10px] px-1.5 py-0.2 bg-sky-500/20 text-sky-300 rounded font-normal">
                        Lichess & Chess.com
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Puxar partidas de qualquer jogador
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => switchAnalysisTab('pgn')}
                  className={`saragix-card p-3.5 rounded-xl flex items-center gap-3.5 text-left transition group w-full ${
                    analysisRightTab === 'pgn' ? 'border-zinc-400 bg-[#18181e]' : ''
                  }`}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#19191f] border border-[#292933] flex items-center justify-center text-zinc-200 shrink-0">
                    <Upload className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Importar PGN
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Colar texto PGN ou carregar arquivo .pgn
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsMasterGamesModalOpen(true)}
                  className="saragix-card hover:border-amber-500/60 p-3.5 rounded-xl flex items-center gap-3.5 text-left transition group w-full"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#241f14] border border-[#44381c] flex items-center justify-center text-amber-400 shrink-0">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      Biblioteca de Mestres
                      <span className="text-[10px] px-1.5 py-0.2 bg-amber-500/20 text-amber-300 rounded font-normal">
                        370+ Partidas
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 block">
                      Explorar campeonatos mundiais e obras-primas da FIDE
                    </span>
                  </div>
                </button>
              </div>
            )}
          </main>
        )}

        {/* ===================================================================
            🏠 VISÃO GERAL (Design Sóbrio Editorial: Endgame.ai + Lichess)
           =================================================================== */}
        {activePage === 'overview' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
            <div className="saragix-hero-bg rounded-2xl border border-[#222229] p-6 lg:p-8 flex flex-wrap items-center justify-between gap-6">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-mono block mb-1">
                  Plataforma Pessoal de Xadrez
                </span>
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="text-3xl lg:text-4xl font-serif-editorial text-white tracking-wide">
                    Olá, {playerName || 'Usuário'}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(true)}
                    className="px-2.5 py-1 rounded-md bg-[#18181e] hover:bg-[#22222a] border border-[#2c2c36] text-[11px] text-zinc-300 flex items-center gap-1.5 transition"
                    title="Editar seu nome e personalizar o tabuleiro"
                  >
                    <Edit3 className="w-3.5 h-3.5" /> Editar nome
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsEditingProfile(true)}
                    className="px-2.5 py-1 rounded-md bg-[#18181e] hover:bg-[#22222a] border border-[#2c2c36] text-[11px] text-zinc-300 flex items-center gap-1.5 transition"
                    title="Escolher modelo de cores do tabuleiro"
                  >
                    <span className="w-3.5 h-3.5 rounded-[3px] overflow-hidden grid grid-cols-2 grid-rows-2 border border-white/20 shrink-0">
                      <span style={resolvedBoardTheme.lightSquareStyle} />
                      <span style={resolvedBoardTheme.darkSquareStyle} />
                      <span style={resolvedBoardTheme.darkSquareStyle} />
                      <span style={resolvedBoardTheme.lightSquareStyle} />
                    </span>
                    Personalizar Tabuleiro
                  </button>
                </div>
                <p className="text-xs lg:text-sm text-zinc-400 mt-1.5 max-w-xl">
                  {lastSavedGame
                    ? 'Continue analisando sua última partida ou inicie um novo estudo em árvore.'
                    : 'Crie ou importe sua primeira partida real para registrar sua evolução lance por lance.'}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActivePage('play_bot')}
                  className="bg-[#18181e] hover:bg-[#22222a] border border-[#2c2c36] text-zinc-200 text-xs font-semibold px-4 py-2.5 rounded-lg transition flex items-center gap-2"
                >
                  <Swords className="w-4 h-4" />
                  Jogar vs PC (100–3200)
                </button>
                <button
                  onClick={handleStartNewPgnFromScratch}
                  className="bg-[#18181e] hover:bg-[#22222a] border border-[#2c2c36] text-zinc-200 text-xs font-semibold px-4 py-2.5 rounded-lg transition flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Novo PGN do Zero
                </button>
                <button
                  onClick={() => setActivePage('analysis')}
                  className="bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold px-5 py-2.5 rounded-lg transition flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Central de Análise
                </button>
              </div>
            </div>

            {/* 5 Cards Superiores Sóbrios (Sem Brilho IA) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              <div className="saragix-card p-5 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Total de Partidas</span>
                  <Layers className="w-4 h-4 text-zinc-500" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {career.totalGames}
                </div>
              </div>

              <div className="saragix-card p-5 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Vitórias</span>
                  <Trophy className="w-4 h-4 text-emerald-400/80" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold font-mono text-white">
                    {career.wins}
                  </span>
                  {career.totalGames > 0 && (
                    <span className="text-[11px] font-mono text-emerald-400">
                      {winRateOverall}%
                    </span>
                  )}
                </div>
              </div>

              <div className="saragix-card p-5 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Empates</span>
                  <span className="font-mono text-xs text-zinc-500 font-bold">=</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {career.draws}
                </div>
              </div>

              <div className="saragix-card p-5 rounded-xl flex flex-col justify-between">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Derrotas</span>
                  <AlertTriangle className="w-4 h-4 text-red-400/80" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {career.losses}
                </div>
              </div>

              <div className="saragix-card p-5 rounded-xl flex flex-col justify-between col-span-2 sm:col-span-1">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span className="text-xs font-medium">Precisão Média</span>
                  <Target className="w-4 h-4 text-zinc-400" />
                </div>
                <div className="text-2xl font-bold font-mono text-white">
                  {career.avgAccuracy > 0 ? `${career.avgAccuracy}%` : '--'}
                </div>
              </div>
            </div>

            {/* Próximo Passo + Seu Repertório */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 saragix-card rounded-2xl p-6 flex flex-col justify-between">
                <div className="space-y-3 max-w-xl">
                  <div className="flex items-center gap-2 text-zinc-400 font-mono text-[11px] uppercase tracking-wider">
                    <span>Próximo Passo</span>
                  </div>

                  {lastSavedGame ? (
                    <>
                      <h3 className="text-2xl font-serif-editorial text-white">
                        Revisar partida: {lastSavedGame.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {career.patterns[0]
                          ? career.patterns[0].description
                          : `Partida disputada em ${lastSavedGame.date} (${lastSavedGame.opening}). Continue explorando variantes e refinando seu jogo.`}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-3">
                        <button
                          onClick={() => handleLoadSavedGame(lastSavedGame)}
                          className="bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold px-4 py-2.5 rounded-lg transition inline-flex items-center gap-2"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          Revisar Partida
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3 className="text-2xl font-serif-editorial text-white">
                        Crie ou importe sua primeira partida
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Na aba <strong>Análise</strong>, você pode registrar um PGN lance a lance pelo tabuleiro, criar variantes em árvore ou importar PGNs existentes.
                      </p>
                      <div className="pt-2 flex flex-wrap gap-2">
                        <button
                          onClick={handleStartNewPgnFromScratch}
                          className="bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold px-4 py-2.5 rounded-lg transition inline-flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4" />
                          Criar Novo PGN
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-5 saragix-card rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <BookOpen className="w-4 h-4 text-zinc-400" />
                    <span>Seu Repertório</span>
                  </div>
                  <button
                    onClick={() => setActivePage('repertoire')}
                    className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition"
                  >
                    Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {career.openingsStats.length === 0 ? (
                  <div className="my-auto py-8 text-center text-xs text-zinc-500">
                    Ainda não há partidas suficientes para gerar estatísticas.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center my-auto">
                    <div className="sm:col-span-8 space-y-3">
                      {career.openingsStats.slice(0, 3).map((op, idx) => (
                        <div key={idx} className="space-y-1">
                          <span className="font-semibold text-xs text-white truncate block">
                            {op.name}
                          </span>
                          <div className="text-[11px] text-zinc-400">
                            {op.games} partida(s) • {op.winRate}% vitórias
                          </div>
                          <div className="w-full h-1.5 bg-[#0a0a0c] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-zinc-300 rounded-full"
                              style={{ width: `${Math.max(12, op.winRate)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="sm:col-span-4 h-28">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={repertoireDonutData}
                            innerRadius={28}
                            outerRadius={44}
                            paddingAngle={4}
                            dataKey="value"
                          >
                            {repertoireDonutData.map((_, index) => (
                              <Cell
                                key={index}
                                fill={DONUT_COLORS[index % DONUT_COLORS.length]}
                              />
                            ))}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Base de Dados Recente + Treinamento */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 saragix-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Database className="w-4 h-4 text-zinc-400" />
                    <span>Partidas Recentes</span>
                  </div>
                  <button
                    onClick={() => setActivePage('games')}
                    className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition"
                  >
                    Ver todas <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {savedGames.length === 0 ? (
                  <div className="py-8 text-center text-xs text-zinc-500 border border-dashed border-[#24242c] rounded-xl">
                    Ainda não há partidas registradas na sua base.
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-[#222229] text-zinc-400 text-[11px]">
                          <th className="py-2 px-2">Adversário</th>
                          <th className="py-2 px-2">Resultado</th>
                          <th className="py-2 px-2">Abertura</th>
                          <th className="py-2 px-2">Data</th>
                          <th className="py-2 px-2 text-right">Precisão</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1c1c22]">
                        {savedGames.slice(0, 4).map((g) => {
                          const userColor = g.userColor || 'w';
                          const oppName = userColor === 'w' ? g.black : g.white;
                          const oppTitle =
                            userColor === 'w' ? g.blackTitle : g.whiteTitle;
                          const userAcc =
                            userColor === 'w' ? g.whiteAccuracy : g.blackAccuracy;
                          return (
                            <tr
                              key={g.id}
                              onClick={() => handleLoadSavedGame(g)}
                              className="hover:bg-[#18181e] cursor-pointer transition"
                            >
                              <td className="py-3 px-2 font-medium text-white flex items-center gap-2">
                                <span className="truncate max-w-[140px]">
                                  {oppName}
                                </span>
                                <TitleBadge title={oppTitle} />
                              </td>
                              <td className="py-3 px-2 font-mono font-bold text-zinc-200">
                                {g.result}
                              </td>
                              <td className="py-3 px-2 text-zinc-400 truncate max-w-[140px]">
                                {g.opening}
                              </td>
                              <td className="py-3 px-2 text-zinc-500 font-mono">
                                {g.date}
                              </td>
                              <td className="py-3 px-2 text-right font-mono font-bold text-white">
                                {g.isAnalyzed ? `${userAcc}%` : '--'}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 saragix-card rounded-2xl p-6 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-white">
                    <Brain className="w-4 h-4 text-zinc-400" />
                    <span>Treinamento</span>
                  </div>
                  <button
                    onClick={() => setActivePage('training')}
                    className="text-xs text-zinc-400 hover:text-white font-medium flex items-center gap-1 transition"
                  >
                    Continuar <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-5 my-auto">
                  <div className="w-24 h-24 rounded-lg overflow-hidden border border-[#2a2a34] grid grid-cols-4 grid-rows-4 shrink-0">
                    {Array.from({ length: 16 }).map((_, i) => {
                      const row = Math.floor(i / 4);
                      const col = i % 4;
                      const isDark = (row + col) % 2 === 1;
                      return (
                        <div
                          key={i}
                          style={{
                            backgroundColor: isDark ? '#788a9e' : '#dee3e6',
                          }}
                        />
                      );
                    })}
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="text-lg font-serif-editorial text-white">
                      Posição Crítica
                    </div>
                    <p className="text-xs text-zinc-400">
                      Encontre o melhor lance nas suas próprias partidas.
                    </p>
                    <button
                      onClick={() => setActivePage('training')}
                      className="bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold px-4 py-2 rounded-lg transition inline-flex items-center gap-1.5"
                    >
                      Iniciar <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* ===================================================================
            📈 MINHA CARREIRA
           =================================================================== */}
        {activePage === 'career' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-serif-editorial text-white">
                Minha Carreira
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Estatísticas consolidadas e padrões reais detectados nas suas partidas.
              </p>
            </div>

            {savedGames.length === 0 ? (
              <div className="saragix-card rounded-2xl p-10 text-center max-w-2xl mx-auto my-8 space-y-4">
                <BarChart3 className="w-8 h-8 text-zinc-500 mx-auto" />
                <h2 className="text-lg font-semibold text-white">
                  Ainda não há partidas suficientes para gerar estatísticas.
                </h2>
                <button
                  onClick={() => setActivePage('analysis')}
                  className="bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold px-5 py-2.5 rounded-lg transition inline-flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> Ir para Análise
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                  <div className="saragix-card p-4 rounded-xl">
                    <span className="text-[11px] text-zinc-400">Partidas</span>
                    <div className="text-2xl font-bold font-mono text-white mt-1">
                      {career.totalGames}
                    </div>
                  </div>
                  <div className="saragix-card p-4 rounded-xl">
                    <span className="text-[11px] text-zinc-400">Vitórias</span>
                    <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
                      {career.wins}
                    </div>
                  </div>
                  <div className="saragix-card p-4 rounded-xl">
                    <span className="text-[11px] text-zinc-400">Empates</span>
                    <div className="text-2xl font-bold font-mono text-zinc-300 mt-1">
                      {career.draws}
                    </div>
                  </div>
                  <div className="saragix-card p-4 rounded-xl">
                    <span className="text-[11px] text-zinc-400">Derrotas</span>
                    <div className="text-2xl font-bold font-mono text-red-400 mt-1">
                      {career.losses}
                    </div>
                  </div>
                  <div className="saragix-card p-4 rounded-xl">
                    <span className="text-[11px] text-zinc-400">Precisão Média</span>
                    <div className="text-2xl font-bold font-mono text-white mt-1">
                      {career.avgAccuracy > 0 ? `${career.avgAccuracy}%` : '--'}
                    </div>
                  </div>
                  <div className="saragix-card p-4 rounded-xl">
                    <span className="text-[11px] text-zinc-400">Melhor Precisão</span>
                    <div className="text-2xl font-bold font-mono text-amber-300 mt-1">
                      {career.bestAccuracy > 0 ? `${career.bestAccuracy}%` : '--'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8 saragix-card rounded-2xl p-6 flex flex-col">
                    <h3 className="text-sm font-semibold text-white mb-4">
                      Evolução da Precisão ao Longo do Tempo
                    </h3>
                    <div className="h-60 w-full flex-1">
                      {career.accuracyTimeline.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart data={career.accuracyTimeline}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#222229" />
                            <XAxis dataKey="date" stroke="#71717a" fontSize={11} />
                            <YAxis domain={[40, 100]} stroke="#71717a" fontSize={11} />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: '#121215',
                                borderColor: '#2c2c35',
                                fontSize: '12px',
                              }}
                            />
                            <Line
                              type="monotone"
                              dataKey="accuracy"
                              stroke="#e4e4e7"
                              strokeWidth={2.5}
                              dot={{ r: 4, fill: '#e4e4e7' }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="h-full flex items-center justify-center text-xs text-zinc-500">
                          Analise suas partidas para visualizar o gráfico.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="lg:col-span-4 saragix-card rounded-2xl p-6 space-y-4">
                    <h3 className="text-sm font-semibold text-white">
                      Desempenho por Cor
                    </h3>
                    <div className="bg-[#0e0e11] border border-[#222229] p-4 rounded-xl">
                      <div className="flex justify-between text-xs font-semibold mb-2">
                        <span>⬜ Brancas ({career.byColor.w.games})</span>
                        <span className="font-mono text-zinc-200">
                          {career.byColor.w.avgAccuracy || '--'}%
                        </span>
                      </div>
                      <div className="grid grid-cols-3 text-center text-xs bg-[#15151a] p-2 rounded-lg font-mono">
                        <span className="text-emerald-400 font-bold">
                          {career.byColor.w.wins}V
                        </span>
                        <span className="text-zinc-300 font-bold">
                          {career.byColor.w.draws}E
                        </span>
                        <span className="text-red-400 font-bold">
                          {career.byColor.w.losses}D
                        </span>
                      </div>
                    </div>
                    <div className="bg-[#0e0e11] border border-[#222229] p-4 rounded-xl">
                      <div className="flex justify-between text-xs font-semibold mb-2">
                        <span>⬛ Pretas ({career.byColor.b.games})</span>
                        <span className="font-mono text-zinc-200">
                          {career.byColor.b.avgAccuracy || '--'}%
                        </span>
                      </div>
                      <div className="grid grid-cols-3 text-center text-xs bg-[#15151a] p-2 rounded-lg font-mono">
                        <span className="text-emerald-400 font-bold">
                          {career.byColor.b.wins}V
                        </span>
                        <span className="text-zinc-300 font-bold">
                          {career.byColor.b.draws}E
                        </span>
                        <span className="text-red-400 font-bold">
                          {career.byColor.b.losses}D
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Insights sobre seu jogo */}
                <div className="saragix-card rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-zinc-400" />
                    Insights sobre seu jogo
                  </h3>
                  {career.patterns.length === 0 ? (
                    <p className="text-xs text-zinc-400">
                      Analise mais partidas para destravar insights automáticos.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {career.patterns.map((pat, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#0e0e11] border border-[#24242c]"
                        >
                          <h4 className="text-sm font-semibold text-white flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>{pat.title}</span>
                          </h4>
                          <p className="text-xs text-zinc-400 mt-1">
                            {pat.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Desempenho Contra Títulos */}
                <div className="saragix-card rounded-2xl p-6">
                  <h3 className="text-base font-semibold text-white mb-4">
                    Desempenho Contra Títulos
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-[#222229] text-zinc-400 uppercase text-[11px]">
                          <th className="py-2 px-3">Categoria</th>
                          <th className="py-2 px-3 text-center">Partidas</th>
                          <th className="py-2 px-3 text-center">V / E / D</th>
                          <th className="py-2 px-3 text-center">Pontuação</th>
                          <th className="py-2 px-3 text-center">Precisão Média</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#1c1c22]">
                        {career.vsTitlesStats.map((row) => (
                          <tr key={row.key}>
                            <td className="py-2.5 px-3 font-medium text-white flex items-center gap-2">
                              {row.key !== 'NONE' && <TitleBadge title={row.key} />}
                              <span>{row.label}</span>
                            </td>
                            <td className="py-2.5 px-3 text-center font-mono">
                              {row.games}
                            </td>
                            <td className="py-2.5 px-3 text-center font-mono">
                              {row.wins}V / {row.draws}E / {row.losses}D
                            </td>
                            <td className="py-2.5 px-3 text-center font-mono font-bold text-zinc-200">
                              {row.games > 0 ? `${row.scoreRate}%` : '--'}
                            </td>
                            <td className="py-2.5 px-3 text-center font-mono font-bold text-white">
                              {row.avgAccuracy ? `${row.avgAccuracy}%` : '--'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}
          </main>
        )}

        {/* ===================================================================
            ♟️ PARTIDAS
           =================================================================== */}
        {activePage === 'games' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
            <div className="saragix-card rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-3xl font-serif-editorial text-white">
                    Biblioteca de Partidas ({savedGames.length})
                  </h2>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Pesquise e filtre todas as suas partidas registradas.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={clearAllFilters}
                    className="text-xs bg-[#0e0e11] hover:bg-[#18181e] border border-[#26262f] text-zinc-300 px-3.5 py-2 rounded-lg transition"
                  >
                    Limpar Filtros
                  </button>
                  <button
                    onClick={handleStartNewPgnFromScratch}
                    className="text-xs bg-[#ececef] hover:bg-white text-[#0a0a0c] font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition"
                  >
                    <Plus className="w-4 h-4" /> Novo PGN
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
                <input
                  type="text"
                  value={filterPlayer}
                  onChange={(e) => setFilterPlayer(e.target.value)}
                  placeholder="Jogador ou Título..."
                  className="bg-[#0e0e11] border border-[#26262f] rounded-lg px-3 py-2 text-white"
                />
                <select
                  value={filterResult}
                  onChange={(e) => setFilterResult(e.target.value)}
                  className="bg-[#0e0e11] border border-[#26262f] rounded-lg px-3 py-2 text-white"
                >
                  <option value="ALL">Todos os resultados</option>
                  <option value="WIN">Vitórias</option>
                  <option value="LOSS">Derrotas</option>
                  <option value="DRAW">Empates</option>
                </select>
                <select
                  value={filterColor}
                  onChange={(e) => setFilterColor(e.target.value)}
                  className="bg-[#0e0e11] border border-[#26262f] rounded-lg px-3 py-2 text-white"
                >
                  <option value="ALL">Brancas ou Pretas</option>
                  <option value="w">Brancas</option>
                  <option value="b">Pretas</option>
                </select>
                <input
                  type="text"
                  value={filterOpening}
                  onChange={(e) => setFilterOpening(e.target.value)}
                  placeholder="Abertura / ECO..."
                  className="bg-[#0e0e11] border border-[#26262f] rounded-lg px-3 py-2 text-white"
                />
                <input
                  type="text"
                  value={filterEvent}
                  onChange={(e) => setFilterEvent(e.target.value)}
                  placeholder="Evento / Torneio..."
                  className="bg-[#0e0e11] border border-[#26262f] rounded-lg px-3 py-2 text-white"
                />
              </div>
            </div>

            {savedGames.length === 0 ? (
              <div className="saragix-card rounded-2xl p-10 text-center text-xs text-zinc-400">
                Sua biblioteca está vazia. Crie ou importe uma partida na aba Análise.
              </div>
            ) : (
              <div className="saragix-card rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-[#222229] bg-[#0e0e11] text-zinc-400 uppercase text-[11px]">
                        <th className="py-3.5 px-4">Jogadores</th>
                        <th className="py-3.5 px-4">Resultado</th>
                        <th className="py-3.5 px-4">Abertura</th>
                        <th className="py-3.5 px-4">Evento</th>
                        <th className="py-3.5 px-4">Data</th>
                        <th className="py-3.5 px-4 text-right">Precisão</th>
                        <th className="py-3.5 px-4 text-right">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1c1c22]">
                      {filteredDatabaseGames.map((g) => {
                        const userColor = g.userColor || 'w';
                        const userAcc =
                          userColor === 'w' ? g.whiteAccuracy : g.blackAccuracy;
                        return (
                          <tr
                            key={g.id}
                            onClick={() => handleLoadSavedGame(g)}
                            className="hover:bg-[#18181e] cursor-pointer transition"
                          >
                            <td className="py-3.5 px-4">
                              <div className="font-semibold text-white mb-0.5">
                                {g.title}
                              </div>
                              <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                                <span>
                                  ⬜ <TitleBadge title={g.whiteTitle} /> {g.white}{' '}
                                  {g.whiteRating ? `(${g.whiteRating})` : ''}
                                </span>
                                <span>
                                  ⬛ <TitleBadge title={g.blackTitle} /> {g.black}{' '}
                                  {g.blackRating ? `(${g.blackRating})` : ''}
                                </span>
                              </div>
                            </td>
                            <td className="py-3.5 px-4 font-mono font-bold text-zinc-200">
                              {g.result}
                            </td>
                            <td className="py-3.5 px-4 text-zinc-300">
                              {g.opening}
                            </td>
                            <td className="py-3.5 px-4 text-zinc-400">
                              {g.event}
                            </td>
                            <td className="py-3.5 px-4 font-mono text-zinc-500">
                              {g.date}
                            </td>
                            <td className="py-3.5 px-4 text-right font-mono font-bold text-white">
                              {g.isAnalyzed ? `${userAcc}%` : '--'}
                            </td>
                            <td className="py-3.5 px-4 text-right">
                              <button
                                onClick={(e) => handleDeleteSavedGame(g.id, e)}
                                className="p-1.5 rounded-lg hover:bg-red-500/20 text-zinc-500 hover:text-red-400"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </main>
        )}

        {/* ===================================================================
            📚 REPERTÓRIO
           =================================================================== */}
        {activePage === 'repertoire' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-serif-editorial text-white">
                Repertório de Aberturas
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Construído automaticamente a partir das partidas reais que você joga.
              </p>
            </div>

            {savedGames.length === 0 ? (
              <div className="saragix-card rounded-2xl p-10 text-center max-w-xl mx-auto my-8 space-y-3">
                <BookOpen className="w-8 h-8 text-zinc-500 mx-auto" />
                <h2 className="text-base font-semibold text-white">
                  Ainda não há partidas suficientes para gerar estatísticas.
                </h2>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {career.openingsStats.map((op, i) => (
                  <div
                    key={i}
                    className="saragix-card rounded-2xl p-6 flex flex-col justify-between gap-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-base text-white">
                        {op.eco ? `[${op.eco}] ` : ''}
                        {op.name}
                      </span>
                      <span className="text-xs text-zinc-300 font-mono font-bold">
                        {op.games} jogo(s) • {op.winRate}% vitórias
                      </span>
                    </div>
                    <div className="text-xs text-amber-300 bg-[#1f1b13] border border-amber-900/40 px-3.5 py-2 rounded-lg">
                      {op.worstPhase}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        )}

        {/* ===================================================================
            🧠 TREINAMENTO
           =================================================================== */}
        {activePage === 'training' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-serif-editorial text-white">
                Minhas Posições Críticas
              </h2>
              <p className="text-xs text-zinc-400 mt-1">
                Treine exatamente nos momentos decisivos onde houve erro ou oportunidade nas suas partidas.
              </p>
            </div>

            {filteredPuzzles.length === 0 ? (
              <div className="saragix-card rounded-2xl p-10 text-center max-w-xl mx-auto space-y-3">
                <Target className="w-8 h-8 text-zinc-500 mx-auto" />
                <h3 className="text-base font-semibold text-white">
                  Nenhuma posição crítica disponível ainda
                </h3>
                <p className="text-xs text-zinc-400">
                  Analise suas partidas com o Stockfish na aba Análise e salve-as na Base para gerar exercícios dos seus próprios erros.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 flex flex-col items-center gap-4">
                  <div className="chessboard-container w-full max-w-[500px] aspect-square rounded-lg overflow-hidden border border-[#26262f]">
                    <Chessboard
                      position={puzzleBoardFen || activePuzzle.fen}
                      boardOrientation={
                        activePuzzle.userColor === 'b' ? 'black' : 'white'
                      }
                      arePiecesDraggable={!puzzleAttemptResult}
                      onPieceDrop={handlePuzzlePieceDrop}
                      customArrows={puzzleArrows}
                      customDarkSquareStyle={resolvedBoardTheme.darkSquareStyle}
                      customLightSquareStyle={resolvedBoardTheme.lightSquareStyle}
                      customPieces={customPieces}
                    />
                  </div>
                </div>
                <div className="lg:col-span-5 saragix-card rounded-2xl p-6 space-y-4">
                  <h3 className="text-2xl font-serif-editorial text-white">
                    Qual seria o seu melhor lance?
                  </h3>
                  {puzzleAttemptResult ? (
                    <div className="space-y-3 text-xs">
                      <div className="p-3 rounded-lg bg-[#16261e] border border-[#274435] text-emerald-200 font-semibold font-mono flex items-center flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 inline-block" />
                          <span>Melhor lance: {activePuzzle.bestMoveSan}</span>
                        </span>
                        <span className="text-zinc-500">|</span>
                        <span className="inline-flex items-center gap-1.5 text-sky-200">
                          <span className="w-2 h-2 rounded-full bg-sky-400 shrink-0 inline-block" />
                          <span>Seu lance: {puzzleAttemptResult.userMoveSan}</span>
                        </span>
                      </div>
                      <p className="text-zinc-300">{activePuzzle.explanation}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400">
                      Arraste a peça no tabuleiro para jogar.
                    </p>
                  )}
                </div>
              </div>
            )}
          </main>
        )}

        {/* ===================================================================
            🏆 EVENTOS & JORNADA
           =================================================================== */}
        {activePage === 'events' && (
          <main className="flex-1 max-w-7xl w-full mx-auto p-4 lg:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-serif-editorial text-white">
                  Eventos & Jornada
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  Histórico de torneios e linha do tempo da sua evolução no xadrez.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setEventsSubTab('tournaments')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition ${
                    eventsSubTab === 'tournaments'
                      ? 'bg-[#ececef] text-[#0a0a0c] border-white'
                      : 'bg-[#121215] text-zinc-400 border-[#24242c]'
                  }`}
                >
                  Eventos ({eventsList.length})
                </button>
                <button
                  onClick={() => setEventsSubTab('journey')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold border transition ${
                    eventsSubTab === 'journey'
                      ? 'bg-[#ececef] text-[#0a0a0c] border-white'
                      : 'bg-[#121215] text-zinc-400 border-[#24242c]'
                  }`}
                >
                  Minha Jornada
                </button>
              </div>
            </div>

            {eventsSubTab === 'tournaments' ? (
              eventsList.length === 0 ? (
                <div className="saragix-card rounded-2xl p-10 text-center text-xs text-zinc-400">
                  Nenhum evento registrado ainda.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventsList.map((ev) => (
                    <div key={ev.name} className="saragix-card p-6 rounded-2xl">
                      <h3 className="text-xl font-serif-editorial text-white">
                        {ev.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 font-mono">
                        Pontuação: {ev.points} / {ev.totalGames} ({ev.wins}V{' '}
                        {ev.draws}E {ev.losses}D)
                      </p>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="saragix-card rounded-2xl p-6 space-y-4">
                <h3 className="text-xl font-serif-editorial text-white">
                  Minha Jornada no Xadrez
                </h3>
                {journeyByYear.map(([year, items]) => (
                  <div key={year} className="space-y-2">
                    <div className="text-sm font-mono font-bold text-zinc-400">
                      {year}
                    </div>
                    {items.map((it) => (
                      <div
                        key={it.id}
                        className="bg-[#0e0e11] border border-[#222229] p-3.5 rounded-xl text-xs flex justify-between items-center"
                      >
                        <span className="font-semibold text-white flex items-center gap-2">
                          {it.icon === 'TROPHY' ? (
                            <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          ) : it.icon === 'PAWN' ? (
                            <PawnIcon className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          ) : it.icon === 'TREND' ? (
                            <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <Flag className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                          )}
                          <span>{it.title}</span>
                        </span>
                        <span className="font-mono text-zinc-300">{it.badge}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </main>
        )}
      </div>

      {/* Modal de Perfil & Personalização do Tabuleiro (25 Modelos 5x5 + Cor Livre) — Fecha ao clicar fora */}
      {isEditingProfile && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => {
            if (!playerName.trim()) {
              setPlayerName('Usuário');
              localStorage.setItem('saragix_user_display_name', 'Usuário');
            }
            setIsEditingProfile(false);
          }}
        >
          <div
            className="saragix-card rounded-2xl max-w-xl w-full p-6 space-y-5 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#222229] pb-3.5">
              <div>
                <h3 className="text-xl font-serif-editorial text-white">
                  {t('profileModal.title')}
                </h3>
                <p className="text-xs text-zinc-400">
                  {t('profileModal.subtitle')}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  if (!playerName.trim()) {
                    setPlayerName('');
                  }
                  setIsEditingProfile(false);
                }}
                className="p-1.5 rounded-lg bg-[#16161b] hover:bg-[#22222a] text-zinc-400 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* 1. Seleção de Idioma da Plataforma (Português / English) */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                {t('profileModal.languageLabel')}
              </label>
              <LanguageSelector variant="segmented" />
            </div>

            {/* 2. Edição do Nome ("Olá, Usuário") */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-200 block">
                {t('profileModal.nameLabel')}
              </label>
              <input
                type="text"
                value={playerName}
                placeholder={t('profileModal.namePlaceholder')}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                  localStorage.setItem('saragix_user_display_name', e.target.value);
                }}
                className="w-full bg-[#0e0e11] border border-[#26262f] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-500"
              />
            </div>

            {/* 3. Grade 5x5 com os 25 Modelos de Cores de Tabuleiro */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-zinc-400" />
                  {t('profileModal.boardThemesLabel')}
                </label>
                <span className="text-[11px] font-mono text-zinc-400">
                  {t('profileModal.activeTheme', { name: resolvedBoardTheme.name })}
                </span>
              </div>

              <div className="bg-[#0e0e11] border border-[#222229] rounded-xl p-3 grid grid-cols-5 gap-2.5">
                {BOARD_THEMES.map((theme) => {
                  const isSelected = boardThemeConfig.themeId === theme.id;
                  const lStyle = theme.lightStyle || { backgroundColor: theme.light };
                  const dStyle = theme.darkStyle || { backgroundColor: theme.dark };
                  return (
                    <button
                      key={theme.id}
                      type="button"
                      onClick={() => handleUpdateBoardTheme({ themeId: theme.id })}
                      title={theme.name}
                      className={`group relative aspect-[1.55/1] rounded-md overflow-hidden grid grid-cols-2 grid-rows-2 transition-all ${
                        isSelected
                          ? 'ring-2 ring-white scale-[1.03] shadow-lg'
                          : 'ring-1 ring-white/10 hover:ring-white/40 hover:scale-[1.02]'
                      }`}
                    >
                      <div style={lStyle} />
                      <div style={dStyle} />
                      <div style={dStyle} />
                      <div style={lStyle} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Opção de Personalização Livre (Escolher Qualquer Cor para Casas Claras e Escuras) */}
            <div className="bg-[#0e0e11] border border-[#222229] rounded-xl p-3.5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5 text-sky-400" />
                  <span>Personalizar Cores Manualmente</span>
                </span>
                {boardThemeConfig.themeId === 'custom' && (
                  <span className="text-[10px] font-mono bg-[#1f1f27] border border-zinc-500 text-white px-2 py-0.5 rounded">
                    Personalizado Ativo
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <label className="flex items-center justify-between bg-[#15151a] border border-[#282832] rounded-lg px-3 py-2 cursor-pointer hover:border-zinc-500 transition">
                  <span className="text-zinc-300">Casas Claras</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-zinc-400">
                      {boardThemeConfig.customLight}
                    </span>
                    <input
                      type="color"
                      value={boardThemeConfig.customLight}
                      onChange={(e) =>
                        handleUpdateBoardTheme({
                          themeId: 'custom',
                          customLight: e.target.value,
                        })
                      }
                      className="w-6 h-6 rounded cursor-pointer bg-transparent border-0"
                    />
                  </div>
                </label>

                <label className="flex items-center justify-between bg-[#15151a] border border-[#282832] rounded-lg px-3 py-2 cursor-pointer hover:border-zinc-500 transition">
                  <span className="text-zinc-300">Casas Escuras</span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-zinc-400">
                      {boardThemeConfig.customDark}
                    </span>
                    <input
                      type="color"
                      value={boardThemeConfig.customDark}
                      onChange={(e) =>
                        handleUpdateBoardTheme({
                          themeId: 'custom',
                          customDark: e.target.value,
                        })
                      }
                      className="w-6 h-6 rounded cursor-pointer bg-transparent border-0"
                    />
                  </div>
                </label>
              </div>
            </div>

            {/* SEÇÃO 3: ESTILO DAS PEÇAS */}
            <div className="space-y-3 pt-2 border-t border-[#22222a]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-semibold text-white">
                    Estilo das Peças
                  </h4>
                  <p className="text-[11px] text-zinc-400">
                    Escolha o conjunto de peças aberto de sua preferência
                  </p>
                </div>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {PIECE_SETS.find((s) => s.id === pieceSetId)?.name || 'Padrão'}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {PIECE_SETS.map((set) => {
                  const isSelected = pieceSetId === set.id;
                  return (
                    <button
                      key={set.id}
                      type="button"
                      onClick={() => handleUpdatePieceSet(set.id)}
                      title={`${set.name} — ${set.desc}`}
                      className={`p-2.5 rounded-xl border flex flex-col items-center gap-2 text-center transition ${
                        isSelected
                          ? 'bg-[#182330] border-sky-400 shadow-md ring-1 ring-sky-400/50'
                          : 'bg-[#121217] border-[#22222a] hover:border-zinc-600 hover:bg-[#181820]'
                      }`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center">
                        {INLINE_PIECE_SETS[set.id]?.wN ? (
                          renderInlineSvg(INLINE_PIECE_SETS[set.id].wN, '36px')
                        ) : (
                          <KnightIcon className="w-7 h-7 text-zinc-300" />
                        )}
                      </div>
                      <div className="w-full">
                        <span className="text-[11px] font-semibold text-zinc-200 block truncate">
                          {set.name.split(' (')[0]}
                        </span>
                        <span className="text-[9px] text-zinc-500 block truncate">
                          {set.id === 'default' ? 'react-chessboard' : set.id}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => {
                if (!playerName.trim()) {
                  setPlayerName('');
                }
                setIsEditingProfile(false);
              }}
              className="w-full bg-[#ececef] hover:bg-white text-[#0a0a0c] text-xs font-semibold py-2.5 rounded-lg transition"
            >
              {t('profileModal.saveAndClose')}
            </button>
          </div>
        </div>
      )}

      {/* Modal / Navegador da Biblioteca de Partidas de Mestres */}
      <MasterGamesModal
        isOpen={isMasterGamesModalOpen}
        onClose={() => setIsMasterGamesModalOpen(false)}
        onLoadGameIntoAnalysis={(gamePgn) => {
          handleImportPgnText(gamePgn);
          setActivePage('analysis');
          updateRoute({ page: 'analysis' }, false);
        }}
      />
    </div>
  );
}
