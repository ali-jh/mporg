import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import styles from "./Login.module.css";

const Login = () => {
    const [name,setName] = useLocalStorage("name", "")
    const [pass,setPass] = useLocalStorage("pass", "")

    return (
        <div className={styles.loginform}>
            <form>
                <h1>Login</h1>
                <div className={styles.content}>
                    <div className={styles.inputfield}>
                    <input type="text" value={name} onChange={event => setName(event.target.    value)} placeholder="Email" autoComplete='nope'/>
                    </div>
                    <div className={styles.inputfield}>
                    <input type="password" value={pass} onChange={event => setPass(event.target. value)} placeholder="password" autoComplete='nope'/>
                    </div>
                </div>
            </form>
        </div>

        
    );
};

export default Login;