import { Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import styles from "./Styles/HeroSection.module.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
const useStyles = makeStyles({
  contactBtn: {
    color: "white",
    // backgroundColor: "rgb(64,112,244)",
    backgroundColor: "rgb(8, 111, 143)",
    width: "130px",
    height: "45px",
    // fontSize: "17px",
    // fontWeight: "500",
    "&:hover": {
      // backgroundColor: "#83a4ff",
      backgroundColor: "rgb(21, 138, 173)",
    },
  },
  linkedInIcon: {
    fontSize: "40px",
    // color: "rgb(10,102,194)",
    color: "rgb(8, 111, 143)",
    "&:hover": {
      backgroundColor: "rgb(17, 155, 197)",
    },
  },
  gitIcon: {
    fontSize: "35px",
    color: "rgb(42, 42, 42)",
    // color: " rgb(0, 49, 64)",
    "&:hover": {
      backgroundColor: "rgb(100, 100, 100)",
    },
  },
  a: {
    textDecoration: "none",
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
        <img
          src="https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067"
          alt=""
          className={styles.heroImg}
        />
      </div>
      <div className={styles.socialCont}>
        <a
          href="https://www.linkedin.com/in/kumar-saurav-90a898179/"
          className={classes.a}
        >
          {/* <LinkedInIcon className={classes.linkedInIcon} /> */}
          <AiFillLinkedin className={styles.linkedInIcon} />
        </a>
        <a href="https://github.com/ks-1007" className={classes.a}>
          {/* <GitHubIcon className={classes.gitIcon} /> */}
          <AiOutlineGithub className={styles.gitIcon} />
        </a>
      </div>
    </div>
  )
}
