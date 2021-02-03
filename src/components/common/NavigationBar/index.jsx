import "./index.scss";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light w-100">
      <div className="container mr-auto">
        <a className="navbar-brand mr-5" href="/">Logo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto navbar-center">
            <li className="nav-item">
              <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#featurescontent">Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#newslettercontent">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#navigation">About Me</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/auth/signup">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/login">Login</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;