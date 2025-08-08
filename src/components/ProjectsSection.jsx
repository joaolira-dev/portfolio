import { ExternalLink, Github, GithubIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Ecommerce - Marketplace Full‑Stack",
    description:
      "Marketplace full‑stack inspirado no OLX, feito com React + Tailwind, Node.js e MongoDB. Visual moderno",
    image: "/projects/project1.jpeg",
    tags: ["React", "Tailwind", "Node.JS", "MongoDB", "Biruuuu"],
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
];

export const ProjectsSection = () => {
  return (
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
                
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
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
      </div>
    </section>
  );
};
