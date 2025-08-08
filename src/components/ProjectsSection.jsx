import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";
import { FadeInSection } from "../hooks/FadeInSection";

const projects = [
  {
    id: 1,
    title: "Ecommerce - Marketplace Full‑Stack",
    description:
      "Marketplace full‑stack inspirado no OLX, feito com React + Tailwind, Node.js e MongoDB. Visual moderno",
    image: "/projects/project1.png",
    tags: ["React", "Tailwind", "Node.JS", "MongoDB"],
    demoUrl: "https://olxclone-eta.vercel.app/",
    githubUrl: "https://github.com/joaolira-dev/olx-project",
  },
  {
    id: 2,
    title: "LoginAuth - JWT + Spring Security",
    description:
      "Base de autenticação com JWT e Spring Security (Spring Boot), com interface em React + Tailwind. Ideal para iniciar projetos com login seguro.",
    image: "/projects/project2.png",
    tags: ["React", "Tailwind", "Springboot", "JWT"],
    demoUrl: "#",
    githubUrl: "https://github.com/joaolira-dev/login-auth",
  },
  {
    id: 3,
    title: "Evoluir Fullstack - Gestor de Faturas",
    description:
     "Sistema de gerenciamento de faturas. Desenvolvido com React, Springboot, MySQL com testes unitários, Swagger e dockerização.",
    image: "/projects/project3.png",
    tags: ["React", "Springboot", "Docker", "MySQL", "Swagger", "Testes Unitários"],
    demoUrl: "#",
    githubUrl: "https://github.com/joaolira-dev/evoluir-fullstack",
  },
];

export const ProjectsSection = () => {
  return (
    <FadeInSection>
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {" "}
            Featured <span className="text-primary">Projects</span>
          </h2>

          <p className="text-center mb-12 max-w-2xl mx-auto">
            Alguns dos meu projetos relevantes, Cada projeto foi feito com
            atenção, detalhe, e boa experiência para o usuário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <div
                key={key}
                className="group bg-card rounded-lag overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
                  />
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-4 flex-wrap">
                    {project.tags.map((tag) => (
                      <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="hover:text-primary text-foreground/80 transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="hover:text-primary text-foreground/80 transition-colors duration-300"
                      >
                        <GithubIcon size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://github.com/joaolira-dev"
              target="_blank"
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
            >
              Visite meu GitHub <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};
