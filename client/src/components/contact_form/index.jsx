import React from "react";
import styles from "./styles.module.css";

const Form = () => {
  const handleChange = (data) => {
    console.log(`The data entered is ${data}`);
  };
  return (
    <div className={styles.form_container}>
      <h1>Contact Form</h1>
      <label>Enter your name :</label> &nbsp
      <input
        className={styles.input}
        type="text"
        placeholder="Fullname"
        name="name"
        required
      />
      <label>Enter your Email :</label> &nbsp
      <input
        className={styles.input}
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <label>Enter your Mobile No. :</label> &nbsp
      <input
        className={styles.input}
        type="text"
        placeholder="Mobile No."
        name="phone"
        required
        maxLength={10}
      />
      <button className="bg-success" onChange={handleChange}>
        Submit
      </button>
    </div>
  );
};

export default Form;
