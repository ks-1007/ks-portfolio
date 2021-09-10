import { makeStyles } from "@material-ui/styles"
import { SkillCard } from "./SkillCard"
import styles from "./Styles/SkillsSection.module.css"
import { GrReactjs } from "react-icons/gr"
import { SiRedux } from "react-icons/si"
import { SiJavascript } from "react-icons/si"
import { SiMaterialUi } from "react-icons/si"
import { SiHtml5 } from "react-icons/si"
import { SiCss3 } from "react-icons/si"
import { SiNodeDotJs } from "react-icons/si"
import { SiMongodb } from "react-icons/si"
import { FaGitAlt } from "react-icons/fa"
import { Paper } from "@material-ui/core"
const useStyles = makeStyles({})
export function SkillsSection() {
  const classes = useStyles()
  return (
    <div className={styles.rootCont}>
      <p>Skills</p>
      <div className={styles.skillsCont}>
        <SkillCard
          skill="React"
          icon={
            <GrReactjs className={`${styles.skillIcon} ${styles.reactIcon}`} />
          }
        />
        <SkillCard
          skill="Redux"
          icon={
            <SiRedux className={`${styles.skillIcon} ${styles.reduxIcon}`} />
          }
        />
        <SkillCard
          skill="JavaScript"
          icon={
            <SiJavascript className={`${styles.skillIcon} ${styles.jsIcon}`} />
          }
        />
        <SkillCard
          skill="Material Ui"
          icon={
            <SiMaterialUi className={`${styles.skillIcon} ${styles.muiIcon}`} />
          }
        />

        <SkillCard
          skill="Html"
          icon={
            <SiHtml5 className={`${styles.skillIcon} ${styles.htmlIcon}`} />
          }
        />
        <SkillCard
          skill="Css"
          icon={<SiCss3 className={`${styles.skillIcon} ${styles.cssIcon}`} />}
        />
        <SkillCard
          skill="Node"
          icon={
            <SiNodeDotJs className={`${styles.skillIcon} ${styles.nodeIcon}`} />
          }
        />

        <SkillCard
          skill="MongoDb"
          icon={
            <SiMongodb className={`${styles.skillIcon} ${styles.mongoIcon}`} />
          }
        />
        <SkillCard
          skill="Git"
          icon={
            <FaGitAlt className={`${styles.skillIcon} ${styles.gitIcon}`} />
          }
        />
      </div>
    </div>
  )
}
