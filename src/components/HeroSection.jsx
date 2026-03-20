import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">{"{"} 👋🏻 </span>
            <span className="opacity-0 animate-fade-in-delay-1 text-primary">Olá, </span>
            <span className="opacity-0 animate-fade-in-delay-2">me chamo </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-3">João </span>
            <span className="opacity-0 animate-fade-in-delay-4">Victor {"}"}</span>
          </h1>

          <p className="font-light md:text-2xl text-muted-foreground max-2-2xl opacity-0 mx-auto animate-fade-in-delay-4">
            Desenvolvedor Full Stack com experiência em aplicações web, APIs e
            integrações, atuando tanto no front-end quanto no back-end. Foco em
            soluções escaláveis e limpas, utilizando tecnologias como React.JS,
            SpringBoot e Node.JS.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className=" cosmic-button ">
              Veja mais
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-glow mb-2"> Role para baixo </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
