import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section className="section section-shell" id="contact">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Have an opportunity, project, or idea? Let&apos;s connect.</h2>
      </div>

      <div className="contact-grid">
        <motion.div
          className="contact-panel glass-card"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <a href={`mailto:${profile.email}`}>
            <FiMail />
            <span>{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <div>
            <FiMapPin />
            <span>{profile.location}</span>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-card"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          action={`mailto:${profile.email}`}
          method="post"
          encType="text/plain"
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell me what you are building..." required />
          </label>
          <button className="button button-primary" type="submit">
            Send Message <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
