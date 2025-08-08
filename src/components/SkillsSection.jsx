import { useState } from "react";
import { cn } from "@/lib/utils"
import { FadeInSection } from "../hooks/FadeInSection";

const skills = [
  // Front‑end
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },

  // Back‑end
  { name: "Node.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Java", level: 75, category: "backend" },
  { name: "Spring Boot", level: 65, category: "backend" },

  //  Ferramentas
  { name: "Docker", level: 50, category: "tools" },
  { name: "GitHub", level: 85, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"]

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)

  return (
    <FadeInSection>
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="mx-auto container max-w-5xl">
        <h2 className="font-bold text-3xl md:text-5xl text-center mb-12">
          Minhas <span className="text-primary">habilidades</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category,key) => (
            <button key={key} onClick={() => setActiveCategory(category)} className={cn("cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize",
              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-primary"
            )}>
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
    </FadeInSection>
  );
};
