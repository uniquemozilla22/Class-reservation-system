import { useNavigate } from "react-router-dom";

const styles = {
    back: {
        backgroundColor : "white",
        padding : "1rem",
        color : "black",
        border : "2px solid red"
    }
}
const SignIn = () => {

    const navigate = useNavigate()

    const goToBackPage = () => {
        navigate("/entry");
    }
    return (
        <div>
            "WELCOME TO SIGN IN PAGE!"
            <br></br>
            <br></br>
            <button style = {styles.back}onClick={() => goToBackPage()}>BACK</button>
        </div>
    );
};

export default SignIn;