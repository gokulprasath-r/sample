import {Link} from "react-router-dom";
import {Wrapper} from "../styles/login-styles"
function Login(){
    return (
        <Wrapper>
            <h2>Login Form</h2>
            <form>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <button>Login</button>
            </form>
            <Link to="register">Create new account</Link>
        </Wrapper>
    );
}

export default Login;