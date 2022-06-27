import "./topbar.scss";
import { FaUser, FaEnvelope } from "react-icons/fa";

export default function topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            BlogWebsite
          </a>
          <div className="itemContainer">
            <FaUser className="icon" />
            <span>+39 351 030 0577</span>
          </div>
          <div className="itemContainer">
            <FaEnvelope className="icon" />
            <span>luca.orabona1210@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
