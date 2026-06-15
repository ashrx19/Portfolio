import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section section-shell" id="projects">
      <div className="section-heading">
        <span className="eyebrow">Featured Projects</span>
        <h2>Selected builds that show full-stack execution and consistency.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.article
            className={`project-card glass-card accent-${project.accent}`}
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-preview" aria-label={`${project.name} screenshot placeholder`}>
              <div className="preview-toolbar">
                <span />
                <span />
                <span />
              </div>
              <div className="preview-lines">
                <span />
                <span />
                <span />
              </div>
              <strong>{project.name}</strong>
            </div>

            <div className="project-content">
              <span className="project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub Repository <FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
