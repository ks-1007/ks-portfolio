import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"

const projects = [
  {
    name: "Airbnb.com clone",
    img: "/Airbnb.png",
    link: "https://airbnb-clone-one-weld.vercel.app/",
    git: "https://github.com/ks-1007/Airbnb-clone",
    about:
      "Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale.",

    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,

      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Glassdoor.com clone",
    img: "/glassdoor-pic1.png",
    link: "https://github.com/chandan1499/Project-glassdoor",
    git: "https://github.com/chandan1499/Project-glassdoor",
    about:
      "Glassdoor is a job searching website which also allows employees to post their salaries and company reviews anonymously.",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Sephora.com clone",
    img: "/sephora.png",
    link: "https://project-sephora.vercel.app/",
    git: "https://github.com/ks-1007/Project-Sephora",
    about:
      "Sephora is an e-commerce website which sells variety of personal care and beauty products.",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont}>
      <p>Projects</p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  )
}
