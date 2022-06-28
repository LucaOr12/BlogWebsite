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
        <a href="#" className="icon icon--twitter">
          <i className="ri-twitter-line"></i>
        </a>
        <a href="#" className="icon icon--linkedin">
          <i className="ri-linkedin-line"></i>
        </a>
        <a href="#" className="icon icon--github">
          <i className="ri-github-line"></i>
        </a>
      </div>
    </div>
  );
}
