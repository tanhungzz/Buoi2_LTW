import React, { useState } from "react";

function Login() {
    const [inputs, setInputs] = useState({
        username: '',
        pass: ''
    });
    const [isCheck, setCheck] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleChecked = () => {
        setCheck(!isCheck);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của form
        console.log("Dữ liệu:", inputs);
        console.log("Is Admin:", isCheck);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your username:
                <input
                    type="text"
                    name="username"
                    value={inputs.username}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Enter your password:
                <input
                    type="password"
                    name="pass"
                    value={inputs.pass}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                <input
                    type="checkbox"
                    checked={isCheck}
                    onChange={handleChecked}
                />
                Is Admin?
            </label>
            <br />
            <button type="submit">Đăng nhập</button>
        </form>
    );
}

export default Login;