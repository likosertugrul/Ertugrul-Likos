import { ArrowDown } from "lucide-react"
import { AboutMeSection } from "./components/AboutMeSection"
import { HeroSection } from "./components/HeroSection"
import { NavBar } from "./components/NavBar"
import { StarBackground } from "./components/StarBackground"
import { ThemeToggle } from "./components/ThemeToggle"
import { SkillsSection } from "./components/SkillsSection"
import { ProjectSection } from "./components/ProjectSection"
import { ContactSection } from "./components/ContactSection"
import { Footer } from "./components/Footer"

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle></ThemeToggle>

            <StarBackground></StarBackground>

            <NavBar></NavBar>

            <main>
                <HeroSection></HeroSection>
                <AboutMeSection></AboutMeSection>
                <SkillsSection></SkillsSection>
                <ProjectSection></ProjectSection>
                <ContactSection></ContactSection>
                <Footer/>
            </main>

            {/* <footer>
                <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-muted-foreground mb-1">Scroll</span>
                <ArrowDown className="h-5 b-5 text-primary"/>
            </div>
            </footer> */}

            

            {/* {Main Content} */}

            {/* {Footer} */}
            

        </div>
    )
}