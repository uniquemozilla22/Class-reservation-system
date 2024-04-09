import { useEffect, useState } from "react";
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
const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = getItem("token");

  useEffect(() => {
    if (!getItem("token")) setItem("token", "");
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    await baseHTTP(token)
      .post("user/validateUser", { username, password })
      .then((res) => {
        setItem("token", res.data.token);
        toast(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
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
