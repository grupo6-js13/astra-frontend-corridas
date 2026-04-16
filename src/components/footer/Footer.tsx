import { Link } from 'react-router-dom'
import { colors } from '../../theme'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer style={{
      backgroundColor: colors.bg,
      borderTop: `1px solid ${colors.border}`,
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

        
        <div>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '16px',
            fontWeight: 700,
            color: colors.accent,
          }}>
            ✦ Astra
          </span>
        </div>

        
        <div style={{
          fontSize: '11px',
          color: colors.muted,
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          lineHeight: 1
        }}>
          <span>© {ano} Astra Corridas — Desenvolvido por</span>

          <img
            src="https://ik.imagekit.io/jeaninny/Logo_digital_em_vetor_orbyte.png?updatedAt=1776205137349"
            alt="Orbyte"
            style={{              
              height: '22px',      
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        
        <div style={{
          display: 'flex',
          gap: '16px',
          fontSize: '12px',
          fontWeight: 500,
        }}>
          <Link
            to="/sobre"
            style={{
              color: colors.muted,
              textDecoration: 'none',
              transition: '0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}
          >
            Sobre
          </Link>

          <a
            href="https://github.com/grupo6-js13"
            target="_blank"
            rel="noreferrer"
            style={{
              color: colors.muted,
              textDecoration: 'none',
              transition: '0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = colors.accent}
            onMouseLeave={(e) => e.currentTarget.style.color = colors.muted}
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer