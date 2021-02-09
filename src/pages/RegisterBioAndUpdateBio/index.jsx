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

  const checkUser = async () => {
    const user = await fire.auth().currentUser;

    const updateUser = await user.updateProfile({
      displayName: name,
    });
    alert("Succes update display name");
  };

  return (
    <div>
      <NavigationBar />
      <div className="jumbotron jumbotron-fluid bio bio--background">
        <div className="container">
          <div className="row bio__position">
            <div className="col-lg"></div>
            <div className="col-lg">
              <Form
                htmlFor="register-bio"
                label="Your name?"
                type="text"
                id="register-bio"
                placeholder="Enter your name here"
                className="form-control bio__form"
                classNameLabel="bio__label"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <div className="row">
                <div className="col-lg">
                  <Button
                    label="Register your name"
                    block="true"
                    type="primary"
                    onClick={checkUser}
                    className="bio__button"
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

export default RegisterBio;
