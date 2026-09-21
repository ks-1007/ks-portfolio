import styles from "./Styles/ProjectsSection.module.css";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import Fade from "./Fade";

export function ProjectCard({ name, img, git, link, stacks, about }) {
  return (
    <article className={styles.projectCont}>
      <div className={styles.imageWrap}>
        <img src={img} alt={`${name} project preview`} className={styles.image} />
      </div>
      <div className={styles.cardContent}>
        <h3>{name}</h3>
        <p className={styles.projInfo}>{about}</p>
        <div className={styles.stacksDiv} aria-label="Technologies used">
          {stacks.map((stack, idx) => <span key={idx}>{stack}</span>)}
        </div>
        <div className={styles.linkCont}>
          <a href={git} rel="noreferrer" target="_blank" className={styles.codeLink}>
            <FiGithub />
            View code
          </a>
          <a href={link} rel="noreferrer" target="_blank" className={styles.demoLink}>
            <FiExternalLink />
            Live demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
