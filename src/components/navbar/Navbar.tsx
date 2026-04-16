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

  const getLinkClass = (path: string) => {
    const isActive = location.pathname.startsWith(path) && (path !== '/' || location.pathname === '/')
    return `text-[13px] font-medium no-underline transition-colors duration-200 ${
      isActive ? 'text-text' : 'text-muted hover:text-text'
    }`
  }

  return (
    <nav className="bg-surface border-b border-border">
      <div className="max-w-300 mx-auto px-6 py-3.5 flex items-center justify-between">
        
        <Link to="/" className="no-underline">
          <span className="font-display text-base font-bold text-accent">
            ✦ Astra
          </span>
        </Link>

        <div className="flex gap-5 items-center">
          <Link to="/" className={getLinkClass('/')}>Home</Link>
          <Link to="/introducao" className={getLinkClass('/introducao')}>Introdução</Link>
          <Link to="/sobre" className={getLinkClass('/sobre')}>Sobre</Link>
          <Link to="/veiculos" className={getLinkClass('/veiculos')}>Veículos</Link>
          <Link to="/viagens" className={getLinkClass('/viagens')}>Viagens</Link>
        </div>

        {botao && (
          <Link to={botao.to}>
            <button className="bg-primary text-text px-4 py-1.75 text-[13px] font-medium rounded-lg transition-colors hover:opacity-90">
              {botao.label}
            </button>
          </Link>
        )}

      </div>
    </nav>
  )
}

export default Navbar