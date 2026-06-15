import { motion } from "framer-motion";
import { FiBookOpen, FiCode, FiTrendingUp } from "react-icons/fi";
import { stats, timeline } from "../data/portfolio";

const icons = [FiBookOpen, FiCode, FiTrendingUp];

export default function About() {
  return (
    <section className="section section-shell" id="about">
      <div className="section-heading">
        <span className="eyebrow">About Me</span>
        <h2>Building practical products while sharpening full-stack fundamentals.</h2>
      </div>

      <div className="about-grid">
        <motion.div
          className="about-card glass-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
        >
          <p>
            I am a Computer Science student and Full Stack Developer focused on building real-world applications using the MERN stack.
          </p>
          <p>
            I continuously improve my skills through project development and problem solving. I am currently strengthening my MERN and backend development skills while building production-ready applications.
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              className="stat-card glass-card"
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="timeline">
        {timeline.map((item, index) => {
          const Icon = icons[index];
          return (
            <motion.article
              className="timeline-card glass-card"
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="timeline-icon">
                <Icon />
              </div>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
