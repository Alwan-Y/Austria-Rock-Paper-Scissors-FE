import { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../../configs/Firebase";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import NavigationBar from "../../components/common/NavigationBar";
import Footer from "../../components/common/Footer";

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
        history.push("/login");
      }
    } catch (e) {
      console.log(e.code);
      console.log(e.message);
      alert("Upss something error");
    }
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
            <Form
              htmlFor="confirm-password"
              label="Confirm Password"
              type="password"
              id="confirm-password"
              placeholder="Enter Confirm Password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => {
                console.log(e.target.value);
                setConfirmPassword(e.target.value);
              }}
            />
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <Button
                  label="Register"
                  type="button"
                  block="true"
                  type="primary"
                  onClick={signUp}
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

export default Register;
