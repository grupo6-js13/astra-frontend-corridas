export function AboutHero() {
    return (
        <section
            className="relative w-full flex justify-center
    px-6 pt-28 pb-24
    overflow-hidden

    bg-[radial-gradient(ellipse_at_50%_0%,rgba(76,110,245,0.25)_0%,#0D0F1A_65%)]"
        >
            <div className="
        max-w-225 w-full
        flex flex-col items-center text-center
      ">

                {/* Badge */}
                <div className="
          inline-flex items-center gap-1.5
          bg-primary/10 text-primary
          border border-primary/30
          rounded-full px-4 py-1.5
          text-sm mb-6
        ">
                    ✦ Sobre o projeto
                </div>

                {/* Title */}
                <h1 className="
  font-display text-4xl md:text-[44px]
  font-bold text-text
  leading-tight mb-4
">
                    Sobre o Astra
                </h1>

                {/* Subtitle */}
                <p className="
  text-muted text-[17px]
  max-w-155
  leading-relaxed
">
                    Uma aplicação desenvolvida para conectar universitários,
                    otimizar deslocamentos e tornar o transporte mais acessível
                    e colaborativo.
                </p>

            </div>
        </section>
    )
}