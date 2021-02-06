import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 position-absolute">
      <div className="container mr-auto">
        <Link className="navbar-brand mr-5" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto navbar-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/feedback" className="nav-link">Feedback</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/auth/signup" className="nav-link">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link to="/auth/login" className="nav-link">Login</Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;