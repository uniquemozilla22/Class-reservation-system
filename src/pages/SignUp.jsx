import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseHTTP from "../utils/axiosBase";
import { getItem } from "../utils/localStorage";

const styles = {
  back: {
    backgroundColor: "white",
    padding: "1rem",
    color: "black",
    border: "2px solid red",
  },
};

const SignUp = () => {
  const [user_id, setUserId] = useState("");
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
      { user_id, username, password, email, user_type },
      {
        headers: headers,
      }
    );
    if (response.status === "OK") {
      navigate("/index");
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
            <label>user_id </label>
            <input
              type="text"
              onChange={(e) => setUserId(e.target.value)}
            ></input>
          </div>
          <br></br>

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

          <div>
            <label>user_type </label>
            <input
              type="text"
              onChange={(e) => setUserType(e.target.value)}
            ></input>
          </div>

          <br></br>

          <br></br>
          <button style={styles.back}>SIGN UP</button>
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
