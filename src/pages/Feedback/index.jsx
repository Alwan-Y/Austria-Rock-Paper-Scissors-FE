import NavigationBar from "components/common/NavigationBar";
import Footer from "components/common/Footer";
import Button from "components/common/Button";

const Feedback = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="jumbotron jumbotron-fluid feedback feedback--background">
        <div className="container text-uppercase font-weight-bold">
          <div className="text-uppercase feedback__title">Feedback</div>
          <div className="row">
            <div className="col-4 offset-4">

              {/* Form */}
              <form className="feedback-form">
                <div className="text-left">
                  <div className="form-group">
                    <label htmlFor="feedback-name" className="feedback-form__label">Name</label>
                    <input type="name" className="form-control" id="feedback-name" placeholder="Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-email" className="feedback-form__label">Email address</label>
                    <input type="email" className="form-control" id="feedback-email" placeholder="name@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="feedback-message" className="feedback-form__label">Message</label>
                    <textarea className="form-control" id="feedback-message" rows="3"></textarea>
                  </div>
                </div>
                {/* API */}
                <Button type="primary" label="Submit" className="page-not-found__button" />
              </form>
              {/* End of Form */}

            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Feedback;