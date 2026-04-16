import { Link, useLocation } from 'react-router-dom'
import { btnPrimary, colors } from '../../theme'


export function Navbar() {
  const location = useLocation()
  let botao = null

  if (location.pathname === '/') {
    botao = { label: 'Entrar', to: '/login' }
  }

  if (location.pathname.startsWith('/viagens')) {
    botao = { label: '+ Nova viagem', to: '/viagens/form' }
  }

  if (location.pathname.startsWith('/veiculos')) {
    botao = { label: '+ Novo veículo', to: '/veiculos/form' }
  }

  const linkStyle = (path: string) => ({
    fontSize: '13px',
    fontWeight: 500,
    color: location.pathname.startsWith(path)
      ? colors.text
      : colors.muted,
    textDecoration: 'none',
    transition: '0.2s',
  })

  return (
    <nav style={{
      backgroundColor: colors.surface,
      borderBottom: `1px solid ${colors.border}`,
    }}>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>

        <Link to="/" style={{ textDecoration: 'none' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            color: colors.accent,
          }}>
            ✦ Astra
          </span>
        </Link>

        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" style={linkStyle('/')}>Home</Link>
          <Link to="/introducao" style={linkStyle('/introducao')}>Introdução</Link>
          <Link to="/sobre" style={linkStyle('/sobre')}>Sobre</Link>
          <Link to="/veiculos" style={linkStyle('/veiculos')}>Veículos</Link>
          <Link to="/viagens" style={linkStyle('/viagens')}>Viagens</Link>
        </div>

        {botao && (
          <Link to={botao.to}>
            <button style={{
              ...btnPrimary,
              padding: '7px 16px',
              fontSize: '13px',
              borderRadius: '8px',
            }}>
              {botao.label}
            </button>
          </Link>
        )}

      </div>
    </nav>
  )
}

export default Navbar