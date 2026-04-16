# ✦ Astra — Guia de Estilo para Desenvolvedores

> Leia este arquivo antes de criar qualquer componente ou página.
> O objetivo é garantir que todos os 5 membros do grupo produzam interfaces visualmente consistentes, sem precisar pedir ajuda um ao outro para saber qual cor ou estilo usar.

---

## 1. Setup mínimo

Certifique-se de que o `index.html` tem as fontes importadas:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet"/>
```

E o `src/index.css` tem:

```css
@import "tailwindcss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #0D0F1A;
  color: #E8EAF6;
  font-family: 'Inter', sans-serif;
}
```

---

## 2. O arquivo `theme.ts`

Todos os estilos do projeto estão centralizados em `src/theme.ts`.

**Nunca escreva cores soltas no seu componente.** Sempre importe do theme:

```tsx
import { colors, card, btnPrimary, input, label } from '../theme'
// ajuste o caminho conforme a profundidade da pasta
```

---

## 3. Paleta de cores

| Token | Cor | Onde usar |
|---|---|---|
| `colors.bg` | `#0D0F1A` | Fundo da página |
| `colors.surface` | `#161929` | Fundo de cards, inputs, selects |
| `colors.border` | `#1E2A4A` | Bordas de tudo |
| `colors.primary` | `#4C6EF5` | Botão principal, link ativo na Navbar |
| `colors.accent` | `#39FF9C` | Logo, preços, destaques |
| `colors.text` | `#E8EAF6` | Texto principal |
| `colors.muted` | `#8B90B0` | Labels, subtítulos, placeholders |
| `colors.danger` | `#F87171` | Botão deletar, mensagens de erro |

---

## 4. Tipografia

| Elemento | Fonte | Tamanho | Peso |
|---|---|---|---|
| Títulos de página, logo | Space Grotesk | 18–28px | 700 |
| Corpo, labels, botões | Inter | 11–14px | 400–500 |
| Preço em destaque | Inter | 18px | 600 |

```tsx
// Título de seção ou página
<h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: colors.text }}>
  Viagens disponíveis
</h2>

// Subtítulo
<p style={{ fontSize: '12px', color: colors.muted }}>3 resultados encontrados</p>
```

---

## 5. Componentes — exemplos de uso

### Card padrão

```tsx
import { card, colors } from '../theme'

<div style={card}>
  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '14px', fontWeight: 600, color: colors.text }}>
    SP → Campinas
  </p>
  <p style={{ fontSize: '11px', color: colors.muted }}>Manhã · 98 km · 3 vagas</p>
</div>
```

### Card com hover

```tsx
import { card, cardHover } from '../theme'
import { useState } from 'react'

const [hovered, setHovered] = useState(false)

<div
  style={hovered ? cardHover : card}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  ...
</div>
```

### Input controlado

```tsx
import { input, label } from '../theme'

<div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
  <label style={label}>Origem</label>
  <input
    style={input}
    value={origem}
    onChange={(e) => setOrigem(e.target.value)}
    placeholder="Ex: São Paulo - SP"
  />
</div>
```

### Select controlado

```tsx
import { input, label } from '../theme'
// input e select usam o mesmo estilo

<div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
  <label style={label}>Período</label>
  <select style={input} value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
    <option value="">Selecione</option>
    <option value="manha">Manhã</option>
    <option value="tarde">Tarde</option>
    <option value="noite">Noite</option>
    <option value="madrugada">Madrugada</option>
  </select>
</div>
```

> ⚠️ Os valores do select devem ser exatamente: `"manha"`, `"tarde"`, `"noite"`, `"madrugada"` — o backend valida e rejeita qualquer outro valor.

### Botões

```tsx
import { btnPrimary, btnCancel, btnDanger, btnEdit } from '../theme'

<button style={btnPrimary} onClick={handleSubmit}>Salvar</button>
<button style={btnCancel} onClick={() => navigate(-1)}>Cancelar</button>
<button style={btnDanger} onClick={() => deletar(id)}>✕</button>
<button style={btnEdit} onClick={() => navigate(`/veiculos/form/${id}`)}>✏</button>
```

### Tags de status

```tsx
import { tagGreen, tagBlue, tagRed } from '../theme'

<span style={tagGreen}>Disponível</span>
<span style={tagBlue}>Em uso</span>
<span style={tagRed}>Lotado</span>
```

### Preço com tempo estimado

```tsx
import { priceText, detailText } from '../theme'

<div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
  <span style={priceText}>R$ {viagem.preco}</span>
  <span style={detailText}>~{viagem.tempoEstimado} min</span>
</div>
```

---

## 6. Layout de formulário (grid 2 colunas)

```tsx
<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
  {/* campo normal */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
    <label style={label}>Origem</label>
    <input style={input} ... />
  </div>

  {/* campo que ocupa linha inteira */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', gridColumn: '1 / -1' }}>
    <label style={label}>Observação</label>
    <input style={input} ... />
  </div>
</div>

{/* botões alinhados à direita */}
<div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px' }}>
  <button style={btnCancel}>Cancelar</button>
  <button style={btnPrimary}>Salvar</button>
</div>
```

---

## 7. Layout de listagem (grid de cards)

```tsx
{/* Header da página */}
<div style={{ padding: '24px 24px 16px', borderBottom: `1px solid ${colors.border}` }}>
  <h2 style={pageTitle}>Veículos cadastrados</h2>
  <p style={pageSubtitle}>{lista.length} veículos no sistema</p>
</div>

{/* Grid de cards */}
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '12px', padding: '16px 24px 24px' }}>
  {lista.map(item => (
    <div key={item.id} style={card}>
      ...
    </div>
  ))}
</div>
```

---

## 8. Estrutura padrão de uma página

```tsx
import { pageStyle, colors } from '../theme'

function MinhaPage() {
  return (
    <div style={pageStyle}>

      {/* Header */}
      <div style={{ padding: '24px 24px 16px', borderBottom: `1px solid ${colors.border}` }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', fontWeight: 700, color: colors.text }}>
          Título da página
        </h2>
        <p style={{ fontSize: '12px', color: colors.muted }}>Descrição</p>
      </div>

      {/* Conteúdo */}
      <div style={{ padding: '16px 24px' }}>
        ...
      </div>

    </div>
  )
}
```

---

## 9. Rotas do projeto

| Caminho | Componente | Descrição |
|---|---|---|
| `/` | `Home` | Página inicial |
| `/introducao` | `Introducao` | Contexto do problema |
| `/sobre` | `Sobre` | Equipe e tecnologias |
| `/veiculos` | `ListarVeiculos` | Lista todos os veículos |
| `/veiculos/form` | `FormVeiculo` | Cadastrar novo veículo |
| `/veiculos/form/:id` | `FormVeiculo` | Editar veículo existente |
| `/viagens` | `ListarViagens` | Lista todas as viagens |
| `/viagens/form` | `FormViagem` | Cadastrar nova viagem |
| `/viagens/form/:id` | `FormViagem` | Editar viagem existente |

---

## 10. Endpoints do backend

**Base URL:** _(colocar a URL do Render aqui)_

### Veículo
| Método | Rota | Descrição |
|---|---|---|
| GET | `/veiculos` | Lista todos |
| GET | `/veiculos/:id` | Busca por ID |
| GET | `/veiculos/modelo/:modelo` | Busca por modelo |
| GET | `/veiculos/cor/:cor` | Busca por cor |
| POST | `/veiculos` | Cadastrar |
| PUT | `/veiculos` | Editar (id no body) |
| DELETE | `/veiculos/:id` | Deletar |

### Viagem
| Método | Rota | Descrição |
|---|---|---|
| GET | `/viagens` | Lista todas |
| GET | `/viagens/:id` | Busca por ID |
| GET | `/viagens/origem/:origem` | Busca por origem |
| POST | `/viagens/cadastrar` | Cadastrar ⚠️ rota diferente |
| PUT | `/viagens` | Editar (id no body) |
| DELETE | `/viagens/:id` | Deletar |

> ⚠️ **PUT de Veículo e PUT de Viagem:** o `id` vai no **body**, não na URL.
> ⚠️ **POST de Viagem:** a rota é `/viagens/cadastrar`, não `/viagens`.
> ⚠️ **Período:** aceita só `"manha"`, `"tarde"`, `"noite"`, `"madrugada"` em lowercase.
> ⚠️ **preco e tempoEstimado:** calculados automaticamente pelo backend. Não enviar no POST/PUT.

---

## 11. Divisão sugerida do grupo

| Membro | Responsabilidade |
|---|---|
| Dev 1 | S04 — Estrutura base: pastas, Service.ts, rotas, Navbar, Footer |
| Dev 2 | Páginas estáticas: Home, Introdução, Sobre |
| Dev 3 | Models + Services (Veiculo e Viagem) + ListarVeiculos |
| Dev 4 | FormVeiculo (cadastro + edição) + deletar veículo |
| Dev 5 | ListarViagens + FormViagem (cadastro + edição) + deletar viagem |

---

## 12. Dicas para usar com IA

Se for pedir ajuda a uma IA para gerar código, use este prompt base:

> "Estou desenvolvendo o frontend de um projeto chamado Astra em React + TypeScript + Vite com Tailwind v4. Usamos estilos inline com objetos JavaScript (não classes Tailwind) importados de um arquivo theme.ts. As cores principais são: bg #0D0F1A, surface #161929, border #1E2A4A, primary #4C6EF5, accent #39FF9C, text #E8EAF6, muted #8B90B0, danger #F87171. Fontes: Space Grotesk para títulos, Inter para corpo. Me ajude a criar [nome do componente] seguindo esse padrão."
