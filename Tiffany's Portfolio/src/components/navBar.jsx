import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navBar" className="navbar">
      <form className="container-fluid justify-content-center">
        <Link className="btn me-2" to="/about">
          About Me
        </Link>
        <Link className="btn me-2" to="/portfolio">
          Portfolio
        </Link>
        <Link className="btn me-2" to="/contact">
          Contact
        </Link>
        <Link className="btn me-2" to="/resume">
          Resume
        </Link>
      </form>
    </nav>
  );
}

export default NavBar;
