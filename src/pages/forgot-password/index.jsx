import { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../../configs/Firebase";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import NavigationBar from "../../components/common/NavigationBar";
import Footer from "../../components/common/Footer";

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const sendResetPassword = async () => {
    const resetPassword = await fire.auth().sendPasswordResetEmail(email);

    alert("Please check your email");
  };

  return (
    <div>
      <NavigationBar />
      <div className="jumbotron jumbotron-fluid forgot forgot--background">
        <div className="container">
          <div className="row forgot__possition">
            <div className="col-lg"></div>
            <div className="col-lg">
              <Form
                htmlFor="forgot-password"
                label="Forgot password?"
                type="email"
                id="forgot-password"
                placeholder="Enter your email here"
                className="form-control forgot__form"
                classNameLabel="forgot__label"
                value={email}
                onChange={(e) => {
                  console.log(e.target.value);
                  setEmail(e.target.value);
                }}
              />
              <div className="row">
                <div className="col-lg">
                  <Button
                    label="Send reset password"
                    type="button"
                    block="true"
                    type="primary"
                    onClick={sendResetPassword}
                    className="forgot__button"
                  />
                </div>
              </div>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
