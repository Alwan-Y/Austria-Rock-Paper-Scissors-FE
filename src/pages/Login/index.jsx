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

  const signIn = async () => {
    try {
      const user = await fire
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (user) {
        checkUser();
      }
    } catch (e) {
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
<<<<<<< HEAD
          <div className="row login__position">
            <div className="col-lg"></div>
            <div className="col-lg">
=======
          <div className="row login__possition">
            <div className="col-xl"></div>
            <div className="col-xl">
>>>>>>> suces design login
              <Form
                htmlFor="email"
                label="Login?"
                type="email"
                id="email"
                placeholder="Enter email"
                className="form-control login__form"
                classNameLabel="login__label logim__margin__1"
                value={email}
                onChange={(e) => {
<<<<<<< HEAD
=======
                  console.log(e.target.value);
>>>>>>> suces design login
                  setEmail(e.target.value);
                }}
              />
              <Form
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                className="form-control login__form login__margin__2"
                classNameLabel="login__label"
                value={password}
                onChange={(e) => {
<<<<<<< HEAD
=======
                  console.log(e.target.value);
>>>>>>> suces design login
                  setPassword(e.target.value);
                }}
              />
              <div className="row">
<<<<<<< HEAD
                <div className="col-lg">
=======
                <div className="col-xl">
>>>>>>> suces design login
                  <Button
                    label="Login as guest?"
                    type="button"
                    block="true"
                    type="transparent"
                    className="login__button"
                  />
                </div>
<<<<<<< HEAD
                <div className="col-lg">
=======
                <div className="col-xl">
>>>>>>> suces design login
                  <Button
                    label="Login"
                    type="button"
                    block="true"
                    type="danger"
                    onClick={signIn}
                    className="login__button__2"
                  />
                </div>
              </div>
              <div className="row mt-3">
<<<<<<< HEAD
                <div className="col-lg">
=======
                <div className="col-xl">
>>>>>>> suces design login
                  <Button
                    label="Register"
                    type="button"
                    block="true"
                    type="primary"
                    className="login__button"
                  />
                </div>
              </div>
              <div className="row">
                <Button
                  label="Forgot password?"
                  type="button"
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
