import { makeStyles } from "@material-ui/core"
import styles from "./Styles/AboutSection.module.css"

const useStyles = makeStyles({})
export function AboutSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont}>
      <p>About</p>
      <div className={styles.mainCont}>
        <div className={styles.profilePicCont}>
          <img
            src="/profile-pic-nobg.png"
            alt=""
            className={styles.profilePic}
          />
        </div>
        <div>
          <h2>
            I'am <span>Saurav</span>{" "}
          </h2>
          <p>
            A web developer with an excellent problem solving skills and ability
            to perform well in a team. Proficient in front-end, back-end and
            data structures and algorithms.
          </p>
        </div>
      </div>
    </div>
  )
}
