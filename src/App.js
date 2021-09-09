import "./App.css"
import { AboutSection } from "./Components/AboutSection"
import { HeroSection } from "./Components/HeroSection"
import { ProjectsSection } from "./Components/ProjectsSection"
import { SkillsSection } from "./Components/SkillsSection"

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </div>
  )
}

export default App
