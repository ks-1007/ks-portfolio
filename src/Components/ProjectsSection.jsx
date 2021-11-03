import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/ProjectsSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"

const projects = [
  {
    name: "LinkedIn.com clone",
    img: "/linkedin-pic1.png",
    link: "https://linkedin-clone-sigma.vercel.app/",
    git: "https://github.com/ks-1007/LinkedIn-project",
    about:
      // "LinkedIn is a business and employment-oriented online service. The platform is primarily used for professional networking and career development.",
      "LinkedIn is a leading professional networking and employment-oriented online platform. Implemented features like connect with others, create posts, like, comment, showing notifications among other features",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Glassdoor.com clone",
    img: "/glassdoor-pic1.png",
    link: "https://glassdoor-clone.netlify.app/",
    git: "https://github.com/chandan1499/Project-glassdoor",
    about:
      // "Glassdoor is a job searching website which also allows employees to post their salaries and company reviews anonymously.",
      "Glassdoor is a leading job searching and company reviewing platform. Implemented features like posting jobs, searching and applying for jobs, comparing companies rating, sign-in/sign-up, etc",
    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Airbnb.com clone",
    img: "/Airbnb.png",
    link: "https://airbnb-clone-one-weld.vercel.app/",
    git: "https://github.com/ks-1007/Airbnb-clone",
    about:
      // "Airbnb is an online marketplace that connects people who want to rent out their homes with people who are looking for accommodations in that locale.",
      "Airbnb is a hotel booking online platform. Implemented features to searching for hotels based on ratings, reviews and price range and then booking it after selecting check-in & check-out dates ",

    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,

      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  {
    name: "Contio",
    img: "/contio.png",
    link: "https://contio.netlify.app/",
    git: "https://github.com/chandan1499/contio",
    about:
      "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help there peers using a built-in chat app",

    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiNodedotjs className={styles.stackIcon} />,
      <SiExpress className={styles.stackIcon} />,
      <SiMongodb className={styles.stackIcon} />,
      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },

  // {
  //   name: "Sephora.com clone",
  //   img: "/sephora.png",
  //   link: "https://project-sephora.vercel.app/",
  //   git: "https://github.com/ks-1007/Project-Sephora",
  //   about:
  //     "Sephora is an e-commerce website which sells variety of personal care and beauty products including cosmetics, skincare, body, fragrance, nail color, etc.",
  //   stacks: [
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiHtml5 className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <p>Projects</p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard {...project} />
        ))}
      </div>
    </div>
  )
}
