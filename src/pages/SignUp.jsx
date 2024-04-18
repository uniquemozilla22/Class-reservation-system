import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseHTTP from "../utils/axiosBase";
import { getItem, setItem } from "../utils/localStorage";
import { toast } from "react-toastify";

const styles = {
  back: {
    backgroundColor: "white",
    padding: "1rem",
    color: "black",
    border: "2px solid red",
  },
};

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user_type, setUserType] = useState("");
  const token = getItem("token");

  const us = user_type;
  const headers = {
    userType: us,
  };
  async function signUp(event) {
    event.preventDefault();
    const response = await baseHTTP(token).post(
      "user/registerNewUser",
      { username, password, email },
      {
        headers: headers,
      }
    );
    if (response.data.sucess) {
      toast.success(response.data.message);
      setItem("token", response.data.token);
      navigate("/booking");
    } else {
      toast.error(response.data.message);
    }
  }
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate("/");
  };

  return (
    <div>
      WELCOME TO SIGN UP PAGE!
      <br></br>
      <br></br>
      <div>
        <form onSubmit={signUp}>
          <div>
            <label>Username </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>

          <br></br>

          <div>
            <label>password </label>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>

          <br></br>

          <div>
            <label>email </label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <br></br>
          <button style={styles.back} type="submit">
            SIGN UP
          </button>
          <br></br>
        </form>
      </div>
      <br></br>
      <br></br>
      <button style={styles.back} onClick={() => goToBackPage()}>
        BACK
      </button>
    </div>
  );
};

export default SignUp;
