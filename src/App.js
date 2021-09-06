import "./App.css"
import { AboutSection } from "./Components/AboutSection"
import { HeroSection } from "./Components/HeroSection"
import { SkillsSection } from "./Components/SkillsSection"

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </div>
  )
}

export default App
