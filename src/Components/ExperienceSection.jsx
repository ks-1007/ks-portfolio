import styles from "./Styles/ExperienceSection.module.css";
import Fade from "./Fade";

const experiences = [
  {
    company: "PhonePe",
    role: "Senior Frontend Engineer",
    duration: "Mar 2024 - Present",
    location: "Bengaluru, India",
    achievements: [
      "Architected and led the migration of the core merchant dashboard (serving 5M+ active merchants) from Material-UI to an in-house UI library based on Ant Design, cutting component setup time by 25% and standardizing design tokens across teams.",
      "Engineered Service-Mesh, an interactive dependency visualization platform mapping 100+ microservices, and implemented tree-structured UI rendering to reduce MTTR by 30% for 200+ engineers.",
      "Optimized Core Web Vitals and runtime performance across 12+ high-traffic modules by modularizing global Redux state slices and using New Relic telemetry to eliminate redundant re-renders.",
      "Designed an enterprise Alert Management Console tracking 500+ threshold metrics and integrated Sentry exception monitoring to orchestrate real-time error notifications across 50+ channels.",
      "Integrated AI-assisted development workflows with GitHub Copilot/LLMs and established CI/CD quality gates with 1,200+ automated Jest and Playwright tests.",
    ],
  },
  {
    company: "OLA",
    role: "Software Development Engineer",
    duration: "Dec 2021 - Feb 2024",
    location: "Bengaluru, India",
    achievements: [
      "Overhauled the UI/UX architecture of the core Driver Onboarding Platform across 100+ cities using React and modular view containers, cutting onboarding cycle time by 20% and improving CSAT by 15%.",
      "Scaled the Next.js EV Fleet Command Center to monitor 50K+ active vehicles, implementing WebSockets for real-time telemetry streaming and interactive geospatial analytics.",
      "Spearheaded the migration from Google Maps API to proprietary Ola Maps SDK across consumer web apps serving 30M+ active users, reducing mapping infrastructure costs by 25%.",
      "Built a multi-layered Time-Geo-Fence module handling 2M+ daily pings with sub-second polygon overlays and dynamic location-based access controls.",
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
            <h2 className={styles.sectionSubtitle}>
              Building products that scale
            </h2>
            <a
              href="/Kumar_Saurav_UI_Resume.pdf"
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

export default ExperienceSection;
