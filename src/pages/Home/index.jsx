
import { Link } from "react-router-dom";
import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Button from "components/common/Button";
import img from "assets/images/index/rockpaperstrategy-1600.jpg";

const Home = () => (
  <div>
    <NavigationBar />
    <div>
      <div className="jumbotron jumbotron-fluid jumbotron-home jumbotron-home--background">
        <div className="container text-uppercase font-weight-bold">
          <div className="jumbotron-home__title">Play traditional game</div>
          <div className="jumbotron-home__caption">Experience new traditional game play</div>
          <Link to="/game">
            <Button type="primary" label="PLAY NOW" className="jumbotron-home__button" />
          </Link>
        </div>
      </div>
    </div>

    <div className="jumbotron jumbotron-fluid carousel-game carousel-game--background">
      <div className="container h-100 d-flex align-items-center">
        <div className="row mx-auto">
          <div className="col-lg-6">
          </div>

          {/* Carousel */}
          <div className="col-lg-6">
            <div id="carousel-game-option" className="carousel slide" data-interval="false">
              <ul className="carousel-indicators">
                <li data-target="#carousel-game-option" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-game-option" data-slide-to="1"></li>
                <li data-target="#carousel-game-option" data-slide-to="2"></li>
                <li data-target="#carousel-game-option" data-slide-to="3"></li>
                <li data-target="#carousel-game-option" data-slide-to="4"></li>
              </ul>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <Link to="/game">
                    <img className="d-block w-75" src={img} alt="First slide" />
                  </Link>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-75" src={img} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-75" src={img} alt="Third slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-75" src={img} alt="Fourth slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-75" src={img} alt="Fifth slide" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carousel-game-option" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carousel-game-option" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          {/* End of Carousel */}

        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;