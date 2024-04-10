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
    <div className="antialiased absolute w-full h-screen grid ">
      <div className="flex justify-center align-center place-items-center w-full  ">
        <div className=" justify-center align-center p-10 ">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form
            className="mb-4 flex flex-col gap-5 justify-center align-middle"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 md:w-full">
              <label htmlFor="email" className="block text-xs mb-1">
                Username or Email
              </label>
              <input
                className=" input input-bordered"
                id="email"
                placeholder="Username or Email"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label
                htmlFor="password"
                className="block text-xs mb-1"
                onChange={(e) => setPassword(e.target.value)}
              >
                Password
              </label>
              <input
                className=" input input-bordered"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <button className=" btn btn-outline btn-primary uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
          <button
            className=" text-center text-sm"
            href="/login"
            onClick={() => goToBackPage()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
