import { useNavigate } from "react-router-dom";

const styles ={

    signIn: {
        backgroundColor : "white",
        padding : "1rem",
        color : "black",
        border : "2px solid red"
    },

    signUp: {
        backgroundColor : "white",
        padding : "1rem",
        color : "black",
        border : "2px solid red"
    }
}

const Entry = () => {

    const navigate = useNavigate()

    const goToNewPage = () => {
        navigate("/signIn");
    }
    return (
        <div>
            <button class = "signIn" style={styles.signIn} onClick={() => goToNewPage()}>SIGN IN</button>
            <br/>
            <br/>
            <button class = "signUp" style={styles.signUp}>SIGN UP</button>
        </div>
    );
};

export default Entry;