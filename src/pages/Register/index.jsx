import { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../../configs/Firebase";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import NavigationBar from "../../components/common/NavigationBar";
import Footer from "../../components/common/Footer";
import ROUTES from "../../configs/Firebase";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    try {
      const sign = await fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
      if (sign) {
        alert("Succes register your account");
        history.push(ROUTES.LOGIN);
      }
    } catch (e) {
      alert("Upss something error");
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="jumbotron jumbotron-fluid register register--background">
        <div className="container">
          <div className="row register__position">
            <div className="col-lg"></div>
            <div className="col-lg">
              <Form
                htmlFor="email"
                label="Register your account"
                type="email"
                id="email"
                placeholder="Enter email"
                className="form-control register__form"
                classNameLabel="register__label"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Form
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                className="form-control register__form register__margin"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Form
                htmlFor="confirm-password"
                type="password"
                id="confirm-password"
                placeholder="Enter Confirm Password"
                className="form-control register__form register__margin"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
              <div className="row">
                <div className="col-lg"></div>
                <div className="col-lg">
                  <Button
                    label="Register"
                    type="button"
                    block="true"
                    type="primary"
                    onClick={signUp}
                    className="register__button"
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

export default Register;
