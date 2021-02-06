
import { Link } from "react-router-dom";
import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Button from "components/common/Button";

const Home = () => (
  <div>
    <NavigationBar />
    <div>
      <div className="jumbotron jumbotron-fluid jumbotron-home jumbotron-home--background">
        <div className="container text-uppercase font-weight-bold">
          <div className="jumbotron-home__title">Play traditional game</div>
          <div className="jumbotron-home__caption">Experience new traditional game play</div>
          <Link to="/game">
            <Button type="primary" label="PLAY NOW" className="jumbotron-home__button"/>
          </Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;