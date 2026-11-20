import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import {
  getPlayerMeta,
  getIsoCountryCode,
  fetchPlayerPhotoDynamic,
} from '../utils/playerAvatars';
import TitleBadge from './TitleBadge';
import { useTranslation } from '../i18n';

/**
 * Componente de Foto de Perfil Padrão Neutra (No Profile)
 * Exibe a silhueta padrão oficial quando o jogador não possui foto de perfil,
 * evitando o uso de siglas que possam gerar abreviações inadequadas ou maliciosas.
 */
export function NoProfileAvatar({ className = '' }) {
  const [useFallbackSvg, setUseFallbackSvg] = useState(false);

  if (useFallbackSvg) {
    return (
      <svg
        viewBox="0 0 100 100"
        className={`w-full h-full select-none ${className}`}
        aria-label="Perfil sem foto"
      >
        <rect width="100" height="100" fill="#e2e6ea" />
        <circle cx="50" cy="40" r="21" fill="#8c96a4" />
        <path d="M12 98 C12 67 30 64 50 64 C70 64 88 67 88 98 Z" fill="#8c96a4" />
      </svg>
    );
  }

  return (
    <img
      src="/no-profile.png"
      alt="Perfil sem foto"
      onError={() => setUseFallbackSvg(true)}
      className={`w-full h-full object-cover select-none ${className}`}
    />
  );
}

/**
 * Componente de Bandeira Retangular
 * Possui SVGs vetoriais no formato padrão 3:2 (viewBox="0 0 30 20") com cantos sutis (rounded-[2px]),
 * garantindo renderização instantânea sem depender de rede para as principais federações,
 * com fallback dinâmico para CDN flagcdn e badge em código ISO para os demais países.
 */
export function PlayerFlagRect({ fedCode, className = '' }) {
  const [extError, setExtError] = useState(false);
  const iso2 = getIsoCountryCode(fedCode);

  useEffect(() => {
    setExtError(false);
  }, [fedCode]);

  if (!iso2) return null;

  const flagBoxClass = `w-[21px] h-[14px] rounded-[2px] overflow-hidden shrink-0 border border-white/20 shadow-sm ${className}`;

  switch (iso2) {
    case 'us':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Estados Unidos (USA)">
          <rect width="30" height="20" fill="#b22234" />
          <path
            d="M0 1.54h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0zm0 3.08h30v1.54H0z"
            fill="#fff"
          />
          <rect width="12" height="10.77" fill="#3c3b6e" />
          <circle cx="2.2" cy="2.2" r="0.6" fill="#fff" />
          <circle cx="4.8" cy="2.2" r="0.6" fill="#fff" />
          <circle cx="7.2" cy="2.2" r="0.6" fill="#fff" />
          <circle cx="9.8" cy="2.2" r="0.6" fill="#fff" />
          <circle cx="3.5" cy="4.2" r="0.6" fill="#fff" />
          <circle cx="6" cy="4.2" r="0.6" fill="#fff" />
          <circle cx="8.5" cy="4.2" r="0.6" fill="#fff" />
          <circle cx="2.2" cy="6.2" r="0.6" fill="#fff" />
          <circle cx="4.8" cy="6.2" r="0.6" fill="#fff" />
          <circle cx="7.2" cy="6.2" r="0.6" fill="#fff" />
          <circle cx="9.8" cy="6.2" r="0.6" fill="#fff" />
          <circle cx="3.5" cy="8.2" r="0.6" fill="#fff" />
          <circle cx="6" cy="8.2" r="0.6" fill="#fff" />
          <circle cx="8.5" cy="8.2" r="0.6" fill="#fff" />
        </svg>
      );
    case 'no':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Noruega (NOR)">
          <rect width="30" height="20" fill="#ba0c2f" />
          <path d="M7.5 0h4v20h-4zM0 8h30v4H0z" fill="#fff" />
          <path d="M8.5 0h2v20h-2zM0 9h30v2H0z" fill="#00205b" />
        </svg>
      );
    case 'in':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Índia (IND)">
          <rect width="30" height="6.67" y="0" fill="#ff9933" />
          <rect width="30" height="6.67" y="6.67" fill="#ffffff" />
          <rect width="30" height="6.67" y="13.33" fill="#138808" />
          <circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" strokeWidth="0.7" />
          <circle cx="15" cy="10" r="0.8" fill="#000080" />
        </svg>
      );
    case 'fr':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="França (FRA)">
          <rect width="10" height="20" x="0" fill="#002395" />
          <rect width="10" height="20" x="10" fill="#ffffff" />
          <rect width="10" height="20" x="20" fill="#ed2939" />
        </svg>
      );
    case 'uz':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Uzbequistão (UZB)">
          <rect width="30" height="6.3" y="0" fill="#0099b5" />
          <rect width="30" height="0.5" y="6.3" fill="#ce1126" />
          <rect width="30" height="6.4" y="6.8" fill="#ffffff" />
          <rect width="30" height="0.5" y="13.2" fill="#ce1126" />
          <rect width="30" height="6.3" y="13.7" fill="#1eb53a" />
          <circle cx="5.5" cy="3.2" r="1.8" fill="#ffffff" />
          <circle cx="6.2" cy="3.2" r="1.5" fill="#0099b5" />
        </svg>
      );
    case 'cn':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="China (CHN)">
          <rect width="30" height="20" fill="#de2910" />
          <polygon points="5,2 5.9,4.7 3.6,3 6.4,3 4.1,4.7" fill="#ffde00" />
          <circle cx="9" cy="2.5" r="0.7" fill="#ffde00" />
          <circle cx="10.5" cy="4" r="0.7" fill="#ffde00" />
          <circle cx="10.5" cy="6" r="0.7" fill="#ffde00" />
          <circle cx="9" cy="7.5" r="0.7" fill="#ffde00" />
        </svg>
      );
    case 'nl':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Países Baixos / Holanda (NED)">
          <rect width="30" height="6.67" y="0" fill="#ae1c28" />
          <rect width="30" height="6.67" y="6.67" fill="#ffffff" />
          <rect width="30" height="6.67" y="13.33" fill="#21468b" />
        </svg>
      );
    case 'de':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Alemanha (GER)">
          <rect width="30" height="6.67" y="0" fill="#000000" />
          <rect width="30" height="6.67" y="6.67" fill="#dd0000" />
          <rect width="30" height="6.67" y="13.33" fill="#ffce00" />
        </svg>
      );
    case 'pl':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Polônia (POL)">
          <rect width="30" height="10" y="0" fill="#ffffff" />
          <rect width="30" height="10" y="10" fill="#dc143c" />
        </svg>
      );
    case 'hu':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Hungria (HUN)">
          <rect width="30" height="6.67" y="0" fill="#ce2939" />
          <rect width="30" height="6.67" y="6.67" fill="#ffffff" />
          <rect width="30" height="6.67" y="13.33" fill="#477050" />
        </svg>
      );
    case 'ru':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="FIDE / Rússia (FID/RUS)">
          <rect width="30" height="6.67" y="0" fill="#ffffff" />
          <rect width="30" height="6.67" y="6.67" fill="#0039a6" />
          <rect width="30" height="6.67" y="13.33" fill="#d52b1e" />
        </svg>
      );
    case 'br':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Brasil (BRA)">
          <rect width="30" height="20" fill="#009c3b" />
          <polygon points="15,2.5 27,10 15,17.5 3,10" fill="#ffdf00" />
          <circle cx="15" cy="10" r="4.2" fill="#002776" />
          <path d="M11.5 11.2a4.2 4.2 0 0 0 7-2.2" fill="none" stroke="#ffffff" strokeWidth="0.8" />
        </svg>
      );
    case 'es':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Espanha (ESP)">
          <rect width="30" height="5" y="0" fill="#aa151b" />
          <rect width="30" height="10" y="5" fill="#f1bf00" />
          <rect width="30" height="5" y="15" fill="#aa151b" />
          <circle cx="8" cy="10" r="2.2" fill="#aa151b" opacity="0.8" />
        </svg>
      );
    case 'it':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Itália (ITA)">
          <rect width="10" height="20" x="0" fill="#009246" />
          <rect width="10" height="20" x="10" fill="#ffffff" />
          <rect width="10" height="20" x="20" fill="#ce2b37" />
        </svg>
      );
    case 'gb':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Reino Unido / Inglaterra (ENG/GB)">
          <rect width="30" height="20" fill="#012169" />
          <path d="M0 0l30 20m0-20L0 20" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0l30 20m0-20L0 20" stroke="#c8102e" strokeWidth="1.6" />
          <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="4.8" />
          <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="2.8" />
        </svg>
      );
    case 'ua':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Ucrânia (UKR)">
          <rect width="30" height="10" y="0" fill="#0057b7" />
          <rect width="30" height="10" y="10" fill="#ffd700" />
        </svg>
      );
    case 'az':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Azerbaijão (AZE)">
          <rect width="30" height="6.67" y="0" fill="#00b5e2" />
          <rect width="30" height="6.67" y="6.67" fill="#ef3340" />
          <rect width="30" height="6.67" y="13.33" fill="#509e2f" />
          <circle cx="14.5" cy="10" r="2.2" fill="#ffffff" />
          <circle cx="15.1" cy="10" r="1.8" fill="#ef3340" />
          <polygon points="17,9 17.4,9.8 18.2,9.6 17.6,10.2 18,10.9 17.2,10.6 16.7,11.2 16.7,10.3 16,10 16.7,9.6" fill="#ffffff" />
        </svg>
      );
    case 'am':
      return (
        <svg viewBox="0 0 30 20" className={flagBoxClass} title="Armênia (ARM)">
          <rect width="30" height="6.67" y="0" fill="#d90012" />
          <rect width="30" height="6.67" y="6.67" fill="#0033a0" />
          <rect width="30" height="6.67" y="13.33" fill="#f2a800" />
        </svg>
      );
    default:
      if (!extError) {
        return (
          <img
            src={`https://flagcdn.com/w40/${iso2}.png`}
            alt={fedCode}
            referrerPolicy="no-referrer"
            onError={() => setExtError(true)}
            className={`w-[21px] h-[14px] rounded-[2px] object-cover border border-white/20 shadow-sm shrink-0 ${className}`}
            title={fedCode}
          />
        );
      }
      return (
        <span
          className={`text-[9px] font-bold px-1 py-0.5 rounded-[2px] bg-zinc-800 text-zinc-300 uppercase shrink-0 border border-zinc-700/60 leading-none ${className}`}
          title={fedCode}
        >
          {iso2.toUpperCase()}
        </span>
      );
  }
}

/**
 * Barra de jogador adaptada ao estilo broadcast do Saragix
 * Inclui:
 * - Foto com busca automática (dicionário oficial + Wikipedia API)
 * - Título oficial usando o componente sóbrio TitleBadge (padrão de todo o Saragix)
 * - Nome do jogador em destaque
 * - Bandeira nacional retangular (proporção padrão 3:2)
 * - Rating FIDE
 * - Placar / Indicador de Resultado da partida
 * - Relógio Digital
 */
export default function PlayerBroadcastBar({
  name,
  title,
  rating,
  color, // 'w' ou 'b'
  isTurn = false,
  clockDisplay = '00:00',
  result = '*', // '1-0', '0-1', '1/2-1/2', '*'
  score = null, // score da rodada ou match se disponível (ex: '1', '0', '½')
  fideId = null,
  fed = null,
  hidePhoto = false,
  hideClock = false,
  rightContent = null,
  subtitleText = null,
  actionButton = null,
  className = '',
}) {
  const [photoUrl, setPhotoUrl] = useState(() => {
    if (hidePhoto) return null;
    const meta = getPlayerMeta(name, fideId, fed);
    return meta.photo || null;
  });
  const [dynFed, setDynFed] = useState(() => {
    const meta = getPlayerMeta(name, fideId, fed);
    return meta.fed || '';
  });
  const [imgError, setImgError] = useState(false);

  const meta = getPlayerMeta(name, fideId, fed);
  const displayTitle = hidePhoto ? (title || '') : (title || meta.title || '');
  const displayFed = hidePhoto ? (fed || '') : (meta.fed || dynFed || '');

  // Efeito para carregar foto e federação (síncrona se conhecida ou assíncrona se precisar consultar Wikipedia)
  useEffect(() => {
    if (hidePhoto) {
      setPhotoUrl(null);
      return;
    }

    let isCancelled = false;
    const currentMeta = getPlayerMeta(name, fideId, fed);

    if (currentMeta.photo) {
      setPhotoUrl(currentMeta.photo);
      setDynFed(currentMeta.fed || '');
      setImgError(false);
      return;
    }

    setPhotoUrl(null);
    setDynFed(currentMeta.fed || '');
    setImgError(false);

    fetchPlayerPhotoDynamic(name).then((dynResult) => {
      if (!isCancelled && dynResult) {
        if (dynResult.photo) setPhotoUrl(dynResult.photo);
        if (dynResult.fed) setDynFed(dynResult.fed);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [name, fideId, fed, hidePhoto]);

  // Calcula o resultado específico para este jogador se não fornecido via score direto
  let roundScore = score;
  if (!roundScore && result && result !== '*') {
    if (result === '1/2-1/2') {
      roundScore = '½';
    } else if (color === 'w') {
      roundScore = result === '1-0' ? '1' : '0';
    } else if (color === 'b') {
      roundScore = result === '0-1' ? '1' : '0';
    }
  }

  // Estilização do badge de resultado/score
  let scoreBadgeBg = 'bg-zinc-800 text-zinc-300';
  if (roundScore === '1') {
    scoreBadgeBg = 'bg-emerald-600 text-white shadow-sm shadow-emerald-950/60';
  } else if (roundScore === '0') {
    scoreBadgeBg = 'bg-rose-600 text-white shadow-sm shadow-rose-950/60';
  } else if (roundScore === '½' || roundScore === '0.5') {
    scoreBadgeBg = 'bg-amber-600/90 text-white';
  }

  const { t } = useTranslation();

  return (
    <div
      className={`w-full max-w-[560px] h-14 bg-[#1f2026] hover:bg-[#23242c] transition-colors rounded-xl border ${
        isTurn ? 'border-sky-500/80 shadow-md shadow-sky-950/40 ring-1 ring-sky-500/40' : 'border-[#2d2e38]'
      } overflow-hidden flex items-stretch justify-between select-none ${className}`}
    >
      {/* Lado Esquerdo: Foto (se visível) + Informações do Jogador + Badge de Resultado */}
      <div className={`flex items-center gap-3 ${hidePhoto ? 'pl-3.5' : 'pl-0'} pr-3 min-w-0 flex-1`}>
        {!hidePhoto ? (
          /* Foto do Jogador ou Silhueta Padrão Neutra (No Profile) */
          <div className="w-14 h-14 shrink-0 bg-[#16161c] relative flex items-center justify-center overflow-hidden border-r border-[#2b2c36]">
            {photoUrl && !imgError ? (
              <img
                src={photoUrl}
                alt={name || 'Player'}
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <NoProfileAvatar />
            )}
          </div>
        ) : (
          /* Indicador Compacto de Cor das Peças quando sem foto */
          <div
            className={`w-4 h-4 rounded-sm border shrink-0 shadow-sm ${
              color === 'w'
                ? 'bg-[#e4e4e7] border-zinc-400'
                : 'bg-[#18181b] border-zinc-600'
            }`}
            title={color === 'w' ? t('broadcasts.whitePieces') : t('broadcasts.blackPieces')}
          />
        )}

        {/* Nome, Badge de Título Padrão Saragix, Bandeira Retangular e Rating */}
        <div className="flex flex-col justify-center min-w-0 flex-1 py-1">
          <div className="flex items-center gap-1.5 truncate">
            {displayTitle && <TitleBadge title={displayTitle} />}
            <span
              className="font-bold text-[13px] sm:text-sm text-zinc-100 truncate hover:text-white"
              title={name}
            >
              {name || (color === 'w' ? t('common.white') : t('common.black'))}
            </span>
            {actionButton}
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-0.5">
            {/* Bandeira Retangular do País */}
            {displayFed && <PlayerFlagRect fedCode={displayFed} />}

            {rating && (
              <span className="text-zinc-300 font-medium text-[11px]">
                {rating}
              </span>
            )}

            {subtitleText && (
              <span className="text-zinc-400 font-sans text-[11px] truncate">
                {rating ? `• ${subtitleText}` : subtitleText}
              </span>
            )}
          </div>
        </div>

        {/* Badge de Placar / Resultado da Partida (Ex: 0, 1, ½) */}
        {roundScore !== null && roundScore !== undefined && (
          <div
            className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold font-mono shrink-0 ${scoreBadgeBg}`}
            title={t('broadcasts.roundResult', { score: roundScore })}
          >
            {roundScore}
          </div>
        )}
      </div>

      {/* Lado Direito: Caixa do Relógio Digital ou Conteúdo Customizado */}
      {rightContent ? (
        <div
          className={`px-3 flex items-center justify-center border-l shrink-0 ${
            isTurn
              ? 'bg-sky-950/40 border-sky-600/40 text-sky-200'
              : 'bg-[#181920] border-[#2b2c36] text-zinc-300'
          }`}
        >
          {rightContent}
        </div>
      ) : !hideClock ? (
        <div
          className={`w-28 sm:w-32 px-3 flex items-center justify-center border-l shrink-0 ${
            isTurn
              ? 'bg-sky-950/40 border-sky-600/40 text-sky-200'
              : 'bg-[#181920] border-[#2b2c36] text-zinc-300'
          }`}
        >
          <div className="flex items-center gap-1.5 font-mono text-base sm:text-lg font-bold tracking-wider">
            {isTurn && (
              <Clock className="w-3.5 h-3.5 text-sky-400 animate-pulse shrink-0" />
            )}
            <span>{clockDisplay}</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
