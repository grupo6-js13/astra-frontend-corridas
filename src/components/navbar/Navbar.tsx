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

  return (
    <nav className="bg-surface border-b border-border">
      <div className="max-w-300 mx-auto px-6 py-3.5 flex items-center justify-between">
        
        <Link to="/" className="no-underline">
          <span className="font-display text-base font-bold text-accent">
            ✦ Astra
          </span>
        </Link>
        <div className="flex gap-6 font-medium">
          <Link to="/" className="hover:text-astra-accent transition-colors">Home</Link>
          <Link to="/viagens" className="hover:text-astra-accent transition-colors">Viagens</Link>
          <Link to="/veiculos" className="hover:text-astra-accent transition-colors">Veículos</Link>
          <Link to="/sobre" className="hover:text-astra-accent transition-colors">Sobre</Link>
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