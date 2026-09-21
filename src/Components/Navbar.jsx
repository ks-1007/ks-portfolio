"use client";

import { useEffect, useState } from "react";
import styles from "./Styles/Navbar.module.css";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={styles.root}>
      <a href="#hero" onClick={scrollTo("hero")} className={styles.navlogo}>
        <img src="/logo-2.png" alt="Logo" className={styles.logoimg} />
      </a>
      <div className={styles.navsCont}>
        <a
          href="#about"
          onClick={scrollTo("about")}
          className={activeSection === "about" ? styles.active : ""}
        >
          <div className={styles.nav}>About</div>
        </a>
        <a
          href="#skills"
          onClick={scrollTo("skills")}
          className={activeSection === "skills" ? styles.active : ""}
        >
          <div className={styles.nav}>Skills</div>
        </a>
        <a
          href="#experience"
          onClick={scrollTo("experience")}
          className={activeSection === "experience" ? styles.active : ""}
        >
          <div className={styles.nav}>Experience</div>
        </a>
        <a
          href="#projects"
          onClick={scrollTo("projects")}
          className={activeSection === "projects" ? styles.active : ""}
        >
          <div className={styles.nav}>Projects</div>
        </a>
        <a
          href="#contact"
          onClick={scrollTo("contact")}
          className={activeSection === "contact" ? styles.active : ""}
        >
          <div className={styles.nav}>Contact</div>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
