export function Intro() {
    const features = [
        {
            title: 'Para motoristas',
            description:
                'Divida custos das viagens, aproveite melhor seu carro e conecte-se com estudantes da sua rota.',
        },
        {
            title: 'Para passageiros',
            description:
                'Encontre caronas seguras, economize no transporte e chegue ao destino com mais praticidade.',
        },
        {
            title: 'Segurança',
            description:
                'Apenas universitários verificados participam da plataforma, garantindo mais confiança nas viagens.',
        },
        {
            title: 'Tudo organizado',
            description:
                'Gerencie viagens, horários e valores de forma simples e centralizada em um só lugar.',
        },
    ]

    return (
        <section className="w-full flex justify-center px-6 py-20 bg-bg">

            <div className="max-w-275 w-full flex flex-col items-center text-center">

                {/* Header */}
                <h2 className="
          font-display text-3xl md:text-4xl font-bold
          text-text mb-4
        ">
                    Uma nova forma de se locomover
                </h2>

                <p className="
          text-muted text-lg max-w-150
          leading-relaxed mb-14
        ">
                    O Astra conecta universitários que compartilham trajetos,
                    tornando o transporte mais econômico, sustentável e social.
                </p>

                {/* Grid */}
                <div className="
          grid grid-cols-1 md:grid-cols-2 gap-6 w-full
        ">
                    {features.map((item) => (
                        <div
                            key={item.title}
                            className="bg-surface border border-border
                            rounded-xl p-6 text-left

                            transition-all duration-300 ease-out
                            hover:-translate-y-1.5
                            hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                            hover:bg-surface-hover

                        will-change-transform"
                        >
                            <h3 className="
                font-display text-lg font-semibold
                text-text mb-2
              ">
                                {item.title}
                            </h3>

                            <p className="
                text-sm text-muted leading-relaxed
              ">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}