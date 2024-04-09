import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseHTTP from "../utils/axiosBase";

const styles = {
  back: {
    backgroundColor: "white",
    padding: "1rem",
    color: "black",
    border: "2px solid red",
  },
};
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/user/validateUser", { username, password })
      .then((res) => console.log(res))
      .catch((error) => {
        console.error(error);
      });

    navigate("/index");
  }
  const navigate = useNavigate();

  const goToBackPage = () => {
    navigate("/");
  };

  return (
    <div>
      "WELCOME TO SIGN IN PAGE!"
      <br></br>
      <br></br>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </div>
          <br></br>
          <div>
            <label>Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <br></br>
          <button style={styles.back}>LOG IN</button>
          <br></br>
        </form>
      </div>
      <br></br>
      <button style={styles.back} onClick={() => goToBackPage()}>
        BACK
      </button>
    </div>
  );
};

export default SignIn;
