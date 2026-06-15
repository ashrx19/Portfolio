import { profile, socialLinks } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <p>{profile.tagline}</p>
      <div className="footer-socials">
        {socialLinks.slice(0, 2).map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
}
