import { useState } from "react";
import { useHistory } from "react-router-dom";
import fire from "../../configs/Firebase";
import Button from "../../components/common/Button";
import Form from "../../components/common/Form";
import NavigationBar from "../../components/common/NavigationBar";
import Footer from "../../components/common/Footer";

const RegisterBio = () => {
  const history = useHistory();
  const [name, setName] = useState("");

  const fetchUser = fire.auth().currentUser;
  console.log(fetchUser);

  const checkUser = async () => {
    const user = await fire.auth().currentUser;

    console.log(user.displayName);
    const updateUser = await user.updateProfile({
      displayName: name,
    });
    alert("Succes update display name");
    console.log(user.displayName);
  };

  return (
    <div>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <Form
              htmlFor="register-bio"
              label="Enter your name"
              type="text"
              id="register-bio"
              placeholder="Enter your name here"
              className="form-control"
              value={name}
              onChange={(e) => {
                console.log(e.target.value);
                setName(e.target.value);
              }}
            />
            <div className="row">
              <div className="col-sm"></div>
              <div className="col-sm">
                <Button
                  label="Register your name"
                  type="button"
                  block="true"
                  type="primary"
                  onClick={checkUser}
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

export default RegisterBio;
