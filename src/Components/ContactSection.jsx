import styles from "./Styles/ContactSection.module.css";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Fade from "react-reveal/Fade";

export function ContactSection() {
  return (
    <div className={styles.rootCont} id="contact">
      <Fade bottom>
        <h2 className={styles.contactHeading}>Contact Me</h2>
        <hr className={styles.divider} />
        
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        
        <div className={styles.iconsCont}>
          <a href="mailto:krsaurav1007@gmail.com">
            <AiOutlineMail className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/kumar-saurav-90a898179/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className={styles.socialIcon} />
          </a>
          <a href="https://github.com/ks-1007" rel="noreferrer" target="_blank">
            <AiOutlineGithub className={styles.socialIcon} />
          </a>
        </div>
        
        <p className={styles.text}>+91 7338599587</p>
        <p className={styles.text}>krsaurav1007@gmail.com</p>
      </Fade>
    </div>
  );
}
