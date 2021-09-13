import styles from "./Styles/ContactSection.module.css"
import { SiGmail } from "react-icons/si"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
export function ContactSection() {
  return (
    <div className={styles.rootCont}>
      <p className={styles.contactHeading}>Contact Me</p>
      <hr style={{ width: "100%" }} />
      <p className={styles.text}>Liked my work? Want to get in touch?</p>
      {/* <p className={styles.text}></p> */}
      <p className={styles.text}>You can reach out to me at:</p>
      <div className={styles.iconsCont}>
        <a href="mailto:krsaurav1007@gmail.com" target="_blank">
          <AiOutlineMail className={styles.emailicon} />
        </a>
        <a
          href="https://www.linkedin.com/in/kumar-saurav-90a898179/"
          target="_blank"
        >
          <AiFillLinkedin className={styles.linkedInIcon} />
        </a>
        <a href="https://github.com/ks-1007" target="_blank">
          <AiOutlineGithub className={styles.gitIcon} />
        </a>
      </div>
    </div>
  )
}
