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
import Fade from "react-reveal/Fade"
const projects = [
  {
    name: "LinkedIn.com clone",
    img: "/linkedin-pic1.png",
    link: "https://linkedin-clone-sigma.vercel.app/",
    git: "https://github.com/ks-1007/LinkedIn-project",
    about:
      "LinkedIn is a leading professional networking and employment oriented online platform. Implemented features to connect with others, create posts, like, comment, show notifications and more",
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
      "Glassdoor is a leading job searching and company reviewing platform. Implemented features to post jobs, search and apply for jobs, compare companies based on rating and sign-in/sign-up",
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
      "Airbnb is a hotel booking online platform. Implemented features to search for hotels based on ratings, reviews and price range and then booking it after selecting check-in & check-out dates",

    stacks: [
      <SiReact className={styles.stackIcon} />,
      <SiRedux className={styles.stackIcon} />,

      <SiJavascript className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
  // {
  //   name: "Contio",
  //   img: "/contio.png",
  //   link: "https://contio.netlify.app/",
  //   git: "https://github.com/chandan1499/contio",
  //   about:
  //     "Contio is an online portal where anyone can ask there doubts and anyone can become a mentor to help their peers using a built-in chat app",

  //   stacks: [
  //     <SiReact className={styles.stackIcon} />,
  //     <SiNodedotjs className={styles.stackIcon} />,
  //     <SiExpress className={styles.stackIcon} />,
  //     <SiMongodb className={styles.stackIcon} />,
  //     <SiJavascript className={styles.stackIcon} />,
  //     <SiCss3 className={styles.stackIcon} />,
  //   ],
  // },

  {
    name: "Sephora.com clone",
    img: "/sephora.png",
    link: "https://project-sephora.vercel.app/",
    git: "https://github.com/ks-1007/Project-Sephora",
    about:
      "Sephora is an American e-commerce website which sells beauty products. Features are implemented to select products from carousel and add products to cart and do CRUD operations",
    stacks: [
      <SiJavascript className={styles.stackIcon} />,
      <SiHtml5 className={styles.stackIcon} />,
      <SiCss3 className={styles.stackIcon} />,
    ],
  },
]
export function ProjectsSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <Fade bottom>
        <p>Projects</p>
      </Fade>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <Fade bottom>
            <ProjectCard {...project} />
          </Fade>
        ))}
      </div>
    </div>
  )
}
