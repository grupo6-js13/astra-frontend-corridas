import { Link } from 'react-router-dom'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="bg-bg border-t border-border">
      <div className="max-w-300 mx-auto px-6 py-3.5 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <span className="font-display text-base font-bold text-accent">
            ✦ Astra
          </span>
        </div>

        {/* Créditos */}
        <div className="text-[11px] text-muted text-center flex items-center gap-1.5 leading-none">
          <span>© {ano} Astra Corridas — Desenvolvido por</span>
          <img
            src="https://ik.imagekit.io/jeaninny/Logo_digital_em_vetor_orbyte.png?updatedAt=1776205137349"
            alt="Orbyte"
            className="h-5.5 object-contain block"
          />
        </div>

        {/* Links */}
        <div className="flex gap-4 text-xs font-medium">
          <Link
            to="/sobre"
            className="text-muted no-underline transition-colors duration-200 hover:text-accent"
          >
            Sobre
          </Link>

          <a
            href="https://github.com/grupo6-js13"
            target="_blank"
            rel="noreferrer"
            className="text-muted no-underline transition-colors duration-200 hover:text-accent"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer