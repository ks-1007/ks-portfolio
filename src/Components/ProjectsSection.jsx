import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"

const projects = [
  {
    name: "Airbnb.com clone",
    img: "/Airbnb.png",
    link: "https://airbnb-clone-one-weld.vercel.app/",
    git: "https://github.com/ks-1007/Airbnb-clone",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Glassdoor.com clone",
    img: "/glassdoor-pic.png",
    link: "https://github.com/chandan1499/Project-glassdoor",
    git: "https://github.com/chandan1499/Project-glassdoor",
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
    stacks: [
      <SiReact className={styles.stackIcon} />,
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
      {projects.map((project) => (
        <ProjectCard {...project} />
      ))}
      {/* <ProjectCard
        name="Glassdoor clone"
        img="/glassdoor-pic.png"
        link="https://github.com/chandan1499/Project-glassdoor"
        git="https://github.com/chandan1499/Project-glassdoor"
        stacks={[
          <SiReact className={styles.stackIcon} />,
          <SiJavascript className={styles.stackIcon} />,
          <SiHtml5 className={styles.stackIcon} />,
          <SiCss3 className={styles.stackIcon} />,
        ]}
      /> */}
    </div>
  )
}
