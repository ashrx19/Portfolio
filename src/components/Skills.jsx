import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="section section-shell" id="skills">
      <div className="section-heading">
        <span className="eyebrow">Tech Stack</span>
        <h2>Tools I use to move from idea to working application.</h2>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            className="skill-card glass-card"
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <h3>{group.title}</h3>
            <div className="skill-list">
              {group.skills.map(({ name, icon: Icon }) => (
                <span className="skill-pill" key={name}>
                  <Icon />
                  {name}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
