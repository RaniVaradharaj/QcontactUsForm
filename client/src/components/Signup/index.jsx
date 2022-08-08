import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {

    const [data, setData] = useState(
        firstName: "",
        lastName: "",
        email:"",
        password:""
    )

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome back</h1>
          <Link to="./login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <input className={styles.input} type="text" placeholder="First Name" name="firstName" onChange={handleChange} value={data.firstName} required></input>
                
                <input className={styles.input} type="text" placeholder="Last Name" name="lastName" onChange={handleChange} value={data.lastName} required></input>
                
                <input className={styles.input} type="email" placeholder="E-mail" name="email" onChange={handleChange} value={data.email} required></input>
                
                <input className={styles.input} type="password" placeholder="Password" name="password" onChange={handleChange} value={data.password} required></input>
                
                <button className={styles.green_btn} type="submit">Signup</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
