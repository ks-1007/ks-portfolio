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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            perferendis, itaque saepe distinctio accusamus commodi earum dolores
            recusandae nesciunt est.
          </p>
        </div>
      </div>
    </div>
  )
}
