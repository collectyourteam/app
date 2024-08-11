import React from "react";
import './form.scss';

export default function LoginForm() {

    return (
        <form>
            <label>
                Username:
                <input type="text" name="username" />
            </label>
            <label>
                Password:
                <input type="password" name="password" />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}