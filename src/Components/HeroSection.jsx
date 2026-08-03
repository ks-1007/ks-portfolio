import styles from "./Styles/HeroSection.module.css";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { RiDownloadLine } from "react-icons/ri";
import Fade from "react-reveal/Fade";

export function HeroSection() {
  return (
    <div className={styles.rootCont} id="hero">
      <div className={styles.textCont}>
        <Fade bottom>
          <p className={styles.greeting}>Hi,</p>
          <h1 className={styles.name}>
            I am <span>Kumar Saurav</span>
          </h1>
          <h2 className={styles.title}>Senior Frontend Engineer</h2>

          <div className={styles.actionsCont}>
            <a
              href="https://drive.google.com/file/d/1iM3PgkzQhO-eD34sPMObhVFMkQTVxdSU/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.resumeBtn}>
                <RiDownloadLine /> Resume
              </button>
            </a>

            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/kumar-saurav-90a898179/"
              target="_blank"
            >
              <AiFillLinkedin className={styles.socialIcon} />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/ks-1007"
              target="_blank"
            >
              <AiOutlineGithub className={styles.socialIcon} />
            </a>
          </div>
        </Fade>
      </div>

      <div className={styles.photoCont}>
        <Fade right>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
            alt="Web Development"
            className={styles.heroImg}
          />
        </Fade>
      </div>
    </div>
  );
}
