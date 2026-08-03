import styles from "./Styles/ExperienceSection.module.css";
import Fade from "react-reveal/Fade";

const experiences = [
  {
    company: "PhonePe",
    role: "Senior Frontend Engineer",
    duration: "Mar 2024 - Present",
    location: "Bengaluru",
    achievements: [
      "Led the migration of the core merchant dashboard—serving 5M+ active merchant partners—from Material-UI (MUI) to an internal UI library built on Tailwind CSS, reducing frontend bundle size by 12% and cutting component setup time by 25%.",
      "Engineered Service-Mesh, a service dependency visualization tool with an optimized tree-structured UI mapping 100+ microservices, slashing engineering debugging time by 30% for a team of 200+ engineers.",
      "Optimized runtime web performance and state management architecture across 12+ high-traffic product modules by modularizing global Redux slices and leveraging New Relic telemetry.",
      "Designed a centralized Alert Management Console and configuration dashboard tracking over 500+ system threshold metrics, integrating Sentry exception reporting.",
      "Established automated testing workflows executing 1,200+ assertions across core repository distribution branches using Jest and Playwright inside GitLab CI/CD pipelines."
    ],
  },
  {
    company: "OLA",
    role: "Software Development Engineer",
    duration: "Dec 2021 - Feb 2024",
    location: "Bengaluru",
    achievements: [
      "Improved the UI/UX architecture of the core Driver Onboarding Platform operating across 100+ cities using React and modular view containers, reducing total onboarding cycle time by 20% and boosting satisfaction metrics by 15%.",
      "Scaled the operational Command Center built on Next.js for EV fleet management tracking 50K+ active vehicles, rendering real-time incoming telemetry data loops and complex geospatial analytical charting panels.",
      "Spearheaded the wide-scale platform migration from Google Maps API to the internal Ola Maps SDK across all major consumer web applications serving 30M+ active users, reducing mapping-related infrastructure costs by 25%.",
      "Implemented a secure, multi-layered Time-Geo-Fence module processing 2M+ daily location pings with advanced time and area-based access controls."
    ],
  },
];

export function ExperienceSection() {
  return (
    <div className={styles.rootCont} id="experience">
      <Fade bottom>
        <div className={styles.content}>
          <div className={styles.header}>
            <p className={styles.sectionTitle}>Experience</p>
            <h2 className={styles.sectionSubtitle}>Building products that scale</h2>
            <a
              href="/Kumar_Saurav_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              View full resume
            </a>
          </div>

          <div className={styles.timeline}>
            {experiences.map((item, index) => (
              <div className={styles.timelineItem} key={index}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.roleInfo}>
                      <h3 className={styles.role}>{item.role}</h3>
                      <h4 className={styles.company}>@ {item.company}</h4>
                    </div>
                    <div className={styles.metaInfo}>
                      <span className={styles.duration}>{item.duration}</span>
                      <span className={styles.location}>{item.location}</span>
                    </div>
                  </div>
                  <ul className={styles.achievementsList}>
                    {item.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </div>
  );
}
