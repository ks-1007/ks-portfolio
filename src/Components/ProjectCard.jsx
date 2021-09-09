import styles from "./Styles/ProjectsSection.module.css"
import LinkIcon from "@material-ui/icons/Link"
import GitHubIcon from "@material-ui/icons/GitHub"
export function ProjectCard({ name, img, git, link, stacks }) {
  return (
    <>
      {/* <h2>Glassdoor clone</h2> */}
      <div className={styles.projectCont}>
        {/* <div className={styles.info}>
        <h2>{name}</h2>
      </div> */}
        <img src={img} alt="" className={styles.image} />

        <div className={styles.linkCont}>
          <a href={git} target="_blank">
            <div className={styles.linkDiv}>
              <GitHubIcon />
              <p>Code</p>
            </div>
          </a>
          <div className={styles.stacksDiv}>{stacks.map((stack) => stack)}</div>
          <a href={link} target="_blank">
            <div className={styles.linkDiv}>
              <LinkIcon />
              <p>Site</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
