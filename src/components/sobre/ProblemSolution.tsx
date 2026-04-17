export function ProblemSolution() {
  return (
    <section className="
  w-full flex justify-center
  px-6 py-20
  bg-bg
">
      
      <div className="max-w-275 w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="
            font-display text-3xl md:text-4xl font-bold
            text-text mb-4
          ">
            Por que o Astra existe?
          </h2>

          <p className="
            text-muted text-lg
            max-w-150 mx-auto
            leading-relaxed
          ">
            O Astra surgiu para enfrentar desafios comuns no deslocamento
            de universitários e propor uma alternativa mais eficiente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Problema */}
          <div className="
            bg-surface border border-border
            rounded-xl p-8

            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          ">
            <h3 className="
              font-display text-xl font-semibold
              text-text mb-4
            ">
              O Problema
            </h3>

            <p className="
              text-muted leading-relaxed text-sm
            ">
              O deslocamento diário de universitários pode ser caro,
              ineficiente e cansativo. Muitos carros circulam com
              apenas uma pessoa, contribuindo para o aumento do trânsito
              e dos custos individuais de transporte.
            </p>
          </div>

          {/* Solução */}
          <div className="
            bg-surface border border-border
            rounded-xl p-8

            transition-all duration-300
            hover:-translate-y-1 hover:shadow-lg
          ">
            <h3 className="
              font-display text-xl font-semibold
              text-text mb-4
            ">
              A Solução
            </h3>

            <p className="
              text-muted leading-relaxed text-sm
            ">
              O Astra conecta universitários que compartilham trajetos,
              permitindo dividir custos, reduzir o número de veículos nas ruas
              e tornar o transporte mais acessível, organizado e sustentável.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}