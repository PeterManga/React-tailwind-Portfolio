import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"
import { NavBar } from "../components/NavBar"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { SkillsSection } from "../components/SkillsSections"
import { Footer } from "../components/footer"
import { ProjectsSection } from "../components/ProjectsSection"
import { Toaster } from "../components/ui/toaster"

export const Home = ()=> {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Tooggle*/ }
            <ThemeToggle/>
        {/* Background effects*/ }
        <StarBackground/>
        {/* navbad  */}
        <NavBar></NavBar>
        {/* main content    */}
        <main>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <ContactSection></ContactSection>
            <SkillsSection></SkillsSection>
            <ProjectsSection></ProjectsSection>
        </main>
        {/*Footer*/}
        <Footer></Footer>
        <Toaster></Toaster>
    </div>
}