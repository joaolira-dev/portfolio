import { Brain, Code, Contact, Download, Server } from "lucide-react";
import { FadeInSection } from "../hooks/FadeInSection";

export const AboutSection = () => {
  return (
    <FadeInSection>
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
         <div className="flex justify-center mb-8">
          <img
            src="/profile.png"
            alt="Foto de perfil"
            className="w-48 h-48 rounded-full border-4 border-primary object-cover shadow-lg"
          />
        </div>
        </FadeInSection>

      
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Desenvolvedor Full Stack</h3>
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
              <a href="#contact" className="cosmic-button flex gap-2">
                Entre em contato <Contact/>
              </a>

              <a
                href="/joaolira-curriculo.pdf"
                download
                className="px-6 py-2  flex gap-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar CV <Download/>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvedor Web</h4>
                  <p>
                    Construção de sites modernos e responsivos com foco em
                    performance e boas práticas.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Construção de APIs</h4>
                  <p>
                   Desenvolvimento de APIs RESTful seguras e eficientes, com foco em escalabilidade e integração com diversas aplicações frontend
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Aprendizado Contínuo</h4>
                  <p>
                  Sempre em busca de evolução, explorando novas tecnologias e tendências do mercado.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    </FadeInSection>
  );
};
