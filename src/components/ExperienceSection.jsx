import { Briefcase, Calendar, MapPin } from "lucide-react";
import { FadeInSection } from "../hooks/FadeInSection";

const experiences = [
    {
        title: "Desenvolvedor Fullstack - Estágio",
        company: "RPE - Tech",
        period: "Agosto 2025 - Presente",
        location: "Remoto",
        description: [
            "Desenvolvimento de APIs REST com Spring Boot focadas em sistemas financeiros e arquitetura de microsserviços.",
            "Modernização de sistemas legados de Java 11 para 21, otimizando performance e arquitetura.",
            "Desenvolvimento de interfaces em React e Angular para sistemas financeiros.",
            "Modelagem e otimização de bancos de dados PostgreSQL e orquestração de ambientes containerizados com Docker."
        ],
    },
];

export const ExperienceSection = () => {
    return (
        <FadeInSection>
            <section id="experience" className="py-16 px-4 relative bg-secondary/10">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                        Minha <span className="text-primary">Experiência</span>
                    </h2>

                    <div className="relative border-l-2 border-primary/30 ml-4 md:ml-8 space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 md:pl-12 group">
                                {/* Dot */}
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform duration-300" />

                                <div className="gradient-border p-6 md:p-8 card-hover bg-card text-left">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-foreground">
                                                {exp.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-primary font-medium mt-1">
                                                <Briefcase size={18} />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-2 text-sm text-muted-foreground whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} />
                                                <span>{exp.period}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FadeInSection>
    );
};
