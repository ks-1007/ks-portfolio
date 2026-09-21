import styles from "./Styles/ContactSection.module.css";
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Fade from "./Fade";

export function ContactSection() {
  return (
    <div className={styles.rootCont} id="contact">
      <Fade bottom className={styles.fadeCont}>
        <h2 className={styles.contactHeading}>Contact Me</h2>
        <hr className={styles.divider} />
        
        <p className={styles.text}>Liked my work? Want to get in touch?</p>
        
        <div className={styles.iconsCont}>
          <a
            href="mailto:krsaurav1007@gmail.com"
            aria-label="Email"
            className={styles.iconLink}
          >
            <AiOutlineMail className={styles.socialIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/kumar-saurav-90a898179/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className={styles.iconLink}
          >
            <AiFillLinkedin className={styles.socialIcon} />
          </a>
          <a
            href="https://github.com/ks-1007"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
            className={styles.iconLink}
          >
            <AiOutlineGithub className={styles.socialIcon} />
          </a>
        </div>
        
        <p className={styles.text}>+91 7338599587</p>
        <p className={styles.text}>krsaurav1007@gmail.com</p>
      </Fade>
    </div>
  );
}

export default ContactSection;
