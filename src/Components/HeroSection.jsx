import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
const useStyles = makeStyles({
  contactBtn: {
    color: "white",
    backgroundColor: "rgb(64,112,244)",
    width: "130px",
    height: "45px",

    "&:hover": {
      backgroundColor: "#83a4ff",
    },
  },
  linkedInIcon: {
    fontSize: "40px",
    color: "rgb(10,102,194)",
  },
  gitIcon: {
    fontSize: "35px",
    color: "rgb(42, 42, 42)",
  },
})
export function HeroSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont}>
      <div className={styles.nameCont}>
        <p>Hi,</p>
        <p>
          I'am <span>Saurav</span>{" "}
        </p>
        <p>Web Developer</p>
        <Button variant="contained" className={classes.contactBtn}>
          Contact
        </Button>
      </div>
      <div className={styles.photoCont}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#4070F4"
            d="M30.8,-27.6C42,-19.6,54.7,-9.8,55.7,1C56.6,11.7,45.9,23.4,34.7,32.9C23.4,42.3,11.7,49.4,-3.9,53.3C-19.5,57.2,-38.9,57.8,-47.8,48.4C-56.7,38.9,-55.1,19.5,-52.5,2.6C-49.9,-14.3,-46.4,-28.6,-37.5,-36.6C-28.6,-44.7,-14.3,-46.5,-2.2,-44.3C9.8,-42,19.6,-35.7,30.8,-27.6Z"
            transform="translate(90 60)"
          />
        </svg>
      </div>
      <div className={styles.socialCont}>
        <LinkedInIcon className={classes.linkedInIcon} />
        <GitHubIcon className={classes.gitIcon} />
      </div>
    </div>
  )
}
