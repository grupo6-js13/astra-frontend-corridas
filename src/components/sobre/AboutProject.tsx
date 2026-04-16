export function AboutProject() {
  return (
    <section className="w-full flex justify-center
  px-6 py-20
  bg-surface">
      
      <div className="
  max-w-225 w-full text-center

  bg-surface
  border border-border
  rounded-2xl p-10

  shadow-[0_10px_40px_rgba(0,0,0,0.35)]
">

        {/* Title */}
        <h2 className="
          font-display text-3xl md:text-4xl font-bold
          text-text mb-6
        ">
          Sobre o projeto
        </h2>

        {/* Text */}
        <p className="
          text-muted text-lg
          leading-relaxed mb-6
        ">
          O Astra é um projeto desenvolvido como parte de um projeto
          integrador, com o objetivo de aplicar na prática conceitos
          de desenvolvimento web, design de interfaces e organização
          de sistemas.
        </p>

        <p className="
          text-muted text-lg
          leading-relaxed
        ">
          A aplicação foi construída com foco em simplicidade e
          usabilidade, permitindo o gerenciamento de viagens e veículos
          de forma eficiente, enquanto explora boas práticas de
          desenvolvimento e experiência do usuário.
        </p>

      </div>
    </section>
  )
}