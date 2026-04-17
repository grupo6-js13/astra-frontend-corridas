import { Link } from "react-router-dom"

const stats = [
    { value: '+2h', label: 'economizadas no trânsito' },
    { value: '70%', label: 'dos carros subutilizados' },
    { value: '100%', label: 'universitários verificados' },
]

export function Hero() {
    return (
        <section
            className="
        w-full flex items-center justify-center
        px-6 pt-24 pb-16
        bg-[radial-gradient(ellipse_at_50%_0%,#1a1f4a_0%,#0D0F1A_65%)]
      "
        >
            <div className="max-w-225 w-full flex flex-col items-center text-center">

                {/* Badge */}
                <div
                    className="
                    inline-flex items-center gap-1.5
                    bg-accent/10 text-accent
                    border border-accent/30
                    rounded-full px-4 py-1.5
                    text-sm mb-7

                    animate-float
                    shadow-[0_0_20px_rgba(57,255,156,0.15)]
                    "
                >
                    ✦ Caronas universitárias
                </div>

                {/* Title */}
                <h1 className="
          font-display text-[44px] font-bold
          text-text leading-[1.15] mb-4
        ">
                    Conecte seu trajeto.
                    <br />
                    <span className="text-primary">
                        Compartilhe a jornada.
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="
          text-[17px] text-muted
          max-w-140
          leading-relaxed mb-9
        ">
                    Encontre caronas seguras entre universitários. Economize,
                    reduza o trânsito e conheça pessoas do seu campus.
                </p>

                {/* Buttons */}
                <div className="flex gap-3.5 justify-center flex-wrap mb-14">

                    <Link to="/viagens" className="
            bg-primary text-white
            px-6 py-3 rounded-lg
            text-sm font-medium
            hover:opacity-90 transition
          ">
                        Ver viagens disponíveis
                    </Link>

                    <Link to="/viagens/form" className="
            bg-transparent text-accent
            border border-accent/40
            px-6 py-3 rounded-lg
            text-sm font-medium
            hover:bg-accent/10 transition
          ">
                        Cadastrar agora
                    </Link>

                </div>

                {/* Stats */}
                <div className="
          grid grid-cols-3 w-full
          border-t border-border
          divide-x divide-border
        ">
                    {stats.map((s) => (
                        <div key={s.label} className="px-5 py-7 text-center">
                            <div className="
                font-display text-[28px] font-bold text-accent
              ">
                                {s.value}
                            </div>

                            <div className="text-sm text-muted mt-1.5">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}