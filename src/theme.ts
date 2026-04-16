// ============================================================
// ASTRA — Design Tokens (Tailwind v4 aligned)
// Agora serve como referência JS/TS do design system
// NÃO usar mais para style={{}} direto
// ============================================================

export const colors = {
  bg: 'var(--color-bg)',
  surface: 'var(--color-surface)',
  surfaceHover: 'var(--color-surface-hover)',
  border: 'var(--color-border)',
  primary: 'var(--color-primary)',
  accent: 'var(--color-accent)',
  text: 'var(--color-text)',
  muted: 'var(--color-muted)',
  danger: 'var(--color-danger)',

  tagBlue: 'var(--color-tag-blue)',
  tagBlueText: 'var(--color-tag-blue-text)',
  tagGreen: 'var(--color-tag-green)',
  tagGreenText: 'var(--color-tag-green-text)',
  tagRed: 'var(--color-tag-red)',
  tagRedText: 'var(--color-tag-red-text)',
}

// -------------------------------------------------------
// TIPOGRAFIA (usada pra lógica, não style inline)
// -------------------------------------------------------

export const fonts = {
  sans: 'var(--font-sans)',
  display: 'var(--font-display)',
}

// -------------------------------------------------------
// TAMANHOS (opcional, útil pra cálculos)
// -------------------------------------------------------

export const fontSizes = {
  hero: '44px',
  subtitle: '17px',
  body: '14px',
  small: '12px',
}

// -------------------------------------------------------
// ESPAÇAMENTOS PADRÃO (opcional)
// -------------------------------------------------------

export const spacing = {
  section: '96px',
  sectionSmall: '64px',
  element: '24px',
  compact: '12px',
}

// -------------------------------------------------------
// HELPERS (opcional)
// -------------------------------------------------------

// Exemplo: converter cor para rgba com opacidade
export function withOpacity(variable: string, opacity: number) {
  return `color-mix(in srgb, ${variable} ${opacity * 100}%, transparent)`
}