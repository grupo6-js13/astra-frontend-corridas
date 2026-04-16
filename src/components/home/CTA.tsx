import { useNavigate } from 'react-router-dom'

export function CTA() {
  const navigate = useNavigate()

  return (
    <section className="
      w-full flex justify-center
      px-6 py-20
      bg-[linear-gradient(180deg,#0D0F1A_0%,#12152A_100%)]
    ">
      
      <div className="
        max-w-200 w-full
        flex flex-col items-center text-center
      ">

        {/* Title */}
        <h2 className="
          font-display text-3xl md:text-4xl font-bold
          text-text mb-4
        ">
          Menos trânsito. Mais conexão.
        </h2>

        {/* Subtitle */}
        <p className="
          text-muted text-lg
          max-w-130
          leading-relaxed mb-10
        ">
          Comece agora a compartilhar trajetos com outros universitários
          e transforme sua rotina.
        </p>

        {/* CTA ÚNICO */}
        <button
          onClick={() => navigate('/viagens')}
          className="
            bg-accent text-black
            px-7 py-3.5 rounded-lg
            text-sm font-semibold
            hover:opacity-90 transition
          "
        >
          Explorar caronas
        </button>

      </div>
    </section>
  )
}