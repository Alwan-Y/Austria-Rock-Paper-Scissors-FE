
import { Link } from "react-router-dom";
import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Button from "components/common/Button";
import img from "assets/images/index/rockpaperstrategy-1600.jpg";

const Home = () => (
  <div>
    <NavigationBar />
    <div>
      <div className="jumbotron jumbotron-fluid home home--background">
        <div className="container text-uppercase font-weight-bold">
          <div className="home__title">Play traditional game</div>
          <div className="home__caption">Experience new traditional game play</div>
          <Link to="/game">
            <Button type="primary" label="PLAY NOW" className="home__button" />
          </Link>
        </div>
      </div>
    </div>

    <div className="jumbotron jumbotron-fluid home-leaderboard home-leaderboard--background">
      <div className="container h-100">
        <div className="row mx-auto mt-5">
          <div className="col-lg-6">
            <div className="home-leaderboard__title">Leaderboard</div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="row mx-auto">
            <div className="col-lg-6">

              {/* Leaderboard Table */}
              <table className="table home-leaderboard__table">
                <thead>
                  <tr>
                    <th scope="col">Rank#</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Total Win Rounds</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>dummyuser1</td>
                    <td>432</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>dummyuser2</td>
                    <td>321</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>dummyuser3</td>
                    <td>123</td>
                  </tr>
                </tbody>
              </table>
              {/* End of Leaderboard Table */}
            </div>

            {/* Carousel */}
            <div className="col-lg-6">
              <div id="carousel-game-option" className="carousel slide home-carousel" data-interval="false">
                <ul className="carousel-indicators home-carousel__indicators">
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
    </div>

    <div className="jumbotron jumbotron-fluid home-sysreq home-sysreq--background">
      <div className="container">
        <div className="row mt-5 text-uppercase text-left">
          <div className="col-5">
            <div className="font-weight-bold home-sysreq__title">System Requirement</div>
          </div>
        </div>
        <div className="row mt-5 text-right">
          <div className="col-6 offset-6 position-relative">
            <div className="position-absolute home-sysreq__specification">
              <div>Requires a 64-bit processor and operating system</div>
              <div>Windows 7 or 10 : OS</div>
              <div>Intel Core i5 or AMD equivalent : Processor</div>
              <div>4 GB RAM : Memory</div>
              <div>NVIDIA GTX 660 or AMD Radeon HD 7950 : Graphics</div>
              <div>Broadband Internet connection : Network</div>
              <div>2 GB available space : Storage</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </div>
);

export default Home;