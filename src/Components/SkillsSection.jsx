import { SkillCard } from "./SkillCard";
import styles from "./Styles/SkillsSection.module.css";
import { GrReactjs } from "react-icons/gr";
import {
  SiRedux,
  SiJavascript,
  SiAntdesign,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiNpm,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiWebpack,
  SiJest,
  SiPlaywright,
  SiCypress,
  SiNewrelic,
  SiSentry,
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import Fade from "react-reveal/Fade";

export function SkillsSection() {
  return (
    <div className={styles.rootCont} id="skills">
      <Fade bottom>
        <p className={styles.sectionTitle}>Skills</p>
        <p className={styles.categoryTitle}>Languages & Core</p>
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
            skill="HTML5"
            icon={<SiHtml5 className={styles.skillIcon} />}
          />
          <SkillCard
            skill="CSS3"
            icon={<SiCss3 className={styles.skillIcon} />}
          />
        </div>
        <p className={styles.categoryTitle}>Frontend Frameworks & State</p>
        <div className={styles.skillsContFront}>
          <SkillCard
            skill="React"
            icon={<GrReactjs className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Next.js"
            icon={<SiNextdotjs className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Redux Toolkit"
            icon={<SiRedux className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Ant Design"
            icon={<SiAntdesign className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Tailwind CSS"
            icon={<SiTailwindcss className={styles.skillIcon} />}
          />
        </div>
        <p className={styles.categoryTitle}>Back-end & Infra</p>
        <div className={styles.skillsContBack}>
          <SkillCard
            skill="Node.js"
            icon={<SiNodedotjs className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Vite"
            icon={<SiVite className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Webpack"
            icon={<SiWebpack className={styles.skillIcon} />}
          />
          <SkillCard
            skill="GitLab CI/CD"
            icon={<FaGitAlt className={styles.skillIcon} />}
          />
        </div>
        <p className={styles.categoryTitle}>Testing & Telemetry</p>
        <div className={styles.toolsDiv}>
          <SkillCard
            skill="Jest"
            icon={<SiJest className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Playwright"
            icon={<SiPlaywright className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Cypress"
            icon={<SiCypress className={styles.skillIcon} />}
          />
          <SkillCard
            skill="New Relic"
            icon={<SiNewrelic className={styles.skillIcon} />}
          />
          <SkillCard
            skill="Sentry"
            icon={<SiSentry className={styles.skillIcon} />}
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
  );
}
