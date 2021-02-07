import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 position-absolute">
      <div className="container mr-auto">
        <Link className="navbar-brand mr-5" to="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto navbar-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#featurescontent">
                Work
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#newslettercontent">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#navigation">
                About Me
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/auth/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auth/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
