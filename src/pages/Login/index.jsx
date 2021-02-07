import { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../../configs/Firebase";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import NavigationBar from "../../components/common/NavigationBar";
import Footer from "../../components/common/Footer";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signIn = async () => {
    try {
      const user = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (user) {
        checkUser();
      }
    } catch (e) {
      setError(true);
      alert("Upss something error");
    }
  };

  const checkUser = async () => {
    const user = fire.auth().currentUser;

    if (!user.emailVerified) {
      const verification = await user.sendEmailVerification();

      return alert("Verify your email first !!");
    }

    const { refreshToken } = user;
    localStorage.setItem("token", refreshToken);
    alert("Succes Login");
    // history.push("")
  };

  return (
    <div>
      <NavigationBar />
      <div className="jumbotron jumbotron-fluid login login--background">
        <div className="container">
          <div className="row login__position">
            <div className="col-lg"></div>
            <div className="col-lg">
              <Form
                htmlFor="email"
                label="Login?"
                type="email"
                id="email"
                placeholder="Enter email"
                className={`form-control ${error ? "is-invalid" : ""
                  } login__form`}
                classNameLabel="login__label logim__margin__1"
                value={email}
                onChange={(e) => {
                  setError(false);
                  setEmail(e.target.value);
                }}
              />
              <Form
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                className={`form-control ${error ? "is-invalid" : ""
                  } login__form login__margin__2`}
                classNameLabel="login__label"
                value={password}
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
              />
              <div className="row">
                <div className="col-lg">
                  <Button
                    label="Login as guest?"
                    block="true"
                    type="transparent"
                    className="login__button"
                  />
                </div>
                <div className="col-lg">
                  <Button
                    label="Login"
                    block="true"
                    type="danger"
                    onClick={signIn}
                    className="login__button__2"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg">
                  <Button
                    label="Register"
                    block="true"
                    type="primary"
                    className="login__button"
                  />
                </div>
              </div>
              <div className="row">
                <Button
                  label="Forgot password?"
                  block="true"
                  type="transparent"
                  className="login__button"
                />
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

export default Login;
