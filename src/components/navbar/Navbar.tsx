import { Link, useLocation } from 'react-router-dom'

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

  const linkBase = "text-sm text-muted hover:text-text transition-colors"
  const linkActive = "text-text font-medium"

  return (
    <nav className="
      bg-surface/80 backdrop-blur
      border-b border-border
      sticky top-0 z-50
    ">
      <div className="max-w-[1100px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="font-display text-lg font-bold text-accent">
            ✦ Astra
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          
          <Link
            to="/"
            className={`${linkBase} ${location.pathname === '/' ? linkActive : ''}`}
          >
            Home
          </Link>

          <Link
            to="/viagens"
            className={`${linkBase} ${location.pathname.startsWith('/viagens') ? linkActive : ''}`}
          >
            Viagens
          </Link>

          <Link
            to="/veiculos"
            className={`${linkBase} ${location.pathname.startsWith('/veiculos') ? linkActive : ''}`}
          >
            Veículos
          </Link>

          <Link
            to="/sobre"
            className={`${linkBase} ${location.pathname === '/sobre' ? linkActive : ''}`}
          >
            Sobre
          </Link>

        </div>

        {/* Botão dinâmico */}
        {botao && (
          <Link to={botao.to}>
            <button className="
              bg-primary text-white
              px-4 py-2 rounded-lg
              text-sm font-medium

              hover:opacity-90 transition
            ">
              {botao.label}
            </button>
          </Link>
        )}

      </div>
    </nav>
  )
}

export default Navbar