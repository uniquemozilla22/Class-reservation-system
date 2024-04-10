import { useNavigate } from "react-router-dom";

const Entry = () => {
  const navigate = useNavigate();

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
