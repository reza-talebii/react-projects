import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [fixNAv, setFixNav] = useState(false);
  const clickHandler = () => setClicked(!clicked);

  window.addEventListener("scroll", () =>
    window.scrollY < 200 ? setFixNav(true) : setFixNav(false)
  );
  return (
    <div className={fixNAv ? "header" : "header bg"}>
      <Link to={"/"}>
        <h1>GLX TRVL</h1>
      </Link>

      <ul className={!clicked ? "navbar" : "navbar active"}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/pricing"}>pricing</Link>
        </li>
        <li>
          <Link to={"/training"}>training</Link>
        </li>
        <li>
          <Link to={"/contact"}>contact</Link>
        </li>
      </ul>

      <div className="humbugger" onClick={clickHandler}>
        {!clicked ? (
          <FaBars style={{ color: "#fff", cursor: "pointer" }} size={25} />
        ) : (
          <FaTimes style={{ color: "#fff", cursor: "pointer" }} size={25} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
