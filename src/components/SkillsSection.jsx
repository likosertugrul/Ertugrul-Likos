import { useState, useSyncExternalStore } from "react"
import { cn } from "../lib/utils";

export const SkillsSection = () => {
    const skills = [
        { name: "HTMLJavascript", level: 90, category: "frontend" },
        { name: "HTML/CSS", level: 80, category: "frontend" },
        { name: "Tailwind Css", level: 85, category: "frontend" },
        { name: "React", level: 90, category: "frontend" },
        { name: "Next.js", level: 80, category: "frontend" },


        { name: "Node.js", level: 70, category: "backend" },
        { name: "Express", level: 60, category: "backend" },
        { name: "MongoDB", level: 60, category: "backend" },
        { name: "MySql", level: 60, category: "backend" },
        { name: "GraphQl", level: 60, category: "backend" },
        { name: "C", level: 90, category: "backend" },
        { name: "C#", level: 90, category: "backend" },
        { name: "C++", level: 90, category: "backend" },
        { name: "Python", level: 90, category: "backend" },


        { name: "Git/GitHub", level: 95, category: "tools" },
        { name: "Docker", level: 70, category: "tools" },
        { name: "Figma", level: 85, category: "tools" },
        { name: "VsCode", level: 95, category: "tools" },
    ]

    const categories = ["all", "frontend", "backend", "tools"];

    const [activeCategory, setActiveCategory] = useState("all");

    const fileredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
                    My <span className="text-primary text-glow">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, index) => (
                        <button className={cn("px-5 py-2 rounded-full transition-colors duration-500 capitalize hover:cursor-pointer",
                                              activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
                                key={index}
                                onClick={() => setActiveCategory(category)}
                                >{category}</button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        fileredSkills.map((skill, index) => (
                            <div className="bg-card p-6 rounded-lg shadow-2xl card-hover" key={index}>
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">{skill.name}</h3>
                                </div>

                                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                    <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: skill.level + "%" }}></div>
                                </div>

                                <div className="text-right mt-2">
                                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>

        </section>
    )
}