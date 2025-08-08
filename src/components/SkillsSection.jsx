import { useState } from "react";
import { cn } from "@/lib/utils";
import { FadeInSection } from "../hooks/FadeInSection";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaJava, FaDocker, FaGithub } from "react-icons/fa";
import { SiTypescript, SiMongodb, SiPostgresql, SiSpringboot } from "react-icons/si";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "PostgreSQL", level: 65, category: "backend" },
  { name: "Java", level: 70, category: "backend" },
  { name: "Spring Boot", level: 65, category: "backend" },
  { name: "Docker", level: 45, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const icons = {
  "HTML/CSS": <FaHtml5 className="text-orange-500" size={24} />,
  JavaScript: <FaJsSquare className="text-yellow-400" size={24} />,
  React: <FaReact className="text-blue-400" size={24} />,
  TypeScript: <SiTypescript className="text-blue-500" size={24} />,
  "Node.js": <FaNodeJs className="text-green-500" size={24} />,
  MongoDB: <SiMongodb className="text-green-600" size={24} />,
  PostgreSQL: <SiPostgresql className="text-blue-600" size={24} />,
  Java: <FaJava className="text-red-600" size={24} />,
  "Spring Boot": <SiSpringboot className="text-green-500" size={24} />,
  Docker: <FaDocker className="text-blue-500" size={24} />,
  GitHub: <FaGithub className="text-gray-700 dark:text-gray-200" size={24} />,
};



 export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <FadeInSection>
      <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="mx-auto container max-w-5xl">
          <h2 className="font-bold text-3xl md:text-5xl text-center mb-12">
            Minhas <span className="text-primary">habilidades</span>
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "cursor-pointer px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-primary"
                )}
              >
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
                <div className="flex items-center gap-3 mb-4">
                  {icons[skill.name]}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInSection>
  );
};
