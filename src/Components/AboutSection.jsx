import styles from "./Styles/AboutSection.module.css";
import Fade from "react-reveal/Fade";

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
              large-scale web applications at PhonePe and OLA. Specialized in
              React, Next.js, TypeScript, and Redux, with expertise in frontend
              architecture, performance optimization, and developer experience.
              Led initiatives across products serving millions of users,
              including UI platform migrations, reusable component systems,
              observability tooling, and automated testing infrastructure.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}
