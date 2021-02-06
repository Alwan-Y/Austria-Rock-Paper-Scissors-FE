import { Link } from "react-router-dom";
import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Button from "components/common/Button";

const PageNotFound = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="jumbotron jumbotron-fluid page-not-found page-not-found--background">
        <div className="container text-uppercase font-weight-bold">
          <div className="page-not-found__title">404</div>
          <div className="text-uppercase page-not-found__caption">
            page not found
          </div>
          <div className="text-uppercase page-not-found__body">
            OOPS, It seems the page you are looking for doesn't exist, isn't
            available or an other error occured.
          </div>
          <Link to="/joinroom">
            <Button
              type="primary"
              label="Back To Home"
              className="page-not-found__button"
            />
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default PageNotFound;
