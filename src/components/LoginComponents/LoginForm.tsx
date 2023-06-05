import React from "react";
import { Form } from "react-router-dom";

const LoginForm = () => {
    return (
            <div>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="username" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <button type="submit">Sign in</button>
                    <button>Proceed as guest user</button>
                </form>
            </div>
    );
}

export default LoginForm;