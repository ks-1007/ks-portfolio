import { Paper } from "@material-ui/core"
import styles from "./Styles/SkillCard.module.css"

export function SkillCard({ skill, icon }) {
  return (
    <Paper elevation={3} className={styles.card}>
      {icon}
      <p>{skill}</p>
    </Paper>
  )
}
