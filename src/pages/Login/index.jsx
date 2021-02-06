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
      console.log(e.code);
      console.log(e.message);
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
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <Form
              htmlFor="email"
              label="Email Addres"
              type="email"
              id="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => {
                console.log(e.target.value);
                setEmail(e.target.value);
              }}
            />
            <Form
              htmlFor="password"
              label="Password"
              type="password"
              id="password"
              placeholder="Enter Password"
              className="form-control"
              value={password}
              onChange={(e) => {
                console.log(e.target.value);
                setPassword(e.target.value);
              }}
            />
            <div className="row">
              <div className="col-sm">
                <Button
                  label="Login as guest?"
                  type="button"
                  block="true"
                  type="light"
                />
              </div>
              <div className="col-sm">
                <Button
                  label="Login"
                  type="button"
                  block="true"
                  type="danger"
                  onClick={signIn}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm">
                <Button
                  label="Forgot password?"
                  type="button"
                  block="true"
                  type="light"
                />
              </div>
              <div className="col-sm">
                <Button
                  label="Register"
                  type="button"
                  block="true"
                  type="light"
                />
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
