import "./Menu.scss";

export default function menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Learning</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="icons">
        <a
          href="https://twitter.com/LucaOrabona1"
          className="icon icon--twitter"
          target="_blank"
        >
          <i className="ri-twitter-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/luca-orabona-4573461b2/"
          className="icon icon--linkedin"
          target="_blank"
        >
          <i className="ri-linkedin-line"></i>
        </a>
        <a
          href="https://github.com/LucaOr12"
          className="icon icon--github"
          target="_blank"
        >
          <i className="ri-github-line"></i>
        </a>
      </div>
    </div>
  );
}
