import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowDown, FiDownload, FiMail, FiMapPin } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">
            <FiMapPin /> {profile.location}
          </span>
          <h1>
            Hi, I&apos;m <span>{profile.name}</span>
          </h1>
          <div className="typing-line" aria-label={profile.title}>
            {profile.title}
          </div>
          <p className="tagline">{profile.tagline}</p>
          <p className="hero-text">
            Computer Science student and Full Stack Developer building real-world MERN applications with clean interfaces, dependable backend logic, and a steady problem-solving mindset.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View Projects <FiArrowDown />
            </a>
            <a className="button button-ghost" href={profile.github} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            
          </div>
        </motion.div>

        <motion.div
          className="hero-panel glass-card"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        >
          <div className="code-window">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>{`const developer = {
  name: "Ashwin S",
  stack: "MERN",
  focus: ["React", "backend", "APIs", "Prompt"],
  loop: "Learn • Build • Improve • Repeat"
};`}</code>
            </pre>
          </div>
          <div className="availability">
            <span className="status-dot" />
            Available for internships, junior roles, and meaningful product collaborations
          </div>
          <div className="availability client-availability">
            <span className="status-dot" />
            Helping clients turn ideas into polished websites, dashboards, and full-stack apps
          </div>
          <a className="email-card" href={`mailto:${profile.email}`}>
            <FiMail />
            {profile.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
