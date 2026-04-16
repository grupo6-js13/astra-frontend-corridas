// ============================================================
// ASTRA — Design Tokens
// Importe este arquivo em qualquer componente que precisar
// de cores, fontes ou estilos consistentes.
//
// Uso: import { colors, card, btn } from '../theme'
// ============================================================

export const colors = {
  bg: '#0D0F1A',           // fundo da página
  surface: '#161929',      // fundo de cards e inputs
  surfaceHover: '#1E2235', // hover de cards
  border: '#1E2A4A',       // bordas de cards e inputs
  primary: '#4C6EF5',      // azul índigo — botões principais, links ativos
  accent: '#39FF9C',       // verde neon — logo, destaques, preços
  text: '#E8EAF6',         // texto principal
  muted: '#8B90B0',        // texto secundário, labels, placeholders
  danger: '#F87171',       // vermelho — botão deletar, erros
  tagBlue: '#4C6EF520',    // fundo tag "Disponível"
  tagBlueText: '#818CF8',
  tagGreen: '#39FF9C15',   // fundo tag "Ativo"
  tagGreenText: '#39FF9C',
  tagRed: '#F8717120',     // fundo tag "Em uso" / erro
  tagRedText: '#F87171',
}

// -------------------------------------------------------
// ESTILOS INLINE PRONTOS PARA USAR NO JSX
// Copie e cole direto no style={{}} do seu componente
// -------------------------------------------------------

// Fundo da página inteira
export const pageStyle: React.CSSProperties = {
  backgroundColor: colors.bg,
  minHeight: '100vh',
  fontFamily: "'Inter', sans-serif",
  color: colors.text,
}

// Card padrão (veículo, viagem, etc.)
export const card: React.CSSProperties = {
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: '12px',
  padding: '16px',
}

// Card com hover (use onMouseEnter/onMouseLeave)
export const cardHover: React.CSSProperties = {
  ...card,
  borderColor: colors.primary,
}

// Input / Select
export const input: React.CSSProperties = {
  backgroundColor: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: '8px',
  padding: '9px 12px',
  fontSize: '13px',
  color: colors.text,
  outline: 'none',
  width: '100%',
}

// Label de formulário
export const label: React.CSSProperties = {
  fontSize: '12px',
  color: colors.muted,
  marginBottom: '5px',
  display: 'block',
}

// Botão primário (azul — ação principal)
export const btnPrimary: React.CSSProperties = {
  backgroundColor: colors.primary,
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '9px 18px',
  fontSize: '13px',
  fontWeight: 500,
  cursor: 'pointer',
}

// Botão secundário (transparente com borda verde)
export const btnSecondary: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: colors.accent,
  border: `1px solid ${colors.accent}40`,
  borderRadius: '8px',
  padding: '9px 18px',
  fontSize: '13px',
  fontWeight: 500,
  cursor: 'pointer',
}

// Botão cancelar (neutro)
export const btnCancel: React.CSSProperties = {
  backgroundColor: 'transparent',
  color: colors.muted,
  border: `1px solid ${colors.border}`,
  borderRadius: '8px',
  padding: '9px 18px',
  fontSize: '13px',
  cursor: 'pointer',
}

// Botão deletar (vermelho)
export const btnDanger: React.CSSProperties = {
  backgroundColor: `${colors.danger}20`,
  color: colors.danger,
  border: `1px solid ${colors.danger}40`,
  borderRadius: '6px',
  padding: '5px 10px',
  fontSize: '12px',
  cursor: 'pointer',
}

// Botão editar (neutro pequeno)
export const btnEdit: React.CSSProperties = {
  backgroundColor: colors.surface,
  color: colors.muted,
  border: `1px solid ${colors.border}`,
  borderRadius: '6px',
  padding: '5px 10px',
  fontSize: '12px',
  cursor: 'pointer',
}

// Tag / badge de status
export const tagGreen: React.CSSProperties = {
  backgroundColor: colors.tagGreen,
  color: colors.tagGreenText,
  borderRadius: '999px',
  padding: '3px 10px',
  fontSize: '11px',
  fontWeight: 500,
  display: 'inline-block',
}

export const tagBlue: React.CSSProperties = {
  backgroundColor: colors.tagBlue,
  color: colors.tagBlueText,
  borderRadius: '999px',
  padding: '3px 10px',
  fontSize: '11px',
  fontWeight: 500,
  display: 'inline-block',
}

export const tagRed: React.CSSProperties = {
  backgroundColor: colors.tagRed,
  color: colors.tagRedText,
  borderRadius: '999px',
  padding: '3px 10px',
  fontSize: '11px',
  fontWeight: 500,
  display: 'inline-block',
}

// Título de página
export const pageTitle: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: '18px',
  fontWeight: 700,
  color: colors.text,
  margin: 0,
}

// Subtítulo / descrição de página
export const pageSubtitle: React.CSSProperties = {
  fontSize: '12px',
  color: colors.muted,
  marginTop: '2px',
}

// Separador entre seções dentro de card
export const divider: React.CSSProperties = {
  borderTop: `1px solid ${colors.border}`,
  margin: '10px 0',
}

// Preço em destaque (verde)
export const priceText: React.CSSProperties = {
  fontSize: '18px',
  fontWeight: 600,
  color: colors.accent,
}

// Texto de detalhe pequeno (tempo, km, etc.)
export const detailText: React.CSSProperties = {
  fontSize: '11px',
  color: colors.muted,
}