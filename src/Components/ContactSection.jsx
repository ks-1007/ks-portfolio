import styles from "./Styles/ContactSection.module.css"
import { SiGmail } from "react-icons/si"
import { AiOutlineMail } from "react-icons/ai"
import { AiOutlineGithub } from "react-icons/ai"
import { AiFillLinkedin } from "react-icons/ai"
export function ContactSection() {
  return (
    <div className={styles.rootCont}>
      <p className={styles.contactHeading}>Contact Me</p>

      <p className={styles.text}>Liked my work? Want to get in touch?</p>
      {/* <p className={styles.text}></p> */}
      <p className={styles.text}>You can reach out to me at:</p>
      <div className={styles.iconsCont}>
        <AiOutlineMail className={styles.emailicon} />
        <AiFillLinkedin className={styles.linkedInIcon} />
        <AiOutlineGithub className={styles.gitIcon} />
      </div>
    </div>
  )
}
