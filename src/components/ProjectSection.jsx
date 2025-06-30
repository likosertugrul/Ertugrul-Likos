import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "public/projects/project1.png",
        tags: ["React", "TailwindCss", "Supabase"],
        demoUrl: "#",   // proje yapımca link ekle
        githubUrl: "#", // proje yapımca link ekle
    },
    {
        id: 2,
        title: "Orbait Analytics Dashboard",
        description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "public/projects/project2.png",
        tags: ["TypeScript", "D3.js", "Next.js"],
        demoUrl: "#",   // proje yapımca link ekle
        githubUrl: "#", // proje yapımca link ekle
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "public/projects/project3.png",
        tags: ["React", "Node.js", "Next.js", "Stripe"],
        demoUrl: "#",   // proje yapımca link ekle
        githubUrl: "#", // proje yapımca link ekle
    }
    ,
    {
        id: 4,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "public/projects/project1.png",
        tags: ["React", "Node.js", "Next.js", "Stripe"],
        demoUrl: "#",   // proje yapımca link ekle
        githubUrl: "#", // proje yapımca link ekle
    }
    ,
    {
        id: 5,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "public/projects/project3.png",
        tags: ["React", "Node.js", "Next.js", "Stripe"],
        demoUrl: "#",   // proje yapımca link ekle
        githubUrl: "#", // proje yapımca link ekle
    }
    ,
    {
        id: 6,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "public/projects/project2.png",
        tags: ["React", "Node.js", "Next.js", "Stripe"],
        demoUrl: "#",   // proje yapımca link ekle
        githubUrl: "#", // proje yapımca link ekle
    }
]

export const ProjectSection = () => {
    return (

        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">Featured <span className="text-primary"> Projects</span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my projects. Each project was carefully crafted with attention
                    to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div className="group bg-card rounded-lg overflow-hidden shadow-2xl card-hover" key={index}>
                            <div className="h-48 overflow-hidden">
                                <img onClick={() => window.open(project.demoUrl)} src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" /> {/*resme tıklayınca linke gider*/}
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span className="px-2 py1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border" key={index}>{tag}</span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href={project.demoUrl} target="_blank"><ExternalLink size={20} /></a>
                                        <a className="text-foreground/80 hover:text-primary transition-colors duration-300" href={project.demoUrl} target="_blank"><Github size={20} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items bg-center mask-b-to-current gap-2" href="https://github.com/likosertugrul" target="_blank">Check My GitHub <ArrowRight className="mt-1" size={16}/></a>
                </div>
            </div>
        </section>
    )
}