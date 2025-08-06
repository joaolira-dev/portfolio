export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Desenvolvedor Full Stack</h3>
            <p className="text-muted-foreground">
              Sou estudante de Ciência da Computação e atuo como Desenvolvedor
              Full Stack, apaixonado por programação e tecnologia. Ao longo da
              minha jornada, aprimorei minhas habilidades em resolução de
              problemas. Estou sempre em busca de novos desafios e projetos
              pessoais para expandir meu portifólio e conhecimento para me
              tornar um desenvolvedor ainda melhor.
            </p>

            <p>
              Tenho experiência no desenvolvimento de aplicações web, APIs e
              integrações com banco de dados, utilizando ReactJS,
              Springboot,TypeScript, NodeJS, PostgreSQL, MySQL, MongoDB. Consigo
              atuar tanto no front-end quanto no back-end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Entre em contato
              </a>

              <a
                href="/joaolira-curriculo.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
