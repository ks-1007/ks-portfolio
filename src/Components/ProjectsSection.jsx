import { ProjectCard } from "./ProjectCard";
import styles from "./Styles/ProjectsSection.module.css";
import { SiReact, SiJavascript, SiHtml5, SiRedux, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import Fade from "./Fade";

const projects = [
  {
    name: "LinkedIn.com clone",
    img: "/linkedin-pic1.png",
    link: "https://linkedin-clone-sigma.vercel.app/",
    git: "https://github.com/ks-1007/LinkedIn-project",
    about:
      "LinkedIn is a leading professional networking and employment oriented online platform. Implemented features to connect with others, create posts, like, comment, show notifications and more",
    stacks: [
      <SiReact className={styles.stackIcon} key="react" />,
      <SiNodedotjs className={styles.stackIcon} key="node" />,
      <SiExpress className={styles.stackIcon} key="express" />,
      <SiMongodb className={styles.stackIcon} key="mongo" />,
      <SiJavascript className={styles.stackIcon} key="js" />,
      <FaCss3Alt className={styles.stackIcon} key="css" />,
    ],
  },
  {
    name: "Glassdoor.com clone",
    img: "/glassdoor-pic1.png",
    link: "https://glassdoor-clone.netlify.app/",
    git: "https://github.com/chandan1499/Project-glassdoor",
    about:
      "Glassdoor is a leading job searching and company reviewing platform. Implemented features to post jobs, search and apply for jobs, compare companies based on rating and sign-in/sign-up",
    stacks: [
      <SiReact className={styles.stackIcon} key="react" />,
      <SiJavascript className={styles.stackIcon} key="js" />,
      <SiHtml5 className={styles.stackIcon} key="html" />,
      <FaCss3Alt className={styles.stackIcon} key="css" />,
    ],
  },
  {
    name: "Airbnb.com clone",
    img: "/Airbnb.png",
    link: "https://airbnb-clone-one-weld.vercel.app/",
    git: "https://github.com/ks-1007/Airbnb-clone",
    about:
      "Airbnb is a hotel booking online platform. Implemented features to search for hotels based on ratings, reviews and price range and then booking it after selecting check-in & check-out dates",
    stacks: [
      <SiReact className={styles.stackIcon} key="react" />,
      <SiRedux className={styles.stackIcon} key="redux" />,
      <SiJavascript className={styles.stackIcon} key="js" />,
      <FaCss3Alt className={styles.stackIcon} key="css" />,
    ],
  },
  {
    name: "Sephora.com clone",
    img: "/sephora.png",
    link: "https://project-sephora.vercel.app/",
    git: "https://github.com/ks-1007/Project-Sephora",
    about:
      "Sephora is an American e-commerce website which sells beauty products. Features are implemented to select products from carousel and add products to cart and do CRUD operations",
    stacks: [
      <SiJavascript className={styles.stackIcon} key="js" />,
      <SiHtml5 className={styles.stackIcon} key="html" />,
      <FaCss3Alt className={styles.stackIcon} key="css" />,
    ],
  },
];

export function ProjectsSection() {
  return (
    <section className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Selected work</p>
          <h2>Projects</h2>
          <p className={styles.intro}>
            A selection of product experiences built with modern frontend tools.
          </p>
        </div>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <Fade bottom key={index}>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
