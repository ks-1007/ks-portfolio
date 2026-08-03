import { makeStyles } from "@material-ui/styles"
import { SkillCard } from "./SkillCard"
import styles from "./Styles/SkillsSection.module.css"
import { GrReactjs } from "react-icons/gr"
import {
  SiRedux,
  SiJavascript,
  SiMaterialui,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNpm,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiSass,
  SiJest,
  SiCypress
} from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import Fade from "react-reveal/Fade"

export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <p className={styles.sectionTitle}>Skills</p>
        <p className={styles.categoryTitle}>Languages & Front-end</p>
        <div className={styles.skillsContFront}>
          <SkillCard
            skill="JavaScript"
            icon={<SiJavascript className={styles.skillIcon} />}
          />
          <SkillCard
            skill="TypeScript"
            icon={<SiTypescript className={styles.skillIcon} />}
          />
          <SkillCard
            skill="React"
            icon={<GrReactjs className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Next.js"
            icon={<SiNextdotjs className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Redux"
            icon={<SiRedux className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Tailwind CSS"
            icon={<SiTailwindcss className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Material UI"
            icon={<SiMaterialui className={styles.skillIcon} />}
          />
          <SkillCard
            skill="HTML5"
            icon={<SiHtml5 className={styles.skillIcon} />}
          />
          <SkillCard
            skill="CSS3"
            icon={<SiCss3 className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Sass"
            icon={<SiSass className={styles.skillIcon} />}
          />
        </div>
        <p className={styles.categoryTitle}>Back-end & Infra</p>
        <div className={styles.skillsContBack}>
          <SkillCard
            skill="Node.js"
            icon={<SiNodedotjs className={styles.skillIcon} />}
          />
        </div>
        <p className={styles.categoryTitle}>Testing & Tools</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Jest"
            icon={<SiJest className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Cypress"
            icon={<SiCypress className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Git"
            icon={<FaGitAlt className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Npm"
            icon={<SiNpm className={styles.skillIcon} />}
          />
        </div>
      </Fade>
    </div>
  )
}
