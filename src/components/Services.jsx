import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiBriefcase, FiGrid, FiLayers, FiMonitor, FiShoppingBag } from "react-icons/fi";
import { services } from "../data/portfolio";

const icons = [FiBriefcase, FiMonitor, FiShoppingBag, FiGrid, FiLayers];

function useRotatingText(words) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const complete = text === word;
    const empty = text === "";
    const delay = complete && !deleting ? 1250 : deleting ? 38 : 72;

    const timer = window.setTimeout(() => {
      if (!deleting && !complete) {
        setText(word.slice(0, text.length + 1));
        return;
      }

      if (!deleting && complete) {
        setDeleting(true);
        return;
      }

      if (deleting && !empty) {
        setText(word.slice(0, text.length - 1));
        return;
      }

      setDeleting(false);
      setIndex((value) => (value + 1) % words.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, index, text, words]);

  return text;
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const typedService = useRotatingText(services.map((service) => service.title));
  const activeService = services[activeIndex];

  return (
    <section className="section section-shell" id="services">
      <div className="services-showcase glass-card">
        <div className="section-heading services-heading">
          <span className="eyebrow">Services</span>
          <h2>
            Let&apos;s build <span className="rotating-service">{typedService}</span>
          </h2>
          <p>
            I build practical web experiences for clients who need clean design, responsive screens, backend logic, and deployment-ready delivery.
          </p>
        </div>

        <motion.a
          className="button button-primary services-cta"
          href="#contact"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Start a Project <FiArrowRight />
        </motion.a>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = icons[index];
          const isActive = activeIndex === index;

          return (
            <motion.button
              className={`service-card glass-card ${isActive ? "service-card-active" : ""}`}
              key={service.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -7 }}
            >
              <span className="service-icon">
                <Icon />
              </span>
              <strong>{service.title}</strong>
              <span>{service.summary}</span>
            </motion.button>
          );
        })}
      </div>

      <motion.div
        className="service-detail glass-card"
        key={activeService.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28 }}
      >
        <span>Selected service</span>
        <strong>{activeService.title}</strong>
        <p>{activeService.outcome}</p>
      </motion.div>
    </section>
  );
}
