import { useNavigate } from "react-router-dom";
import { getItem } from "../utils/localStorage";
import { useEffect } from "react";

const Entry = () => {
  const navigate = useNavigate();

  const token = getItem("token");

  useEffect(() => {
    if (token && token != "") {
      navigate("/building");
    }
  });
  const goToNewPage = () => {
    navigate("/signIn");
  };

  const goToSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div className="relative flex w-full gap-10">
      <button
        className="signIn"
        onClick={() => goToNewPage()}
        className="btn btn-primary flex-1  "
      >
        SIGN IN
      </button>
      <button
        className="signUp"
        onClick={() => goToSignUp()}
        className="btn btn-primary  flex-1 "
      >
        SIGN UP
      </button>
    </div>
  );
};

export default Entry;
