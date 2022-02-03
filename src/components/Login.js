import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from '../features/user';

const Login = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Login</h1>
            <button
                onClick={() => {
                    dispatch(login({ name: "", age: 0, email: "" }));
                }} 
            >
                Login
            </button>

            <button
                 onClick={() => {
                    dispatch(logout());
                }} 
            >
                Logout
            </button>
        </div>
    );
}

export default Login;