import { ProjectCard } from "./ProjectCard"
import styles from "./Styles/BlogSection.module.css"
import { SiReact } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import { SiNodedotjs } from "react-icons/si"
import { SiExpress } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { BlogCard } from "./BlogCard"

const projects = [
  {
    name: "Building LinkedIn.com clone",
    img: "/linkedin-pic1.png",
    link: "https://hashnode.com/post/building-linkedin-clone-ckubelcmk07kb0gs1g7negho9",
    about:
      "In this blog I talked about our exprience of building the clone of LinkedIn.com and also described the flow of website.",
  },
  {
    name: "Building Airbnb.com clone",
    img: "/Airbnb.png",
    link: "https://airbnbclone.hashnode.dev/building-airbnb-clone",
    about:
      "In this blog I talked about our exprience of building the clone of Airbnb.com and also described the flow of website.",
  },
]
export function BlogSection() {
  return (
    <div className={styles.projectsSectionCont} id="projects">
      <p>Blogs</p>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <BlogCard {...project} />
        ))}
      </div>
    </div>
  )
}
