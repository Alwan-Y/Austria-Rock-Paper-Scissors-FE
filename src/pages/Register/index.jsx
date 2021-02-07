import { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../../configs/Firebase";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import NavigationBar from "../../components/common/NavigationBar";
import Footer from "../../components/common/Footer";
import ROUTES from "../../configs/Firebase";
import api from "../../services";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const signUp = async () => {
    try {
      if (password !== confirmPassword) {
        setError(true);

        return alert("Password and Confirm password not match !!");
      }

      const register = await api.createUser(email, username, password);

      if (register) {
        alert("Succes register your account");
        history.push(ROUTES.LOGIN);
      }
    } catch (e) {
      setError(true);
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
                className={`form-control  ${error ? "is-invalid" : ""
                  } register__form`}
                classNameLabel="register__label"
                value={email}
                onChange={(e) => {
                  setError(false);
                  setEmail(e.target.value);
                }}
              />
              <Form
                htmlFor="username"
                type="text"
                id="username"
                placeholder="Enter Username"
                className={`form-control ${error ? "is-invalid" : ""
                  } register__form register__margin`}
                value={username}
                onChange={(e) => {
                  setError(false);
                  setUsername(e.target.value);
                }}
              />
              <Form
                htmlFor="password"
                type="password"
                id="password"
                placeholder="Enter Password"
                className={`form-control ${error ? "is-invalid" : ""
                  } register__form register__margin`}
                value={password}
                onChange={(e) => {
                  setError(false);
                  setPassword(e.target.value);
                }}
              />
              <Form
                htmlFor="confirm-password"
                type="password"
                id="confirm-password"
                placeholder="Enter Confirm Password"
                className={`form-control ${error ? "is-invalid" : ""
                  } register__form register__margin`}
                value={confirmPassword}
                onChange={(e) => {
                  setError(false);
                  setConfirmPassword(e.target.value);
                }}
              />
              <div className="row">
                <div className="col-lg"></div>
                <div className="col-lg">
                  <Button
                    label="Register"
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
