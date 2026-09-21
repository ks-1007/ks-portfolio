import styles from "./Styles/AboutSection.module.css";
import Fade from "./Fade";

export function AboutSection() {
  return (
    <div className={styles.rootCont} id="about">
      <Fade bottom>
        <p className={styles.sectionTitle}>About</p>
        <div className={styles.mainCont}>
          <div className={styles.profilePicCont}>
            <img
              src="/profile-pic-nobg.png"
              alt="Profile"
              className={styles.profilePic}
            />
          </div>
          <div className={styles.textCont}>
            <h2>
              I am <span>Kumar Saurav</span>
            </h2>
            <p className={styles.description}>
              Senior Frontend Engineer with 5 years of experience building
              high-throughput, enterprise web applications serving up to 30M+
              active users at PhonePe and OLA. Expert in React, Next.js,
              TypeScript, Redux Toolkit, and modern Frontend Architecture.
              Proven track record of optimizing Core Web Vitals, architecting
              design systems, integrating AI-assisted workflows, and instituting
              automated CI/CD testing infrastructure to maximize developer
              velocity and system reliability.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default AboutSection;
