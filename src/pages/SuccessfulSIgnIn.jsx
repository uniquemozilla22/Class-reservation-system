import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const styles = {
  back: {
    backgroundColor: "white",
    padding: "1rem",
    color: "black",
    border: "2px solid red",
  },
};

const ExtraComp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  });

  return (
    <div>
      Hi User
      <br></br>
      <br></br>
      <br></br>
      <button style={styles.back} onClick={() => goToEntryPage()}>
        Entry
      </button>
    </div>
  );
};

export default ExtraComp;
