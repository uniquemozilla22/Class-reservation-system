import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import baseHTTP from "../utils/axiosBase";


const styles = {
    back: {
        backgroundColor : "white",
        padding : "1rem",
        color : "black",
        border : "2px solid red"
    }
}

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    function signUp(event){
        event.preventDefault();
        axios.post('http://localhost:8080/user/registerNewUser', {username, password, email}).
        then(res => console.log(res));
        
        navigate("/index");

    }

    const navigate = useNavigate()

    const goToBackPage = () => {
        navigate("/entry");
    }

    return (
        <div>
            "WELCOME TO SIGN UP PAGE!"
            <br></br>
            <br></br>

            <div>
                <form onSubmit={signUp}>

                <div>
                    <label>Username </label>
                    <input type = "text" 
                    onChange = {e => setUsername(e.target.value)}></input >
                </div>

                <br></br>

                <div>
                    <label>password </label>
                    <input type = "text" 
                    onChange = {e => setPassword(e.target.value)}></input >
                </div>

                <br></br>

                <div>
                    <label>email </label>
                    <input type = "text" 
                    onChange = {e => setEmail(e.target.value)}></input >
                </div>

                <br></br>

                <br></br>
                <button style = {styles.back}>SIGN UP</button>
                <br></br>
                </form>

            </div>

            <br></br>
            <br></br>
            <button style = {styles.back}onClick={() => goToBackPage()}>BACK</button>
        </div>
    );
};

export default SignUp;