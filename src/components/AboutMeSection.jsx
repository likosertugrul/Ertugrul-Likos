import { Briefcase, Code, User } from "lucide-react"


export const AboutMeSection = () => {

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">
                    About <span className="text-primary text-glow">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer && Tech enthusiastic</h3>

                        <p className="text-muted-foreground">I'm a beginner full-stack developer who's diving deep into web
                            development with React, Node.js, C#, C, and Python.
                        </p>

                        <p className="text-muted-foreground"> I love creating
                            responsive designs, writing clean code, and connecting everything smoothly
                            with APIs. Always learning, always building!
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get In Touch</a>
                            <a href="/cv.png" download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Web Development</h4>

                                    <p className="text-muted-foreground">Creating responsive websites and web applications
                                        with modern frameworks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">UI/UX Design</h4>

                                    <p className="text-muted-foreground">Designing intuitive user interfaces and seamless user experiences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"><div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                    <h4 className="text-lg font-semibold">Project Management</h4>

                                    <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                                </div>
                        </div></div>
                    </div>

                </div>
            </div>
        </section>
    )
}