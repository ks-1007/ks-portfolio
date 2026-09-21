import styles from "./Styles/BlogSection.module.css";
import { FiExternalLink } from "react-icons/fi";

export function BlogCard({ name, img, link, about }) {
  return (
    <div className={styles.projectCont}>
      <img src={img} alt={name} className={styles.image} />
      <p style={{ fontSize: "25px", fontWeight: "400", margin: "0" }}>
        {name}
      </p>

      <div className={styles.linkCont}>
        <a href={link} rel="noreferrer" target="_blank">
          <div className={styles.linkDiv}>
            <FiExternalLink />
            <p>See Blog</p>
          </div>
        </a>
      </div>
      <div className={styles.projInfo}>
        <p>{about}</p>
      </div>
    </div>
  );
}

export default BlogCard;
