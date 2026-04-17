import { Link } from 'react-router-dom'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="
      bg-bg border-t border-border
      mt-auto
    ">
      <div className="
        max-w-[1100px] mx-auto
        px-6 py-6
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
      ">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="
            font-display text-lg font-bold text-accent
          ">
            ✦ Astra
          </span>
        </div>

        {/* Créditos */}
        <div className="
          text-xs text-muted
          flex flex-col md:flex-row
          items-center gap-2
          text-center
        ">
          <span>© {ano} Astra — Desenvolvido por</span>

          <img
            src="https://ik.imagekit.io/jeaninny/Logo_digital_em_vetor_orbyte.png?updatedAt=1776205137349"
            alt="Orbyte"
            className="
              h-4 object-contain
              opacity-80 hover:opacity-100
              transition
            "
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-5 text-sm">

          <Link
            to="/sobre"
            className="
              text-muted
              hover:text-text
              transition-colors
            "
          >
            Sobre
          </Link>

          <a
            href="https://github.com/grupo6-js13"
            target="_blank"
            rel="noreferrer"
            className="
              text-muted
              hover:text-accent
              transition-colors
            "
          >
            GitHub
          </a>

        </div>

      </div>
    </footer>
  )
}

export default Footer