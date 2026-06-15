import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Ashwin S portfolio home">
        <span>AS</span>
        <strong>{profile.name}</strong>
      </a>

      <nav className={`nav-links ${open ? "nav-links-open" : ""}`} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={handleClick}>
            {link}
          </a>
        ))}
      </nav>

      <button
        className="icon-button menu-button"
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <FiX /> : <FiMenu />}
      </button>
    </header>
  );
}
