import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  const { theme, setTheme, navLinkColor, setNavLinkColor } = props;
  return (
    <div className="navBarContainer">
      {theme ? (
        <button onClick={() => setTheme(false)}>
          <i className="fa">
            <iconify-icon icon="bytesize:moon"></iconify-icon>
          </i>
        </button>
      ) : (
        <button onClick={() => setTheme(true)}>
          <i className="fa">
            <iconify-icon icon="cil:sun"></iconify-icon>
          </i>
        </button>
      )}
      {/* <Link
        className={navLinkColor === 3 ? "navLinkSelected" : "navLink"}
        onClick={() => setNavLinkColor(3)}
        to="/portfolio"
      >
        PortFolio
      </Link> */}
      <Link
        className={navLinkColor === 2 ? "navLinkSelected" : "navLink"}
        onClick={() => setNavLinkColor(2)}
        to="/contact"
      >
        Contact me
      </Link>
      <Link
        className={navLinkColor === 1 ? "navLinkSelected" : "navLink"}
        onClick={() => setNavLinkColor(1)}
        to="/"
      >
        Home
      </Link>
      <h4>
        "You´re the most permanent person in your circle, so choose you always"
      </h4>
      <div className="homeNameLink">
        <Link className="navLink" to="/">
          <h3>Jose Gabriel</h3>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
